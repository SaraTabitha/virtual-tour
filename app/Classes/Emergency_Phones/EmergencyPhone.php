<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: emergency phones store all the info submit for them in the CMS. 
*/
class EmergencyPhone{
    private $slug;
    private $title;

    private $marker; //marker object

    public function __construct($slug, $title, $marker){
        $this->slug = $slug;
        $this->title = $title;
        $this->marker = $marker;
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
} 
?>