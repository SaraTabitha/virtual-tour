<?php
require_once("Popups/Tab.php");
class Building{

    private $slug;
    private $title;
    
    private $isAccesible;
    private $building_categories; //array of Building Category titles (strings not the building, category objects)


    private $marker;
    private $infoWindow;
    private $popup;


    //building should have: $slug, $title, Marker marker, InfoWindow infowindow, $Tab_Array(array of tabs), Popup (holds all tabs)

    public function __construct($slug, $title, $isAccessible, $building_categories, $marker, $infoWindow, $popup){

        $this->slug = $slug;
        $this->title = $title;
        $this->isAccessible = $isAccessible;
        $this->building_categories = $building_categories;

    }

    function fillTabArray(){
        $potentialTabs = array("Tour"=>$this->$tourContent, 
                               "Sustainability"=>$this->sustainabilityContent,
                               "Bathrooms"=>$this->bathroomsContent, 
                               "Dining"=>$this->diningContent);
        foreach($potentialTabs as $tabTitle=>$tabContent){
            $tab = createTab($tabTitle, $tabContent);
            if($tab !== false){
                array_push($this->tab_array, $tab);
            }
        }

    }
    function createTab($tabTitle, $tabContent){
        if($tabContent !== null){
            $tabSlug = $this->slug . $tabTitle;
            
            return new Tab($tabSlug, $tabTitle, $tabContent);
        }
        else{
            return false;
        }
        
    }

}
?>