<?php
    /*
    * why this needs to be in it's own file: 
    *   because otherwise the embedded css styling messes up the ajax calls for map.js :) 
    */
    /*
    * what is this file doing? 
    *   adding styling (colors) to the checkboxes in the menu, corresponding with each markerGroup
    */
    require_once(__DIR__ . '/../Emergency_Phones/create_emergencyphones.php');
    require_once(__DIR__ . '/../Parking_Lots/create_parkinglots.php');
    require_once(__DIR__ . '/../Buildings/create_buildings.php');

    $markerGroups = array($emergencyPhones, $parkingLots, $accessibleParkingLots, $allBuildings, 
                          $accessibleBuildings, $sustainableBuildings, $bathroomBuildings);
    foreach($markerGroups as $group){
        $group->style_checkboxes();
    }

?>