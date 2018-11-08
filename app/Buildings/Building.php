<?php
include_once "Tab.php";
class Building{

    private $slug;
    private $title;
    private $content;

    private $latitude;
    private $longitude;

    private $street; 
    private $city;
    private $state;
    private $zip;

    private $is_accesible;
    private $fullImage_url;
    private $thumbImage_url;
    private $building_categories; //array of Building Category titles

    private $hasTour;
    private $hasSustainability;
    private $hasBathrooms;
    private $hasDining;

    private $tab_array; //array of tab objects

    public function __construct($slug, $title, $content, $latitude, $longitude, $street, $city, $state, $zip, $is_accessible, $fullImage_url, $thumbImage_url,
    $building_categories, $hasTour, $hasSustainability, $hasBathrooms, $hasDining){

    }


}
?>