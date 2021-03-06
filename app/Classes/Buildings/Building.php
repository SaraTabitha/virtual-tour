<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: Buildings store all of the information submit by the admin through the CMS. 
*   All of that information is stored in this classes instance variables, including info 
*   stored in instantiated objects of Markers, InfoWindows & Popups. 
*/
require_once(__DIR__ . "/Tab.php");

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

    private $about_tab_content; //string of html
    private $tour_tab_content; //string of html
    private $sustainability_tab_content; //string of html
    private $bathrooms_tab_content; //string of html
    private $dining_tab_content; //string of html

    private $about_tab; //tab object
    private $tour_tab; //tab object
    private $sustainability_tab; //tab object
    private $bathroom_tab; //tab object
    private $dining_tab; //tab object

    private $tabs = array();

    public function __construct($slug, $title, $isAccessible, $street, $city, $state, $zipcode, $full_image, $thumb_image, 
    $building_categories, $marker, $about_tab_content, $tour_tab_content, $sustainability_tab_content, $bathrooms_tab_content, $dining_tab_content ){

        $this->slug = $slug;
        $this->title = htmlspecialchars_decode($title, ENT_HTML5);
        $this->isAccessible = $isAccessible;
        $this->street = $street;
        $this->city = $city;
        $this->state = $state;
        $this->zipcode = $zipcode;
        $this->full_image = $full_image;
        $this->thumb_image = $thumb_image;
        $this->building_categories = $building_categories;
        $this->marker = $marker;
        $this->about_tab_content = $about_tab_content;

        $this->tour_tab_content = $tour_tab_content;
        $this->sustainability_tab_content = $sustainability_tab_content;
        $this->bathrooms_tab_content = $bathrooms_tab_content;
        $this->dining_tab_content = $dining_tab_content;

        $this->about_tab = new Tab("About", "About This Building", $this->about_tab_content);
        $this->about_tab->setAboutTabDetails($full_image);

        if($this->tabHasContent($this->tour_tab_content)){
            $this->tour_tab = new Tab("Tour", "Tour Snapshot", $this->tour_tab_content);
            array_push($this->tabs, $this->tour_tab);
        }
        if($this->tabHasContent($this->sustainability_tab_content)){
            $this->sustainability_tab = new Tab("Sustainability", "Sustainability Point of Interest", $this->sustainability_tab_content);
            array_push($this->tabs, $this->sustainability_tab);
        }
        if($this->tabHasContent($this->bathroom_tab_content)){
            $this->bathroom_tab = new Tab("Bathrooms",  "Gender Neutral and Family Restrooms", $this->bathroom_tab_content);
            array_push($this->tabs, $this->bathroom_tab);
        }
        if($this->tabHasContent($this->dining_tab_content)){
            $this->dining_tab = new Tab("Dining", "Dining", $this->dining_tab_content);
            array_push($this->tabs, $this->dining_tab);
        }
        
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
    public function getAboutTabContent(){
        return $this->about_tab_content;
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
    public function getTabs(){
        return $this->tabs;
    }
    public function getAboutTab(){
        return $this->about_tab;
    }

    //TODO comment
    public function fillTabArray(){
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

    //TODO comment
    public function createTab($tabTitle, $tabContent){
        if($tabContent !== null){
            $tabSlug = $this->slug . $tabTitle;
            
            return new Tab($tabSlug, $tabTitle, $tabContent);
        }
        else{
            return false;
        }
        
    }

    //TODO comment 
    public function tabHasContent($tab_content){
        if($tab_content == false){
            return false;
        }
        else{
            return true;
        }
    }

    //TODO comment 
    public function createPopup(){
        ?>
            <div id="<?php echo $this->slug; ?>Popup" class="popup">
                <!-- start close button & title -->
                <div class="popupBlack">
                    <button id="<?php echo $this->slug; ?>PopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                        <i class="material-icons">close</i>
                    </button>
                    <h1 class="text yellow"><?php echo $this->title; ?></h1>
                </div>
                <!-- end close button & title -->
                <?php 
                if(($this->tabHasContent($this->tour_tab_content)) || ($this->tabHasContent($this->sustainability_tab_content)) || ($this->tabHasContent($this->bathroom_tab_content)) || ($this->tabHasContent($this->dining_tab_content))  ){
                    //only show nav if popup has extra tabs than "about"
                    ?>
                    <!-- start nav -->
                    <nav class="popupNav five mdl-shadow--3dp">
                        <ul id="popupNav" >
                            <li id="<?php echo $this->slug; ?>AboutLi" class="about">About</li>
                            <?php 
                                foreach($this->tabs as $tab){
                                    if($this->tabHasContent($tab)){
                                        ?>
                                            <li id="<?php echo $this->slug . $tab->getSlug(); ?>Li"><?php echo $tab->getSlug(); ?></li>
                                        <?php
                                    }
                                }
                            ?>
                        </ul>
                    </nav>
                    <!-- end nav -->
                    <?php
                }
                ?>
                <!-- start tabs  container-->
                <div class="infoContainer">
                    <?php 
                        
                        $this->about_tab->createAboutTab($this->slug, $this->street, $this->city, $this->state, $this->zipcode);
                        //all other tabs
                        foreach($this->tabs as $tab){
                            if($this->tabHasContent($tab)){
                                $tab->getTabTemplate($this->slug);
                            }
                        }
                    ?>
                </div>
                <!-- end tabs  container-->
            </div>
        <?php
    }

    //TODO comment
    public function createPopupJSONObject(){
        $object->buildingSlug = $this->getSlug();
        $object->tabs = array();
        array_push($object->tabs, $this->getAboutTab()->createTabJSONObject());
        foreach($this->getTabs() as $this_tab){
            array_push($object->tabs, $this_tab->createTabJSONObject());
        }
        return $object;
    }
}
?>