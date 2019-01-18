<?php
   require_once(__DIR__ . '/create_buildings.php');

    $buildings_marker_array = $allBuildings->getMarkersArray();
    $icon = $allBuildings->getMarkerIcon();
    $object->allBuildings = $allBuildings->createMarkerJSONObject($buildings_marker_array, $icon);
    $object->allBuildings->thumbnail_urls = $building_thumb_url_array;

    $json = json_encode($object);
    echo $json;

    //this ends up in the map.js @ get('../Classes/Buildings/buildings_json.php').then(function...
?>