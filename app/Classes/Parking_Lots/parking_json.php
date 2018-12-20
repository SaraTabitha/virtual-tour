<?php
    require_once(__DIR__ . "/create_parkinglots.php");

    $lots = $parkingLots->getMarkersArray();
    $icon = $parkingLots->getMarkerIcon();

    $object->allParking = $parkingLots->createMarkerJSONObject($lots, $icon);

    $accessible_lots = $accessibleParkingLots->getMarkersArray();
    $accessible_icon = $accessibleParkingLots->getMarkerIcon();

    $object->accessibleParking = $accessibleParkingLots->createMarkerJSONObject($accessible_lots, $accessible_icon);
    
    $json = json_encode($object);
    echo $json;
    //this ends up in map.js @ get("../Classes/Parking_Lots/parking_json.php").then(function...
?>