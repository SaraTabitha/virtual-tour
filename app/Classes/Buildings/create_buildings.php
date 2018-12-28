<?php
require_once("Building.php");
require_once("php/contactRestAPI.php");

$buildings = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/buildings?per_page=100"); //per_page=100: this will return the first 100 results
$media = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/media?per_page=100");


$building_list = array();
$building_markers = array();

$accessibleBuilding_markers = array();
$sustainableBuilding_markers = array();
$bathroomBuilding_markers = array();

foreach($buildings as $index=>$item){
    $slug = $item->slug;
    $title = $item->title;
    $isAccessible = $item->is_accessible;
    $street = $item->address->street; 
    $city = $item->address->city;
    $state = $item->address->state;
    $zipcode = $item->address->zip;
    $full_image_index= $item->full_image; //need to get image url
    $thumb_image_index = $item->tooltip_image; //need to get image url 
    $building_categories = $item->building_categories;
    $latitude = $item->location->latitude; //turn into marker
    $longitude = $item->location->longitude; //turn into marker
    $about_tab_content = $item->content->rendered;
    $tour_tab_content = $item->tour;
    $sustainability_tab_content = $item->bathrooms;
    $bathrooms_tab_content = $item->sustainability;
    $dining_tab_content = $item->dining;

    $building_markers[$index] = new Marker($slug, $latitude, $longitude, $title);

    //get full_image and thumb_image urls
    $full_image = $media[$full_image_index]->guid->rendered;
    $thumb_image = $media[$thumb_image_index]->guid->rendered;

    $building_list = new Building($slug, $title, $isAccessible, $street, $city, $state, $zipcode, $full_image, $thumb_image,
    $building_categories, $building_markers[$index], $about_tab_content, $tour_tab_content, $sustainability_tab_content, $dining_tab_content);

    //markers for accessible entry markergroup
    if($isAccessible){
        array_push($accessibleBuilding_markers, $building_markers[$index]);
    }
    //markers for sustainability points of interest markergroup
    if($tour_tab_content != null){
        array_push($sustainableBuilding_markers, $building_markers[$index]);
    }
    //markers for genderneutral&family bathroom markergroup
    if($bathrooms_tab_content != null){
        array_push($bathroomBuilding_markers, $building_markers[$index]);
    }
}

$slug = "buildings";
$checkboxColor = "#fccd32";
$markerIcon = "images/markers/yellow.png";
$allBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $building_markers);

$slug = "accEnt";
$checkboxColor = "#eb212e";
$markerIcon = "images/markers/red.png";
$accessibleBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $accessibleBuilding_markers);;

$slug = "sust";
$checkboxColor = "#b3d143";
$markerIcon = "images/markers/green.png";
$sustainableBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $sustainabilityBuilding_markers);;

$slug = "gender";
$checkboxColor = "#c1a3cb";
$markerIcon = "images/markers/lightpurple.png";
$bathroomBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $bathroomBuilding_markers);;


?>