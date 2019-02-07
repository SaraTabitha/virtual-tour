<!doctype html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- UWO Virtual Tour 2.0 Started 3/2017 by Sara Tabitha Mayhew with the help of Material Design, and Google's Maps API & VR View -->
    <title>UWO Virtual Tour</title>

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Web Application Manifest -->
    <!-- <link rel="manifest" href="manifest.json"> -->

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="UW Oshkosh Virtual Tour">

    <!-- Favicons -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?v=2">
    <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png?v=2">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png?v=2">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png?v=2">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png?v=2">
    <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png?v=2">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png?v=2">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png?v=2">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png?v=2">

    <meta name="apple-mobile-web-app-title" content="UW Oshkosh">
    <link rel="icon" type="image/png" href="images/favicons/favicon-196x196.png?v=2" sizes="196x196">
    <link rel="icon" type="image/png" href="images/favicons/favicon-160x160.png?v=2" sizes="160x160">
    <link rel="icon" type="image/png" href="images/favicons/favicon-96x96.png?v=2" sizes="96x96">
    <link rel="icon" type="image/png" href="images/favicons/favicon-16x16.png?v=2" sizes="16x16">
    <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.png?v=2" sizes="32x32">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="msapplication-TileImage" content="images/favicons/mstile-144x144.png?v=2">
    <meta name="application-name" content="UW Oshkosh">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
    <link rel="apple-touch-icon" href="favicon.ico?v=2">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="favicon.ico?v=2">
    <meta name="msapplication-TileColor" content="#2F3BA2">

    <!-- Color the status bar on mobile devices -->
    <meta name="theme-color" content="#2F3BA2">

    <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
    <!--
    <link rel="canonical" href="http://www.example.com/">
    -->

    <!-- Material Design icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


    <!-- Material Design Lite page styles:
    You can choose other color schemes from the CDN, more info here http://www.getmdl.io/customize/index.html
    Format: material.color1-color2.min.css, some examples:
    material.red-teal.min.css
    material.blue-orange.min.css
    material.purple-indigo.min.css
    -->
    <!--open sans font-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-yellow.min.css" />

    <!-- Your styles -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="lib/mdl/materialdesign.css">

