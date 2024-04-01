<?php
use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection([
 'driver'    => 'mysql',
 'host'      => 'anndewinter.be.mysql',
 'database'  => 'anndewinter_beannchantedb',
 'username'  => 'anndewinter_beannchantedb',
 'password'  => 'Annchante!2023db',
 'charset'   => 'utf8mb4',
 'collation' => 'utf8mb4_unicode_ci',
 'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();