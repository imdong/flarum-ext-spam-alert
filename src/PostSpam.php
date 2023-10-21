<?php

namespace ImDong\SpamAlert;

use Flarum\Database\AbstractModel;

class PostSpam extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.

    protected $table = 'post_spams';
}
