<?php
class BuildingCategory{

    private $slug;
    private $title;
    private $media;
    private $content;
    private $learnMoreURL;

    public function __construct($slug, $title, $media, $content, $learnMoreURL){
        // Declaring variables
        $this->slug = $slug;
        $this->title = $title;
        $this->media = $media;
        $this->content = $content;
        $this->learnMoreURL = $learnMoreURL;
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
        
    }
}
?>