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

        if($this->title == "About" || $this->hasMedia($this->content) == false){
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
       //change to only removing <p> from the very beginning (0)
       //and </p> from the end of the string
       //(eliminates while loop change of infinite loop & limits cases...)

        //TODO figure out why it's never entering the while loop...
        //while((strpos($this->content, "<p>") != false) || (strpos($this->content, "</p>") != false)){
        //     var_dump($this->content);
        //     var_dump(strpos($this->content, "<p>"));
        //     if( strpos($this->content, "<p>") === 0 || strpos($this->content, "<p>") != false){ 
        //         //<p>
        //         var_dump("entered: <p>");
        //         $start_p = strpos($this->content, "<p>"); 
        //         $end_p = $start_p + 3;
        //         $this->removeTag($start_p, $end_p); //<p> removing properly now
        //     }
        //     var_dump(strpos($this->content, "</p>"));
        //     if(strpos($this->content, "</p>") != false){
        //         //</p>
        //         var_dump("entered: </p>");
        //         $start_p = strpos($this->content, "</p>");
        //         $end_p = $start_p + 4;
        //         $this->removeTag($start_p, $end_p); //</p> remove not working...
        //     } 
        //     //var_dump($this->content);     
        //    // $this->content = " ";
            
        // //}  //infinite loop (some are not getting their <p> or </p> removed => never breaks out of while loop)
        // var_dump($this->content);
       

        //var_dump(strpos("<p>") == 0);
        //var_dump(strpos($this->content, "</p>") + 5 == strlen($this->content));
        if((strpos($this->content, "<p>") == 0) && ( strpos($this->content, "</p>") + 5 == strlen($this->content) )){
            //<p> is at the very beginning, and </p> is at the very end
            var_dump("<p> is at the very beginning, and </p> is at the very end");
            var_dump($this->content);
            $this->content = substr($this->content, 3, (strpos($this->content, "</p>") - 3));
        }
        else if(!(strpos($this->content, "<p>")) && !(strpos($this->content, "</p>"))){
            //no <p> or </p> tags
            var_dump("no p tags");
            var_dump($this->content);
        }
        else{
            //has some janky extra case (examples: more than one set of p tags, or p tags somewhere in the middle of the content string)
            var_dump(false);
            var_dump($this->content);
        }

        //var_dump($this->content); //includes length
    }

    public function removeTag($start, $end){
        //substr recap (string, start, length)
        if($start == 0){
            //beginning of content
            //content = <end of tag> -> end of content
            $this->content = substr($this->content, $end, (strlen($this->content) - $end));
        }
        else if($end == strlen($this->content)){
            //end of content
            //content = beginning of content -> start of tag
            $this->content = substr($this->content, 0, $start);
        }
        else{
            //middle
            //content 1st half = beginning of content -> start of tag
            //content 2nd half = end of tag -> end of content
            $content_first = substr($this->content, 0, $start);
            $content_second = substr($this->content, $end, (strlen($this->content) - $end));

        }
    }

    //TODO -> finish function
    public function removeImageFromContent(){
        //extract image src & set media to image url
        $embedOpenStart = strpos($this->content, "<img"); //index of the <
        $embedEndStart = strpos($this->content, "/>") + 2; //index of the >
        $image = substr($this->content, $embedOpenStart, ($embedEndStart - $embedOpenStart));
        $this->media = $this->getImageSrc($image);

        $this->removeFromString($embedOpenStart, $embedEndStart);
    }    

    //TODO comment
    public function removeVideoFromContent(){
        $embedOpenStart = strpos($this->content, "[embed]"); //index of [
        $embedEndStart = strpos($this->content, "[/embed]") + 8; //index of ]
        $this->media = substr($this->content, $embedOpenStart + 7, (($embedEndStart - 8) - ($embedOpenStart + 7)));
        
        $this->removeFromString($embedOpenStart, $embedEndStart);
    }

    //TODO comment
    public function removeFromString($embedOpenStart, $embedEndStart){
        if($embedOpenStart == 0){
            //beginning of string
            $this->content = substr($this->content, $embedEndStart, strlen($this->content));
        }
        else if($embedEndStart == (strlen($this->content))){
            //end of string
            $this->content = substr($this->content, 0, $embedOpenStart);
        }
        else{
            //middle of string
            $firstHalfStart = 0;
            $firstHalfEnd = $embedOpenStart;

            $secondHalfStart = $embedEndStart;
            $secondHalfEnd = strlen($this->content);

            $contentFirstHalf = substr($this->content, $firstHalfStart, ($firstHalfEnd - $firstHalfStart));
            $contentSecondHalf = substr($this->content, ($secondHalfStart), ($secondHalfEnd - $secondHalfStart));

            $this->content = $contentFirstHalf . $contentSecondHalf;
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
}
?>