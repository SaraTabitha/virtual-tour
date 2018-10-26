<?php

    include 'Building_Categories/BuildingCategory.php';

    //get the building-categories 
    $url = "https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/building-categories"; //path to json 
    $data = file_get_contents($url); //put contents into variable
    $categories = json_decode($data); //decode json feed

    // example $categories[0]->title->rendered;
    // $categories[0]->slug

    //example list item 
    ?> 
    <!-- <label for="accaF" id="accaFLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="accaF" class="mdl-checkbox__input">
            <span class="mdl-checkbox__label check one">
                <i class="material-icons color666">school</i>
                <a href="#" id="accFText" class="link text">Academic Facilities</a>
            </span>
    </label> -->

   
 <!-- <label for="<?php //echo $categories[0]->slug ?>" id="<?php //echo $categories[0]->slug ?>Label" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" id="<?php //echo $categories[0]->slug ?>" class="mdl-checkbox__input">
        <span class="mdl-checkbox__label check one">
            <a href="#" id="<?php //echo $categories[0]->slug ?>Text" class="link text"><?php //echo $categories[0]->title->rendered ?></a>
        </span>
    </label> -->
    <?php

    //params: $slug, $title, $media, $content, $learnMoreURL
    $slug = $categories[0]->slug;
    $title = $categories[0]->title->rendered;
    $media = $categories[0]->youtube_url;
    $content = $categories[0]->content->rendered;
    $learnMoreURL = $categories[0]->learn_more_url;

    $stuRec = new BuildingCategory( $slug, $title, $media, $content, $learnMoreURL );
    $stuRec->createListItem();



?>
