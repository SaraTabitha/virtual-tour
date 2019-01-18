<?php

require_once(__DIR__ . "/../Marker_Groups/MarkerGroup.php");
require_once(__DIR__ . "/../Marker_Groups/Marker.php");
require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/../../php/contactRestAPI.php");
require_once(__DIR__ . "/../Building_Categories/create_categories.php");

$buildings = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/buildings?per_page=100"); //per_page=100: this will return the first 100 results
$media = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/media?per_page=100");

$building_list = array();

//array for storing marker objects
$building_markers = array();

//array for storing thumbnail urls (to be sent to buildings_json and then to map.js)
$building_thumb_url_array = array();

//arrays for storing the indices within any building arrays for these categories of builidings
$accessible_building_indices = array();
$sustainable_building_indices = array();
$bathroom_building_indices = array();

/*
* goes through the JSON string of Buildings and constructs Marker and Building objects from it
*/
foreach($buildings as $index=>$item){

    $slug = $item->slug;
    $title = $item->title->rendered;
    $isAccessible = $item->is_accessible;
    $street = $item->address->street; 
    $city = $item->address->city;
    $state = $item->address->state;
    $zipcode = $item->address->zip;
    $full_image_id= $item->full_image; //need to get image url
    $thumb_image_id = $item->tooltip_image; //need to get image url 
    $building_categories = $item->building_categories;
    $latitude = $item->location->latitude; //turn into marker
    $longitude = $item->location->longitude; //turn into marker
    $about_tab_content = $item->content->rendered;
    $tour_tab_content = $item->tour;
    $sustainability_tab_content = $item->sustainability;
    $bathrooms_tab_content = $item->bathrooms;
    $dining_tab_content = $item->dining;

    $building_markers[$index] = new Marker($slug, $latitude, $longitude, $title);

    //get full_image and thumb_image urls
    $full_image = getImageURL($full_image_id);
    $thumb_image = getImageURL($thumb_image_id);

    array_push($building_thumb_url_array, $thumb_image);

    //get indices for accessible buildings
    if($isAccessible){
        array_push($accessible_building_indices, $index);
   }
   //get indices for sustainable buildings
   if($sustainability_tab_content != null){
        array_push($sustainable_building_indices, $index);
   }
   //get indices for bathroom buildings
   if($bathrooms_tab_content != null){
        array_push($bathroom_building_indices, $index);
   }

   /*
    * note: constructor breaks if given a null value
    */
    if($about_tab_content == NULL){
        $about_tab_content = false;
    }
    if($tour_tab_content == NULL){
        $tour_tab_content = false;
    }
    if($sustainability_tab_content == NULL){
        $sustainability_tab_content = false;
    }
    if($bathrooms_tab_content == NULL){
        $bathrooms_tab_content = false;
    }
    if($dining_tab_content == NULL){
        $dining_tab_content = false;
    }

    //the master array of Building objects~
    $building_list[$index] = new Building($slug, $title, $isAccessible, $street, $city, $state, $zipcode, $full_image, $thumb_image,
    $building_categories, $building_markers[$index], $about_tab_content, $tour_tab_content, $sustainability_tab_content, $bathrooms_tab_content, $dining_tab_content);
}

//searches for the url of the media using the given id #
/*
*param: id_of_wanted_image (number for the id of the media on the media page)
*global $media (json string of all media in the CMS)
*return url (string of url for media that matches the id)
*/
function getImageURL($id_of_wanted_image){
    global $media;
    $url; 

    foreach($media as $image){
        if($image->id == $id_of_wanted_image){
            $url = $image->guid->rendered;
        }
    }
    return $url;
}

/*
* making all of the corresponding MarkerGroups necessary for the first section of building checkboxes on the site menu
* these markerGroups are utilised in buildings_json.php
*/
$slug = "buildings";
$checkboxColor = "#fccd32";
$markerIcon = "images/markers/yellow.png";
$allBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $building_markers);
?>