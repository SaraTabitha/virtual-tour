<?php
   require_once(__DIR__ . '/create_buildings.php');

    $buildings_marker_array = $allBuildings->getMarkersArray();
    $icon = $allBuildings->getMarkerIcon();
    $object->allBuildings = $allBuildings->createMarkerJSONObject($buildings_marker_array, $icon);
    $object->allBuildings->thumbnail_urls = $building_thumb_url_array;

    $accessible_buildings_marker_array = $accessibleBuildings->getMarkersArray();
    $icon = $accessibleBuildings->getMarkerIcon();
    $object->accessibleBuildings = $accessibleBuildings->createMarkerJSONObject($accessible_buildings_marker_array, $icon);
    $object->accessibleBuildings->thumbnail_urls = $accessibleBuilding_thumb_url_array;

    $sustainable_buildings_marker_array = $sustainableBuildings->getMarkersArray();
    $icon = $sustainableBuildings->getMarkerIcon();
    $object->sustainableBuildings = $sustainableBuildings->createMarkerJSONObject($sustainable_buildings_marker_array, $icon);
    $object->sustainableBuildings->thumbnail_urls = $sustainableBuilding_thumb_url_array;

    $bathroom_buildings_marker_array = $bathroomBuildings->getMarkersArray();
    $icon = $bathroomBuildings->getMarkerIcon();
    $object->bathroomBuildings = $bathroomBuildings->createMarkerJSONObject($bathroom_buildings_marker_array, $icon);
    $object->bathroomBuildings->thumbnail_urls = $bathroomBuilding_thumb_url_array;

    $object->checkbox_slugs = $category_slugs;

    $object->categories = array();
    foreach($category_markerGroups as $this_category_markerGroup){
        $icon = $this_category_markerGroup->getMarkerIcon();
        $markers_array = $this_category_markerGroup->getMarkersArray();
        array_push($object->categories, $this_category_markerGroup->createMarkerJSONObject($markers_array, $icon));
    }
    //todo: get thumbnail_urls for categories

    $json = json_encode($object);
    echo $json;

    //this ends up in the map.js @ get('../Classes/Buildings/buildings_json.php').then(function...
?>