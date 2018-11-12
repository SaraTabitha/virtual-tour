<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: Popups are the informational objects that appear when a user clicks the "click for more info" link
*   on an InfoWindow. Popups display all information about Buildings and include a nav that consists of the Tabs 
*   for each Building. 
*/
require_once("Popups/Tab.php");

class Popup{

    //private $about_tab;
    private $slug;
    private $title;
    private $aboutContent;
    private $fullImageUrl;

    private $dining_tab; //Tab object
    private $bathrooms_tab; //Tab object
    private $tour_tab; //Tab object
    private $sustainability_tab; //Tab object

    public function __construct($slug, $title, $aboutContent, $fullImageUrl, $dining_tab, $bathrooms_tab, $tour_tab, $sustainability_tab){
        $this->slug = $slug;
        $this->title = $title;
        $this->aboutContent = $aboutContent;
        $this->fullImageUrl = $fullImageUrl;
        
        //$this->about_tab = $about_tab;
        $this->dining_tab = $dining_tab;
        $this->bathrooms_tab = $bathrooms_tab;
        $this->tour_tab = $tour_tab;
        $this->sustainability_tab = $sustainability_tab;
    }

}
?>