<?php

require_once(__DIR__ . "/../Marker_Groups/MarkerGroup.php");
require_once(__DIR__ . "/../Marker_Groups/Marker.php");
require_once(__DIR__ . "/../../php/contactRestAPI.php");
require_once(__DIR__ . "/ParkingLot.php");

$parkingLots = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/parking-lots?per_page=100");

$slug;
$title;
$isAccessible;
$lotTypes; //array of strings
$latitude;
$longitude;




$parkingLot_list = array();
$parkingLot_markers = array();

$accessibleParking_markers = array();

foreach($parkingLots as $index=>$lot){
    $slug = $lot->slug;
    $title = $lot->title->rendered;

    $isAccessible = $lot->is_accessible;
    $lotTypes = $lot->lot_types;

    $latitude = $lot->location->latitude;
    $longitude = $lot->location->longitude;

    $parkingLot_markers[$index] = new Marker($latitude, $longitude, $title);
    $parkingLot_list[$index] = new ParkingLot($slug, $title, $parkingLot_markers[$index], $isAccesible, $lotTypes);
    
    if($isAccessible){
        array_push($accessibleParking_markers, $parkingLot_markers[$index]);
    }
}
/*
* all parking markers
*/
$slug = "parking";
$checkboxColor = "#ef92ac"; 
$markerIcon = "images/markers/pink.png";
$parkingLots = new MarkerGroup($slug, $checkboxColor, $markerIcon, $parkingLot_markers);


/*
* only accessible parking markers
*/
$slug = "accPar";
$checkboxColor = "#b3d4fc";
$markerIcon = "images/markers/teal.png";
$accessibleParkingLots = new MarkerGroup($slug, $checkboxColor, $markerIcon, $accessibleParking_markers);

//part 2 -> parking_json.php
//part 3 -> style_checkboxes.php

?>