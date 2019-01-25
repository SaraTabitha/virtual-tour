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

        //start popup
        ?>
            <div id="<?php echo $slug; ?>Popup" class="popup">
                <!-- start close button & title -->
                <div class="popupBlack">
                             <button id="<?php echo $slug; ?>PopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                    <i  class="material-icons">close</i>
                             </button>
                    <h1 class="text yellow "><?php echo $title; ?></h1>
                </div>
                <!-- end close button & title -->
                
                <?php 
                    if(tabHasContent($tour_tab_content) || tabHasContent($sustainability_tab_content) || tabHasContent($bathroom_tab_content) || tabHasContent($dining_tab_content)){
                        //only show nav if popup has extra tabs than "about"
                        ?>
                        <!-- start nav -->
                        <nav class="popupNav five mdl-shadow--3dp">
                            <ul id="popupNav">
                                    <li id="<?php echo $slug; ?>AboutLi" class="about"> About</li>
                                    <?php
                                    //if tabs have content -> show link in nav for that tab's tab
                                    if(tabHasContent($tour_tab_content)){
                                        ?>
                                            <li id="<?php echo $slug; ?>TourLi">Tour</li>
                                        <?php
                                    }
                                    if(tabHasContent($sustainability_tab_content)){
                                        ?>
                                            <li id="<?php echo $slug; ?>SustainabilityLi">Sustainability</li>
                                        <?php
                                    }
                                    if(tabHasContent($bathroom_tab_content)){
                                        ?>
                                            <li id="<?php echo $slug; ?>BathroomsLi">Bathrooms</li>
                                        <?php
                                    }
                                    if(tabHasContent($dining_tab_content)){
                                        ?>
                                            <li id="<?php echo $slug; ?>DiningLi">Dining</li>
                                        <?php
                                    }
                                    ?>
                            </ul>
                        </nav>
                         <!-- end nav -->
                        <?php
                    }
                ?>
                <!-- start tabs  container-->
                <div class="infoContainer">
                        <!-- start about tab -->
                        <div id="<?php echo $slug;?>AboutImage"class="imagePopup">
                                <img  src="">
                                <p class="address text"><?php echo $street . ", " . $city . ", " . $state . ", " . $zipcode; ?></p>
                        </div>
                        <div id="<?php echo $slug;?>AboutText" class="popupText">
                                <h5 class="heading">About this Building</h5>
                                <!-- this is going to be a paragraph inside of a paragraph -_- -->
                                <p class="subText text"><?php echo $about_tab_content; ?></p>
                        </div>
                        <!-- end about tab -->
                        <?php
                        if(tabHasContent($tour_tab_content)){

                            /*if(tabHasMedia){
                                if(mediaIsVideo){
                                    -video tab template-
                                }else if(mediaIsImage){
                                    -image tab template-
                                }
                            }else{
                                -no media tab template-
                            }
                            */
                            ?>
                                <!-- start tour tab -->
                                <div id="<?php echo $slug; ?>TourText" class="tourText">
                                    <h5 class="heading">Tour Snapshot</h5>
                                    <p class="subText text"><?php echo $tour_tab_content; ?></p>
                                </div>
                                <div id="<?php echo $slug; ?>TourVideo"class="videoPopup">
                                    <iframe id="<?php echo $slug; ?>iframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <!-- end tour tab -->
                            <?php
                         }
                         if(tabHasContent($sustainability_tab_content)){
                            ?>
                                <!-- start sustainability tab -->
                                <div id="<?php echo $slug; ?>Sustainability" class="popupTextNoImage">
                                    <h5 class="sustHeading">Sustainability Point of Interest</h5>
                                    <p class="subText text"><?php echo $sustainability_tab_content; ?></p>
                                </div>
                                <!-- end sustainability tab -->
                            <?php
                         }
                         if(tabHasContent($bathroom_tab_content)){
                            ?>
                                <!-- start bathroom tab -->
                                <div id="<?php echo $slug; ?>Bathrooms" class="popupTextNoImage">
                                    <h5 class="sustHeading">Gender Neutral Bathrooms and Family Restrooms</h5>
                                    <p class="subText text"><?php echo $bathroom_tab_content; ?></p>
                                </div>
                                <!-- end bathroom tab -->
                            <?php
                         }
                         if(tabHasContent($dining_tab_content)){
                            ?>
                                <!-- start dining tab -->
                                <div id="<?php echo $slug; ?>DiningImage" class="imagePopup">
                                    <img  src="">
                                </div>
                                <div id="<?php echo $slug; ?>DiningText" class="popupText">
                                    <h5 class="sustHeading">Dining</h5>
                                    <p class="subText text"><?php echo $dining_tab_content; ?></p>
                                </div>
                                <!-- end dining tab -->
                            <?php
                         }
                        ?>
                </div>
                <!-- end tabs container -->
            </div>
        <?php
        //end popup
    }



    //can be [embed] or <img />...but...embed/url -> iframe or img 

    function videoTabTemplate($slug, $tab_text){

    }

    function imageTabTemplate($slug, $tab_text){

    }

    function noMediaTabTemplate($slug, $tab_text){

    }
    
    //TODO... how to mark tabs that have media/no media, video/image -> to be set/removed from src/url in javascript (map.js)
?>