<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: Buildings store all of the information submit by the admin through the CMS. 
*   All of that information is stored in this classes instance variables, including info 
*   stored in instantiated objects of Markers, InfoWindows & Popups. 
*/
class Building{

    private $slug; //string
    private $title; //string
    private $isAccesible; //bool
    private $street; //string
    private $city; //string
    private $state; //string
    private $zipcode; //string
    private $full_image; //string url to image
    private $thumb_image; //string url to image

    private $building_categories; //array of Building Category titles (Strings not the BuildingCategory objects)
    private $marker;    //marker object (latitude, longitude)

    private $tour_tab_content; //string of html
    private $sustainability_tab_content; //string of html
    private $bathrooms_tab_content; //string of html
    private $dining_tab_content; //string of html


    //building should have: $slug, $title, Marker marker, InfoWindow infowindow, $Tab_Array(array of tabs), Popup (holds all tabs)

    public function __construct($slug, $title, $isAccessible, $street, $city, $state, $zipcode, $full_image, $thumb_image, 
    $building_categories, $marker, $tour_tab_content, $sustainability_tab_content, $bathrooms_tab_content, $dining_tab_content ){

        $this->slug = $slug;
        $this->title = $title;
        $this->isAccessible = $isAccessible;
        $this->street = $street;
        $this->city = $city;
        $this->state = $state;
        $this->zipcode = $zipcode;
        $this->full_image = $full_image;
        $this->thumb_image = $thumb_image;
        $this->building_categories = $building_categories;
        $this->marker = $marker;
        $this->tour_tab_content = $tour_tab_content;
        $this->sustainability_tab_content = $sustainability_tab_content;
        $this->bathrooms_tab_content = $bathrooms_tab_content;
        $this->dining_tab_content = $dining_tab_content;

    }

    public function getSlug(){
        return $this->slug;
    }
    public function getTitle(){
        return $this->title;
    }
    public function getIsAccessible(){
        return $this->isAccessible;
    }
    public function getStreet(){
        return $this->street;
    }
    public function getCity(){
        return $this->city;
    }
    public function getState(){
        return $this->state;
    }
    public function getZipcode(){
        return $this->zipcode;
    }
    public function getFullImage(){
        return $this->full_image;
    }
    public function getThumbImage(){
        return $this->thumb_image;
    }
    public function getBuildingCategories(){
        return $this->building_categories;
    }
    public function getMarker(){
        return $this->marker;
    }
    public function getTourTabContent(){
        return $this->tour_tab_content;
    }
    public function getSustainabilityTabContent(){
        return $this->sustainability_tab_content;
    }
    public function getBathroomTabContent(){
        return $this->bathrooms_tab_content;
    }
    public function getDiningTabContent(){
        return $this->dining_tab_content;
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