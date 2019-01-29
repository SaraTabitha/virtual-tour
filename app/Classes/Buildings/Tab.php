<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: Tabs are the individual sections of a Popup that a user can click between via the nav of the Popup.
*/
class Tab{
    private $slug;
    private $title;
    private $content;
    private $media;
    
    private $hasVideo = false;
    private $hasImage = false;

    public function __construct($slug, $title, $content){
        $this->slug = $slug;
        $this->title = $title;
        $this->content = $content;

        //TODO fix whatever is going wrong here 

        
        // if(hasMedia($this->content) == 1){
        //     $this->hasVideo = true;
        // }
        // else if(hasMedia($this->content) == 2){
        //     $this->hasImage = true;
        // }

        // if(($this->hasVideo == true) ||  ($this->hasImage == true)){
        //     $this->media = extractMedia($this->content);
        // }
        
    }

    function extractMedia($content){
        $start = getStringStart($content);
        $length = getStringLength($content);

        return substr($content, $start, $length);
    }

    function hasMedia($string){
        if( strpos($string, "[embed]") !== false ){
            return 1; //1 = has video
        }
        else if ( strpos($string, "<img") !== false ){
            return 2; //2 = has img
        }
        else{
            return false;
        }
    }

    function getStringStart($string){
        if($this->hasVideo){
            return strpos($string, "[embed]");
        }
        else if($this->hasImage){
            return strpos($string, "<img");
        }
        else{
            return false;
        }
    }

    function getStringEnd($string){
        if($this->hasVideo){
            return strpos($string, "[/embed]");
        }
        else if($this->hasImage){
            return strpos($string, "/>");
        }
        else{
            return false;
        }
    }

    function getStringLength($string){
        $start = getStringStart($string);
        $end = getStringEnd($string);

        return $end - $start;
    }

}
?>