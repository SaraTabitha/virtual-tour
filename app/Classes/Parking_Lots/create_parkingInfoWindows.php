<?php
    require_once(__DIR__ . "/create_parkinglots.php");

    //example from html
    //<div id="twentysevenHover" class="parkingHover commuterHover">
        //<h1 class="parkingHeadHover text">Lot 27</h1><div class="parkingColorCommute"></div>
        //<p class="parkingTextHover text">Employee Lot</p>
        //<p class="parkingTextHover text">Commuter Lot</p>
        //<p class="parkingTextHover text">Visitor Lot</p>
        //<a  id="twentysevenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
    //</div> 

    function createLotTypes($lotTypes){
        foreach($lotTypes as $type){
            ?>
                <p class="parkingTextHover text"><?php echo $type; ?></p>
            <?php
        }
    }

    foreach($parkingLot_list as $item){
        $slug = $item->getSlug();
        $title = $item->getTitle();
        $lotTypes = $item->getLotTypes();

        ?>
            <div id="<?php echo $slug; ?>Hover" class="parkingHover">
                <h1 class="parkingHeadHover text"><?php echo $title; ?></h1> 
                <?php createLotTypes($lotTypes); ?>
                <a id="<?php echo $slug; ?>Link" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
            </div>
        <?php
        
    }


   
?>