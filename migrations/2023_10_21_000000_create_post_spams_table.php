<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'post_spams',
    function (Blueprint $table) {

        $table->integer('post_id')->unsigned();
        $table->integer('create_user_id')->unsigned();
        $table->primary(['post_id', 'create_user_id']);

        $table->timestamp('created_at')->nullable()->useCurrent();
    }
);

