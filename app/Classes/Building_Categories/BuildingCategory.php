<?php

/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: BuildingCategory holds the data submit by an admin to the CMS. These correspond 
*   to the Categories that show up on the Virtual Tour menu under "Categories". Each BuildingCategory 
*   also has a MarkerGroup associated with them which appear/disappear when the BuildingCategory checkbox 
*   is checked. 
*/
require_once(__DIR__ . '/../../Classes/Marker_Groups/MarkerGroup.php');

class BuildingCategory{

    private $slug;
    private $title;
    private $media; //youtube video url
    private $content;
    private $learnMoreURL;
    private $markerGroup; //MarkerGroup object

    public function __construct($slug, $title, $media, $content, $learnMoreURL){
      
        //js doesn't like the character - bc it throws console errors :)
        $slug = str_replace("-", "_", $slug);
        $this->slug = $slug;

        $this->title = $title;
        
        //embedded youtube url's need /embed/ otherwise it throws console errors :)
        $media = str_replace("watch?v=", "embed/", $media);
        $this->media = $media;

        $this->content = $content;
        $this->learnMoreURL = $learnMoreURL;

        
    }
    function getSlug(){
        return $this->slug;
    }
    function getTitle(){
        return $this->title;
    }
    function getMedia(){
        return $this->media;
    }
    function getContent(){
        return $this->content;
    }
    function getLearnMoreURL(){
        return $this->learnMoreURL;
    }
    function getMarkerGroup(){
        return $this->markerGroup;
    }

    //creates the list item that appears on the menu w/ a checkbox
    function createListItem(){
    ?>
        <label for="<?php echo $this->slug ?>" id="<?php echo $this->slug ?>Label" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="<?php echo $this->slug  ?>" class="mdl-checkbox__input">
            <span class="mdl-checkbox__label check one">
                <a href="#" id="<?php echo $this->slug  ?>Text" class="link text"><?php echo $this->title ?></a>
            </span>
        </label>

    <?php
    }

    //creates the card that slides out from behind the menu when the category link is clicked in the menu
    function createCategoryCard(){
    ?>
        <div id="<?php echo $this->slug ?>Card" class="demo-card-wide mdl-card mdl-shadow--2dp cardClosed">
            <button id="<?php echo $this->slug ?>Close"  class="cardCloseButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                <i  class="material-icons">close</i>
            </button>
            <div class="mdl-card__title">
                 <h2 class="mdl-card__title-text color666 text"><?php echo $this->title ?></h2>
            </div>
            <div>
                <iframe id="<?php echo $this->slug ?>iframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="mdl-card__supporting-text categoryText color666 text">
                <?php echo $this->content ?>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="<?php echo $this->learnMoreURL ?>" target="_blank"> Learn More </a>
            </div>
        </div>

    <style>
        /* mobile styling for the category cards */
            @media screen and (max-width: 1024px){
                /* card */
                #<?php echo $this->slug ?>Card{
                    width: 100%;
                }
                /* close button */
                #<?php  echo $this->slug ?>Close{
                    float: right;
                    position: relative;
                    top: 2%;
                    right: 2%;
                }

                /*iframe video*/
                #<?php echo $this->slug ?>Card > div:nth-child(3){
                    padding-left: 2%;
                    padding-right: 2%;
                }
            }
            /*when window shrinks under a certain size the category page becomes scrollable*/
            @media screen and (max-width: 400px) {
                    #<?php echo $this->Card ?>{
                        overflow-y:  scroll;
                    }
            }
        </style>

    <?php
    }

    function setMarkerGroup($checkboxColor, $markerIcon){
        $checkboxSlug = $this->slug;
        $this->markerGroup = new MarkerGroup($checkboxSlug, $checkboxColor, $markerIcon); //sans markersArray
    }
}
?>