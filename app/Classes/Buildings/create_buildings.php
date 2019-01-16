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
* C A T E G O R I E S
* spoiler: possibly the most confusing, headache inducing portion of this site?
* necessary information:
    know the difference between:
        - BuildingCategories (objects for the menu items for categories)
        - Buildings (objects for all building info)
            -instance variable building_categories (array of strings for the categories that this building falls under)
*
*/
$category_titles = array(); //strings of BuildingCategory Titles
$category_slugs = array(); //strings of BuildingCategory Slugs

//category_list -> array of all BuildingCategory objects
//loops through an extracts all of the slugs & titles of the categories for the menu
foreach($category_list as $building_category){
    array_push($category_titles, $building_category->getTitle());
    array_push($category_slugs, $building_category->getSlug());
}   

//this is a stupidly large array which contains the array of buildings that correspond to each BuildingCategory
$array_of_arrays_of_buildings = array(); //array-ception 
//array of all of the thumbnail image urls for the arrays of buildings that correspond to each BuildingCategory
$array_of_arrays_of_buildings_thumbnail_urls = array();

//loops through each category by Title (need title to compare each category in a building against) and gets all of the buildings
//for that category -> adds the array of buildings for that category to the array_of_arrays_of_buildings massive array 
// (are you confused? i'm sorry, i'm confusing myself)
//also gets all of the thumbnail urls for these arrays and puts them into a mega-array of arrays containing thumbnail urls for these building arrays
foreach($category_titles as $this_category_title){
    $buildings_that_have_this_category = getBuildingsForThisCategory($this_category_title, $building_list);
    $thumbnails_for_buildings_that_have_this_category = getThumbnailsForTheseBuildings($buildings_that_have_this_category);
    array_push($array_of_arrays_of_buildings, $buildings_that_have_this_category);
    array_push($array_of_arrays_of_buildings_thumbnail_urls, $thumbnails_for_buildings_that_have_this_category);
}

/*
* params: 
    this_category (string title of BuildingCategory)
    building_list (complete array of Building objects)

* filters through the Building objects and looks through their instance variable "building_categories" for matches to the specified BuildingCategory object title
* return:
     $buildings_that_have_this_category (array of Building objects that match the BuildingCategory)
*/
function getBuildingsForThisCategory($this_BuildingCategory_title, $building_list){
    $buildings_that_have_this_category = array_filter($building_list, function($this_building) use($this_BuildingCategory_title){
        $categories_from_building = $this_building->getBuildingCategories();

        $matches = false;
        foreach($categories_from_building as $this_category){
            if(checkCategoryMatch($this_category, $this_BuildingCategory_title)){
                $matches = true;
            }
        }
        return $matches; //needs to return only after it goes through and checks the entire building_category array
    });
    return $buildings_that_have_this_category;
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

/*
* param: 
    array_of_buildings (array of Building objects)
* loops through array_of_buildings and finds the image url for the thumbnail of the buildings and puts them into their own array
* return:
    array_of_media (array of thumbnail urls)
*/
function getThumbnailsForTheseBuildings($array_of_buildings){
    $array_of_media = array();
    foreach($array_of_buildings as $this_building){
        $media_url = $this_building->getThumbImage();
        array_push($array_of_media, $media_url);
    }
    return $array_of_media;
    
}

/*
* note: category_markerGroups used in buildings_json.php
*/
$category_markerGroups = array();
$category_checkboxColors = ["#981d23", "#f17844", "#875547", "#0e5846", "#8dd4e2", "#282a72", "#5f318f"];
$category_markerIcons = ["images/markers/maroon.png", "images/markers/orange.png", "images/markers/brown.png", "images/markers/darkgreen.png", "images/markers/lightblue.png", "images/markers/navy.png", "images/markers/darkpurple.png"];
//creates marker groups for each BuildingCategory, also creates marker arrays from the building arrays for MarkerGroup parameter
foreach($array_of_arrays_of_buildings as $index=>$array_of_buildings){
    $markers_for_category = getMarkersForBuildings($array_of_buildings);
    array_push($category_markerGroups, new MarkerGroup($category_slugs[$index], $category_checkboxColors[$index], $category_markerIcons[$index], $markers_for_category));
}


/*
* param: 
    array_of_buildings (Building objects)
* 
* goes through an array of buildings, gets all of their markers, and returns an array of that markers
*
* return: 
    array_of_markers (Marker objects)
*/
function getMarkersForBuildings($array_of_buildings){
    $array_of_markers = array();
    foreach($array_of_buildings as $this_building){
        array_push($array_of_markers, $this_building->getMarker());
    }
    return $array_of_markers;
}


//part 2 -> buildings_json.php
//part 3 -> Marker_Groups/style_checkboxes.php (TODO set up styling for category checkboxes)
//part 4 -> create_buildingInfoWindows.php ( TODO decide if create infowindows & popups should be in one file )
?>