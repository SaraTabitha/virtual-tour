<?php
require_once(__DIR__ . "/../Marker_Groups/MarkerGroup.php");
require_once(__DIR__ . "/../Marker_Groups/Marker.php");
require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/../../php/contactRestAPI.php");

$buildings = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/buildings?per_page=100"); //per_page=100: this will return the first 100 results
$media = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/media?per_page=100");


$building_list = array();

//arrays for storing marker objects
$building_markers = array();
$accessibleBuilding_markers = array();
$sustainableBuilding_markers = array();
$bathroomBuilding_markers = array();

//arrays for storing thumbnail urls (to be sent to buildings_json and then to map.js)
$building_thumb_url_array = array();
$accessibleBuilding_thumb_url_array = array();
$sustainableBuilding_thumb_url_array = array();
$bathroomBuilding_thumb_url_array = array();

function getImageURL($id){
    global $media;
    $url; 

    foreach($media as $image){
        if($image->id == $id){
            $url = $image->guid->rendered;
        }
    }
    return $url;
}

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

    //markers for accessible entry markergroup
    if($isAccessible){
        array_push($accessibleBuilding_markers, $building_markers[$index]);
        array_push($accessibleBuilding_thumb_url_array, $thumb_image);
    }
    //markers for sustainability points of interest markergroup
    if($sustainability_tab_content != null){
        array_push($sustainableBuilding_markers, $building_markers[$index]);
        array_push($sustainableBuilding_thumb_url_array, $thumb_image);
    }
    //markers for genderneutral&family bathroom markergroup
    if($bathrooms_tab_content != null){
        array_push($bathroomBuilding_markers, $building_markers[$index]);
        array_push($bathroomBuilding_thumb_url_array, $thumb_image);
    }

    /*
    * constructor breaks if given a null value
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

    $building_list[$index] = new Building($slug, $title, $isAccessible, $street, $city, $state, $zipcode, $full_image, $thumb_image,
    $building_categories, $building_markers[$index], $about_tab_content, $tour_tab_content, $sustainability_tab_content, $bathrooms_tab_content, $dining_tab_content);
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

//part 2 -> buildings_json.php
//part 3 -> Marker_Groups/style_checkboxes.php
//part 4 -> create_buildingInfoWindows.php ( TODO decide if create infowindows & popups should be in one file )
?>