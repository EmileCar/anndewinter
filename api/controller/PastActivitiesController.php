<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/PastActivity.php';
use Carbon\Carbon;

class PastActivitiesController extends Controller {

	public function index() {
		if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
			header('Access-Control-Allow-Origin: ' . $this->_preflightCheck());
			header('Access-Control-Allow-Methods: GET');
			header('Access-Control-Allow-Headers: Content-Type');
			header('Access-Control-Max-Age: 86400'); // 24 hours
			http_response_code(200);
			return;
		}

		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			header("HTTP/1.0 405 Method Not Allowed");
			exit("GET method is required for this endpoint.");
		}

		$pastActivities = PastActivity::get();
		echo json_encode($pastActivities);
	}

	private static function _preflightCheck(){
		$allowedOrigins = [
			'http://localhost:3000',
			'https://www.anndewinter.be' ,
			'http://www.anndewinter.be'
		 ];
		 
		 if(in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins))
		 {
			 $http_origin = $_SERVER['HTTP_ORIGIN'];
		 } else {
			 $http_origin = "https://www.anndewinter.be";
		 }

		return $http_origin;
	}
}