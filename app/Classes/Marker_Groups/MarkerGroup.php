<?php
/*
* Sara Tabitha Mayhew
* 11/11/18
*
* Description: MarkerGroup, a group of markers that corresponds to a checkbox. 
*/
class MarkerGroup{
    private $slug;
    private $checkboxColor;
    private $markerIcon;
    //private $markersArray = [];

    public function __construct($slug, $checkboxColor, $markerIcon){
        $this->slug = $slug . "Label";

        $this->checkboxColor = $checkboxColor;
        $this->markerIcon = $markerIcon;
        //$this->markersArray = $markersArray; //remember to add back in param

        ?>
        <style>
            /* border outline */
            #<?php echo $this->slug ?>.is-checked > span.mdl-checkbox__box-outline{
                border: <?php echo $checkboxColor ?>;
            }

            /* checkbox inner color + ripple effect color */
            #<?php echo $this->slug ?>.is-checked > span.mdl-checkbox__box-outline > span, #<?php echo $this->slug ?> > span.mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center > span{
                background: <?php echo $this->checkboxColor ?>;
            }

        </style>
        <?php
    }
}
?>