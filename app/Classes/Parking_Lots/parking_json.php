<?php
    require_once(__DIR__ . "/create_parkinglots.php");

    $lots = $parkingLots->getMarkersArray();
    $icon = $parkingLots->getMarkerIcon();

    $object = $parkingLots->createMarkerJSONObject($lots, $icon);

    $json = json_encode($object);
    echo $json;
    //this ends up in map.js @ get("../Classes/Parking_Lots/parking_json.php").then(function...
?>