import Extend from 'flarum/common/extenders';
import Post from 'flarum/common/models/Post';

export default [

  new Extend.Model(Post) //
    .attribute<boolean>('canSetSpam')
    .attribute<boolean>('isSpam')
    .attribute<boolean>('isSpamHided'),
];
