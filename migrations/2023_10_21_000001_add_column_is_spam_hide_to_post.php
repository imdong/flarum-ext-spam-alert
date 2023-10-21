<?php

use Flarum\Database\Migration;

// HINT: you might want to use a `Flarum\Database\Migration` helper method for simplicity!
// See https://docs.flarum.org/extend/models.html#migrations to learn more about migrations.
return Migration::addColumns('posts', [
    'is_spam_hide' => ['Boolean', 'default' => 0],
]);

