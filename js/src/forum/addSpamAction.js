import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import CommentPost from 'flarum/forum/components/CommentPost';
import {key, trans} from "../common";

export default function () {
  extend(CommentPost.prototype, 'actionItems', function (items) {

    // 获取到 post 本体
    const post = this.attrs.post;

    // 判断权限
    if (post.isHidden() || !post.canSetSpam()) return;

    // 是否已标记
    let isSpam = post.attribute('isSpam');

    // 获取用户自定义配置
    let btnName = app.forum.attribute(key('btn-name')),
      btnNames = [];
    if (btnName) {
      btnNames = btnName.split('/')
    }

    items.add(
      'spam',
      <Button
        className="Button Button--link"
        onclick={() => {
          // 反转选择
          isSpam = !isSpam;

          // 保存状态
          post.save({isSpam});

          // 修改本地状态
          post.data.attributes.isSpam = isSpam
        }}
      >
        {
          isSpam
            ? (btnNames[1] || trans('forum.post.btn-unset-spam'))
            : (btnNames[0] || trans('forum.post.btn-set-spam'))
        }
      </Button>
    );
  });
}
