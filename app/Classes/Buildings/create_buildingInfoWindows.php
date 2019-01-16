<?php
    require_once(__DIR__ . "/create_buildings.php");

    $building_list; //array of Building objects


    //TODO change $thumb url to load only when the marker is clicked (in map.js)
    foreach($building_list as $item){
        $slug = $item->getSlug();
        $title = $item->getTitle();
        $street = $item->getStreet();
        $city = $item->getCity();
        $state = $item->getState();
        $zip = $item->getZipcode();


        ?>
            <div id="<?php echo $slug; ?>Hover" class="generalHover">
                <img class="imageHover" id="<?php echo $slug; ?>HoverThumbnail" src="#">
                <div class="hoverDiv">
                    <h1 class="headHover text"> <?php echo $title; ?></h1>
                    <p class="paraHover text"><?php echo $street; ?></p>
                    <p class="paraHover text"><?php echo $city . ", " . $state . " " . $zip; ?></p>
                    <?php 
                    //titles that are too long makes the info window scroll if the <br> element is added...
                    //temporary fix, there is probably a better way of doing this but for now this is a quick fix...
                    //if you're reading this it means that i never went back and changed this to a better fix
                    if(strlen($title) < 25){
                        ?>
                        <br class="hoverBreak">
                        <?php
                    }
                    ?>
                    
                    <a href="#" id="<?php echo $slug; ?>Link" class="text link hoverLink">Click for more info</a>
                </div>
            </div>
        <?php
    }
?>