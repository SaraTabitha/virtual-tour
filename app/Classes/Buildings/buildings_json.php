<?php
   require_once(__DIR__ . '/create_buildings.php');

    $buildings_marker_array = $allBuildings->getMarkersArray();
    $icon = $allBuildings->getMarkerIcon();
    $object->allBuildings = $allBuildings->createMarkerJSONObject($buildings_marker_array, $icon);
    $object->allBuildings->thumbnail_urls = $building_thumb_url_array;

    $object->accessibleBuildings = $accessibleBuildings->createIndicesJSONObject();
    $object->sustainableBuildings = $sustainableBuildings->createIndicesJSONObject();
    $object->bathroomBuildings = $bathroomBuildings->createIndicesJSONObject();

    $object->categories = array();
    foreach($category_markerGroups as $this_category_markerGroup){
        array_push($object->categories, $this_category_markerGroup->createIndicesJSONObject());
    }   

    $object->popups = array();
    
    foreach($building_list as $building){
        //array_push($object->popups, $building->createPopupJSONObject());
        array_push($object->popups, $building->createPopupJSONObject());
    }

    $json = json_encode($object);
    echo $json;

    //this ends up in the map.js @ get('../Classes/Buildings/buildings_json.php').then(function...
?>