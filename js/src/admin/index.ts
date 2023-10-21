import app from 'flarum/admin/app';
import {extPrefix, key, trans} from "../common";

app.initializers.add(extPrefix, () => {
  app.extensionData
    .for(extPrefix)
    // 添加权限 哪些用户组可以点击按钮
    .registerPermission(
      {
        icon: 'far fa-thumbs-down',
        label: trans('admin.permissions.make-spam'),
        permission: key('makeSpam'),
        allowGuest: true,
      },
      'view'
    )

    // 注册配置 按钮名自定义
    .registerSetting({
      setting: key('btn-name'),
      type: 'text',
      label: trans('.admin.settings.btn-name'),
      help: trans('.admin.settings.btn-name-help'),
    })
    // 配置项 被点多少次自动折叠 0 为不折叠
    .registerSetting({
      setting: key('.to-folding-number'),
      type: 'number',
      label: trans('.admin.settings.to-folding-number'),
      help: trans('.admin.settings.to-folding-number-help'),
    })

});
