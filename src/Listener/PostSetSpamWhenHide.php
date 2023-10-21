<?php

namespace ImDong\SpamAlert\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use ImDong\SpamAlert\Common\Defined;
use ImDong\SpamAlert\Event\PostSetSpam;
use ImDong\SpamAlert\Event\PostSetSpamHide;

/**
 * 是否需要将 Post 隐藏
 */
class PostSetSpamWhenHide
{
    /**
     * @var SettingsRepositoryInterface|mixed
     */
    private $settings;

    public function __construct()
    {
        $this->settings = resolve(SettingsRepositoryInterface::class);
    }

    public function handle(PostSetSpam $event)
    {
        $post = $event->post;

        // 检查标记 Spam 的数量是否达到阈值
        $spam_max = $this->settings->get(Defined::key('to-folding-number'), 1);

        // 检查当前数量
        $count = $post->spams()->count();

        // 达到阈值且还没被隐藏就标记隐藏
        if(!$post->is_spam_hide && ($count >= $spam_max)) {
            $post->setAttribute('is_spam_hide', 1);

            $post->raise(new PostSetSpamHide($post, $event->user));
            dump('send PostSetSpamHide');
        }

    }
}
