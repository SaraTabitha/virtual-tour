<?php

require_once(__DIR__ . "/../Marker_Groups/MarkerGroup.php");
require_once(__DIR__ . "/../Marker_Groups/Marker.php");
require_once(__DIR__ . "/../../php/contactRestAPI.php");


$emergencyPhones = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/emergency-phones?per_page=100");

$emergencyPhone_list = array();
$emergencyPhone_markers = array();


$slug;
$title;
$longitude;
$latitude;

$checkboxColor = "#0085c8";
$markerIcon = "images/markers/blue.png";

//create all Emergency Phone objects & their markers
foreach($emergencyPhones as $index=>$phone){
    $slug = $phone->slug;
    $title = $phone->title->rendered;

    $latitude = $phone->location->latitude;
    $longitude = $phone->location->longitude;

    $emergencyPhone_markers[$index] = new Marker($slug, $latitude, $longitude, $title);
}

$emergencyPhones = new MarkerGroup($slug, $checkboxColor, $markerIcon, $emergencyPhone_markers);

//part 2 -> phones_json.php
//part 3-> style_checkboxes.php
?>