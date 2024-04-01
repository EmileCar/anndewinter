<?php
$mediaItemRoutes = [
    'get_fotos' => array(
        'controller' => 'Media',
        'methods' => array(
            'GET' => 'getFotos',
        )
    ),
    'get_videos' => array(
        'controller' => 'Media',
        'methods' => array(
            'GET' => 'getVideos',
        )
    ),
    'get_audios' => array(
        'controller' => 'Media',
        'methods' => array(
            'GET' => 'getAudios',
        )
    )
];