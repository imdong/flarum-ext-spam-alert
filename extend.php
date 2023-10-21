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

use Flarum\Extend;
use ImDong\SpamAlert\Common\Defined;

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
    ,

];
