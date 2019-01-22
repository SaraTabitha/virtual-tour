<?php 
    require_once(__DIR__ . "/create_categories.php");

    $category_list; //list of BuildingCategory objects

    $object->buildingCategories->slugs = array();
    $object->buildingCategories->youtube_urls = array();

    foreach($category_list as $index=>$item){
        array_push($object->buildingCategories->slugs, $item->getSlug());
        array_push($object->buildingCategories->youtube_urls, $item->getMedia());
    }

    //$object = "hello";
    $json = json_encode($object);
    echo $json;
?>