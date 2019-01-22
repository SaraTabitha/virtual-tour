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

$slug = "accEnt";
$checkboxColor = "#eb212e";
$markerIcon = "images/markers/red.png";
$accessibleBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $accessible_building_indices);

$slug = "sust";
$checkboxColor = "#b3d143";
$markerIcon = "images/markers/green.png";
$sustainableBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $sustainable_building_indices);

$slug = "gender";
$checkboxColor = "#c1a3cb";
$markerIcon = "images/markers/lightpurple.png";
$bathroomBuildings = new MarkerGroup($slug, $checkboxColor, $markerIcon, $bathroom_building_indices);


/*
*  C A T E G O R I E S
* necessary information:
    know the difference between:
        - BuildingCategories (objects for the menu items for categories)
        - Buildings (objects for all building info)
            -instance variable building_categories (array of strings for the categories that this building falls under)
*
*/

$category_titles = array(); //array of BuildingCategory Titles

//category_list -> array of all BuildingCategory objects
//loops through an extracts all of the titles of the categories for the menu
foreach($category_list as $building_category){
    array_push($category_titles, $building_category->getTitle());
} 

//array of indices arrays that correspond to each BuildingCategory
$array_of_arrays_of_indices = array();

//loops through each category and gets an array of buildings that belong in the category
foreach($category_titles as $this_category_title){
    $buildings_that_have_this_category = getIndicesOfBuildingsForThisCategory($this_category_title, $building_list);
    //TODO get indices for these buildings -> push indices array
    array_push($array_of_arrays_of_indices, $buildings_that_have_this_category);
}

/*
* params: 
    this_BuildingCategory_title (string for BuildingCategory title)
    building_list (array of all Building objects)
* loops through all of the Building objects and checks their category array (instance variable) for whether or not the building
* matches the this_BuildingCategory_title parameter
* return: 
    indices_of_buildings_that_have_this_category (array of ints for indices of the buildings that match the specified category)
*/
function getIndicesOfBuildingsForThisCategory($this_BuildingCategory_title, $building_list){
    $indices_of_buildings_that_have_this_category = array();
    foreach($building_list as $index=>$this_building){
        $categories_from_building = $this_building->getBuildingCategories();
        foreach($categories_from_building as $this_category){
            if(checkCategoryMatch($this_category, $this_BuildingCategory_title)){
               array_push($indices_of_buildings_that_have_this_category, $index);
            }
        }
    }
    return $indices_of_buildings_that_have_this_category;
}

/*
* param:
    category_item_being_checked (string of a category title from the list of "building_categories" inside of a Building object)
    original_category (string of the title of a BuildingCategory object)

* function to check if the building category inside of a Building matches up to the particular category being checked fors
*/
function checkCategoryMatch($category_item_being_checked, $original_category){
    if(strcmp($category_item_being_checked, $original_category) == 0){
        //match
        return true;
        
    }
    else{
        //does not match
        return false;
    }
}


?>