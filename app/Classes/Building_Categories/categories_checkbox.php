<?php
    require_once('create_categories.php'); //where the BuildingCategory objects were created

    $checkboxColorsArray = array(
        "#981d23" => "images/markers/maroon.png", //maroonMarker
        "#f17844" => "images/markers/orange.png", //orangeMarker
        "#875547" => "images/markers/brown.png", //brownMarker
        "#0e5846" => "images/markers/darkgreen.png", //darkGreenMarker
        "#8dd4e2" => "images/markers/lightblue.png", //lightblueMarker
        "#282a72" => "images/markers/navy.png", //navyMarker
        "#5f318f" => "images/markers/darkpurple.png" //darkpurpleMarker
    );

    //create each list element for each BuildingCategory object and includes them in the HTML wherever this file was called
    foreach($category_list as $item){
        ?>
        <li>
        <?php
        $item->createListItem();
        ?>
        </li>
        <?php

        //for each category, grab a checkbox color & markerIcon and create a markerGroup inside the BuildingCategory object
        list($checkboxColor, $markerIcon) = each($checkboxColorsArray);
        createMarkerGroup($item, $checkboxColor, $markerIcon);
    }

    function createMarkerGroup($category, $checkboxColor, $markerIcon){
        /*
        * TODO: set up marker groups for categories
        */
        //$category->setMarkerGroup($checkboxColor, $markerIcon);
    }

?>
