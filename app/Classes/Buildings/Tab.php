<?php
/*
* Sara Tabitha Mayhew
* 1/15/19
*
* Description: Tabs are the individual sections of a Popup that a user can click between via the nav of the Popup.
*/
class Tab{
    private $slug; //what tab it is
    private $title; //title featured as the Heading above the Tab content
    private $content;
    private $media;
    
    private $hasVideo = false;
    private $hasImage = false;

    public function __construct($slug, $title, $content){
        $this->slug = $slug;
        $this->title = $title;
        $this->content = $content;

        //note to self: remember to put $this-> in front of methods you want to use
        
        if($this->hasMedia($this->content) == 1){
            $this->hasVideo = true;
        }
        else if($this->hasMedia($this->content) == 2){
            $this->hasImage = true;
        }

        if(($this->hasVideo == true) ||  ($this->hasImage == true)){
            $this->media = $this->extractMedia($this->content);
            $this->removeMediaFromContent($this->content);
        }
        
    }

    public function getSlug(){
        return $this->slug;
    }
    public function getTitle(){
        return $this->title;
    }
    public function getContent(){
        return $this->content;
    }
    public function getMedia(){
        return $this->media;
    }
    public function getHasVideo(){
        return $this->hasVideo;
    }
    public function getHasImage(){
        return $this->hasImage;
    }

    //TODO comment
    public function removeParagraphTags(){
        $this->content = substr($this->content, 3, strlen($this->content));
        $this->content = substr($this->content, 0, strpos($this->content, "</p>"));
    }

    //TODO comment
    public function removeMediaFromContent($content){
        $start = $this->getStringStart($content);
        $this->content = substr($content, 0, $start);
    }

    //TODO comment
    public function extractMedia($content){
         $start = $this->getStringStart($content);
         $length = $this->getStringLength($content);

        if($this->hasVideo == true){
            return substr($content, $start + 7, $length);
        }
        else if ($this->hasImage == true){
            $substring = substr($content, $start, $length);
            $image_src = $this->getImageSrc($substring);
            return $image_src;
        }
    }

    //TODO comment
    public function getImageSrc($substring){
        $src_start = strpos($substring, "src=");
        $src_start = $src_start + 5;
        $length = strlen($substring);
        $image_src = substr($substring, $src_start, $length);
        $quote_start = strpos($image_src, '"');
        $image_src = substr($image_src, 0, $quote_start);
        return $image_src;
    }

    //TODO comment
    public function hasMedia($string){
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

    //TODO comment
    public function getStringStart($string){
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
    
    //TODO comment
    public function getStringEnd($string){
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

    //TODO comment
    public function getStringLength($string){
        $start = $this->getStringStart($string);
        $end = $this->getStringEnd($string);

        return $end - $start;
    }

}
?>