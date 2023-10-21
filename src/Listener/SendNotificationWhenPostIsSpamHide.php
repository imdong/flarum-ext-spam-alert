<?php

namespace ImDong\SpamAlert\Listener;


use ImDong\SpamAlert\Event\PostSetSpamHide;
use Flarum\Notification\NotificationSyncer;
use ImDong\SpamAlert\Notification\PostSpamHidedBlueprint;

/**
 * 当回复因为被标记 spam 太多被隐藏时
 */
class SendNotificationWhenPostIsSpamHide
{
    /**
     * @var NotificationSyncer
     */
    protected $notifications;

    /**
     * @param NotificationSyncer $notifications
     */
    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    public function handle(PostSetSpamHide $event)
    {
        if ($event->post->user && $event->post->user->id != $event->user->id) {
            $this->notifications->sync(
                new PostSpamHidedBlueprint($event->post),
                [$event->post->user]
            );
        }
    }
}
