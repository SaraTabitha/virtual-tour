<?php
class Tab{
    private $title;
    private $content;
    private $media;

    public function __construct($title, $content){
        $this->title = $title;
        $this->content = $content;

        if(extractMedia($this->content) !== false){
            $this->media = extractMedia($this->content);
        }
    }

    public function extractMedia($content){
        if(hasMedia($content) !== false){
            $start = getStringStart($content);
            $length = getStringLength($content);

            return substr($content, $start, $length);
        }
        else{
            return false;
        }
    }

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

    public function getStringStart($string){
        if(hasMedia($string) == 1){
            return strpos($string, "[embed]");
        }
        else if(hasMedia($string) == 2){
            return strpos($string, "<img");
        }
        else{
            return false;
        }
    }
    public function getStringEnd($string){
        if(hasMedia($string) == 1){
            return strpos($string, "[/embed]");
        }
        else if(hasMedia($string) == 2){
            return strpos($string, "/>");
        }
        else{
            return false;
        }
    }
    public function getStringLength($string){
        $start = getStringStart($string);
        $end = getStringEnd($string);

        return $end - $start;
    }

}
?>