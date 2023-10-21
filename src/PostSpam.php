<?php

namespace ImDong\SpamAlert;

use Flarum\Database\AbstractModel;

class PostSpam extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.

    protected $table = 'post_spams';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * Get the name of the "updated at" column.
     *
     * 不需要更新时间字段
     *
     * @return string|null
     */
    public function getUpdatedAtColumn()
    {
        return null;
    }
}
