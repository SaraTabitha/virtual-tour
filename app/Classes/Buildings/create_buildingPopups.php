<?php
    require_once(__DIR__ . "/create_buildings.php");
    //example popup 
    //Reeve Memorial Union popup
    // <div id="reevePopup" class="popup">
    //         <div class="popupBlack">
    //                         <button id="reevePopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
    //                                         <i  class="material-icons">close</i>
    //                                 </button>
    //                 <h1 class="text yellow ">Reeve Memorial Union  </h1>
    //         </div>
    //         <nav class="popupNav five mdl-shadow--3dp">
    //                 <ul id="popupNav">
    //                         <li id="reeveAboutLi" class="about"> About</li>
    //                         <li id="reeveTourLi"> Tour</li>
    //                         <li id="reeveSustainabilityLi"> Sustainability</li>
    //                         <li id="reeveBathroomsLi"> Bathrooms</li>
    //                         <li id="reeveDiningLi"> Dining</li>
    //                 </ul>
    //         </nav>
    //         <!-- Reeve Memorial Union About Content -->
    //         <div class="infoContainer">
    //                 <div id="reeveAboutImage"class="imagePopup">
    //                         <img  src="">
    //                         <p class="address text">
    //                         748 Algoma Boulevard, Oshkosh, WI, 54901</p>
    //                 </div>
    //                 <div id="reeveAboutText" class="popupText">
    //                         <h5 class="heading">About this Building</h5>
    //                         <p class=" subText text">The union — the pulse of campus life
    //                         outside the classroom — is a great place for students to
    //                         hang out, study and work. It has great entertainment options
    //                         as well as a copy center, art galleries, a food court, coffee
    //                         shop, convenience store, movie theater, University Books &amp; More, the
    //                         UW Credit Union and the Involvement Center.</p>
    //                 </div>
    //                 <!-- Reeve Memorial Union Tour Contents -->
    //                 <div id="reeveTourText" class="tourText">
    //                         <h5 class="heading">Tour Snapshot</h5>
    //                         <p class="subText text">Taylor talks a little bit about what you can find at Reeve Union.</p>
    //                         <p class="subText text">For more information visit:  </p>
    //                         <a class="subText link" href="https://reeve.uwosh.edu/" target="_blank">Reeve Union</a>
    //                 </div>
    //                 <div id="reeveTourVideo"class="videoPopup">
    //                         <iframe id="reeveiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
    //                 </div>
    //                 <!-- Reeve Memorial Union Sustainability Contents -->
    //                 <div id="reeveSustainability" class="popupTextNoImage">
    //                         <h5 class="sustHeading"> Sustainability Point of Interest</h5>
    //                         <p class="subText text">Reeve Memorial Union was renovated in 2000,
    //                         with the south side of the building completely constructed with
    //                         windows, providing day lighting all year and solar heat gain in
    //                         winter. In the summer, trees shade the area reducing air conditioning
    //                         needs. Fair Trade coffee, chocolate, handcrafts and jewelry are sold
    //                         in Reeve.</p>
    //                 </div>
    //                 <!-- Reeve Memorial Union Bathrooms Contents -->
    //                 <div id="reeveBathrooms" class="popupTextNoImage">
    //                           <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
    //                           <p class="subText text">Two gender neutral bathrooms: rooms 028 (with changing table) and 034 (with changing table)</p>
    //                 </div>
    //                 <!-- reeve dining content -->
    //                 <div id="reeveDiningImage" class="imagePopup">
    //                         <img  src="">
    //                         <ul>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/blackandgold.html" target="_blank">Black &#38; Gold Grill</a></li>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/gardentoss.html" target="_blank">The Garden Toss</a></li>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/pizzahutwingstreet.html" target="_blank">Pizza Hut/WingStreet</a></li>
    //                                 <br>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/subconnection.html" target="_blank">SubConnection</a></li>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/whollyhabaneros.html" target="_blank">Wholly Habaneros</a></li>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/oshkoshsmoothie.html" target="_blank">Oshkosh Smoothie</a></li>
    //                                 <br>
    //                                 <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/ayce.html" target="_blank">All-You-Care-To-Eat</a></li>
    //                         </ul>
    //                 </div>
    //                 <div id="reeveDiningText" class="popupText">
    //                         <h5 class="heading">Reeve Marketplace</h5>
    //                         <p class=" subText text">Reeve Marketplace is located in the
    //                         center of Reeve Memorial Union. This beautiful
    //                         retail dining marketplace is the perfect dining
    //                         option for the campus community! Filled with
    //                         7 diverse venues, Reeve Marketplace offers
    //                         something perfect for everybody. Right in the
    //                         middle of campus makes Reeve Marketplace a easy
    //                         place to stop and grab a bite to eat. Furthermore,
    //                         there is always a cool event to check out in
    //                         Reeve Union!
    //                         </p>
    //                         <p> Learn More: <a class="link" href="https://reeve.uwosh.edu/dining/dining-locations" target="_blank">Reeve Dining</a><p>
    //                 </div>
    //         </div>
    // </div>

    
?>