<?php
require_once(__DIR__ . "/../Marker_Groups/MarkerGroup.php");
require_once(__DIR__ . "/../Marker_Groups/Marker.php");
require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/../../php/contactRestAPI.php");
require_once(__DIR__ . "/../Building_Categories/create_categories.php");

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
$sustainableBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $sustainableBuilding_markers);;

$slug = "gender";
$checkboxColor = "#c1a3cb";
$markerIcon = "images/markers/lightpurple.png";
$bathroomBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $bathroomBuilding_markers);;



/*
* categories
*/


$category_list; //array of BuildingCategory objects
//BuildingCategory "titles" match up to the "building_categories (array item)" in the Building 
//for each category -> get buildings which have a building_category that matches the title -> make marker group for that
//will need an array of MarkerGroups to pass to JSON...
//how to decide checkbox colors ? markerIcons? aasdlkfjaskfjksdajf
$category_titles = array();
$category_slugs = array();
foreach($category_list as $building_category){
    array_push($category_titles, $building_category->getTitle());
    array_push($category_slugs, $building_category->getSlug());
}   

$buildings_that_have_this_category = array();
$test_array = array();
$category_titles[0]; //"student recreation"


/*$buildings_that_have_this_category = array_filter($building_list, "hasStuRec");

function hasStuRec($building){
    $categories_from_building = $building->getBuildingCategories();
    foreach($categories_from_building as $this_category){
        array_push($test_array, $this_category); //this is coming up empty

        if(strcmp($this_category, "Student Recreation") == 0){
        //if($this_category == $category_titles[0]){

            
           // array_push($test_array, $building->getTitle());
           
            return true;
            
        }
        else{
            return false;
        }
    }
}*/


//array_filter -> returns filtered array
$buildings_that_have_this_category = array_filter($building_list, function($element){
    $categories_from_building = $element->getBuildingCategories();
    foreach($categories_from_building as $this_category){
        array_push($test_array, $this_category); //this is coming up empty

        if(strcmp($this_category, "Student Recreation") == 0){

            return true;
            
        }
        else{
            return false;
        }
    }
});

$marker_array_stuRec = array();
//var_dump($buildings_that_have_this_category); //building objects
foreach($buildings_that_have_this_category as $this_building){
    array_push($marker_array_stuRec, $this_building->getMarker());
}

$slug = $category_titles[0];
$stuRec = new MarkerGroup($checkbox_slug, $checkboxColor, $markerIcon, $marker_array_stuRec);
//var_dump($marker_array_stuRec);


/*
foreach($building_list as $index=>$this_building){
    $this_building_categories = $this_building->getBuildingCategories();
    foreach($this_building_categories as $index=>$this_category){
        if(strcmp($this_category, $category_titles[0])){
            array_push($test_array, $this_building->getTitle());
        }
        else{}
    }
}   /*
//$first_categories_array = $building[0]->getBuildingCategories();


//what i'm trying to accomplish here
//find all buildings where their categories match the total categories_list
//x = all categories; a = buildings, b = categories of that particular building
//i want all a's where x == b

//array_filter(); might help?
//already looked into querying/filtering rest api url (seems to be deprecated?)
//pffsshhhhh

//part 2 -> buildings_json.php
//part 3 -> Marker_Groups/style_checkboxes.php
//part 4 -> create_buildingInfoWindows.php ( TODO decide if create infowindows & popups should be in one file )
?>