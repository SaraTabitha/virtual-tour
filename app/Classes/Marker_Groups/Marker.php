<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: each Building, Emergency Phone and Parking Lot has a marker that corresponds to it. 
*/
class Marker{
    private $latitude;
    private $longitude;
    private $title;
    private $slug; //this is for infowindow/popup purposes later on in map.js

    public function __construct($slug, $lat, $long, $title){
        $this->slug = $slug;
        $this->latitude = $lat;
        $this->longitude = $long;
        $this->title = $title;
    }
    function getSlug(){
        return $this->slug;
    }
    function getLatitude(){
        return $this->latitude;
    }
    function getLongitude(){
        return $this->longitude;
    }
    function getTitle(){
        return $this->title;
    }
}

?>