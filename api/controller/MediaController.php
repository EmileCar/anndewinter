<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Media.php';
use Carbon\Carbon;

class MediaController extends Controller {

	public function getFotos(){
        $fotos = Media::where('type', 'foto')->get();
        echo json_encode($fotos);
    }

    public function getVideos(){
        $videos = Media::where('type', 'video')->get();
        echo json_encode($videos);
    }

    public function getAudios(){
        $audios = Media::where('type', 'audio')->get();
        echo json_encode($audios);
    }
}