</head>
<body>
        

        <header id="headerWeb">
                <div id="menu" class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
                        <div id="menuDrawer" class="mdl-layout__drawer">
                                <!--header inside drawer-->
                                <div id="mobileHeader" class="mdl-layout__header-row  main">
                                        <a id="watermarkLink" href="https://www.uwosh.edu/" target="_blank">
                                          <img id="watermark" class="mdl-layout-title watermark" src="/images/wordmark-large.png">
                                        </a>
                                </div>

                                <div id="webSearch">
                                        <div id="mobileSearch" class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mobileSearchOpen">
                                                <label  class= "searchLabel mdl-button mdl-js-button mdl-button--icon" for="sample6">
                                                        <i id="searchIcon" class="material-icons searchLabel">search</i>
                                                </label>
                                                <div class="mdl-textfield__expandable-holder">
                                                        <input id="searchInput" class="mdl-textfield__input" type="text" name="search" value="">
                                                        <label class=" searchLabel mdl-textfield__label" ></label>
                                                </div>
                                                <div id='searchResults'>
                                                </div>

                                                

                                        </div>
                                </div>


                                <i id="notif" class="material-icons md-32 grey666 menu">menu</i>

                                <!--contents of drawer-->
                                <!--black strip-->
                                <div id="drawerContents" class="mdl-layout--fixed-drawer">
                                        <div class = "mdl-drawer-layout">
                                                <div class="mdl-layout__header-row mdl-color--black drawer">
                                                        <span class="mdl-layout-title mdl-color-text--white text">UW Oshkosh Virtual Tour</span>
                                                </div>

                                                <!--select all-->
                                                <div class="mdl-layout__header-row background666 drawer mdl-shadow--3dp">
                                                        <!--select all checkbox and title-->
                                                        <!-- for checkboxes "for" and "id" need to be the same -->
                                                        <label for="selectallcheck" id="selectAllOne" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                <!-- if initial state = checked the input element has the attribute checked applied to it -->
                                                                <input type="checkbox" id="selectallcheck" class="mdl-checkbox__input">
                                                                <span id="selectAllOneLabel" class="mdl-checkbox__label selectAll text">Select All</span>
                                                        </label>
                                                </div>
                                                <!--options-->
                                                <div class="optionsBox">
                                                        <ul class="options">
                                                                <!--Buildings-->
                                                                <li>
                                                                        <label for="buildings" id= "buildingsLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="buildings" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">location_city</i>Buildings</span>
                                                                        </label>
                                                                </li>
                                                                <!--Parking Lots-->
                                                                <li>
                                                                        <label for="parking" id="parkingLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="parking" class="mdl-checkbox__input ">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">directions_car</i>Parking Lots</span>
                                                                        </label>
                                                                </li>
                                                                <!--Accessible Entries-->
                                                                <li>
                                                                        <label for="accEnt" id="accEntLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="accEnt" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">accessible</i>Accessible Entries</span>
                                                                        </label>
                                                                </li>
                                                                <!--Accessible Parking-->
                                                                <li>
                                                                        <label for="accPar" id="accParLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="accPar" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">accessible</i>Accessible Parking</span>
                                                                        </label>
                                                                </li>
                                                                <!--Emergency Phones-->
                                                                <li>
                                                                        <label for="emergency" id="emergencyLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="emergency" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">phone</i>Emergency Phones</span>
                                                                        </label>
                                                                </li>
                                                                <!--Sustainability Points of Interest-->
                                                                <li>
                                                                        <label for="sust" id="sustLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="sust" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">nature_people</i>Sustainability Points of Interest</span>
                                                                        </label>
                                                                </li>
                                                                <!--Gender Neutral and Family Restrooms-->
                                                                <li>
                                                                        <label for="gender" id="genderLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="gender" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">child_friendly</i>Gender Neutral and Family Restrooms</span>
                                                                        </label>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <!--Categories strip-->

                                                <div class="mdl-layout__header-row mdl-color--black drawer">
                                                        <span class="mdl-layout-title mdl-color-text--white text">Categories</span>
                                                </div>

                                                <!--select all2-->
                                                <div class="mdl-layout__header-row background666 drawer mdl-shadow--3dp">
                                                        <!--select all checkbox and title-->
                                                        <label for="selectallcheck2" id="selectAllTwo" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                <input type="checkbox" id="selectallcheck2" class="mdl-checkbox__input">
                                                                <span class="mdl-checkbox__label selectAll text">Select All</span>
                                                        </label>
                                                </div>

                                                <!--Categories-->
                                                <div class="optionsBox">
                                                        <ul id="categories" class="options">
                                                                    <?php
                                                                        require_once('Classes/Building_Categories/categories_checkbox.php');
                                                                    ?>
                                                                
                                                        </ul>
                                                </div>

                                                <?php
                                                        require_once('Classes/Emergency_Phones/create_emergencyphones.php');
                                                        require_once('Classes/Parking_Lots/create_parkinglots.php');
                                                        require_once('Classes/Marker_Groups/style_checkboxes.php');
                                                ?>

                                                <!--black strip-->
                                                <div class="mdl-layout__header-row mdl-color--black drawer">
                                                        <span class="mdl-layout-title mdl-color-text--white text">Virtual Tours</span>
                                                </div>
                                                <!-- 360 grey -->
                                                <div class="mdl-layout__header-row background666 drawer mdl-shadow--3dp">
                                                        <span class="mdl-layout-title threeSixty text">360 Tours</span>
                                                </div>
                                                <!-- If new buildings are added they need to have their id's added to 
                                                the main.js arrays virtualTourDropdowns and virtualTourDropdownsButtons-->
                                                <!-- each li added to a tour needs to have its id added to the Links array in virtual-tour.js -->
                                                <div id="albeeTour" class="mdl-navigation mine">
                                                                <span  class="mdl-navigation__link linkSpan " href="#"><p class="linkText color666 text">Albee Hall</p><i id="addAlbee" class="material-icons color666 add">add</i><i id="removeAlbee"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="albeeTourOptions"   class="tourDrop">
                                                                <ul class="noPad">
                                                                        <li id="albeeWeight" class="tourItem text">Weight Room</li>
                                                                </ul>
                                                 </div>
                                                <div id="alumniTour" class="mdl-navigation mine">
                                                        <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Alumni Welcome &amp; Conference Center</p><i id="addAlumni"class="material-icons color666 add">add</i><i id="removeAlumni"class="material-icons color666 add remove">remove</i></span>
                                                </div>
                                                <div id="alumniTourOptions"  class="tourDrop">
                                                        <ul class="noPad" >
                                                                <li id="breakOne" class="tourItem text">Breakout Room 1</li>
                                                                <li id="breakTwo" class="tourItem text">Breakout Room 2</li>
                                                                <li id="breakThree" class="tourItem text">Breakout Room 3</li>
                                                                <li id="breakFour" class="tourItem text">Breakout Room 4</li>
                                                                <li id="busalacchiRoom" class="tourItem text">Busalacchi Alumni Conference Room</li>
                                                                <li id="executiveRoom" class="tourItem text">Executive Board Room</li>
                                                                <li id="awccGreatHall" class="tourItem text">Great Hall</li>
                                                                <li id="sodexoBallroom" class="tourItem text">Sodexo Grand Ballroom</li>
                                                                
                                                        </ul>
                                                </div>
                                                <div id="appletonTour" class="mdl-navigation mine">
                                                                <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Appleton Executive Education Center</p><i id="addAppleton"class="material-icons color666 add">add</i><i id="removeAppleton"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="appletonTourOptions"  class="tourDrop">
                                                                <ul class="noPad" >
                                                                        <li id="appletonEntrance" class="tourItem text">Entrance</li>
                                                                        <li id="appletonConference" class="tourItem text">Conference Room</li>
                                                                        <li id="appletonMeeting" class="tourItem text">Meeting Room</li>
                                                                        <li id="appletonTraining" class="tourItem text">Training Room</li>
                                                                        <li id="appletonWorkroom" class="tourItem text">Workroom</li>
                                                                </ul>
                                                 </div>
                                                <div id="acTour" class="mdl-navigation mine">
                                                                <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Arts and Communication</p><i id="addAc"class="material-icons color666 add">add</i><i id="removeAc"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="acTourOptions"  class="tourDrop">
                                                                <ul class="noPad" >
                                                                        <li id="annexGallery" class="tourItem text">Annex Gallery</li>
                                                                        <li id="priebeGallery" class="tourItem text">Priebe Gallery</li>
                                                                      
                                                                </ul>
                                                 </div>
                                                <div id="equityTour" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan " href="#"><p class="linkText color666 text">Campus Center for Equity &amp; Diversity</p><i id="addEquity" class="material-icons color666 add">add</i><i id="removeEquity"class="material-icons color666 add remove">remove</i></span>
                                                </div>
                                                <div id="equityTourOptions"   class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="womensCenter" class="tourItem text">Women's Center</li>
                                                               
                                                        </ul>
                                                </div>
                                                <div id="clowTour" class="mdl-navigation mine">
                                                                <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Clow Social Science Center</p><i id="addClow"class="material-icons color666 add">add</i><i id="removeClow"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="clowTourOptions"  class="tourDrop">
                                                                <ul class="noPad" >
                                                                        <li id="clowStudy" class="tourItem text">Study Room</li>
                                                                      
                                                                </ul>
                                                 </div>
                                                 <div id="eastTour" class="mdl-navigation mine">
                                                        <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">East Hall</p><i id="addEast"class="material-icons color666 add">add</i><i id="removeEast"class="material-icons color666 add remove">remove</i></span>
                                                </div>
                                                <div id="eastTourOptions"  class="tourDrop">
                                                        <ul class="noPad" >
                                                                <li id="eastField" class="tourItem text">Field Center</li>
                                                                <li id="eastFieldNE" class="tourItem text">North East Field </li>
                                                                <li id="eastFieldNW" class="tourItem text">North West Field </li>
                                                                <li id="eastFieldSE" class="tourItem text">South East Field </li>
                                                                <li id="eastFieldSW" class="tourItem text">South West Field </li>
                                                              
                                                        </ul>
                                         </div>
                                                 <div id="kolfTour" class="mdl-navigation mine">
                                                                <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Kolf Sports Center</p><i id="addKolf"class="material-icons color666 add">add</i><i id="removeKolf"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="kolfTourOptions"  class="tourDrop">
                                                                <ul class="noPad" >
                                                                        <li id="careerFair" class="tourItem text">Field House Career Fair</li>
                                                                        <li id="gymnastics" class="tourItem text">Field House Gymnastics</li>
                                                                        <li id="kolfAthletic" class="tourItem text">Athletic Training Room</li>
                                                                </ul>
                                                 </div>
                                                 <div id="lincolnTour" class="mdl-navigation mine">
                                                           <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Lincoln Hall</p><i id="addLincoln"class="material-icons color666 add">add</i><i id="removeLincoln"class="material-icons color666 add remove">remove</i></span>
                                                 </div>
                                                        <div id="lincolnTourOptions"  class="tourDrop">
                                                        <ul class="noPad" >
                                                                <li id="lincolnFirst" class="tourItem text">Conference Room</li>
                                                                <li id="lincolnSecond" class="tourItem text">Reception Desk</li>
                                                        
                                                        </ul>
                                                 </div>
                                                <div id="sageTour" class="mdl-navigation mine">
                                                                <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Sage Hall</p><i id="addSage"class="material-icons color666 add">add</i><i id="removeSage"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="sageTourOptions" class="tourDrop">
                                                                <ul class="noPad">
                                                                        <li id="sageLounge" class="tourItem text">Study Lounge</li>
                                                                        <li id="sageOffice" class="tourItem text">Office</li>
                                                                </ul>
                                                 </div>
                                                <div id="sidewalkTour" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Sidewalk Tour</p><i id="addSidewalk"class="material-icons color666 add">add</i><i id="removeSidewalk"class="material-icons color666 add remove">remove</i></span>
                                                </div>
                                                <div id="sidewalkTourOptions" class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="dempseyStart" class="tourItem text">Dempsey to Arts &amp; Communication</li>
                                                            
                                                        </ul>
                                                </div>
                                                <div id="studentSuccessTour" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Student Success Center</p><i id="addStudentSuccess"class="material-icons color666 add">add</i><i id="removeStudentSuccess"class="material-icons color666 add remove">remove</i></span>
                                                </div>
                                                <div id="studentSuccessTourOptions" class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="successLobby" class="tourItem text">Counseling Center Lobby</li>
                                                                <li id="biofeedback" class="tourItem text">Counseling Center Biofeedback Room</li>
                                                                <li id="relaxationRoom" class="tourItem text">Counseling Center Relaxation Room</li>
                                                        </ul>
                                                </div>
                                                <div id="sportsTour" class="mdl-navigation mine">
                                                                <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Titan Stadium</p><i id="addSports"class="material-icons color666 add">add</i><i id="removeSports"class="material-icons color666 add remove">remove</i></span>
                                                        </div>
                                                        <div id="sportsTourOptions" class="tourDrop">
                                                                <ul class="noPad">
                                                                        <li id="titanAthletic" class="tourItem text">Athletic Room</li>
                                                                        <li id="titanField" class="tourItem text">Titan Field</li>
                                                                </ul>
                                                </div>

                                                <!-- just to add a little extra space at the bottom of the menu -->
                                                <div style = "height: 20px"> </div>
                                        </div>
                                </div>
                                </div>

                                <!-- category cards that slide out from beneath the menu -->
                                <?php
                                    require_once('Classes/Building_Categories/categories_card.php');
                                ?>
                </div>
        </header>



        <main id="mainWeb" class="mdl-layout__content">
                <div class="page-content">
                        
                        <!-- <p id="vrCloseButton">x</p> -->
                        <button id="vrCloseButton" class="cardCloseButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                        <i  class="material-icons">close</i>
                        </button>
                        <div id="VR" class="vrDiv"></div>
                        

                        <!-- overlay -->

                        <div id= "overlay"></div>


                        <!-- google map!! (meat of it in map.js)-->

                        <div id="map"></div>

                        <?php
                                require_once('Classes/Parking_Lots/create_parkingInfoWindows.php'); 
                                require_once('Classes/Buildings/create_buildingInfoWindows.php');

                                require_once('Classes/Buildings/create_buildingPopups.php');
                        ?>

                        </div>
                <!-- end google map -->
                </div>
        </main>
        <!-- Begin JavaScript files -->
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
        <!-- API -->
        <!-- <script id="headless_wordpress" src="scripts/api-interface.js"></script> -->
        
        <!-- our javascript -->
        <script  src="scripts/functions.js"></script>

        <!-- VR view  -->
        <script src="vrview-master/build/vrview.js"></script>
        <!-- <script src="https://storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script> -->
        
        <!-- VR scenes -->
        <script src="scripts/virtual-tour-scenes/virtual-tour.js"></script>

        <!-- Material Design -->
        
        <script src="lib/mdl/material.js"></script>
        <!-- build:js scripts/main.min.js -->
        <script src="scripts/main.js"></script>
        
        <!-- Map information -->
        <script src="scripts/map.js"></script>
        
        <!-- Google Maps API -->
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4zQ9m4LdUjtmEOJG4g05xf2oipMUDuU&callback=initMap"></script>

        
        
        <!-- Search worker -->
        <!-- code relocated to map.js -->
        <!-- <script src="scripts/search-worker.js"></script> -->
        <!-- End JavaScript files -->

        <!-- Google Analytics Code -->
         <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            
                ga('create', 'UA-6634319-1', 'auto');
                ga('send', 'pageview');
            
        </script>
        <!-- Built with love using Web Starter Kit -->
</body>
</html>
