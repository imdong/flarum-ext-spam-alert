<?php

namespace ImDong\SpamAlert\Listener;

use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Deleted;
use Flarum\Post\Event\Saving;
use ImDong\SpamAlert\Common\Defined;
use ImDong\SpamAlert\Event\PostSetSpam;
use ImDong\SpamAlert\Event\PostSetSpamHide;
use ImDong\SpamAlert\Event\PostUnsetSpam;

class SaveSpamToDatabase
{
    /**
     * @var SettingsRepositoryInterface|mixed
     */
    private $settings;

    public function __construct()
    {
        $this->settings = resolve(SettingsRepositoryInterface::class);
    }

    public function subscribe(Dispatcher $event)
    {
        $event->listen(Saving::class, [$this, 'whenPostIsSaving']);
        $event->listen(Deleted::class, [$this, 'whenPostIsDeleted']);
    }

    /**
     * 保存 Post 时要做的事
     *
     * @param Saving $event
     * @throws PermissionDeniedException
     */
    public function whenPostIsSaving(Saving $event)
    {
        $post = $event->post;
        $data = $event->data;

        // 如果要标记垃圾
        if ($post->exists && isset($data['attributes']['isSpam'])) {
            $actor = $event->actor;
            $isSpam = (bool)$data['attributes']['isSpam'];

            // 检查权限
            $actor->assertCan(Defined::key('setSpam'), $post);

            // 检查当前用户是否标记过
            $currentlySpam = $post->spams()->where('create_user_id', $actor->id)->exists();
            if ($isSpam && !$currentlySpam) {
                // 添加标记记录
                $post->spams()->attach($actor->id);

                // 广播事件
                $post->raise(new PostSetSpam($post, $actor));

                // 检查是否需要隐藏
                $this->postToSpamHide($post, $actor);

            } elseif ($currentlySpam) {
                $post->spams()->detach($actor->id);

                $post->raise(new PostUnsetSpam($post, $actor));
            }
        }
    }

    /**
     * 当被标记为 垃圾时
     *
     * @return void
     */
    public function postToSpamHide(Post $post, User $user)
    {
        // 已经隐藏的就算了
        if ($post->is_spam_hide) {
            return;
        }

        // 检查是否需要隐藏
        $spam_max = $this->settings->get(Defined::key('to-folding-number'), 5);

        // 检查当前数量
        $count = $post->spams()->count();

        // 达到阈值且还没被隐藏就标记隐藏
        if ($count >= $spam_max) {
            $post->setAttribute('is_spam_hide', 1);

            $post->raise(new PostSetSpamHide($post, $user));
        }
    }

    /**
     * @param Deleted $event
     */
    public function whenPostIsDeleted(Deleted $event)
    {
        $event->post->spams()->detach();
    }
}
