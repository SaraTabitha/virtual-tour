<?php
    require_once(__DIR__ . "/create_buildings.php");

    //example from html
    // <div id="albeeHover" class="generalHover">
    //    <!-- src loads when clicked (in map.js) -->
    //    <img class="imageHover" src="">
    //    <div class="hoverDiv">
    //         <h1 class="headHover text">Albee Hall</h1>
    //         <p class="paraHover text"> 776 Algoma Boulevard</p>
    //         <p class="paraHover text"> Oshkosh, WI 54901</p>
    //         <br class="hoverBreak">
    //         <a href="#" id="albeeLink" class="text link hoverLink">Click for more info</a>
    //    </div>
    // </div>

    $building_list; //array of Building objects


    //TODO change $thumb url to load only when the marker is clicked (in map.js)
    foreach($building_list as $item){
        $slug = $item->getSlug();
        $title = $item->getTitle();
        $street = $item->getStreet();
        $city = $item->getCity();
        $state = $item->getState();
        $zip = $item->getZipcode();
        $thumb = $item->getThumbImage();


        ?>
            <div id="<?php echo $slug; ?>Hover" class="generalHover">
                <img class="imageHover" src="<?php echo $thumb; ?>">
                <div class="hoverDiv">
                    <h1 class="headHover text"> <?php echo $title; ?></h1>
                    <p class="paraHover text"><?php echo $street; ?></p>
                    <p class="paraHover text"><?php echo $city . ", " . $state . " " . $zip; ?></p>
                    <br class="hoverBreak">
                    <a href="#" id="<?php echo $slug; ?>Link" class="text link hoverLink">Click for more info</a>
                </div>
            </div>
        <?php
    }
?>