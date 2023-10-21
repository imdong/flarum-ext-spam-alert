<?php

/*
 * This file is part of imdong/flarum-ext-spam-alert.
 *
 * Copyright (c) 2023 ImDong.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace ImDong\SpamAlert;

use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extend;
use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Post\Post;
use Flarum\User\User;
use ImDong\SpamAlert\Attribute\PostAttribute;
use ImDong\SpamAlert\Common\Defined;
use ImDong\SpamAlert\Event\PostSetSpam;
use ImDong\SpamAlert\Notification\PostSpamHidedBlueprint;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
    ,

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
    ,

    new Extend\Locales(__DIR__ . '/locale'),

    // 设置默认值
    (new Extend\Settings())
        // 默认折叠次数
        ->default(Defined::key('to-folding-number'), 5)
        ->serializeToForum(Defined::key('btn-name'), Defined::key('btn-name'))
        ->serializeToForum(Defined::key('to-folding-number'), Defined::key('to-folding-number')),

    // 添加文章的关联查询
    (new Extend\Model(Post::class))
        // 标记过垃圾的用户列表
        ->belongsToMany('spams', User::class, 'post_spams', 'post_id', 'create_user_id')
        ->cast('is_spam_hide', 'boolean')
    ,

    // 给 post 回复添加一些额外的字段
    (new Extend\ApiSerializer(BasicPostSerializer::class))
        ->attributes(PostAttribute::class),

    // 通知事件
    (new Extend\Notification())
        ->type(PostSpamHidedBlueprint::class, PostSerializer::class, ['alert']),

    // 挂钩事件
    (new Extend\Event())
        // 被隐藏时发送通知消息
        ->listen(Event\PostSetSpamHide::class, Listener\SendNotificationWhenPostIsSpamHide::class)
        // 被标记 Spam 时检查是否需要隐藏
        ->listen(Event\PostSetSpam::class, Listener\PostSetSpamWhenHide::class)
        // 修改文档内容时
        ->subscribe(Listener\SaveSpamToDatabase::class)
    ,

];
