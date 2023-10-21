import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import CommentPost from 'flarum/forum/components/CommentPost';
import {key, trans} from "../common";

export default function () {
  extend(CommentPost.prototype, 'headerItems', function (items) {

    // 获取到 post 本体
    const post = this.attrs.post;

    // 判断权限
    if (!post.isHidden() || !post.attribute('isSpamHide')) return;

    items.add(
      'spam',
      <span>{trans('forum.post.spam-hide-tips')}</span>
    );
  });
}
