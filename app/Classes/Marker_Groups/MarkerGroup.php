<?php
require_once(__DIR__ . "/Marker.php");

/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: MarkerGroup, a group of markers that corresponds to a checkbox. 
*/
class MarkerGroup{
    private $slug;
    private $checkboxColor;
    private $markerIcon;
    private $markersArray;

    public function __construct($slug, $checkboxColor, $markerIcon, $markersArray){
        $this->slug = $slug . "Label";

        $this->checkboxColor = $checkboxColor;
        $this->markerIcon = $markerIcon;
        $this->markersArray = $markersArray; 

        
    }
    
    function getSlug(){
        return $this->slug;
    }
    function getCheckboxColor(){
        return $this->checkboxColor;
    }
    function getMarkerIcon(){
        return $this->markerIcon;
    }
    function getMarkersArray(){
        return $this->markersArray;
    }

    /*
    * function for creating a json object for the marker info to be passed to map.js
    * params: $array(array of marker objects) & $icon(string) have to be passed to this function
    * otherwise a 500 error is thrown
    * cannot use "$this->markersArray" or "$this->markerIcon" (I tried)
    */
    function createMarkerJSONObject($array, $icon){
        $object->slugs = array();
        $object->titles = array();
        $object->latitudes = array();
        $object->longitudes = array();
        $object->icon = $icon;
        
        foreach($array as $item){
            $slug = $item->getSlug();
            $title = $item->getTitle();
            $lat = $item->getLatitude();
            $long = $item->getLongitude();

            array_push($object->slugs, $slug);
            array_push($object->titles, $title);
            array_push($object->latitudes, $lat);
            array_push($object->longitudes, $long);
        }

        return $object;
    }
    /* this needs to be in its own function & called in its own file bc otherwise create_emergencyphones' json sent to map.js gets screwed up :) */
    function style_checkboxes(){
    
        ?>
        <style>
            /* border outline */
            #<?php echo $this->slug ?>.is-checked > span.mdl-checkbox__box-outline{
                border: 2px solid <?php echo $this->checkboxColor ?>;
            }

            /* checkbox inner color + ripple effect color */
            #<?php echo $this->slug ?>.is-checked > span.mdl-checkbox__box-outline > span{
                background: <?php echo $this->checkboxColor ?>;
            }
            #<?php echo $this->slug ?> > span.mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center > span{
                background: <?php echo $this->checkboxColor ?>;
            }

        </style>
        <?php
    }
}
?>