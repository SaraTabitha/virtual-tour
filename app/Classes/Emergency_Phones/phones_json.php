<?php
    require_once(__DIR__ . "/create_emergencyphones.php"); 

    $phones = $emergencyPhones->getMarkersArray();
    $icon = $emergencyPhones->getMarkerIcon();
       
    $object = $emergencyPhones->createMarkerJSONObject($phones, $icon);
    $json = json_encode($object);

    echo $json;
    //this ends up in map.js @ get("../Classes/Emergency_Phones/phones_json.php").then(function...
    
?>