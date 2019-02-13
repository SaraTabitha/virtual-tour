<?php
    require_once(__DIR__ . "/create_buildings.php");
    
    $building_list; //array of all Building objects

    foreach($building_list as $item){
        $item->createPopup();
    }

    
?>