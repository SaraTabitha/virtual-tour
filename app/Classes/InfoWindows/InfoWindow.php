<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: an InfoWindow appears when a user clicks on the Marker of a Building or Parking Lot. 
*   This class corresponds to to the Google Maps API InfoWindow object-that is initialized through javascript- 
*   this class handles the html design of the InfoWindow for the Virtual Tour.  
*/
class InfoWindow{
    private $slug;
    private $title;

    private $moreInfoUrl;
    private $thumbnailImageUrl;

    private $street;
    private $city;
    private $state;
    private $zipcode;
}
?>