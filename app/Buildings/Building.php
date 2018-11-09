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

    private $isAccesible;
    private $fullImageUrl;
    private $thumbImageUrl;
    private $building_categories; //array of Building Category titles (strings not the building, category objects)

    private $tourContent;
    private $sustainabilityContent;
    private $bathroomsContent;
    private $diningContent;

    private $tab_array; //array of tab objects

    public function __construct($slug, $title, $content, $latitude, $longitude, $street, $city, $state, $zip, $isAccessible, $fullImageUrl, $thumbImageUrl,
    $building_categories, $hasTour, $hasSustainability, $hasBathrooms, $hasDining){

        $this->slug = $slug;
        $this->title = $title;
        $this->content = $content;
        
        $this->latitude = $latitude;
        $this->longitude = $longitude;

        $this->street = $street;
        $this->city = $city;
        $this->state = $state;
        $this->zip = $zip;

        $this->isAccessible = $isAccessible;
        $this->fullImageUrl = $fullImageUrl;
        $this->thumbImageUrl = $thumbImageUrl;

        $this->building_categories = $building_categories;
        $this->tourContent = $tourContent;
        $this->sustainabilityContent = $sustainabilityContent;
        $this->bathroomsContent = $bathroomsContent;
        $this->diningContent = $diningContent;

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