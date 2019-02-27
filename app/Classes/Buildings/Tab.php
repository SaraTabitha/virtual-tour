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
            $this->content = str_replace("watch?v=", "embed/", $this->content);
            $this->removeVideoFromContent();

        }
        else if($this->hasMedia($this->content) == 2){
            $this->hasImage = true;
            $this->removeImageFromContent();
        }

        // if(($this->hasVideo == true) ||  ($this->hasImage == true)){
        //     //$this->media = $this->extractMedia($this->content);
        //     //$this->removeMediaFromContent($this->content);
            
        // }

        if($this->title == "About"){
            $this->removeParagraphTags();
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
    public function setAboutTabDetails($building_image){
        $this->hasImage = true;
        $this->hasVideo = false;
        $this->media = $building_image;
    }

    //TODO comment
    public function removeParagraphTags(){
        $this->content = substr($this->content, 3, strlen($this->content));
        $this->content = substr($this->content, 0, strpos($this->content, "</p>"));
    }

    //TODO comment
    // public function removeMediaFromContent($content){
    //     $start = $this->getStringStart($content);
    //     $this->content = substr($content, 0, $start);
    // }

    //TODO comment
    // public function extractMedia($content){
    //     $start = $this->getStringStart($content);
    //     $length = $this->getStringLength($content);

    //     if($this->hasVideo == true){
    //         return substr($content, $start + 7, $length - 7);
    //     }
    //     else if ($this->hasImage == true){
    //         $substring = substr($content, $start, $length);
    //         $image_src = $this->getImageSrc($substring);
    //         return $image_src;
    //     }
    // }

    /* 
    *
    *
    */
    //TODO -> finish function
    public function removeImageFromContent(){
        //extract image src & set media to image url
        $embedOpenStart = strpos($this->content, "<img"); //index of the <
        $embedEndStart = strpos($this->content, "/>") + 2; //index of the >
        $image = substr($this->content, $embedOpenStart, ($embedEndStart - $embedOpenStart));
        $this->media = $this->getImageSrc($image);

        //remove image embed from content string (front, middle or end)
        if($embedOpenStart == 0){
            //image is at beginning of string
            $this->content = substr($this->content, $embedEndStart, strlen($this->content)) . "dog";
        }
        else if($embedEndStart == (strlen($this->content))){
            //image is at end of string
            $this->content = substr($this->content, 0, $embedOpenStart);
        }
        else{
            //image is somewhere in the middle
            $firstHalfStart = 0;
            $firstHalfEnd = $embedOpenStart;

            $secondHalfStart = $embedEndStart;
            $secondHalfEnd = strlen($this->content);

            $contentFirstHalf = substr($this->content, $firstHalfStart, ($firstHalfEnd - $firstHalfStart));
            $contentSecondHalf = substr($this->content, ($secondHalfStart), ($secondHalfEnd - $secondHalfStart));

            $this->content = $contentFirstHalf . " purple " .  $contentSecondHalf . "beach";
        }
    }    
    /* 
    *
    *
    */
    //TODO -> make removeVideoFromContent()
    public function removeVideoFromContent(){
        $embedOpenStart = strpos($this->content, "[embed]"); //index of [
        $embedEndStart = strpos($this->content, "[/embed]") + 8; //index of ]
        $this->media = substr($this->content, $embedOpenStart + 7, (($embedEndStart - 8) - ($embedOpenStart + 7)));
        
    }
    /* 
    *
    *
    */


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
    // public function getStringStart($string){
    //     if($this->hasVideo){
    //         return strpos($string, "[embed]");
    //     }
    //     else if($this->hasImage){
    //         return strpos($string, "<img");
    //     }
    //     else{
    //         return false;
    //     }
    // }
    
    //TODO comment
    // public function getStringEnd($string){
    //     if($this->hasVideo){
    //         return strpos($string, "[/embed]");
    //     }
    //     else if($this->hasImage){
    //         return strpos($string, "/>");
    //     }
    //     else{
    //         return false;
    //     }
    // }

    //TODO comment
    // public function getStringLength($string){
    //     $start = $this->getStringStart($string);
    //     $end = $this->getStringEnd($string);

    //     return $end - $start;
    // }

    //TODO comment
    public function createTabJSONObject(){
        $object->tabSlug = $this->getSlug();

        if($this->getHasVideo() == true){
            $object->tabType = "video";
            $object->media = $this->getMedia();
        }
        else if($this->getHasImage() == true){
            $object->tabType = "image";
            $object->media = $this->getMedia();
        }
        else{
            //both false
            $object->tabType = "noMedia";
            $object->media = false;
        }

        return $object;
    }

    public function getTabTemplate($building_slug){
        if($this->getHasVideo()){
            $this->createVideoTab($building_slug);
        }
        else if ($this->getHasImage()){
            $this->createImageTab($building_slug);
        }
        else{
            $this->createNoMediaTab($building_slug);
        }
    }

    //TODO comment
    public function createVideoTab($building_slug){
        ?>
        <!-- tab has video -->
        <?php
            if(strlen($this->getContent()) < 430){
                ?>
                <div id="<?php echo $building_slug . $this->getSlug(); ?>Text" class="tourText">
                    <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                    <p class="subText text"><?php echo $this->getContent(); ?></p>
                </div>
                <?php
            }else{
                ?>
                <div id="<?php echo $building_slug . $this->getSlug(); ?>Text" class="tourText">
                    <div class="tabContentScroll">
                        <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                        <p class="subText text"><?php echo $this->getContent(); ?></p>
                    </div>
                    <p class="scrollText text "><em>scroll ⇕</em></p>
                </div>
                <?php
            }
        ?>
        <div id="<?php echo $building_slug . $this->getSlug(); ?>Video" class="videoPopup">
            <iframe id="<?php echo $building_slug; ?>iframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
        </div>
        <?php
    }

    //TODO comment
    public function createImageTab($building_slug){
        ?>
        <!-- tab has image -->
            <div id="<?php echo $building_slug . $this->getSlug(); ?>Image" class="imagePopup">
                <img src=""/>
            </div>
            
        <?php
        if(strlen($this->getContent()) < 430){
            ?>
            <div id="<?php echo $building_slug . $this->getSlug(); ?>Text" class="popupText">
                <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                <p class="subText text"><?php echo $this->getContent(); ?></p>
            </div>
            <?php
        }else{
            ?>
            <div id="<?php echo $building_slug . $this->getSlug(); ?>Text" class="popupText">
                <div class="tabContentScroll">
                    <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                    <p class="subText text"><?php echo $this->getContent(); ?></p>
                </div>
                <p class="scrollText text "><em>scroll ⇕</em></p>
            </div>
            <?php
        }
    }

    //TODO comment
    public function createNoMediaTab($building_slug){
        ?>
        <!-- tab has no media -->
        <?php
        if(strlen($this->getContent()) < 1100){
            ?>
            <div id="<?php echo $building_slug . $this->getSlug(); ?>" class="popupTextNoImage">
                <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                <p class="subText text"><?php echo $this->getContent(); ?></p>
            </div>
            <?php
        }else{
            ?>
            <div id="<?php echo $building_slug . $this->getSlug(); ?>" class="popupTextNoImage">
                <div class="tabContentScroll">
                    <h5 class="heading"><?php echo $this->getTitle(); ?></h5>
                    <p class="subText text"><?php echo $this->getContent(); ?></p>
                </div>
                <p class="scrollText text "><em>scroll ⇕</em></p>
            </div>
            <?php
        }
    }

    //TODO comment
    public function createAboutTab($building_slug, $street, $city, $state, $zipcode){
        //if(strlen($this->getContent()) > 450)
        ?>
            <!-- start about tab -->
            <div id="<?php echo $building_slug; ?>AboutImage" class="imagePopup">
                <img src="">
                <p class="address text"><?php echo $street . ", " . $city . ", " . $state . ", " . $zipcode; ?></p>
            </div>
            <?php 
                if(strlen($this->getContent()) < 430){
                    ?>
                    <div id="<?php echo $building_slug; ?>AboutText" class="popupText">
                        <h5 class="heading">About This Building</h5>
                        <p class="subText text"><?php echo $this->getContent();?></p>
                    </div>
                    <?php
                }else{
                    ?>
                    <div id="<?php echo $building_slug; ?>AboutText" class="popupText">
                        <div class="tabContentScroll">
                            <h5 class="heading">About This Building</h5>
                            <p class="subText text"><?php echo $this->getContent();?></p>
                        </div>
                        <p class="scrollText text "><em>scroll ⇕</em></p>
                    </div>
                    <?php
                }
            ?>
            <!-- end about tab -->
        <?php
    }

    //TODO pagination relation station creation
}
?>