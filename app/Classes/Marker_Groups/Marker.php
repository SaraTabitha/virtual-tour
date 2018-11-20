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

    public function __construct($lat, $long, $title){
        $this->latitude = $lat;
        $this->longitude = $long;
        $this->title = $title;
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