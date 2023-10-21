import app from 'flarum/forum/app';
import Notification from 'flarum/forum/components/Notification';
import {trans} from "../../common";

export default class PostSpamHideNotification extends Notification {
  icon() {
    return 'far fa-thumbs-down';
  }

  href() {
    return app.route.post(this.attrs.notification.subject());
  }

  content() {
    const notification = this.attrs.notification;

    return trans('forum.notification.content');
  }

  excerpt() {
    return trans('forum.notification.excerpt');
  }
}
