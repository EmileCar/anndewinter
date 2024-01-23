<?php
// set routes
$routes = array(
    'index' => array(
        'controller' => 'Main',
        'action' => 'index'
    ),
    'getPastActivities' => array(
        'controller' => 'PastActivities',
        'action' => 'index'
    ),
    'getPhotos' => array(
        'controller' => 'Media',
        'action' => 'getFotos'
    ),
    'getVideos' => array(
        'controller' => 'Media',
        'action' => 'getVideos'
    ),
    'getAudios' => array(
        'controller' => 'Media',
        'action' => 'getAudios'
    ),
);

if (empty($_GET['page'])) {
    $_GET['page'] = 'index';
}
if (empty($routes[$_GET['page']])) {
    header('Location: index.php');
    exit();
}

$route = $routes[$_GET['page']];
