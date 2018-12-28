<?php
    /*
    * why this needs to be in it's own file: 
    *   because otherwise the embedded css styling messes up the ajax calls for map.js :) 
    */
    require_once(__DIR__ . '/../Emergency_Phones/create_emergencyphones.php');
    require_once(__DIR__ . '/../Parking_Lots/create_parkinglots.php');
    // require_once(__DIR__ . '/../Buildings/create_buildings.php');

    // $markerGroups = array($emergencyPhones, $parkingLots, $accessibleParkingLots,
    // $allBuildings, $accessibleBuildings, $sustainableBuildings, $bathroomBuildings);
    $markerGroups = array($emergencyPhones, $parkingLots, $accessibleParkingLots);
    foreach($markerGroups as $group){
        $group->style_checkboxes();
    }

?>