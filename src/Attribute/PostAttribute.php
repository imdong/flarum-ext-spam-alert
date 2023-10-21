<?php

namespace ImDong\SpamAlert\Attribute;

use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use ImDong\SpamAlert\Common\Defined;


class PostAttribute
{
    /**
     * @var SettingsRepositoryInterface|mixed
     */
    private $settings;

    public function __construct()
    {
        $this->settings = resolve(SettingsRepositoryInterface::class);
    }

    public function __invoke(BasicPostSerializer $serializer, Post $post, $attributes): array
    {
        // 获取当前用户
        $actor = $serializer->getActor();

        // 检查是否有查看的权限
        $attributes['canSetSpam'] = $actor->can(Defined::key('setSpam'), $post);

        // 查看是否标记过 spam
        $attributes['isSpam'] = $post->spams()->where('create_user_id', $actor->id)->exists();

        // 是否被隐藏了
        if($post->is_spam_hide) {
            $attributes['hiddenAt'] = date('c', 0);
            $attributes['isSpamHide'] = true;
        }

        // 组成结构
        return $attributes;
    }

}
