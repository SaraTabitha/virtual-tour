<?php
   require_once(__DIR__ . '/create_buildings.php');

    $buildings = $allBuildings->getMarkersArray();
    $icon = $allBuildings->getMarkerIcon();
    $object->allBuildings = $allBuildings->createMarkerJSONObject($buildings, $icon);

    $accessible_buildings = $accessibleBuildings->getMarkersArray();
    $icon = $accessibleBuildings->getMarkerIcon();
    $object->accessibleBuildings = $accessibleBuildings->createMarkerJSONObject($accessible_buildings, $icon);

    $sustainable_buildings = $sustainableBuildings->getMarkersArray();
    $icon = $sustainableBuildings->getMarkerIcon();
    $object->sustainableBuildings = $sustainableBuildings->createMarkerJSONObject($sustainable_buildings, $icon);


    $bathroom_buildings = $bathroomBuildings->getMarkersArray();
    $icon = $bathroomBuildings->getMarkerIcon();
    $object->bathroomBuildings = $bathroomBuildings->createMarkerJSONObject($bathroom_buildings, $icon);

    $json = json_encode($object);
    echo $json;

    //this ends up in the map.js @ get('../Classes/Buildings/buildings_json.php').then(function...
?>