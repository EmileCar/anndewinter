<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/PastActivity.php';

class PastActivitiesController extends Controller {

	public function getPastActivities() {
		$pastActivities = PastActivity::get();
		exit(json_encode($pastActivities));
	}
}