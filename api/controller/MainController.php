<?php

require_once __DIR__ . '/Controller.php';
use Carbon\Carbon;

class MainController extends Controller {
	
	public function index() {
		echo "<h1>Ann De Winter API</h1>";
		echo "<p>Deze API is gemaakt voor de website van Ann De Winter. </p>";
		echo '<p>Keer hier terug naar de website => <a href="www.anndewinter.be">www.anndewinter.be</a></p>';
		echo '<p>Gemaakt door Emile Caron => <a href="www.emilecaron.be">www.emilecaron.be</a></p>';
	}

}

