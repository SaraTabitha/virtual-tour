<?php
   require_once(__DIR__ . '/create_buildings.php');

    $buildings = $allBuildings->getMarkersArray();
    $icon = $allBuildings->getMarkerIcon();
    $object->allBuildings = $allBuildings->createMarkerJSONObject($buildings, $icon);
    $object->allBuildings->thumbnail_urls = $building_thumb_url_array;

    $accessible_buildings = $accessibleBuildings->getMarkersArray();
    $icon = $accessibleBuildings->getMarkerIcon();
    $object->accessibleBuildings = $accessibleBuildings->createMarkerJSONObject($accessible_buildings, $icon);
    $object->accessibleBuildings->thumbnail_urls = $accessibleBuilding_thumb_url_array;

    $sustainable_buildings = $sustainableBuildings->getMarkersArray();
    $icon = $sustainableBuildings->getMarkerIcon();
    $object->sustainableBuildings = $sustainableBuildings->createMarkerJSONObject($sustainable_buildings, $icon);
    $object->sustainableBuildings->thumbnail_urls = $sustainableBuilding_thumb_url_array;

    $bathroom_buildings = $bathroomBuildings->getMarkersArray();
    $icon = $bathroomBuildings->getMarkerIcon();
    $object->bathroomBuildings = $bathroomBuildings->createMarkerJSONObject($bathroom_buildings, $icon);
    $object->bathroomBuildings->thumbnail_urls = $bathroomBuilding_thumb_url_array;

    $json = json_encode($object);
    echo $json;

    //this ends up in the map.js @ get('../Classes/Buildings/buildings_json.php').then(function...
?>