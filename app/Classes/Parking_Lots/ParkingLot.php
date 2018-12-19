<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: parking lots store all info submit for them in the CMS. 
*/
class ParkingLot{
    private $slug;
    private $title;
    private $marker; //marker object
    private $isAccessible;
    private $lotTypes; //array of strings?

    public function __construct($slug, $title, $marker, $isAccessible, $lotTypes){
        $this->slug = $slug;
        $this->title = $title;
        $this->marker = $marker;
        $this->isAccessible = $isAccessible;
        $this->lotTypes = $lotTypes;
    }

    function getSlug(){
        return $this->slug;
    }
    
    function getTitle(){
        return $this->title;
    }

    function getMarker(){
        return $this->marker;
    }

    function getIsAccessible(){
        return $this->isAccessible;
    }
    
    function getLotTypes(){
        return $this->lotTypes;
    }

    /*
    * TODO lotTypes -> infoWindow
    * document.elementById("#" + slug + "Hover")
    * js:     infoWindowsAll[b] = new google.maps.InfoWindow({
    *            content: document.getElementById(allMarkersInfo[b].shortHand + "Hover"),
    *         });
    */
}
?>