<?php

    include_once 'Building_Categories/BuildingCategory.php';

    //get the building-categories 
    $url = "https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/building-categories"; //path to json 
    $data = file_get_contents($url); //put contents into variable
    $categories = json_decode($data); //decode json feed

    //params: $slug, $title, $media, $content, $learnMoreURL
    $slug = $categories[0]->slug;
    $title = $categories[0]->title->rendered;
    $media = $categories[0]->youtube_url[0];
    $content = $categories[0]->content->rendered;
    $learnMoreURL = $categories[0]->learn_more_url[0];

    $stuRec = new BuildingCategory( $slug, $title, $media, $content, $learnMoreURL );
    $stuRec->createCategoryCard();

?>