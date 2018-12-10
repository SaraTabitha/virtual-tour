<?php
require_once("EmergencyPhone.php");
require_once("../Marker_Groups/MarkerGroup.php");
require_once("../Marker_Groups/Marker.php");
require_once("../../php/contactRestAPI.php");

$emergencyPhones = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/emergency-phones?per_page=100");

//$phones = $emergencyPhones->getMarkersArray();
//$test = $phones[0];
//$icon = $emergencyPhones->getMarkerIcon();

// $myObj = "hi";
// // $testObj->title = $test->getTitle();
// // $testObj->lat = $test->getLatitude();
// // $testObj->long = $test->getLongitude();
// // $testObj->icon = $icon;


// $json = json_encode($testObj);

// echo $json;

//$myObj = array("hello", "goodbye");
$myObj->hello = "hello";
$myObj->goodbye = "goodbye";
$json = json_encode($myObj);
echo $json;
?>