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


//loops through each category by Title (need title to compare each category in a building against) and gets all of the buildings
//for that category -> adds the array of buildings for that category to the array_of_arrays_of_buildings massive array 
// (are you confused? i'm sorry, i'm confusing myself)
foreach($category_titles as $this_category_title){
    $buildings_that_have_this_category = getBuildingsForThisCategory($this_category_title, $building_list);
    array_push($array_of_arrays_of_buildings, $buildings_that_have_this_category);
}

/*
* params: 
    this_category (string title of BuildingCategory)
    building_list (complete array of Building objects)

* filters through the Building objects and looks through their instance variable "building_categories" for matches to the specified BuildingCategory title
* return:
     $buildings_that_have_this_category (array of Building objects that match the BuildingCategory)
*/
function getBuildingsForThisCategory($this_BuildingCategory_title, $building_list){
    
    $buildings_that_have_this_category = array_filter($building_list, function($element) use($this_BuildingCategory_title){
        $categories_from_building = $element->getBuildingCategories();

        foreach($categories_from_building as $this_category){
            return checkCategoryMatch($this_category, $this_BuildingCategory_title);
        }
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

$category_markerGroups = array();
//creates marker groups for each BuildingCategory, also creates marker arrays from the building arrays for MarkerGroup parameter
foreach($array_of_arrays_of_buildings as $index=>$array_of_buildings){
    $markers_for_category = getMarkersForBuildings($array_of_buildings);
    array_push($category_markerGroups, new MarkerGroup($category_slugs[$index], $checkboxColor, $markerIcon, $markers_for_category));
    //TODO $checkboxColor array
    ///TODO $markerIcon array
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


//to be deleted
//$stuRec = $category_markerGroups[0];

//part 2 -> buildings_json.php
//part 3 -> Marker_Groups/style_checkboxes.php
//part 4 -> create_buildingInfoWindows.php ( TODO decide if create infowindows & popups should be in one file )
?>