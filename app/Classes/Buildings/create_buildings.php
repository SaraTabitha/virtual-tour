<?php
require_once("Building.php");
require_once("php/contactRestAPI.php");

$buildings = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/buildings?per_page=200"); //per_page=100: this will return the first 100 results; if there are ever more than 100 buildings increase this number

foreach($buildings as $item){
    $slug = $item->slug;
    $title = $item->title;
    $isAccessible = $item->is_accessible;
    $street = $item->address->street; 
    $city = $item->address->city;
    $state = $item->address->state;
    $zipcode = $item->address->zip;
    $full_image_num = $item->full_image; //need to get image url
    $thumb_image_num = $item->tooltip_image; //need to get image url 
    $building_categories = $item->building_categories;
    $latitude = $item->location->latitude; //turn into marker
    $longitude = $item->location->longitude; //turn into marker
    $about_tab_content = $item->content->rendered;
    $tour_tab_content = $item->tour;
    $sustainability_tab_content = $item->bathrooms;
    $bathrooms_tab_content = $item->sustainability;
    $dining_tab_content = $item->dining;

}

?>