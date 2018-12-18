<?php
    require_once(__DIR__ . "/create_emergencyphones.php"); 

    $phones = $emergencyPhones->getMarkersArray();
    
    $icon = $emergencyPhones->getMarkerIcon();
   

    $testObj->titles = array();
    $testObj->latitudes = array();
    $testObj->longitudes = array();
    $testObj->icon = $icon;

    foreach($phones as $item){
        $title = $item->getTitle();
        $lat = $item->getLatitude();
        $long = $item->getLongitude();
        
        array_push($testObj->titles, $title);
        array_push($testObj->latitudes, $lat);
        array_push($testObj->longitudes, $long);
    }
    $json = json_encode($testObj);

    echo $json;
    //this ends up in map.js @ get("../Classes/Emergency_Phones/phones_json.php").then(function...
    
?>