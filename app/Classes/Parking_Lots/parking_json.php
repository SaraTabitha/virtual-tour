<?php
    require_once(__DIR__ . "/create_parkinglots.php");

    $lots = $parkingLots->getMarkersArray();
    $icon = $parkingLots->getMarkerIcon();
    $object->allParking = $parkingLots->createMarkerJSONObject($lots, $icon);

    $object->accessibleParking = $accessibleParkingLots->createIndicesJSONObject();
    
    $json = json_encode($object);
    echo $json;
    //this ends up in map.js @ get("../Classes/Parking_Lots/parking_json.php").then(function...
?>