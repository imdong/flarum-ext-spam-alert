import app from 'flarum/forum/app';
import {extPrefix, trans} from "../common";
import addSpamAction from "./addSpamAction";
export { default as extend } from './extend';
import addSpamHideIcon from "./addSpamHideIcon";
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import { extend } from 'flarum/common/extend';
import PostSpamHideNotification from "./components/PostSpamHideNotification";

app.initializers.add(extPrefix, () => {
  app.notificationComponents.postSpamHide = PostSpamHideNotification;


  addSpamAction();
  addSpamHideIcon();

  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('postSpamHide', {
      name: 'postSpamHide',
      icon: 'far fa-thumbs-down',
      label: trans('forum.settings.notify_post_spam_hide_label'),
    });
  });

});
