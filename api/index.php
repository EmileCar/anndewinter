<?php
/*
 * Dit is de entry point van de Ann De Winter Website.
 * 1) CORS instellingen worden gecontroleerd
 * 2) PHP Sessies worden geïnitialiseerd
 * 3) De controller wordt bepaald en geïnitialiseerd
 * 4) De route wordt doorgegeven aan de controller
 * 
 * Aangezien de frontend op dezelfde server/locatie draait als de API, is elke endpoint zo ?page={page} opgebouwd. (in query string)
*/

// CORS INSTELLINGEN
$allowedOrigins = [
    'http://localhost:3000',
    'https://anndewinter.be' ,
    'http://anndewinter.be',
    'https://www.anndewinter.be'
];

if(in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins))
{
    $http_origin = $_SERVER['HTTP_ORIGIN'];
} else {
    $http_origin = 'https://anndewinter.be';
}

header("Access-Control-Allow-Origin: " . $http_origin);
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Credentials: true');
http_response_code(200);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	return;
}

// ERROR HANDLING
ini_set('display_errors', true);
error_reporting(E_ALL);

// SESSIONS
session_set_cookie_params([
    'samesite' => 'None',
    'secure' => true,
]);
session_start();

// GET ROUTE AND CONTROLLER
require_once "../vendor/autoload.php";
require_once "./database/connection.php";
require_once "./routes/router.php";

$controllerName = $route['controller'] . 'Controller';

require_once __DIR__ . '/controller/' . $controllerName . ".php";

$controllerObj = new $controllerName();
$controllerObj->route = $route;
$controllerObj->filter();