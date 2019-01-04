<?php

    require_once(__DIR__ . '/BuildingCategory.php');
    require_once(__DIR__ . '/../../php/contactRestAPI.php');

    //get the building-categories
    $categories = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/building-categories");

    //selector examples
    // $categories[0]->title->rendered;
    // $categories[0]->slug

    //all variables needed for BuildingCategory object
    $slug;
    $title;
    $media; 
    $content;
    $learnMoreURL;

    //the array the BuildingCategory objects will be stored in
    $category_list = array();
    $index = 0;

    //creates each BuildingCategory to correspond with the categories added to the CMS
    foreach($categories as $item){
        $slug = $item->slug;
        $title = $item->title->rendered;
        $media = $item->youtube_url[0]; //url comes from an array
        $content = $item->content->rendered;
        $learnMoreURL = $item->learn_more_url[0]; //url comes from an array

        $category_list[$index] = new BuildingCategory($slug, $title, $media, $content, $learnMoreURL);
        $index++;
    }

    //part 2 -> categories_json.php 
    //part 3 -> categories_checkbox.php
    //part 4 -> /Buildings/buildings_json.php
?>
