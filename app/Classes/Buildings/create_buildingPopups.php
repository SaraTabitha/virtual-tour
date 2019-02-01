<?php
    require_once(__DIR__ . "/create_buildings.php");
    
    $building_list; //array of all Building objects

    foreach($building_list as $item){
        $slug = $item->getSlug();
        $title = $item->getTitle();
        $street = $item->getStreet();
        $city = $item->getCity();
        $state = $item->getState();
        $zipcode = $item->getZipcode();
        $full_image = $item->getFullImage();

        // each tab's contents could have media embedded into it
        $about_tab_content = $item->getAboutTabContent();
        $tour_tab_content = $item->getTourTabContent();
        $sustainability_tab_content = $item->getSustainabilityTabContent();
        $bathroom_tab_content = $item->getBathroomTabContent();
        $dining_tab_content = $item->getDiningTabContent();

        //TODO createPopup function call

        
    }

    
?>