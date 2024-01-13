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
);

if (empty($_GET['page'])) {
    $_GET['page'] = 'index';
}
if (empty($routes[$_GET['page']])) {
    header('Location: index.php');
    exit();
}

$route = $routes[$_GET['page']];
