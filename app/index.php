<!doctype html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UWO Virtual Tour 2.0</title>

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Web Application Manifest -->
    <link rel="manifest" href="manifest.json">

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Web Starter Kit">
    <link rel="icon" sizes="192x192" href="https://umc.uwosh.edu/wp-content/themes/uw-oshkosh-divi/images/favicons/favicon.ico?v=2">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
    <link rel="apple-touch-icon" href="https://umc.uwosh.edu/wp-content/themes/uw-oshkosh-divi/images/favicons/favicon.ico?v=2">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="https://umc.uwosh.edu/wp-content/themes/uw-oshkosh-divi/images/favicons/favicon.ico?v=2">
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
    <link rel="stylesheet" media="(min-width: 1025px)"href="styles/main.css">
    <link rel="stylesheet" media="(max-width: 1025px)"href="styles/mobile.css">

    <!--jquery link from Google-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- VR view  -->
    <script src="https://storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script>


</head>
<body>

        <header id="headerWeb">
                <div id="menu" class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
                        <div id="menuDrawer" class="mdl-layout__drawer">
                                <!--header inside drawer-->
                                <div id="mobileHeader" class="mdl-layout__header-row  main">
                                        <img class="mdl-layout-title watermark" src="/images/wordmark-large.png">
                                </div>

                                <div id="webSearch">
                                        <div id="mobileSearch" class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                                                <label  class= "searchLabel mdl-button mdl-js-button mdl-button--icon" for="sample6">
                                                        <i class="material-icons searchLabel">search</i>
                                                </label>
                                                <div class="mdl-textfield__expandable-holder">
                                                        <input class="mdl-textfield__input" type="text" id="sample6">
                                                        <label class=" searchLabel mdl-textfield__label" ></label>
                                                </div>

                                                <?php
                                                echo "<div id='searchResults'>";
                                                echo "<ul>";
                                                echo "<li> Search Results </li>";

                                                class TableRows extends RecursiveIteratorIterator {
                                                    function __construct($it) {
                                                        parent::__construct($it, self::LEAVES_ONLY);
                                                    }

                                                    function current() {
                                                        return "<p>" . parent::current(). "</p>";
                                                    }

                                                    function beginChildren() {
                                                        echo "<li>";
                                                    }

                                                    function endChildren() {
                                                        echo "</li>" . "\n";
                                                    }
                                                }
                                                $servername = "localhost";
                                                $username = "virtualtourdev";
                                                $password = "8c2U9z^u";

                                                try {
                                                    $conn = new PDO("mysql:host=$servername;dbname=virtualtourdev", $username, $password);
                                                    // set the PDO error mode to exception
                                                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                                    $stmt = $conn->prepare("SELECT DISTINCT Buildings.name FROM Buildings INNER JOIN BuildingJump on BuildingJump.BuildingId = Buildings.Id INNER JOIN BuildingTypes on BuildingTypes.Id= BuildingJump.TypeId WHERE Buildings.name LIKE 'res%' OR BuildingTypes.Name LIKE 'res%'");
                                                    $stmt->execute();

                                                    // set the resulting array to associative
                                                    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
                                                    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
                                                        echo $v;
                                                    }

                                                    // can be set to say "connected successfully" but atm I don't want it to
                                                    // parce que il va ecrire la expression dans le recherche
                                                    // beacuse it will write the phrase in the search
                                                    echo "";
                                                    }
                                                catch(PDOException $e)
                                                    {
                                                    echo "Connection failed: " . $e->getMessage();
                                                    }
                                                    $conn = null;
                                                    echo "</ul>";
                                                    echo "</div>";
                                                ?>

                                        </div>
                                </div>

                                <style>
                                 /*temporary element push*/

                                 /*id='drawerContents' move down based on height of searchResults*/
                                 #drawerContents{
                                   top: 461px;
                                 }

                                </style>

                                <i id="notif" class="material-icons md-32 grey666 menu">menu</i>

                                <!--contents of drawer-->
                                <!--black strip-->
                                <div id="drawerContents" class="mdl-layout mdl-layout--fixed-drawer">
                                        <div id="drawerDivTwo" class="mdl-layout__drawer">
                                                <div class="mdl-layout__header-row mdl-color--black drawer">
                                                        <span class="mdl-layout-title mdl-color-text--white text">UW Oshkosh Virtual Tour</span>
                                                </div>

                                                <!--select all-->
                                                <div class="mdl-layout__header-row background666 drawer">
                                                        <!--select all checkbox and title-->
                                                        <label for="selectallcheck" id="selectAllOne" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                <input type="checkbox" id="selectallcheck" class="mdl-checkbox__input">
                                                                <span id="selectAllOneLabel" class="mdl-checkbox__label selectAll text">Select All</span>
                                                        </label>
                                                </div>
                                                <!--options-->
                                                <div class="optionsBox">
                                                        <ul class="options">
                                                                <!--Buildings-->
                                                                <li>
                                                                        <label for="buildings" id= "buildLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="buildings" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label color666 check text"><i class="material-icons color666">location_city</i>Buildings</span>
                                                                        </label>
                                                                </li>
                                                                <!--Parking Lots-->
                                                                <li>
                                                                        <label for="parkingLots" id="parkingLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="parkingLots" class="mdl-checkbox__input ">
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
                                                <div class="mdl-layout__header-row background666 drawer">
                                                        <!--select all checkbox and title-->
                                                        <label for="selectallcheck2" id="selectAllTwo" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                <input type="checkbox" id="selectallcheck2" class="mdl-checkbox__input">
                                                                <span class="mdl-checkbox__label selectAll text">Select All</span>
                                                        </label>
                                                </div>

                                                <!--Categories-->
                                                <div class="optionsBox">
                                                        <ul class="options">
                                                                <!--Academic Facilities-->
                                                                <li>
                                                                        <label for="accaF" id="accaFLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="accaF" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">school</i><a href="#" id="accFText" class="link text">Academic Facilities</a></span>
                                                                        </label>
                                                                </li>
                                                                <!--  Athletics -->
                                                                <li>
                                                                        <label for="ath" id="athLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="ath" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">directions_run</i><a href="#" id="athText" class="link text">Athletics</a></span>
                                                                        </label>
                                                                </li>
                                                                <!-- Academic services -->
                                                                <li>
                                                                      <label for="accS" id="accSLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                              <input type="checkbox" id="accS" class="mdl-checkbox__input">
                                                                              <span class="mdl-checkbox__label check one"><i class="material-icons color666">mode_edit</i><a href="#" id="accSText" class="link text">Academic Services</a></span>
                                                                      </label>
                                                                </li>
                                                                <!-- Campus Services -->
                                                                <li>
                                                                        <label for="campS" id="campSLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="campS" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">accessibility</i><a href="#" id="campSText" class="link text">Campus Services</a></span>
                                                                        </label>
                                                                </li>
                                                                <!-- Residence halls -->
                                                                <li>
                                                                        <label for="resH" id="resHLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="resH" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">hotel</i><a href="#" id="resHText" class="link text">Residence Halls</a></span>
                                                                        </label>
                                                                </li>
                                                                <!-- Dining -->
                                                                <li>
                                                                        <label for="dining" id="diningLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="dining" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">restaurant</i><a href="#" id="diningText" class="link text">Dining</a></span>
                                                                        </label>
                                                                </li>
                                                                <!-- Student Recreation -->
                                                                <li>
                                                                        <label for="stuR" id="stuRLabel" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                                                <input type="checkbox" id="stuR" class="mdl-checkbox__input">
                                                                                <span class="mdl-checkbox__label check one"><i class="material-icons color666">fitness_center</i><a href="#" id="stuRText" class="link text">Student Recreation</a></span>
                                                                        </label>
                                                                </li>
                                                        </ul>
                                                </div>

                                                <!--black strip-->
                                                <div class="mdl-layout__header-row mdl-color--black drawer">
                                                        <span class="mdl-layout-title mdl-color-text--white text">Virtual Tours</span>
                                                </div>
                                                <!-- 360 grey -->
                                                <div class="mdl-layout__header-row background666 drawer">
                                                        <span class="mdl-layout-title threeSixty text">360 Tours</span>
                                                </div>
                                                <!-- placeholder nav -->
                                                <!-- If new buildings are added they need to have the click function
                                                     added in main.js for the height change/scroll bar fix-->
                                                <div id="linkOne" class="mdl-navigation mine">
                                                        <span class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Alumni Welcome &amp; Conference Center</p><i id="addOne"class="material-icons color666 add">add</i></span>
                                                </div>
                                                <div id="linkOneOptions"  class="tourDrop">
                                                        <ul class="noPad" >
                                                                <li id="executiveRoom" class="tourItem text">Executive Board Room</li>
                                                                <li id="" class="tourItem text">VR</li>
                                                                <li class="tourItem text">VR</li>
                                                        </ul>
                                                </div>

                                                <div id="linkTwo" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan " href="#"><p class="linkText color666 text">Campus Center for Equity &amp; Diversity</p><i id="addTwo" class="material-icons color666 add">add</i></span>
                                                </div>
                                                <div id="linkTwoOptions"   class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="womensCenter" class="tourItem text">Women's Center</li>
                                                                <li id="" class="tourItem text">VR</li>
                                                                <li class="tourItem text">VR</li>
                                                        </ul>
                                                </div>

                                                <div id="linkThree" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Oshkosh Sports Complex</p><i id="addThree"class="material-icons color666 add">add</i></span>
                                                </div>
                                                <div id="linkThreeOptions" class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="titanField" class="tourItem text">Titan Field</li>
                                                                <li class="tourItem text">VR</li>
                                                                <li class="tourItem text">VR</li>
                                                        </ul>
                                                </div>

                                                <div id="linkFour" class="mdl-navigation mine">
                                                        <span  class="mdl-navigation__link linkSpan" href="#"><p class="linkText color666 text">Sidewalk Tour</p><i id="addFour"class="material-icons color666 add">add</i></span>
                                                </div>
                                                <div id="linkFourOptions" class="tourDrop">
                                                        <ul class="noPad">
                                                                <li id="acEnd" class="tourItem text">Arts and Communications Outside</li>
                                                                <li id="dempseyStart" class="tourItem text">Dempsey Outside</li>
                                                                <li class="tourItem text">VR</li>
                                                        </ul>
                                                </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- academic facilities card -->
                                <div id="accFCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="accFClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Academic Facilities</h2>
                                        </div>
                                        <div>
                                                <iframe id="accFiframe" width="400" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                Nationally and regionally accredited, UW Oshkosh is among the
                                                largest public universities in the state and is committed to
                                                providing students with a high-quality affordable education.
                                                The University features state-of-the-art academic buildings with
                                                modest class sizes that foster one-on-one and collaborative learning
                                                with professors.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://www.uwosh.edu/facilities/campus-information/building-profiles/academic-buildings" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end of academic facilities card -->

                                <!-- start Athletics card -->
                                <div id="athCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="athClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Athletics</h2>
                                        </div>
                                        <div>
                                                <iframe id="athiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                The UW Oshkosh Athletics department supports 21 teams for male and
                                                female student-athletes, and has won 54 titles in the last 10 years.
                                                Students can participate in baseball, basketball, cross country, football,
                                                soccer, swimming and diving, tennis, track and field, wrestling, gymnastics,
                                                softball and volleyball.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://www.uwoshkoshtitans.com/landing/index" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Athletics card  -->

                                <!-- start Academic Services card -->
                                <div id="accSCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="accSClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Academic Support Services</h2>
                                        </div>
                                        <div>
                                                <iframe id="accSiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text  categoryText color666 text">
                                                Academic support and services are offered to UW Oshkosh students
                                                throughout the year, including Center for Academic Resources,
                                                English Language Services, Writing Center, Mathematics Lab and
                                                Reading Study Center.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://www.uwosh.edu/academics/" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Academic Services card  -->

                                <!-- start Campus Services card -->
                                <div id="campSCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="campSClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Campus Services</h2>
                                        </div>
                                        <div>
                                                <iframe id="campSiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                UW Oshkosh offers a number of services dedicated to meeting
                                                the needs of the diverse campus population. These services
                                                include Center for Academic Support and Diversity, Disability Services,
                                                LGBTQ Resource Center, Office of International Education,
                                                Veterans Resource Center, Student Recreation and Wellness Center (SRWC)
                                                and Student Success Center.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://www.uwosh.edu/resources/" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Campus Services card  -->

                                <!-- start Residence Halls card -->
                                <div id="resHCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="resHClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Residence Halls</h2>
                                        </div>
                                        <div>
                                                <iframe id="resHiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://www.housing.uwosh.edu/residence-halls" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Residence Halls card  -->

                                <!-- start Dining card -->
                                <div id="diningCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="diningClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Dining</h2>
                                        </div>
                                        <div>
                                                <iframe id="diningiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://reeve.uwosh.edu/dining" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Dining card  -->

                                <!-- start Student Recreation card -->
                                <div id="stuRCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
                                        <button id="stuRClose" class="closeButton mdl-color-text--black mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button>
                                        <div class="mdl-card__title">
                                                <h2 class="mdl-card__title-text color666 text">Student Recreation</h2>
                                        </div>
                                        <div>
                                                <iframe id="stuRiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <div class="mdl-card__supporting-text categoryText color666 text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                        <div class="mdl-card__actions mdl-card--border">
                                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect text link" href="https://recreation.uwosh.edu/" target="_blank"> Learn More </a>
                                        </div>
                                </div>
                                <!-- end Student Recreation card  -->
                </div>
        </header>



        <main id="mainWeb" class="mdl-layout__content">
                <div class="page-content">
                        <!-- POPUPS START -->
                        <!--  -->

                        <!--  ALBEE POPUP-->
                        <div id="albeePopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Albee Hall <button id="albeePopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav three">
                                        <ul id="popupNav">
                                                <li id="albeeAboutLi" class="about"> About</li>
                                                <li id="albeeTourLi"> Tour</li>
                                                <li id="albeeSustainabilityLi">Sustainability </li>
                                        </ul>
                                </nav>
                                <!-- Albee About Content -->
                                <div class="infoContainer">
                                        <div id="albeeAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/albeehallFull.jpeg">
                                                <p class="address text">
                                                776 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="albeeAboutText" class="popupText">
                                                <h5 class="heading">About Albee Hall</h5>
                                                <p class=" subText text">Built in 1956 and named after the
                                                first president of the University, Albee Hall is
                                                one of two physical education buildings on campus.
                                                It houses a swimming pool, diving pool, weight-lifting
                                                center, women's athletic coaches offices and a few classrooms.</p>
                                        </div>
                                        <!-- Albee Tour Contents -->
                                        <div id="albeeTourText" class="tourText">
                                                <h5 class="heading">Tour Snapshot</h5>
                                                <p class="subText text">Nick takes us through Albee Hall and even takes a quick swim in the pool. </p>
                                                <p class="subText text">Find more information here: </p>
                                                <a class="subText link" href="https://recreation.uwosh.edu/facilities-and-hours/albee-hall-and-pool/" target="_blank">Albee Hall and Pool</a>
                                        </div>
                                        <div id="albeeTourVideo"class="videoPopup">
                                                <iframe id="albeeiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <!-- Albee Sustainability Contents -->
                                        <div id="albeeSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">Albee Hall houses the University pool which uses 64 solar thermal panels producing an estimated 7,692 therms annually to generate hot water.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- BASEBALL POPUP -->
                        <div id="baseballPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Alumni Baseball Stadium <button id="baseballPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                        <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="">
                                                <p class="address text">
                                                450 Josslyn Street, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Also known as Tiedemann Field,
                                                the Alumni Baseball Stadium is part of the Oshkosh
                                                Sports Complex located along Josslyn Street, west
                                                of the Fox River.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- ALUMNI WELCOME AND CONFERENCE CENTER POPUP -->
                        <div id="alumniPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Alumni Welcome and Conference Center <button id="alumniPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="alumniAboutLi" class="about"> About</li>
                                                <li id="alumniSustainabilityLi">Sustainability </li>
                                        </ul>
                                </nav>
                                <!-- ALUMNI About Content -->
                                <div class="infoContainer">
                                        <div id="alumniAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/awcc-buildingFull.jpg">
                                                <p class="address text">
                                                776 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="alumniAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The UW Oshkosh Alumni Welcome and Conference
                                                Center opened in 2014 and serves as the Univeristy’s new “front door.”
                                                The 22,000-square-foot facility is home to Alumni Relations, Business
                                                Success Center and the UW Oshkosh Foundation, as well as two satellite
                                                offices, a visitor’s concierge and a high-quality conference center.
                                                The AWCC is located on the Fox River and includes a ballroom, board
                                                 room and breakout rooms.</p>
                                        </div>
                                        <!-- ALUMNI Sustainability Contents -->
                                        <div id="alumniSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">The Alumni Welcome and Conference Center was built to LEED certification standards and opened in 2014.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Arts & Communications Center POPUP -->
                        <div id="acPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Arts &amp; Communications Center <button id="acPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="acAboutLi" class="about"> About</li>
                                                <li id="acBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Arts & Communications Center About Content -->
                                <div class="infoContainer">
                                        <div id="acAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/artscommunicationsFull.jpeg">
                                                <p class="address text">
                                                1001 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="acAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">Completed in 1971, the Arts and Communication
                                                Center consists of two buildings — the West building and North-South
                                                building. The West building houses the Radio-Television-Film office,
                                                the Titan TV Center and the Fredric March Theater. The North-South
                                                building is home to the departments of Communication, Art, Music,
                                                Religious Studies and Anthropology. Also located in the North-South
                                                building are the Music Hall, Preibe Art Gallery and 90.3 WRST-FM
                                                Oshkosh, the University's radio station.</p>
                                        </div>
                                        <!-- Arts & Communications Center Bathrooms Contents -->
                                        <div id="acBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms N201 (with changing table) and N203 (with changing table)</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Athletic Service Building Popup -->
                        <div id="athleticPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Athletic Service Building <button id="athleticPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="imagePopup">
                                        <img  src="images/campuspictures/athleticserviceFull.jpeg">
                                        <p class="address text">
                                        450 Josslyn Street, Oshkosh, WI, 54901</p>
                                </div>
                                <div class="popupText">
                                        <h5 class="heading">About This Building</h5>
                                        <p class="text">Also known as the Campbell Creek
                                        Athletic Service Building or the Titan Stadium
                                        Service Building, the Athletic Service building
                                        is east of Titan Stadium and was built in 1988.</p>
                                </div>
                        </div>

                        <!-- Blackhawk Commons popup -->
                        <div id="blackhawkPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Blackhawk Commons <button id="blackhawkPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav four">
                                        <ul id="popupNav">
                                                <li id="blackhawkAboutLi" class="about"> About</li>
                                                <li id="blackhawkSustainabilityLi">Sustainability </li>
                                                <li id="blackhawkBathroomsLi">Bathrooms</li>
                                                <li id="blackhawkDiningLi">Dining</li>
                                        </ul>
                                </nav>
                                <!-- Blackhawk Commons About Content -->
                                <div class="infoContainer">
                                        <div id="blackhawkAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/blackhawkFull.jpeg">
                                                <p class="address text">
                                                725 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="blackhawkAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">One of the two main dining facilities on campus,
                                                Blackhawk Commons provides buffet meals three times a day. Also
                                                located in the building are the offices for University Dining,
                                                Parking Services and Sodexo, the campus’ food services company.
                                                If you are looking for on-campus employment, Blackhawk Commons
                                                has positions open to students every school year.</p>
                                        </div>
                                        <!-- Blackhawk Commons Sustainability Contents -->
                                        <div id="blackhawkSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">Fair Trade coffee and tea is featured daily and trayless dining has reduced food waste by 17 percent and the waste that remains is sent to the University’s biodigester. Energy Star electrical equipment reduces energy use by 20 percent and a trash compactor reduces the frequency of waste pick-up. The 24 rooftop solar thermal panels produces an estimated 1,878 therms annually to heat water for the kitchens.</p>
                                        </div>
                                        <!-- Blackhawk Commons bathrooms  Contents -->
                                        <div id="blackhawkBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms 009 and 010.</p>
                                        </div>
                                        <!-- Blackhawk Commons dining content -->
                                        <div id="blackhawkDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/blackhawkGif.gif">
                                        </div>
                                        <div id="blackhawkDiningText" class="popupText">
                                                <h5 class="heading">Blackhawk Commons</h5>
                                                <p class=" subText text">Featuring a wide variety of
                                                fresh food designed to satisfy everyone's
                                                appetite with food choices to rival your
                                                favorite restaurants
                                                <ul>
                                                        <li>Fresh fruit and salads</li>
                                                        <li>Delicious, hot, home-style entr&#233;es</li>
                                                        <li>Freshly baked pizza and pasta</li>
                                                        <li>Deli choices served on freshly baked breads</li>
                                                        <li>New creations by our chef just for you</li>
                                                        <li>Ice cream and freshly baked desserts</li>
                                                        <li>Homemade soups</li>
                                                </ul>
                                                And you can enjoy "all you care to eat"!
                                                </p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/blackhawkcommons.html" target="_blank">Blackhawk Commons</a><p>
                                        </div>
                                </div>
                        </div>

                        <!-- Biodigester popup -->
                        <div id="biodigesterPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Biodigester <button id="biodigesterPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/biodigesterFull.jpg">
                                                <p class="address text">
                                                755 Dempsey Trail, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Built in 2011, the UW Oshkosh Urban
                                                Anaerobic Dry Digester (BD1) is the first commercial
                                                scale dry fermentation anaerobic biodigester in the
                                                Americas.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Buckstaff Planetarium popup -->
                        <div id="buckstaffPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Buckstaff Planetarium <button id="buckstaffPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/buckstaffFull.jpeg">
                                                <p class="address text">
                                                921 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Built in 1964 and named after Ralph Buckstaff,
                                                an Oshkosh astronomer, Buckstaff Planetarium is a venue dedicated
                                                to star gazing and educating the community about astronomy. The
                                                University’s Science Outreach program provides interactive learning
                                                opportunities through educational shows offered about once a month
                                                during the academic year. The planetarium also hosts private field
                                                trips in coordination with local schools’ curricula.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Campus Center for Equity & Diversity popup -->
                        <div id="equityPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Campus Center for Equity &amp; Diversity  <button id="equityPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="equityAboutLi" class="about"> About</li>
                                                <li id="equityBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Campus Center for Equity & Diversity About Content -->
                                <div class="infoContainer">
                                        <div id="equityAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/centerforequityFull.jpeg">
                                                <p class="address text">
                                                717 W. Irving Street, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/womenscenter/1/1.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div id="equityAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The Center for Equity and
                                                Diversity houses the Women's Center, the LGBTQ
                                                Resource Center and the Division of Academic Support.</p>
                                        </div>
                                        <!-- Campus Center for Equity & Diversity Bathrooms Contents -->
                                        <div id="equityBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms 020B (with changing table) and 020F</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Campus Services popup -->
                        <div id="campusPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Campus Services  <button id="campusPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                        <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/campus-servicesFull.jpg">
                                                <p class="address text">
                                                650 Witzel Ave., Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Built in 1980 as a Copp's grocery store,
                                                the store was later purchased and remodeled by the University,
                                                and re-opened in 2009 as Campus Services, which is home to
                                                Facilities Management, Postal Services, Document Services,
                                                Central Stores and Receiving and the Fleet Vehicles departments.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Ceramics Laboratory popup -->
                        <div id="ceramicsPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Ceramics Laboratory  <button id="ceramicsPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/ceramicslabFull.jpeg">
                                                <p class="address text">
                                                1165 Rockwell Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">The ceramics lab is used by the art
                                                department for instructing sculpture and 3D/ceramic
                                                courses. The facility contains eight kilns, the
                                                largest being 24 cubic feet.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- CLOW POPUP -->
                        <div id="clowPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Clow Social Science Center  <button id="clowPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="clowAboutLi"> About</li>
                                                <li id="clowDiningLi"> Dining</li>
                                        </ul>
                                </nav>
                                <div class="infoContainer">
                                        <div id="clowAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/clowFull.jpeg">
                                                <p class="address text">
                                                805 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="clowAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Named after Fredrick R. Clow,
                                                the Clow Social Science Center consists of
                                                two connected buildings. Clow offers a general
                                                access computer lab and many classrooms, including
                                                three large lecture pits in the southwest wing.</p>
                                        </div>
                                        <div id="clowDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/clowGif.gif">
                                        </div>
                                        <div id="clowDiningText" class="popupText">
                                                <h5 class="">Caf&#233; Clow</h5>
                                                <p class=" subText text">Caf&#233; Clow offers a variety of different
                                                beverages including Aspretto coffee and tea, as well
                                                as sandwiches, soups, salads and more. Aspretto coffee
                                                 is Sodexo's brand of delicious Fair Trade Certified coffee.</p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/academic/index.html" target="_blank">Caf&#233; Clow</a><p>
                                        </div>
                                </div>
                        </div>

                        <!-- Community Gardens popup -->
                        <div id="gardensPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Community Gardens <button id="gardensPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/community-gardensFull.jpg">
                                                <p class="address text">
                                                663 W. 3rd Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">The University of Wisconsin Oshkosh
                                                Community Gardens project started in 2006 when a
                                                group of students decided to create an organic garden
                                                on campus as a way to build community. The garden was
                                                originally located on campus, with the goal was for
                                                it to eventually become a place where people in Oshkosh
                                                could also have garden space, which is difficult to
                                                find in the city.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Dempsey Hall popup -->
                        <div id="dempseyPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Dempsey Hall  <button id="dempseyPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="dempseyAboutLi" class="about"> About</li>
                                                <li id="dempseyBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!--  Dempsey Hall About Content -->
                                <div class="infoContainer">
                                        <div id="dempseyAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/centerforequityFull.jpeg">
                                                <p class="address text">
                                                800 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="dempseyAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">Built in 1918, the oldest building
                                                on campus, Dempsey Hall, serves as the administrative center
                                                of UW Oshkosh. Located at the center of campus, Dempsey Hall
                                                is home to a large number of University services, including
                                                the Admissions Office, Financial Aid, Student Accounts,
                                                Academic Computing, Office of International Education,
                                                Veterans Resource Center, Disability Services, Integrated Marketing
                                                and Communications, Sustainability Office, Renewable Energy Institute
                                                and more.</p>
                                        </div>
                                        <!--  Dempsey Hall Bathrooms Contents -->
                                        <div id="dempseyBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Three gender neutral bathrooms: rooms 004, 005 and 107 (with changing table)</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Donner Hall popup -->
                        <div id="donnerPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Donner Hall <button id="donnerPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/donnerFull.jpeg">
                                                <p class="address text">
                                                820 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Donner Hall, a four-story building,
                                                houses males on the first two floors and females
                                                on the top two floors. Hall facilities include
                                                kitchen, a TV lounge, ping-pong and pool tables,
                                                laundry facilities, floor study lounges and a full
                                                service front desk.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- East Hall popup -->
                        <div id="eastPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">East Hall <button id="eastPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/easthallFull.jpg">
                                                <p class="address text">
                                                New York Ave. &amp; Jackson St., Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">East Hall provides UW Oshkosh students
                                                green space for recreational activity and is the home
                                                to a number of Intramural sports and sport clubs.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Environmental Research and Innovation Center popup -->
                        <div id="environmentalPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Environmental Research and Innovation Center <button id="environmentalPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/aquaticstudiescenterFull.jpeg">
                                                <p class="address text">
                                                83 Pearl Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Built in 1979, the Aquatic Research
                                                Laboratory (ARL) acts as a training facility for
                                                future scientists in the fields of ecology,
                                                environmental and public health, biology, limnology,
                                                and microbiology. ARL also offers many types of
                                                analysis services to the surrounding community.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- evans hall popup -->
                        <div id="evansPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Evans Hall <button id="evansPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/evansFull.jpeg">
                                                <p class="address text">
                                                727 W. Lincoln Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Evans Hall is designed with two
                                                cubes connected by a common lounge on all floors,
                                                with alternating wings for men and women. Evans
                                                Hall houses only first year students and is a
                                                part of the LIFE (Learning in a First-Year
                                                Environment) program. Students will have the
                                                opportunity to participate in programs geared
                                                toward building connections with students, faculty
                                                and campus resources.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- fletcher popup -->
                        <div id="fletcherPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Fletcher Hall  <button id="fletcherPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/fletcherFull.jpeg">
                                                <p class="address text">
                                                712 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Fletcher Hall houses only first year students
                                                and participates in the LIFE (Learning in a First-Year
                                                Environment) program. Fletcher is a four-floor building,
                                                housing men and women on alternating wings of each floor.
                                                The hall has a strong tradition of participation in Homecoming
                                                and Winter Carnival. Facilities include washer and dryer units
                                                on each floor and in the basement, a study lounge on each floor,
                                                large recreation room in the basement and a full kitchen. Also
                                                located in the basement is a computer lab open to all residents
                                                of Fletcher Hall.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Fredric March Theatre popup -->
                        <div id="fredricPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Fredric March Theatre <button id="fredricPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- Campus Center for Equity & Diversity About Content -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/fredricmarchFull.jpeg">
                                                <p class="address text">
                                                926 Woodland Avenue, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/theater/theater/theater.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The Fredric March Theater
                                                is primarily used by the theater department to
                                                produce student plays. The theater department
                                                generally produces four shows per year, with
                                                students involved in set creation, stage
                                                effects and acting. The building can seat
                                                500 guests and features a computerized lighting
                                                control system, elevator equipped for storage
                                                and a fully functional fly system.</p>
                                        </div>
                                </div>
                        </div>

                        <!--  GRUENHAGEN POPUP-->
                        <div id="gruenhagenPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Gruenhagen Conference Center <button id="gruenhagenPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/gruenhagenFull.jpeg">
                                                <p class="address text">
                                                208 Osceola Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">UW Oshkosh is the only campus in the University
                                                of Wisconsin System to have a year-round conference center.
                                                Built in 1966, Gruenhagen Conference Center hosts more than 18,
                                                000 guests annually. Its two ten-story high-rises can hold over
                                                1,000 guests and have 27 meeting rooms. With close proximity to
                                                athletic fields, Gruenhagen hosts many summer youth camps. The
                                                conference center has a full-time professional conference planning
                                                staff dedicated to providing the best possible service to its patrons.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- HALSEY POPUP  -->
                        <div id="halseyPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Halsey Science Center <button id="halseyPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav three">
                                        <ul id="popupNav">
                                                <li id="halseyAboutLi" class="about"> About</li>
                                                <li id="halseyBathroomsLi">Bathrooms</li>
                                                <li id="halseyDiningLi">Dining<li>
                                        </ul>
                                </nav>
                                <!--  Halsey Science Center About Content -->
                                <div class="infoContainer">
                                        <div id="halseyAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/halseyFull.jpeg">
                                                <p class="address text">
                                                921 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="halseyAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">Named after Rufus
                                                Henry Halsey, president of the Oshkosh
                                                Normal School from 1898-1907, Halsey Science
                                                Center houses many of UW Oshkosh’s science
                                                departments. This building is home to the
                                                departments of biology, chemistry, physics,
                                                astronomy, computer science, medical technology
                                                and geography, as well as the Science Outreach
                                                and Women in Science programs.</p>
                                        </div>
                                        <!--  Halsey Science Center  Bathrooms Contents -->
                                        <div id="halseyBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Seven gender neutral bathrooms: rooms S048 (with changing table), 101H, 101J, S162 (with changing table), S257 (with changing table), S357 (with changing table) and S458 (with changing table)</p>
                                        </div>
                                        <!-- halsey dining content -->
                                        <div id="halseyDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/halseyGif.gif">
                                        </div>
                                        <div id="halseyDiningText" class="popupText">
                                                <h5 class="heading">Halsey Mi Taza To Go</h5>
                                                <p class=" subText text">Located on the second floor of Halsey Academic Building. Halsey Mi Taza To-Go offers a variety of different beverages including coffee and tea, as well as sandwiches, salads and more.</p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/academic/halzeymitaza.html" target="_blank">Mi Taza To Go</a><p>
                                        </div>
                                </div>
                        </div>

                        <!-- HARRINGTON POPUP -->
                        <div id="harringtonPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Harrington Hall <button id="harringtonPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="harringtonAboutLi" class="about"> About</li>
                                                <li id="harringtonBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!--  Harrington Hall About Content -->
                                <div class="infoContainer">
                                        <div id="harringtonAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/halseyFull.jpeg">
                                                <p class="address text">
                                                845 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="harringtonAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">Harrington Hall is
                                                home to the University’s geology department
                                                as well as some members of the Anthropology
                                                department. This facility includes a modern
                                                x-ray diffractometer, shared by the geology
                                                and chemistry departments, numerous laboratories,
                                                hundreds of mineral samples, and topographical and
                                                history maps of locations in and around Oshkosh.</p>
                                        </div>
                                        <!--  Harrington Hall Bathrooms Contents -->
                                        <div id="harringtonBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms 105 (with changing table) and 110</p>
                                        </div>
                                </div>
                        </div>

                        <!--  heating plant popup -->
                        <div id="heatingPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Heating Plant  <button id="heatingPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="heatingAboutLi" class="about"> About</li>
                                                <li id="heatingSustainabilityLi">Sustainability </li>
                                        </ul>
                                </nav>
                                <!-- Heating Plant About Content -->
                                <div class="infoContainer">
                                        <div id="heatingAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/heatingplantFull.jpeg">
                                                <p class="address text">
                                                1010 Woodland Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="heatingAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The Heating Plant
                                                provides steam to campus buildings for heat
                                                and hot water and also has a chilling plant
                                                that provides chilled water to cool some of
                                                the campus buildings. The Heating Plant contains
                                                four boilers that consume natural gas, coal or oil.</p>
                                        </div>
                                        <!-- Heating Plant Sustainability Contents -->
                                        <div id="heatingSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">The coal/natural gas plant provides
                                                steam to heat campus buildings, with natural gas (methane)
                                                as the main fuel source, which burns much cleaner than coal.
                                                Water is preheated with a solar thermal system before being
                                                converted to steam. There is a bag house to scrub out
                                                particulates associated with coal burning and 16 solar thermal
                                                panels producing an annual 1,910 therms.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- High Avenue Parking Ramp popup -->
                        <div id="parkingRampPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">High Avenue Parking Ramp <button id="parkingRampPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="parkingAboutLi"> About</li>
                                                <li id="parkingParkingLi"> Parking</li>
                                        </ul>
                                </nav>
                                <div class="infoContainer">
                                        <div id="parkingAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/parkingrampFull.jpeg">
                                                <p class="address text">
                                                725 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="parkingAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Built in 2007, the High Avenue parking
                                                ramp was the first step in the University’s long-term
                                                plan to relieve the parking shortage on campus. The
                                                first-ever built at a UW System comprehensive university,
                                                the three-level ramp contains 448 stalls. The first two
                                                levels are reserved for faculty, staff and commuter students
                                                while the third is available to students living in residence
                                                halls. Further plans include an additional parking ramp on
                                                the north side of campus. Construction is scheduled to begin
                                                in 2011.</p>
                                        </div>
                                        <div id="parkingRampParkingImage" class="imagePopup">
                                                <img  src="images/campuspictures/parkingRamp.png">
                                        </div>
                                        <div id="parkingRampParkingText" class="popupText">
                                        </div>
                                </div>
                        </div>

                        <!-- Horizon Village -->
                        <div id="horizonPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Horizon Village <button id="horizonPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="horizonAboutLi" class="about"> About</li>
                                                <li id="horizonSustainabilityLi">Sustainability </li>
                                        </ul>
                                </nav>
                                <!-- Horizon Village About Content -->
                                <div class="infoContainer">
                                        <div id="horizonAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/heatingplantFull.jpeg">
                                                <p class="address text">
                                                700 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="horizonAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">On November 15, 2010, the
                                                University of Wisconsin Oshkosh broke ground on
                                                a new suite-style residence hall. This facility
                                                offers many new opportunities for students at
                                                UW Oshkosh. Horizon Village will contain four
                                                person suites, two bedrooms (two people in each
                                                bedroom) and others will include 4 bedrooms (each
                                                person has their own room). All suites will include
                                                a private bathroom, common space and a kitchenette
                                                that is shared between the four roommates. There
                                                will also be large open gathering spaces and lounges
                                                in the building for all residents of the building
                                                to use. These will be located on all floors of the
                                                building.</p>
                                        </div>
                                        <!-- Horizon Village Sustainability Contents -->
                                        <div id="horizonSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">The first of its kind in the Western
                                                hemisphere, our dry fermentation anaerobic digester converts
                                                food, yard and other organic waste into biogases, which is
                                                burned to generate electricity. It consumes 6,000 tons of
                                                organic wastes annually and generates the equivalent of 8
                                                percent of UW Oshkosh’s electricity.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Kolf Sports Center popup -->
                        <div id="kolfPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Kolf Sports Center <button id="kolfPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="kolfAboutLi" class="about"> About</li>
                                                <li id="kolfBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Kolf Sports Center About Content -->
                                <div class="infoContainer">
                                        <div id="kolfAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/kolfFull.jpeg">
                                                <p class="address text">
                                                785 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="kolfAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">A multipurpose facility,
                                                Kolf Sports Center hosts the majority of UW
                                                Oshkosh’s indoor athletic events, such as
                                                basketball, wrestling, gymnastics and track,
                                                as well as intramural sports, concerts, commencement
                                                and classes in military science, physical education
                                                and dance.</p>
                                        </div>
                                        <!--  Kolf Sports Center Bathrooms Contents -->
                                        <div id="kolfBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">One gender neutral bathroom: room 169N (with changing table)</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Lincoln Hall popup -->
                        <div id="lincolnPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Lincoln Hall <button id="lincolnPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/lincoln-hallFull.jpg">
                                                <p class="address text">
                                                608 Algoma Blvd., Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Remodeled in 2014, Lincoln Hall
                                                houses the Division of Lifelong Learning and
                                                Community Engagement and the UW Oshkosh Children's
                                                Learning and Care Center. Lincoln Hall is also
                                                 home to the UW Oshkosh Learning in Retirement group.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Multicultural Education Center popup -->
                        <div id="multiculturalPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Multicultural Education Center <button id="multiculturalPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/multiculturaleducationFull.jpeg">
                                                <p class="address text">
                                                751 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">The Multicultural Education
                                                Center (MEC) offers an environment that
                                                promotes the appreciation of cultural diversity
                                                as well as a resource and information center
                                                for students, staff, faculty and community members
                                                interested in increasing their understanding of
                                                cultural differences.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Nursing & Education Building popup -->
                        <div id="nursingPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Nursing &amp; Education Building <button id="nursingPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="nursingAboutLi" class="about"> About</li>
                                                <li id="nursingBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Nursing & Education Building About Content -->
                                <div class="infoContainer">
                                        <div id="nursingAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/nursingeducationFull.jpeg">
                                                <p class="address text">
                                                845 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/nursingeducationcenter/b/learninglab/learninglab.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div id="nursingAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The Nursing and Education
                                                Center is home to the College of Nursing and the
                                                College of Education and Human Services. The bottom
                                                floor of this center features a clinical training
                                                facility for nursing students, which includes the
                                                latest technology.</p>
                                        </div>
                                        <!--  Nursing & Education Building Bathrooms Contents -->
                                        <div id="nursingBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">One gender neutral bathroom: room 020F</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Oviatt House popup -->
                        <div id="oviattPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Oviatt House <button id="oviattPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/oviattFull.jpeg">
                                                <p class="address text">
                                                842 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">The Oviatt House was built in
                                                1882 by Moses Hooper, an Oshkosh attorney.
                                                In 1912, after the death of its second owner,
                                                physician and surgeon C.W. Oviatt, the gray
                                                stone house was purchased by the Oshkosh Normal
                                                School for use as a women’s dormitory. During
                                                the Great Depression, it became the school’s
                                                president’s home. Since 1990, it has housed the
                                                UW Oshkosh Foundation, which coordinates all
                                                fundraising efforts for the University and
                                                oversees the distribution of school scholarships.
                                                The Oviatt House is on the National Register of Historic Homes.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Pollock Alumni House popup -->
                        <div id="pollockPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Pollock Alumni House <button id="pollockPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/pollockFull.jpeg">
                                                <p class="address text">
                                                765 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Constructed in 1920 by the
                                                founder of the Oshkosh B'Gosh Corporation,
                                                the home was sold to UW Oshkosh in the early
                                                1940s for use as a women's dormitory. It has
                                                housed the University’s Alumni Affairs since
                                                1971 and is one of the campus' three houses
                                                listed on the National Register of Historic Houses.
                                                With a red-tile roof, the Spanish-style Pollock Alumni
                                                House is considered one of the most unique alumni centers
                                                in the state.</p>
                                        </div>
                                </div>
                        </div>

                        <!--  POLK POPUP -->
                        <div id="polkPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Polk Library <button id="polkPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="polkAboutLi" class="about"> About</li>
                                                <li id="polkTourLi"> Tour</li>
                                        </ul>
                                </nav>
                                <!-- POLK  About Content -->
                                <div class="infoContainer">
                                        <div id="polkAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/polkFull.jpeg">
                                                <p class="address text">
                                                801 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/library/1/entrance/entrance.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div id="polkAboutText" class="popupText">
                                              <h5 class="heading">About this Building</h5>
                                              <p class=" subText text">In addition to cataloging
                                              more than 135,000 books and other library materials,
                                              UW Oshkosh’s Polk Library provides the University
                                              community with access to a wide range of electronic
                                              information. Over 13,500 students come to use the
                                              library's resources during the 100 hours that Polk
                                              Library is open a week.</p>
                                        </div>
                                        <!-- POLK Tour Contents -->
                                        <div id="polkTourText" class="tourText">
                                        <h5 class="heading">Tour Snapshot</h5>
                                        <p class="subText text">For more information on Polk Library at UW Oshkosh, visit: </p>
                                                <a class="subText link" href="https://www.uwosh.edu/library" target="_blank">Polk Library</a>
                                        </div>
                                        <div id="polkTourVideo"class="videoPopup">
                                                <iframe id="polkiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                </div>
                        </div>


                        <!-- Radford Hall popup-->
                        <div id="radfordPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Radford Hall <button id="radfordPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/radfordFull.jpeg">
                                                <p class="address text">
                                                777 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Radford Hall is home to the Student
                                                Health Center, which provides convenient and affordable
                                                healthcare including consultations, immunizations, lab
                                                work and minor procedures. The building also houses a
                                                computer lab with PCs and Macs, as well as the departments
                                                of English, foreign languages and literatures.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Reeve Memorial Union popup -->
                        <div id="reevePopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Reeve Memorial Union  <button id="reevePopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav five">
                                        <ul id="popupNav">
                                                <li id="reeveAboutLi" class="about"> About</li>
                                                <li id="reeveTourLi"> Tour</li>
                                                <li id="reeveSustainabilityLi"> Sustainability</li>
                                                <li id="reeveBathroomsLi"> Bathrooms</li>
                                                <li id="reeveDiningLi"> Dining</li>
                                        </ul>
                                </nav>
                                <!-- Reeve Memorial Union About Content -->
                                <div class="infoContainer">
                                        <div id="reeveAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/reeveFull.jpeg">
                                                <p class="address text">
                                                748 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/reeve/1/concourse/concourse.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div id="reeveAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">The union — the pulse of campus life
                                                outside the classroom — is a great place for students to
                                                hang out, study and work. It has great entertainment options
                                                as well as a copy center, art galleries, a food court, coffee
                                                shop, hair salon, movie theater, University Books &amp; More, the
                                                UW Oshkosh Credit Union and the Student Leadership and Involvement
                                                Center.</p>
                                        </div>
                                        <!-- Reeve Memorial Union Tour Contents -->
                                        <div id="reeveTourText" class="tourText">
                                                <h5 class="heading">Tour Snapshot</h5>
                                                <p class="subText text">Taylor talks a little bit about what you can find at Reeve Union.</p>
                                                <p class="subText text">For more information visit:  </p>
                                                <a class="subText link" href="https://reeve.uwosh.edu/" target="_blank">Reeve Union</a>
                                        </div>
                                        <div id="reeveTourVideo"class="videoPopup">
                                                <iframe id="reeveiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <!-- Reeve Memorial Union Sustainability Contents -->
                                        <div id="reeveSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">Reeve Memorial Union was renovated in 2000,
                                                with the south side of the building completely constructed with
                                                windows, providing day lighting all year and solar heat gain in
                                                winter. In the summer, trees shade the area reducing air conditioning
                                                needs. Fair Trade coffee, chocolate, handcrafts and jewelry are sold
                                                in Reeve.</p>
                                        </div>
                                        <!-- Reeve Memorial Union Bathrooms Contents -->
                                        <div id="reeveBathrooms" class="popupTextNoImage">
                                                  <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                  <p class="subText text">Two gender neutral bathrooms: rooms 028 (with changing table) and 034 (with changing table)</p>
                                        </div>
                                        <!-- reeve dining content -->
                                        <div id="reeveDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/reeveGif.gif">
                                                <ul>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/blackandgold.html" target="_blank">Black &#38; Gold Grill</a></li>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/gardentoss.html" target="_blank">The Garden Toss</a></li>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/pizzahutwingstreet.html" target="_blank">Pizza Hut/WingStreet</a></li>
                                                        <br>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/subconnection.html" target="_blank">SubConnection</a></li>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/whollyhabaneros.html" target="_blank">Wholly Habaneros</a></li>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/oshkoshsmoothie.html" target="_blank">Oshkosh Smoothie</a></li>
                                                        <br>
                                                        <li><a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/reeve/ayce.html" target="_blank">All-You-Care-To-Eat</a></li>
                                                </ul>
                                        </div>
                                        <div id="reeveDiningText" class="popupText">
                                                <h5 class="heading">Reeve Marketplace</h5>
                                                <p class=" subText text">Reeve Marketplace is located in the
                                                center of Reeve Memorial Union. This beautiful
                                                retail dining marketplace is the perfect dining
                                                option for the campus community! Filled with
                                                7 diverse venues, Reeve Marketplace offers
                                                something perfect for everybody. Right in the
                                                middle of campus makes Reeve Marketplace a easy
                                                place to stop and grab a bite to eat. Furthermore,
                                                there is always a cool event to check out in
                                                Reeve Union!
                                                </p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/blackhawkcommons.html" target="_blank">Blackhawk Commons</a><p>
                                        </div>
                                </div>
                        </div>

                        <!-- Sage Hall popup -->
                        <div id="sagePopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Reeve Memorial Union <button id="sagePopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav five">
                                        <ul id="popupNav">
                                                <li id="sageAboutLi" class="about"> About</li>
                                                <li id="sageTourLi"> Tour</li>
                                                <li id="sageSustainabilityLi"> Sustainability</li>
                                                <li id="sageBathroomsLi"> Bathrooms</li>
                                                <li id="sageDiningLi"> Dining</li>
                                        </ul>
                                </nav>
                                <!-- Sage Hall About Content -->
                                <div class="infoContainer">
                                        <div id="sageAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/sageFull.jpeg">
                                                <p class="address text">
                                                845 High Avenue, Oshkosh, WI, 54901</p>
                                                <a class="address link " href="https://www.uwosh.edu/map/main/campustour/sage/1/lobby/lobby.html" target="_blank"> 360 Panorama </a>
                                        </div>
                                        <div id="sageAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">By incorporating renewable
                                                energy sources and sustainable principles, the project,
                                                designed for a gold LEED rating from the U.S. Green Building
                                                Council, is expected to save the University more than $182,000
                                                annually. The four-story, 191,000-square-foot building contains
                                                27 state-of-the-art classrooms, two lecture halls, 23 labs,
                                                dozens of breakout/study rooms, and more.</p>
                                        </div>
                                        <!-- Sage Hall Tour Contents -->
                                        <div id="sageTourText" class="tourText">
                                                <h5 class="heading">Tour Snapshot</h5>
                                                <p class="subText text">Alissa talks about the newest academic building: Sage Hall. She points out a few of the locations and features in the building.</p>
                                        </div>
                                        <div id="sageTourVideo"class="videoPopup">
                                                <iframe id="sageiframe" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <!-- Sage Hall Sustainability Contents -->
                                        <div id="sageSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">Sage Hall (LEED Gold certified) has an
                                                estimated energy savings of 41 percent compared to standard
                                                construction with 10 percent of the building's energy produced
                                                from on-site renewable sources. Electricity use for lighting is
                                                reduced by 30 percent through the use of natural light, and rooftop
                                                solar thermal collectors provide 70 percent of the building's hot
                                                water. There are 188 photovoltaic panels on the roof and three pole
                                                mounted solar tracking arrays. Altogether producing an estimated
                                                annual 48,167 kWh of electricity or 6 percent of its electrical needs.
                                                A 5,203 sq. ft. green roof, which can hold 6,192 gallons of water adds
                                                insulation while filtering rainwater and slowing runoff.</p>
                                        </div>
                                        <!-- Sage Hall Bathrooms Contents -->
                                        <div id="sageBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Every floor has a gender neutral bathroom.</p>
                                        </div>
                                        <!-- sage dining content -->
                                        <div id="sageDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/sageGif.gif">
                                        </div>
                                        <div id="sageDiningText" class="popupText">
                                                <h5 class="heading">Sage Caf&#233;</h5>
                                                <p class="subText text">Located on the first floor of Sage Hall.
                                                Sage Caf&#233; offers bagels that are ultimate in freshness!
                                                With multiple bagel flavors and spreads, breakfast
                                                sandwiches, lunch sandwiches, grab&#8208;and&#8208;go items, and
                                                full We Proudly Serve Starbucks espresso menu, there’s
                                                surely plenty to choose from for any appetite.</p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/academic/sage.html" target="_blank">Sage Caf&#233;</a><p>
                                        </div>
                                </div>
                        </div>


                        <!-- Scott Hall popup -->
                        <div id="scottPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Scott Hall <button id="scottPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="scottAboutLi"> About</li>
                                                <li id="scottDiningLi"> Dining</li>
                                        </ul>
                                </nav>
                                <div class="infoContainer">
                                        <div id="scottAboutImage" class="imagePopup">
                                                <img  src="images/campuspictures/scottFull.jpeg">
                                                <p class="address text">
                                                625 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="scottAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The largest residence hall on campus,
                                                Scott Hall consists of two connected 10-story housing
                                                facilities, North Scott and South Scott. The hall’s
                                                floors offer scattered, coed or all women’s living
                                                options. Residents of both towers share a large main
                                                lounge, which includes a kitchen, big-screen TV, baby
                                                grand piano and ping-pong, foosball and pool tables.
                                                The main desk provides many items including games, kitchen
                                                equipment and a change machine.</p>
                                        </div>
                                        <!-- scott dining content -->
                                        <div id="scottDiningImage" class="imagePopup">
                                                <img  src="images/campuspictures/scottGif.gif">
                                        </div>
                                        <div id="scottDiningText" class="popupText">
                                                <h5 class="heading">Scotty&#39;s Subs &#38; Stuff</h5>
                                                <p class=" subText text">Scotty&#39;s is conveniently located on the
                                                first floor of Scott Hall. Scotty&#39;s offers a variety
                                                of food such as Titan Taco, deli subs and sandwiches,
                                                beverages and other snacks. Frozen food and other
                                                grocery items are also available in the Scotty&#39;s
                                                Convenience Store!</p>
                                                <p> Learn More: <a class="link" href="https://uwoshkosh.sodexomyway.com/dining-choices/Scottys.html" target="_blank">Scotty&#39;s</a><p>
                                        </div>
                                </div>
                        </div>

                        <!-- Stewart Hall popup -->
                        <div id="stewartPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Stewart Hall <button id="stewartPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/stewartFull.jpeg">
                                                <p class="address text">
                                                723 W. Lincoln Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">Stewart Community is now a double-room
                                                occupancy, four-story facility. Amenities include
                                                a washer and dryer unit on each floor, senior seminar
                                                room, group project room and main desk snack bar.
                                                Stewart Community is located on the edge of campus,
                                                next to Fletcher and Evans halls.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Student Recreation & Wellness Center popup -->
                        <div id="recreationPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Student Recreation &amp; Wellness Center  <button id="recreationPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav three">
                                        <ul id="popupNav">
                                                <li id="recreationAboutLi" class="about"> About</li>
                                                <li id="recreationSustainabilityLi"> Sustainability</li>
                                                <li id="recreationBathroomsLi"> Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Student Recreation & Wellness Center About Content -->
                                <div class="infoContainer">
                                        <div id="recreationAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/srwcFull.jpeg">
                                                <p class="address text">
                                                735 Pearl Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="recreationAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">Constructed in 2007, this
                                                state-of-the-art facility features multiple basketball
                                                and volleyball courts, an indoor soccer court, more than
                                                80 cardio exercise machines, a jogging/walking track,
                                                climbing wall, aerobic studios, Cyber Café and many
                                                free-standing and machine weights. SRWC also offers childcare,
                                                group exercise classes, wellness programs, massage therapy
                                                and day or weekend trips. Due to segregated University fees,
                                                use of this facility is free to all students.</p>
                                                </div>
                                        <!-- Student Recreation & Wellness Center Sustainability Contents -->
                                        <div id="recreationSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">The Student Recreation and Wellness Center
                                                (SRWC) uses locally sourced building materials. Features include
                                                a sophisticated lighting system that senses ambient outdoor light
                                                and adjusts accordingly and north/south orientation increases
                                                energy efficiency. There is one pole-mounted photovoltaic tracker
                                                system at the tennis courts producing an estimated annual 4,719
                                                kWh.</p>
                                        </div>
                                        <!-- Student Recreation & Wellness Center Bathrooms Contents -->
                                        <div id="recreationBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">One gender neutral bathroom: room 127 (with changing table)</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Student Success Center popup -->
                        <div id="successPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Student Success Center <button id="successPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav four">
                                        <ul id="popupNav">
                                                <li id="successAboutLi" class="about"> About</li>
                                                <li id="successTourLi"> Tour</li>
                                                <li id="successSustainabilityLi"> Sustainability</li>
                                                <li id="successBathroomsLi"> Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Student Success Center About Content -->
                                <div class="infoContainer">
                                        <div id="successAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/studentsuccessFull.jpeg">
                                                <p class="address text">
                                                750 Elmwood Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="successAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">The Student Success Center
                                                provides the University’s 13,500 students with a
                                                single destination for student advising, career
                                                services, counseling, tutoring and learning assistance.
                                                Housed in this facility are Career Services, the Center
                                                for Academic Resources, the Counseling Center, the
                                                Undergraduate Advising Resource Center and the Writing
                                                Center. This building features state-of-the-art “green”
                                                technology, including a geothermal heat field, which
                                                takes advantage of moderate temperatures in the earth
                                                to provide heat in the winter and coolant in the summer.</p>
                                        </div>
                                        <!-- Student Success Center Tour Contents -->
                                        <div id="successTourText" class="tourText">
                                                <h5 class="heading">Tour Snapshot</h5>
                                                <p class="subText text">Lue takes us around the Student Success Center at UW Oshkosh, detailing resources such as the UARC, CAR and Counseling Center.</p>
                                                <p class="subText text">Resources:</p>
                                                <ul>
                                                        <li><a class="subText link" href="https://www.uwosh.edu/couns_center" target="_blank">Counseling Center</a></li>
                                                        <li><a class="subText link" href="https://advising.uwosh.edu/" target="_blank">UARC (Academic Advising)</a></li>
                                                        <li><a class="subText link" href="https://writingcenter.uwosh.edu/" target="_blank">Writing Center</a></li>
                                                        <li><a class="subText link" href="https://car.uwosh.edu/" target="_blank">CAR (Center for Academic Resources)</a></li>
                                                        <li><a class="subText link" href="https://career.uwosh.edu/" target="_blank">Career Services</a></li>
                                                </ul>
                                        </div>
                                        <div id="successTourVideo"class="videoPopup">
                                                <iframe id="successiframe"width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        <!-- Student Success Center Sustainability Contents -->
                                        <div id="successSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">The Student Success Center (LEED Silver
                                                certified) features a ground source geothermal system that
                                                makes heating and cooling 70 percent more efficient. 84
                                                photovoltaic panels on the roof generate an estimated annual
                                                23,973 kWh of electricity.</p>
                                        </div>
                                        <!-- Student Success Center Bathrooms Contents -->
                                        <div id="successBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">One gender neutral bathroom: room 115 (with changing table)</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Swart Hall popup -->
                        <div id="swartPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Swart Hall <button id="swartPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="swartAboutLi" class="about"> About</li>
                                                <li id="swartBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Nursing & Education Building About Content -->
                                <div class="infoContainer">
                                        <div id="swartAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/swartFull.jpeg">
                                                <p class="address text">
                                                912 Algoma Boulevard, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="swartAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">Completed in 1928, Swart Hall
                                                was originally known as the Rose C. Swart Training
                                                School. For nearly a half a century, student teachers
                                                at the Normal School honed their teaching skills by
                                                instructing kindergarden through ninth grade. Swart
                                                Hall is now home to the economics, mathematics, and
                                                sociology departments.</p>
                                        </div>
                                        <!--  Nursing & Education Building Bathrooms Contents -->
                                        <div id="swartBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms 130 (with changing table) and 132</p>
                                        </div>
                                </div>
                        </div>


                        <!-- Taylor Hall popup -->
                        <div id="taylorPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Taylor Hall  <button id="taylorPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="taylorAboutLi" class="about"> About</li>
                                                <li id="taylorSustainabilityLi"> Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- Taylor Hall About Content -->
                                <div class="infoContainer">
                                        <div id="taylorAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/taylorFull.jpeg">
                                                <p class="address text">
                                                780 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="taylorAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">Taylor Hall is a four-floor,
                                                coed residence hall that was recently renovated in
                                                2005. Renovations have made it the only hall to
                                                offer individual climate control. In addition,
                                                bunks/lofts are provided to residents; no personal
                                                bunks/lofts are permitted. The hall features a
                                                lower-level, open concept kitchen, expanded
                                                recreational areas, music practice rooms and a
                                                large study area. The lobby has been designed as
                                                a gathering place for hall residents and fosters
                                                healthy interaction among community members.</p>
                                        </div>
                                        <!-- Taylor Hall Contents -->
                                        <div id="taylorSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">Taylor Hall's green features include
                                                energy efficient windows, extra thick insulation, an
                                                increased amount of natural lighting and individual
                                                room climate control. There are 16 rooftop solar thermal
                                                panels producing an estimated annual 1,300 therms used to
                                                heat water.</p>
                                        </div>
                                </div>
                        </div>


                        <!-- Titan Stadium popup -->
                        <div id="titanPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Titan Stadium <button id="titanPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="titanAboutLi" class="about"> About</li>
                                                <li id="titanSustainabilityLi"> Sustainability</li>
                                        </ul>
                                </nav>
                                <!-- Titan Stadium About Content -->
                                <div class="infoContainer">
                                        <div id="titanAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/titanstadiumFull.jpeg">
                                                <p class="address text">
                                                450 Josslyn Street, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="titanAboutText" class="popupText">
                                                <h5 class="heading">About this Building</h5>
                                                <p class=" subText text">Recent renovations have
                                                made the Oshkosh Sports Complex, the premiere
                                                facility of its kind in the state. This exceptional
                                                facility is home to UW Oshkosh’s football, softball,
                                                baseball, men and women’s soccer, and men and women’s
                                                track and field teams as well as local high school
                                                teams.</p>
                                        </div>
                                        <!-- Titan Stadium Sustainability Contents -->
                                        <div id="titanSustainability" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Sustainability Point of Interest</h5>
                                                <p class="subText text">In 2004, the grass football field was
                                                replaced with artificial turf, resulting in an estimated savings
                                                of 850,000 gallons of water per year for irrigation.</p>
                                        </div>
                                </div>
                        </div>

                        <!-- University Police popup -->
                        <div id="policePopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Swart Hall <button id="policePopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <nav class="popupNav">
                                        <ul id="popupNav">
                                                <li id="policeAboutLi" class="about"> About</li>
                                                <li id="policeBathroomsLi">Bathrooms</li>
                                        </ul>
                                </nav>
                                <!-- University Police About Content -->
                                <div class="infoContainer">
                                        <div id="policeAboutImage"class="imagePopup">
                                                <img  src="images/campuspictures/universitypoliceFull.jpeg">
                                                <p class="address text">
                                                738 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div id="policeAboutText" class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class=" subText text">The UW Oshkosh Police Department
                                                is dedicated to providing a safe environment conducive
                                                to personal growth and educational development. The
                                                staff of highly trained, professional state police
                                                officers patrols campus 24 hours a day, seven days a
                                                week. The police department also oversees community
                                                service officers, trained student employees who patrol
                                                campus and serve as police dispatchers.</p>
                                        </div>
                                        <!--  University Police Bathrooms Contents -->
                                        <div id="policeBathrooms" class="popupTextNoImage">
                                                <h5 class="sustHeading"> Gender Neutral Bathrooms and Family Restrooms</h5>
                                                <p class="subText text">Two gender neutral bathrooms: rooms 102B and 107</p>
                                        </div>
                                </div>
                        </div>


                        <!-- Webster Hall popup -->
                        <div id="websterPopup" class="popup">
                                <div class="popupBlack">
                                        <h1 class="text yellow ">Webster Hall <button id="websterPopupClose" class="closeButton mdl-color-text--white mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect text">
                                                <i  class="material-icons">close</i>
                                        </button></h1>
                                </div>
                                <!-- <nav class="popupNav">
                                <ul id="popupNav">
                                <li class="about"> About</li>
                                </ul>
                                </nav> -->
                                <div class="infoContainer">
                                        <div class="imagePopup">
                                                <img  src="images/campuspictures/websterFull.jpeg">
                                                <p class="address text">
                                                810 High Avenue, Oshkosh, WI, 54901</p>
                                        </div>
                                        <div class="popupText">
                                                <h5 class="heading">About This Building</h5>
                                                <p class="text">One of the smallest residence halls
                                                on campus, Webster Hall has three floors, housing
                                                females on the first and third floors and males on
                                                the second floor. Facilities includes a fitness room,
                                                computer lab, piano room, large screen TV, pool,
                                                pingpong and foosball tables, kitchen, laundry
                                                facilities and a number of study and recreational
                                                 lounge areas.</p>
                                        </div>
                                </div>
                        </div>
                        <!--  -->
                        <!-- POPUPS END -->



                        <!-- VR images -->


                        <!-- Within these script tags is all the code for imbedding the panoramas
                        and creating their hotspots; the panorama divs are in the html following this.
                        The code for the on.click functions for the menu buttons + hiding/showing
                        these panoramas can be found in main.js.
                          The reason the code is split up into two places is that the
                        google vr view code for creating the vrview.player,that the panorama
                        is imbedded in, does not play nicely when it is in another js file.
                         ¯\_(ツ)_/¯ -->

                        <script>

                        // here lie the panorama images in an array
                        var panorama = [
                          // 0 titan field
                          "images/Panorama/titan field/titanFieldPano.jpg",
                          // 1 womens center front entrance
                          "images/Panorama/womens center/womensCenterFront.jpg",
                          // 2 womens center main room
                          "images/Panorama/womens center/womensCenter.jpg",
                          // 3 womens center backroom
                          "images/Panorama/womens center/womensCenterBackroom.jpg",
                          // 4 executive board room
                          "images/Panorama/executive board room/executiveBoardRoom.jpg",
                          // 5 dempsey outside, sidewalk tour
                          "images/Panorama/sidewalk/UWO360b_-2.jpg",
                          // 6 oviatt outside> sidewalk closest to dempsey
                          // tourDeOv
                          "images/Panorama/sidewalk/UWO360_-17.jpg",
                          // 7 dempsey>oviatt two
                          // tourDeOvTwo
                          "images/Panorama/sidewalk/UWO360_-22.jpg",
                          // 8 roadOvDe; roadside by Oviatt and Dempsey
                          // across from Clow
                          "images/Panorama/sidewalk/UWO360_-5.jpg",
                          // 9 behind Dempsey, middle garden area
                          // treesDeOv
                          "images/Panorama/sidewalk/UWO360_-28.jpg",
                          // 10 middle garden, bench area
                          // midGarden
                          "images/Panorama/sidewalk/UWO360_-32.jpg",
                          // 11 midGardenTwo
                          "images/Panorama/sidewalk/UWO360_-35.jpg",
                          // 12 midGardenThree
                          "images/Panorama/sidewalk/UWO360_-39.jpg",
                          // 13 midGardenFour
                          "images/Panorama/sidewalk/UWO360_-42.jpg",
                          // 14 middle of campus Swart and Halsey
                          // midSwHa
                          "images/Panorama/sidewalk/UWO360_-46.jpg",
                          // 15 midSwHaTwo
                          "images/Panorama/sidewalk/UWO360_-53.jpg",
                          // 16 swart corner; cornerSw
                          "images/Panorama/sidewalk/UWO360_-58.jpg",
                          // 17 midSw
                          "images/Panorama/sidewalk/UWO360_-62.jpg",
                          // 18 behindSw
                          "images/Panorama/sidewalk/UWO360_-66.jpg",
                          // 19 Swart and Buckstaff
                          // swBu
                          "images/Panorama/sidewalk/UWO360_-69.jpg",
                          // 20 swart halsey buckstaff; swBuHa
                          "images/Panorama/sidewalk/UWO360_-73.jpg",
                          // 21 halseycorner; cornerHa
                          "images/Panorama/sidewalk/UWO360_-75.jpg",
                          // 22 behind halsey, front of ac
                          // behindHaAr
                          "images/Panorama/sidewalk/UWO360_-81.jpg",
                          // 23 mid halsey and ac road
                          // midHaAr
                          "images/Panorama/sidewalk/UWO360_-84.jpg",

                        ];

                        // titanField panorama embed
                        document.getElementById("titanField").addEventListener('click', ontitanFieldImageImageLoad)
                            function ontitanFieldImageImageLoad() {
                                var titanFieldImage = new VRView.Player('#titanFieldImage', {
                                    image: panorama[0],
                                    is_stereo: false
                                });
                                // makes sure that if the titanfield button in menu is clicked it doesn't continuously
                                // make more panorama players
                              document.getElementById("titanField").removeEventListener('click', ontitanFieldImageImageLoad);
                            // styling for iframe
                            $("#titanFieldImage > iframe").addClass("vr");

                            if(window.matchMedia("(min-width: 1025px)").matches){
                                // web
                                var width = ($(window).width() - 377)
                                $(".vr").css("width", width);
                                $(".vrDiv").css("width", width);
                            } else{
                                // mobile
                                var height = ($(window).height() - 70)
                                if($(window).height() > $(window).width()){
                                    // if mobile portrait
                                    $(".vr").css("height", "347px");
                                    $(".vrDiv").css("height", "347px");
                                } else{
                                    // if mobile landscape
                                    $(".vr").css("height", height);
                                    $(".vrDiv").css("height",  height)
                                }
                            };
                        }

                        // womens center panorama
                        document.getElementById("womensCenter").addEventListener('click', onLoad)
                          // open 1
                          // creates vr view player
                            function onLoad(){
                                      // open 2
                                      womensCenter = new VRView.Player('#womensCenterImage', {
                                        image: panorama[1],
                                        is_stereo: false,
                            // close 2
                            });
                            //makes sure no duplicate players can be created
                            document.getElementById("womensCenter").removeEventListener('click', onLoad);
                            // styling for iframe
                            $("#womensCenterImage > iframe").addClass("vr");
                            if(window.matchMedia("(min-width: 1025px)").matches){
                                // web
                                var width = ($(window).width() - 377)
                                $(".vr").css("width", width);
                                $(".vrDiv").css("width", width);
                            } else{
                                // mobile
                                var height = ($(window).height() - 70)
                                if($(window).height() > $(window).width()){
                                    // if mobile portrait
                                    $(".vr").css("height", "347px");
                                    $(".vrDiv").css("height", "347px");
                                } else{
                                    // if mobile landscape
                                    $(".vr").css("height", height);
                                    $(".vrDiv").css("height",  height)
                                }
                            };
                            // open 3
                            //adding hotspot
                            womensCenter.on('ready', function(event){

                              // open 7
                              // hotspot id is VERY important, ids cannot be reused
                              womensCenter.addHotspot('intitialId', {
                                pitch: 20, // In degrees. Up is positive.
                                yaw: -125, // In degrees. To the left is positive.
                                radius: 0.05, // Radius of the circular target in meters.
                                distance: 1.5 // Distance of target from camera in meters.

                                // close addHotspot (close 7)
                              });


                              // open 5
                              womensCenter.on('click', function(event) {
                                // open 6

                                  if (event.id == 'intitialId') {
                                    // Handle hotspot click.
                                    // sends to function that creates the backroom scene
                                          womensCenterChange();
                                  }

                              // close 5
                              });

                            // close 3
                            });

                        // close 1
                        }

                        // function that changes the image that the player loads
                        // takes user to the womens center backroom
                        function womensCenterChange(){
                          womensCenter.setContent({
                            image: panorama[2],
                            is_stereo: false
                          });

                            womensCenter.addHotspot('womensCenter-backroom', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: -5, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 2 // Distance of target from camera in meters.
                            });
                            womensCenter.addHotspot('womensCenter-Entrance', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 153, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 2 // Distance of target from camera in meters.
                            });
                            // open 5
                            womensCenter.on('click', function(event) {
                              // open 6

                                 if (event.id == 'womensCenter-backroom'){
                                        womensCenterBackroom();
                                // close 6
                              } else if (event.id == 'womensCenter-Entrance'){
                                        womensCenterEntrance();

                              }
                            // close 5
                            });
                        }

                        // basically now they are just looping back and forth
                        // between the womensCenterBackroom function and this function
                        // so the panorama image is changed and the two hotspots are used
                        // *does not work if the womensCenterBackroom function is looped
                        // *back to the load function
                        function womensCenterBackroom(){
                          womensCenter.setContent({
                            image: panorama[3],
                            is_stereo: false
                          });
                          // create new hotspot to return to womens center
                            womensCenter.addHotspot('womensCenter', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: 17, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 1 // Distance of target from camera in meters.

                            });
                            // open 5
                            // when the hotspot is clicked the user will be taken back to the
                            // womens center main room using the womens center function
                            womensCenter.on('click', function(event) {
                              // open 6
                                if (event.id == 'womensCenter') {
                                  // Handle hotspot click.
                                        womensCenterChange();
                                }

                            // close 5
                            });

                        }

                        function womensCenterEntrance(){
                          womensCenter.setContent({
                            image: panorama[1],
                            is_stereo: false
                          });

                            womensCenter.addHotspot('womensCenterMain', {
                              pitch: 20, // In degrees. Up is positive.
                              yaw: -125, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 1.5 // Distance of target from camera in meters.

                            });
                            // open 5
                            womensCenter.on('click', function(event) {
                              // open 6

                                 if (event.id == 'womensCenterMain'){
                                        womensCenterChange()
                                // close 6
                              }
                            // close 5
                            });
                        }




                        // executive board room panorama embed
                        document.getElementById("executiveRoom").addEventListener('click', onexecutiveRoomImageLoad)
                            function onexecutiveRoomImageLoad() {
                                var executiveRoomImage = new VRView.Player('#executiveRoomImage', {
                                    image: panorama[4],
                                    is_stereo: false
                                });
                                // makes sure that if the titanfield button in menu is clicked it doesn't continuously
                                // make more panorama players
                              document.getElementById("executiveRoom").removeEventListener('click', onexecutiveRoomImageLoad);
                            // styling for iframe
                            $("#executiveRoomImage > iframe").addClass("vr");

                            if(window.matchMedia("(min-width: 1025px)").matches){
                                // web
                                var width = ($(window).width() - 377)
                                $(".vr").css("width", width);
                                $(".vrDiv").css("width", width);
                            } else{
                                // mobile
                                var height = ($(window).height() - 70)
                                if($(window).height() > $(window).width()){
                                    // if mobile portrait
                                    $(".vr").css("height", "347px");
                                    $(".vrDiv").css("height", "347px");
                                } else{
                                    // if mobile landscape
                                    $(".vr").css("height", height);
                                    $(".vrDiv").css("height",  height)
                                }
                            };
                        }


                        //
                        // start sidewalk tour (thanks Doug!)
                        //

                        document.getElementById("dempseyStart").addEventListener('click', onsidewalkTourLoad)
                          // creates vr view player
                            function onsidewalkTourLoad(){
                                      sidewalkTour = new VRView.Player('#sidewalkTour', {
                                        image: panorama[5],
                                        is_stereo: false,
                            });
                            //makes sure no duplicate players can be created
                            document.getElementById("dempseyStart").removeEventListener('click', onsidewalkTourLoad);
                            // styling for iframe
                            $("#sidewalkTour > iframe").addClass("vr");
                            if(window.matchMedia("(min-width: 1025px)").matches){
                                // web
                                var width = ($(window).width() - 377)
                                $(".vr").css("width", width);
                                $(".vrDiv").css("width", width);
                            } else{
                                // mobile
                                var height = ($(window).height() - 70)
                                if($(window).height() > $(window).width()){
                                    // if mobile portrait
                                    $(".vr").css("height", "347px");
                                    $(".vrDiv").css("height", "347px");
                                } else{
                                    // if mobile landscape
                                    $(".vr").css("height", height);
                                    $(".vrDiv").css("height",  height)
                                }
                            };
                            //adding hotspot
                            sidewalkTour.on('ready', function(event){
                              // hotspot id is VERY important, ids cannot be reused
                              sidewalkTour.addHotspot('sidewalkId', {
                                pitch: -10, // In degrees. Up is positive.
                                yaw: 55, // In degrees. To the left is positive.
                                radius: 0.05, // Radius of the circular target in meters.
                                distance: 1 // Distance of target from camera in meters.
                              });
                              sidewalkTour.on('click', function(event) {
                                  if (event.id == 'sidewalkId') {
                                    // Handle hotspot click.
                                          tourDeOv();
                                  }
                              });
                            });
                        }

                        // see sidewalk tour naming scheme txt file to understand naming scheme for
                        // the functions in the sidewalk tour
                        function tourDeOv(){
                          sidewalkTour.setContent({
                            image: panorama[6],
                            is_stereo: false
                          });

                            sidewalkTour.addHotspot('tourDeOvTwo', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: -80, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 1 // Distance of target from camera in meters.
                            });
                            sidewalkTour.addHotspot('dempsey', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: 163, // In degrees. To the left is positive.
                              radius: 0.08, // Radius of the circular target in meters.
                              distance: 2 // Distance of target from camera in meters.
                            });
                            sidewalkTour.addHotspot('roadOvDe', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: 103.5, // In degrees. To the left is positive.
                              radius: 0.08, // Radius of the circular target in meters.
                              distance: 2 // Distance of target from camera in meters.
                            });


                            sidewalkTour.on('click', function(event) {
                              // two options: go back to dempsey or go closer to oviatt house
                                 if (event.id == 'tourDeOvTwo'){
                                        tourDeOvTwo();
                              } else if (event.id == 'dempsey'){
                                        dempseyFront();
                              } else if (event.id == 'roadOvDe'){
                                        roadOvDe();

                              }
                            });
                          }
                                // repeat of load function start because that's how it has to work
                                // (can't just reload the original function to get back to Dempsey)
                                function dempseyFront(){
                                  sidewalkTour.setContent({
                                    image: panorama[5],
                                    is_stereo: false
                                  });
                                    sidewalkTour.addHotspot('tourDeOv', {
                                      pitch: -10, // In degrees. Up is positive.
                                      yaw: 55, // In degrees. To the left is positive.
                                      radius: 0.05, // Radius of the circular target in meters.
                                      distance: 1 // Distance of target from camera in meters.

                                    });
                                    sidewalkTour.on('click', function(event) {
                                         if (event.id == 'tourDeOv'){
                                                tourDeOv();
                                      }
                                    });
                                }
                                function roadOvDe(){
                                  sidewalkTour.setContent({
                                    image: panorama[8],
                                    is_stereo: false
                                  });
                                    sidewalkTour.addHotspot('tourDeOvThird', {
                                      pitch: 0, // In degrees. Up is positive.
                                      yaw: -100, // In degrees. To the left is positive.
                                      radius: 0.05, // Radius of the circular target in meters.
                                      distance: 1 // Distance of target from camera in meters.

                                    });
                                    sidewalkTour.on('click', function(event) {
                                         if (event.id == 'tourDeOvThird'){
                                                tourDeOv();
                                      }
                                    });
                                }



                        function tourDeOvTwo(){
                          sidewalkTour.setContent({
                            image: panorama[7],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('tourDeOvAgain', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: 88, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 1 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('treesDeOv', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: -92, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: 1 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'tourDeOvAgain') {
                                  // Handle hotspot click.
                                        tourDeOv();
                                } else if (event.id == 'treesDeOv'){
                                        treesDeOv();
                                }
                            });
                        }
                        function treesDeOv(){
                          sidewalkTour.setContent({
                            image: panorama[9],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('tourDeOvTwoBack', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: 95, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .7 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midGarden', {
                              pitch: 0, // In degrees. Up is positive.
                              yaw: -80, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'tourDeOvTwoBack') {
                                  // Handle hotspot click.
                                  tourDeOvTwo();
                                } else if (event.id == 'midGarden'){
                                  midGarden();
                                }
                            });

                        }
                        function midGarden(){
                          sidewalkTour.setContent({
                            image: panorama[10],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('treesDeOvBack', {
                              pitch: -5, // In degrees. Up is positive.
                              yaw: -95, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .7 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midGardenTwo', {
                              pitch: -5, // In degrees. Up is positive.
                              yaw: 85, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .7 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'treesDeOvBack') {
                                  // Handle hotspot click.
                                  treesDeOv();
                                } else if (event.id == 'midGardenTwo'){
                                  midGardenTwo();
                                }
                            });

                        }
                        function midGardenTwo(){
                          sidewalkTour.setContent({
                            image: panorama[11],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midGardenBack', {
                              pitch: -5, // In degrees. Up is positive.
                              yaw: -92, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .7 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midGardenThree', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 160, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .7 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'midGardenBack') {
                                  // Handle hotspot click.
                                  midGarden();
                                } else if  (event.id == 'midGardenThree'){
                                  midGardenThree();
                                }
                            });

                        }
                        function midGardenThree(){
                          sidewalkTour.setContent({
                            image: panorama[12],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midGardenTwoBack', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: -150, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midGardenFour', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 65, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'midGardenTwoBack') {
                                  // Handle hotspot click.
                                  midGardenTwo();
                                } else if (event.id == 'midGardenFour'){
                                  midGardenFour();
                                }
                            });

                        }
                        function midGardenFour(){
                          sidewalkTour.setContent({
                            image: panorama[13],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midGardenThreeBack', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: -70, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midSwHa', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 80, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'midGardenThreeBack') {
                                  // Handle hotspot click.
                                  midGardenThree();
                                } else if (event.id == 'midSwHa'){
                                      midSwHa();
                                }

                            });
                        }
                        function midSwHa(){
                          sidewalkTour.setContent({
                            image: panorama[14],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midGardenFourBack', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: -90, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midSwHaTwo', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 85, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'midGardenFourBack') {
                                  // Handle hotspot click.
                                  midGardenFour();
                                } else if (event.id == 'midSwHaTwo'){
                                  midSwHaTwo();

                                }
                            });
                        }
                        function midSwHaTwo(){
                          sidewalkTour.setContent({
                            image: panorama[15],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midSwHaBack', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: -94, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('cornerSw', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 90, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                                if (event.id == 'midSwHaBack') {
                                  // Handle hotspot click.
                                  midSwHa();
                                } else if (event.id == 'cornerSw'){
                                  cornerSw();
                                }
                            });
                        }
                        function cornerSw(){
                          sidewalkTour.setContent({
                            image: panorama[16],
                            is_stereo: false
                          });
                            sidewalkTour.addHotspot('midSwHaTwoBack', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: -94, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.addHotspot('midSw', {
                              pitch: 5, // In degrees. Up is positive.
                              yaw: 90, // In degrees. To the left is positive.
                              radius: 0.05, // Radius of the circular target in meters.
                              distance: .5 // Distance of target from camera in meters.

                            });
                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'midSwHaTwoBack'){
                                 midSwHaTwo();
                               } else if (event.id == 'midSw'){
                                 midSw();
                               }
                            });
                        }
                        function midSw(){
                          sidewalkTour.setContent({
                            image: panorama[17],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('cornerSwBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -92, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('behindSw', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 90, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });

                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'cornerSwBack'){
                                 cornerSw();
                               } else if (event.id == 'behindSw'){
                                 behindSw();
                               }
                            });
                        }
                        function behindSw(){
                          sidewalkTour.setContent({
                            image: panorama[18],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('midSwBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -92, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('swBu', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 90, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });

                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'midSwBack'){
                                 midSw();
                               } else if (event.id == 'swBu'){
                                 swBu();
                               }
                            });
                        }
                        function swBu(){
                          sidewalkTour.setContent({
                            image: panorama[19],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('behindSwBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -86, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('swBuHa', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 95, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });

                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'behindSwBack'){
                                 behindSw();
                               } else if (event.id == 'swBuHa'){
                                 swBuHa();
                               }
                            });
                        }
                        function swBuHa(){
                          sidewalkTour.setContent({
                            image: panorama[20],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('swBuBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -92, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('cornerHa', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 90, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'swBuBack'){
                                 swBu();
                               } else if (event.id == 'cornerHa'){
                                 cornerHa();
                               }
                            });
                        }
                        function cornerHa(){
                          sidewalkTour.setContent({
                            image: panorama[21],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('swBuHaBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -88, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('behindHaAr', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 95, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'swBuHaBack'){
                                 swBuHa();
                               } else if (event.id == 'behindHaAr'){
                                 behindHaAr();
                               }
                            });
                        }
                        function behindHaAr(){
                          sidewalkTour.setContent({
                            image: panorama[22],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('cornerHaBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -80, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                          sidewalkTour.addHotspot('midHaAr', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: 100, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'cornerHaBack'){
                                 cornerHa();
                               } else if (event.id == 'midHaAr'){
                                 midHaAr();
                               }
                            });
                        }
                        function midHaAr(){
                          sidewalkTour.setContent({
                            image: panorama[23],
                            is_stereo: false
                          });
                          sidewalkTour.addHotspot('behindHaArBack', {
                            pitch: 5, // In degrees. Up is positive.
                            yaw: -85, // In degrees. To the left is positive.
                            radius: 0.05, // Radius of the circular target in meters.
                            distance: .5 // Distance of target from camera in meters.

                          });
                            sidewalkTour.on('click', function(event) {
                               if (event.id == 'behindHaArBack'){
                                 behindHaAr();
                               }
                            });
                        }



                        //
                        // end sidewalk tour
                        //

                        </script>

                        <div id="titanFieldImage" class="vrDiv"></div>

                        <div id="womensCenterImage" class="vrDiv"></div>

                        <div id="executiveRoomImage" class="vrDiv"></div>

                        <div id="sidewalkTour" class="vrDiv"></div>


                        <!-- overlay -->
                        <div id= "overlay"></div>


                        <!-- google map!! (meat of it in map.js)-->

                        <div id="map"></div>

                        <!-- hover boxes for when markers are clicked -->
                        <div id="albeeHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/albeehall.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Albee Hall</h1>
                                        <p class="paraHover text"> 776 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="albeeLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="baseballHover" class="generalHover">
                                <img class="imageHover" src="">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Alumni Baseball Stadium</h1>
                                        <p class="paraHover text"> 450 Josslyn Street</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="baseballLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="alumniHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/awcc-building.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Alumni Welcome and Conference Center</h1>
                                        <p class="paraHover text"> 625 Pearl Ave.</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="alumniLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="acHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/artscommunications.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Arts &amp; Communications Center</h1>
                                        <p class="paraHover text"> 1001 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="acLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="athleticHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/athleticservice.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Athletic Service Building</h1>
                                        <p class="paraHover text"> 450 Josslyn Street</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="athleticLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="blackhawkHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/blackhawk.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Blackhawk Commons</h1>
                                        <p class="paraHover text"> 725 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="blackhawkLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="biodigesterHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/biodigester.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Biodigester</h1>
                                        <p class="paraHover text"> 755 Dempsey Trail</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="biodigesterLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="buckstaffHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/buckstaff.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Buckstaff Planetarium</h1>
                                        <p class="paraHover text"> 921 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="buckstaffLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="equityHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/centerforequity.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Campus Center for Equity &amp; Diversity</h1>
                                        <p class="paraHover text"> 717 W. Irving Street</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="equityLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="campusHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/campus-services.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Campus Services</h1>
                                        <p class="paraHover text"> 650 Witzel Ave.</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="campusLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="ceramicsHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/ceramicslab.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Ceramics Laboratory</h1>
                                        <p class="paraHover text"> 1165 Rockwell Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="ceramicsLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="clowHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/clow.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Clow Social Science Center</h1>
                                        <p class="paraHover text"> 805 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="clowLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="gardensHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/community-gardens.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Community Gardens</h1>
                                        <p class="paraHover text"> 663 W. 3rd Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="gardensLink"  class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="dempseyHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/dempsey.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Dempsey Hall</h1>
                                        <p class="paraHover text"> 800 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="dempseyLink"  class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="donnerHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/donner.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Donner Hall</h1>
                                        <p class="paraHover text"> 820 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="donnerLink"  class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="eastHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/easthall.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">East Hall</h1>
                                        <p class="paraHover text"> New York Ave. &amp; Jackson St.</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="eastLink"  class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="environmentalHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/aquaticstudiescenter.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Environmental Research and Innovation Center</h1>
                                        <p class="paraHover text"> 83 Pearl Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="environmentalLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="evansHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/evans.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Evans Hall</h1>
                                        <p class="paraHover text"> 727 W. Lincoln Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="evansLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="fletcherHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/fletcher.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Fletcher Hall</h1>
                                        <p class="paraHover text"> 712 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="fletcherLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="fredricHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/fredricmarch.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Fredric March Theatre</h1>
                                        <p class="paraHover text"> 926 Woodland Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="fredricLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="gruenhagenHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/gruenhagen.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Gruenhagen Conference Center</h1>
                                        <p class="paraHover text"> 208 Osceola Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="gruenhagenLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="halseyHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/halsey.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Halsey Science Center</h1>
                                        <p class="paraHover text"> 921 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="halseyLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="harringtonHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/harrington.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Harrington Hall</h1>
                                        <p class="paraHover text"> 845 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="harringtonLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="heatingHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/heatingplant.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Heating Plant</h1>
                                        <p class="paraHover text"> 1010 Woodland Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="heatingLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="parkingRampHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/parkingramp.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">High Avenue Parking Ramp</h1>
                                        <p class="paraHover text"> 725 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="parkingRampLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="horizonHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/horizon.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Horizon Village</h1>
                                        <p class="paraHover text"> 700 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="horizonLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="kolfHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/kolf.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Kolf Sports Center</h1>
                                        <p class="paraHover text"> 785 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="kolfLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="lincolnHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/lincoln-hall.jpg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Lincoln Hall</h1>
                                        <p class="paraHover text"> 608 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="lincolnLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="multiculturalHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/multiculturaleducation.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Multicultural Education Center</h1>
                                        <p class="paraHover text"> 751 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="multiculturalLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="nursingHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/nursingeducation.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Nursing &amp; Education Building</h1>
                                        <p class="paraHover text"> 845 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="nursingLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="oviattHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/oviatt.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Oviatt House</h1>
                                        <p class="paraHover text"> 842 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="oviattLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="pollockHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/pollock.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Pollock Alumni House</h1>
                                        <p class="paraHover text"> 765 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="pollockLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="polkHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/polk.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Polk Library</h1>
                                        <p class="paraHover text"> 801 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="polkLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="radfordHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/radford.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Radford Hall</h1>
                                        <p class="paraHover text"> 777 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="radfordLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="reeveHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/reeve.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Reeve Memorial Union</h1>
                                        <p class="paraHover text"> 748 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="reeveLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="sageHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/sage.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Sage Hall</h1>
                                        <p class="paraHover text"> 845 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="sageLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="scottHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/scott.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Scott Hall</h1>
                                        <p class="paraHover text"> 625 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="scottLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="stewartHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/stewart.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Stewart Hall</h1>
                                        <p class="paraHover text"> 723 W. Lincoln Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="stewartLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="recreationHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/srwc.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Student Recreation &amp; Wellness Center</h1>
                                        <p class="paraHover text"> 735 Pearl Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <a href="#" id="recreationLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="successHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/studentsuccess.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Student Success Center</h1>
                                        <p class="paraHover text"> 750 Elmwood Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="successLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="swartHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/swart.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Swart Hall</h1>
                                        <p class="paraHover text"> 912 Algoma Boulevard</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="swartLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="taylorHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/taylor.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Taylor Hall</h1>
                                        <p class="paraHover text"> 780 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="taylorLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="titanHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/titanstadium.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Titan Stadium</h1>
                                        <p class="paraHover text"> 450 Josslyn Street</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="titanLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="policeHover" class="generalHover">
                                <img class="imageHover" src="images/campuspictures/universitypolice.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">University Police</h1>
                                        <p class="paraHover text"> 738 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="policeLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <div id="websterHover" class="generalHover">
                                <img class="imageHover"src="images/campuspictures/webster.jpeg">
                                <div class="hoverDiv">
                                        <h1 class="headHover text">Webster Hall</h1>
                                        <p class="paraHover text"> 810 High Avenue</p>
                                        <p class="paraHover text"> Oshkosh, WI 54901</p>
                                        <br class="hoverBreak">
                                        <a href="#" id="websterLink" class="text link hoverLink">Click for more info</a>
                                </div>
                        </div>

                        <!-- end hovers for buildings -->
                        <!-- start hovers for parkings lots -->

                        <!-- Lot 11 -->
                        <div id="elevenHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 11</h1><div class="parkingColorStaff"></div>
                                <p class="parkingTextHover text">Staff Lot</p>
                                <a  id="elevenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 35 -->
                        <div id="thirtyfiveHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 35</h1><div class="parkingColorRemote"></div>
                                <p class="parkingTextHover text">Remote Lot</p>
                                <a id="thirtyfiveLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 27 -->
                        <div id="twentysevenHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 27</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="twentysevenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 21 -->
                        <div id="twentyoneHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 21</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="twentyoneLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 26 -->
                        <div id="twentysixHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 26</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="twentysixLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 4 -->
                                <div id="fourHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 4</h1><div class="parkingColorReserved"></div>
                                <p class="parkingTextHover text">Reserved Lot</p>
                                <a  id="fourLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 4a -->
                        <div id="fouraHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 4a</h1><div class="parkingColorReserved"></div>
                                <p class="parkingTextHover text">Reserved Lot</p>
                                <a  id="fouraLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 16 -->
                        <div id="sixteenHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 16</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="sixteenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 17 -->
                        <div id="seventeenHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 17</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="seventeenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 29 -->
                        <div id="twentynineHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 29</h1><div class="parkingColorCommuter"></div>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <a  id="twentynineLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 25 -->
                        <div id="twentyfiveHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 25</h1><div class="parkingColorStaff"></div>
                                <p class="parkingTextHover text">Staff Lot</p>
                                <a  id="twentyfiveLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 8 -->
                        <div id="eightHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 8</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="eightLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 33 -->
                        <div id="thirtythreeHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 33</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="thirtythreeLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 34 -->
                        <div id="thirtyfourHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 34</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="thirtyfourLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 28 -->
                        <div id="twentyeightHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 28</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="twentyeightLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 23 -->
                        <div id="twentythreeHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 23</h1>
                                <p class="parkingTextHover text">Evans Hall Residents</p>
                                <p class="parkingTextHover text">Stewart Hall Residents</p>
                                <p class="parkingTextHover text">Fletcher Hall Residents</p>
                                <a  id="twentythreeLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 14a -->
                        <div id="fourteenaHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 14a</h1><div class="parkingColorStaff"></div>
                                <p class="parkingTextHover text">Staff Lot</p>
                                <a  id="fourteenaLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 14b -->
                        <div id="fourteenbHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 14b</h1><div class="parkingColorStaff"></div>
                                <p class="parkingTextHover text">Staff Lot</p>
                                <a  id="fourteenbLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 14c -->
                        <div id="fourteencHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 14c</h1><div class="parkingColorStaff"></div>
                                <p class="parkingTextHover text">Staff Lot</p>
                                <a  id="fourteencLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 7 -->
                        <div id="sevenHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 7</h1><div class="parkingColorCommute"></div><div class="parkingColorReserved"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <p class="parkingTextHover text">One Reserved Row</p>
                                <a  id="sevenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 5a -->
                        <div id="fiveaHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 5a</h1><div class="parkingColorResident"></div>
                                <p class="parkingTextHover text">Resident Lot</p>
                                <a  id="fiveaLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 5 -->
                        <div id="fiveHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 5</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="fiveLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 7a -->
                        <div id="sevenaHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 7a</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="sevenaLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 15-->
                        <div id="fifteenHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 15</h1><div class="parkingColorVisitor"></div>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="fifteenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 32 -->
                        <div id="thirtytwoHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 32</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="thirtytwoLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 13 -->
                        <div id="thirteenHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 13</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="thirteenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 12 -->
                        <div id="twelveHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 12</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="twelveLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 6a -->
                        <div id="sixaHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 6a</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a  id="sixaLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 6 -->
                        <div id="sixHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 6</h1><div class="parkingColorCommute"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <a id="sixLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 10 -->
                        <div id="tenHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 10</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="tenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- lot 9a -->
                        <div id="nineaHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 9a</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="nineaLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 9 -->
                        <div id="nineHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 9</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Restricted Lot</p>
                                <a  id="nineLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 18 -->
                        <div id="eighteenHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 18</h1><div class="parkingColorResident"></div>
                                <p class="parkingTextHover text">Resident Lot</p>
                                <a  id="eighteenLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 30 -->
                        <div id="thirtyHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Lot 30</h1><div class="parkingColorResident"></div>
                                <p class="parkingTextHover text">Resident Lot</p>
                                <a  id="thirtyLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- Lot 39 -->
                        <div id="thirtynineHover" class="parkingHover commuterHover">
                                <h1 class="parkingHeadHover text">Lot 39</h1><div class="parkingColorCommute"></div><div class="parkingColorRemote"></div>
                                <p class="parkingTextHover text">Employee Lot</p>
                                <p class="parkingTextHover text">Commuter Lot</p>
                                <p class="parkingTextHover text">Visitor Lot</p>
                                <p class="parkingTextHover text">Remote Lot</p>
                                <a  id="thirtynineLink" class="text link hoverLink" href="https://parking.uwosh.edu/permits/" target="_blank">View Permits</a>
                        </div>

                        <!-- womens center -->
                        <div id="womensCenterHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Women's Center</h1><div class="parkingColorRestricted"></div>
                                <p class="parkingTextHover text">Women's Center Staff</p>
                        </div>

                        <!-- titan one  -->
                                <div id="titanOneHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Titan Stadium Parking</h1>
                                <p class="parkingTextHover text">Event Parking</p>
                        </div>

                        <!-- titan two -->
                        <div id="titanTwoHover" class="parkingHover">
                                <h1 class="parkingHeadHover text">Titan Stadium Parking</h1>
                                <p class="parkingTextHover text">Event Parking</p>
                        </div>


                        <!-- end hovers for parking lots  -->

                        </div>
                <!-- end google map -->
                </div>
        </main>
</body>
<footer>

      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4zQ9m4LdUjtmEOJG4g05xf2oipMUDuU&callback=initMap"></script>
      <script src="scripts/map.js"></script>
      <script src="https://code.getmdl.io/1.2.1/material.min.js"></script>
      <!-- build:js scripts/main.min.js -->
      <script src="scripts/main.js"></script>
      <!-- search box functionality -->
      <script src="scripts/search.js"></script>

      <!-- endbuild -->

      <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
      <!-- <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-XXXXX-X', 'auto');
        ga('send', 'pageview');
      </script> -->
      <!-- Built with love using Web Starter Kit -->
    </body>
  </footer>
</html>