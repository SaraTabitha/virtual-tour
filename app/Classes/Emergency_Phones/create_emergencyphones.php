<?php
require_once("EmergencyPhone.php");
require_once("../Marker_Groups/MarkerGroup.php");
require_once("../Marker_Groups/Marker.php");
require_once("../../php/contactRestAPI.php");

$emergencyPhones = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/emergency-phones?per_page=100");

$emergencyPhone_list = array();
$emergencyPhone_markers = array();
$index = 0;

$slug;
$title;
$longitude;
$latitude;

$checkboxColor = "#0085c8";
$markerIcon = "images/markers/blue.png";

//create all Emergency Phone objects & their markers
foreach($emergencyPhones as $phone){

    $slug = $phone->slug;
    $title = $phone->title->rendered;

    $latitude = $phone->location->latitude;
    $longitude = $phone->location->longitude;

    

    $emergencyPhone_markers[$index] = new Marker($latitude, $longitude, $title);

    $emergencyPhone_list[$index] = new EmergencyPhone($slug, $title, $emergencyPhone_markers[$index]);
    $index++;
}

$emergencyPhones = new MarkerGroup($slug, $checkboxColor, $markerIcon, $emergencyPhone_markers);
$phones = $emergencyPhones->getMarkersArray();
$test = $phones[0];
$icon = $emergencyPhones->getMarkerIcon();

// $myObj = "hi";
  $testObj->title = $test->getTitle();
// // $testObj->lat = $test->getLatitude();
// // $testObj->long = $test->getLongitude();
// // $testObj->icon = $icon;


 $json = json_encode($testObj);

 echo $json;

//$myObj = array("hello", "goodbye");

//$myObj->hello = "hello";
//$myObj->goodbye = "goodbye";
//$json = json_encode($myObj);
//echo $json;
?>