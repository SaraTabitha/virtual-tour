// google map!
// function for intitial map load (what appears when the page first loads)
function initMap() {
        // center of map (UWO coordinates)
        var uwo = {lat: 44.025319, lng: -88.551021};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uwo
        });
        // sets the image for the marker
        var purpleMarker = 'images/markers/marker_purple.png';
        var pinkMarker = 'images/markers/marker_pink.png';
        var redMarker = 'images/markers/marker_red.png';
        var orangeMarker = 'images/markers/marker_orange.png';
        var yellowMarker = 'images/markers/marker_yellow.png';
        var greenMarker = 'images/markers/marker_green.png';
        var skyblueMarker = 'images/markers/marker_skyblue.png';

        var acaFMarker = 'images/markers/acafmarker.png';
        var athMarker = 'images/markers/athleticsmarker.png';
        var acaSMarker = 'images/markers/acaservicesmarker.png';
        var campSMarker = 'images/markers/campservicesmarker.png';
        var resHMarker = 'images/markers/reshallsmarker.png';
        var diningMarker = 'images/markers/diningmarker.png';
        var stuRMarker = 'images/markers/sturecmarker.png';

        var maroonMarker = 'images/markers/marker_maroon.png';
        var lavenderMarker = 'images/markers/marker_lavender.png';
        var lightpinkMarker = 'images/markers/marker_lightpink.png';
        var lightyellowMarker = 'images/markers/marker_lightyellow.png';
        var lightorangeMarker = 'images/markers/marker_lightorange.png';
        var darkgreenMarker = 'images/markers/marker_darkgreen.png';
        var navyMarker = 'images/markers/marker_navy.png';

        var image = 'images/markers/marker_yellow.png';

        // buildings array, sets locations for all of the places
        var buildings = [
            // albee hall [0]
            {lat: 44.025729, lng: -88.550248},
            // alumni baseball stadium [1]
            {lat: 44.023042, lng: -88.561892},
            // alumni welcome and conference center [2]
            {lat: 44.020528, lng: -88.550432},
            // A&C [3]
            {lat: 44.029640, lng: -88.552137},
            // athletic service building [4]
            {lat: 44.023077, lng: -88.561081},
            // blackhawk commons [5]
            {lat: 44.023591, lng: -88.549157},
            // biodigester [6]
            {lat: 44.018897, lng: -88.558015},
            // Buckstaff Planetarium [7]
            {lat: 44.028428, lng: -88.551581},
            // campus center for equity and diversity [8]
            {lat: 44.024655, lng: -88.547217},
            // campus services [9]
            {lat: 44.017782, lng: -88.556446},
            // ceramics laboratory [10]
            {lat: 44.025559, lng: -88.555515},
            //  clow [11]
            {lat: 44.026306, lng: -88.552268},
            // community gardens [12]
            {lat: 44.015573, lng: -88.555929},
            // Dempsey hall [13]
            {lat: 44.026603, lng: -88.550707},
            // donner hall [14]
            {lat: 44.025420, lng: -88.552287},
            // East Hall [15]
            {lat: 44.031217, lng: -88.543806},
            // environmental science and research center [16]
            {lat: 44.023518, lng: -88.553851},
            // evans hall [17]
            {lat: 44.026168, lng: -88.547397},
            // fletcher hall [18]
            {lat: 44.025332, lng: -88.547240},
            // Fredric March Theater [19]
            {lat:  44.029000, lng:-88.552919},
            // gruenhagen [20]
            {lat: 44.022405, lng:  -88.548824},
            // Halsey Science Center [21]
            {lat:  44.028497, lng: -88.551027},
            // Harrington Hall [22]
            {lat:  44.027736, lng: -88.550172},
            // Heating Plant [23]
            {lat: 44.028235, lng: -88.554312},
            // high avenue parking ramp [24]
            {lat: 44.022960, lng: -88.549791},
            // horizon village [25]
            {lat: 44.024363, lng: -88.547972},
            // kolf sports center [26]
            {lat: 44.024323, lng: -88.552214},
            // lincoln hall [27]
            {lat: 44.023204, lng: -88.546359},
            // multicultural education center [28]
            {lat: 44.024842, lng: -88.550613},
            // Nursing and Education Building [29]
            {lat: 44.027051, lng: -88.552813},
            // Oviatt House [30]
            {lat:  44.027156, lng: -88.551466},
            // pollock house [31]
            {lat: 44.025227, lng:  -88.551292},
            // polk library [32]
            {lat: 44.026379, lng: -88.549602},
            // radford hall & student health center [33]
            {lat: 44.025671, lng: -88.551561},
            // reeve memorial union [34]
            {lat: 44.024934, lng: -88.549448},
            // sage hall [35]
            {lat: 44.025720, lng: -88.553770},
            // scott hall [36]
            {lat: 44.022556, lng: -88.547344},
            // stewart hall [37]
            {lat: 44.026060, lng: -88.546952},
            // student recreation and wellness center [38]
            {lat: 44.021752, lng: -88.551694},
            // student success center [39]
            {lat: 44.026205, lng: -88.548163},
            // Swart Hall [40]
            {lat:  44.027872, lng:  -88.551962},
            //  taylor hall [41]
            {lat: 44.024577, lng: -88.551215},
            // titan stadium [42]
            {lat: 44.023671, lng: -88.562917},
            // university police [43]
            {lat: 44.023763, lng: -88.549972},
            // webster hall [44]
            {lat: 44.025002, lng: -88.551681}
        ];
        // create markers for buildings
        var albeeMarker = new google.maps.Marker({
            position: buildings[0],
            icon: yellowMarker,
            title: "Albee Hall"
        });
        var baseballMarker = new google.maps.Marker({
            position: buildings[1],
            icon: yellowMarker,
            title: "Alumni Baseball Stadium"
        });
        var alumniMarker = new google.maps.Marker({
            position: buildings[2],
            icon: yellowMarker,
            title: "Alumni Welcome and Conference Center"
        });
        var acMarker = new google.maps.Marker({
            position: buildings[3],
            icon: yellowMarker,
            title: "Arts and Communications"
        });
        var athleticMarker = new google.maps.Marker({
            position: buildings[4],
            icon: yellowMarker,
            title: "Athletic Service Building"
        });
        var blackhawkMarker = new google.maps.Marker({
            position: buildings[5],
            icon: yellowMarker,
            title: "Blackhawk Commons"
        });
        var biodigesterMarker = new google.maps.Marker({
            position: buildings[6],
            icon: yellowMarker,
            title: "Biodigester"
        });
        var buckstaffMarker = new google.maps.Marker({
            position: buildings[7],
            icon: yellowMarker,
            title: "Buckstaff Planetarium"
        });
        var equityMarker = new google.maps.Marker({
            position: buildings[8],
            icon: yellowMarker,
            title: "Campus Center for Equity and Diversity"
        });
        var campusMarker = new google.maps.Marker({
            position: buildings[9],
            icon: yellowMarker,
            title: "Campus Services"
        });
        var ceramicsMarker = new google.maps.Marker({
            position: buildings[10],
            icon: yellowMarker,
            title: "Ceramics Laboratory"
        });
        var clowMarker = new google.maps.Marker({
            position: buildings[11],
            icon: yellowMarker,
            title: "Clow Social Sciences Center"
        });
        var gardensMarker = new google.maps.Marker({
            position: buildings[12],
            icon: yellowMarker,
            title: "Community Gardens"
        });
        var dempseyMarker = new google.maps.Marker({
            position: buildings[13],
            icon: yellowMarker,
            title: "Dempsey Hall"
        });
        var donnerMarker = new google.maps.Marker({
            position: buildings[14],
            icon: yellowMarker,
            title: "Donner Hall"
        });
        var eastMarker = new google.maps.Marker({
            position: buildings[15],
            icon: yellowMarker,
            title: "East Hall"
        });
        var environmentalMarker = new google.maps.Marker({
            position: buildings[16],
            icon: yellowMarker,
            title: "Environmental Science and Research Center"
        });
        var evansMarker = new google.maps.Marker({
            position: buildings[17],
            icon: yellowMarker,
            title: "Evans Hall"
        });
        var fletcherMarker = new google.maps.Marker({
            position: buildings[18],
            icon: yellowMarker,
            title: "Fletcher Hall"
        });
        var fredricMarker = new google.maps.Marker({
            position: buildings[19],
            icon: yellowMarker,
            title: "Fredric March Theater"
        });
        var gruenhagenMarker = new google.maps.Marker({
            position: buildings[20],
            icon: yellowMarker,
            title: "Gruenhagen Conference Center"
        });
        var halseyMarker = new google.maps.Marker({
            position: buildings[21],
            icon: yellowMarker,
            title: "Halsey Science Center"
        });
        var harringtonMarker = new google.maps.Marker({
            position: buildings[22],
            icon: yellowMarker,
            title: "Harrington Hall"
        });
        var heatingMarker = new google.maps.Marker({
            position: buildings[23],
            icon: yellowMarker,
            title: "Heating Plant"

        });
        var parkingRampMarker = new google.maps.Marker({
            position: buildings[24],
            icon: yellowMarker,
            title: "High Avenue Parking Ramp"
        });
        var horizonMarker = new google.maps.Marker({
            position: buildings[25],
            icon: yellowMarker,
            title: "Horizon Village"
        });
        var kolfMarker = new google.maps.Marker({
            position: buildings[26],
            icon: yellowMarker,
            title: "Kolf Sports Center"
        });
        var lincolnMarker = new google.maps.Marker({
            position: buildings[27],
            icon: yellowMarker,
            title: "Lincoln Hall"
        });
        var multiculturalMarker = new google.maps.Marker({
            position: buildings[28],
            icon: yellowMarker,
            title: "Multicultural Education Center"
        });
        var nursingMarker = new google.maps.Marker({
            position: buildings[29],
            icon: yellowMarker,
            title: "Nursing and Education Building"
        });
        var oviattMarker = new google.maps.Marker({
            position: buildings[30],
            icon: yellowMarker,
            title: "Oviatt House"
        });
        var pollockMarker = new google.maps.Marker({
            position: buildings[31],
            icon: yellowMarker,
            title: "Pollock House"
        });
        var polkMarker = new google.maps.Marker({
            position: buildings[32],
            icon: yellowMarker,
            title: "Polk Library"
        });
        var radfordMarker = new google.maps.Marker({
            position: buildings[33],
            icon: yellowMarker,
            title: "Radford Hall and Student Health Center"
        });
        var reeveMarker = new google.maps.Marker({
            position: buildings[34],
            icon: yellowMarker,
            title: "Reeve Memorial Union"
        });
        var sageMarker = new google.maps.Marker({
            position: buildings[35],
            icon: yellowMarker,
            title: "Sage Hall"
        });
        var scottMarker = new google.maps.Marker({
            position: buildings[36],
            icon: yellowMarker,
            title: "Scott Hall"
        });
        var stewartMarker = new google.maps.Marker({
            position: buildings[37],
            icon: yellowMarker,
            title: "Stewart Hall"
        });
        var recreationMarker = new google.maps.Marker({
            position: buildings[38],
            icon: yellowMarker,
            title: "Student Recreation and Wellness Center"
        });
        var successMarker = new google.maps.Marker({
            position: buildings[39],
            icon: yellowMarker,
            title: "Student Success Center"
        });
        var swartMarker = new google.maps.Marker({
            position: buildings[40],
            icon: yellowMarker,
            title: "Swart Hall"
        });
        var taylorMarker = new google.maps.Marker({
            position: buildings[41],
            icon: yellowMarker,
            title: "Taylor Hall"
        });
        var titanMarker = new google.maps.Marker({
            position: buildings[42],
            icon: yellowMarker,
            title: "Titan Stadium"
        });
        var policeMarker = new google.maps.Marker({
            position: buildings[43],
            icon: yellowMarker,
            title: "University Police"
        });
        var websterMarker = new google.maps.Marker({
            position: buildings[44],
            icon: yellowMarker,
            title: "Webster Hall"
        });

        // declaring set and remove functions for buildings
        function setBuilding(){
            albeeMarker.setMap(map);
            baseballMarker.setMap(map);
            alumniMarker.setMap(map);
            acMarker.setMap(map);
            athleticMarker.setMap(map);
            blackhawkMarker.setMap(map);
            biodigesterMarker.setMap(map);
            buckstaffMarker.setMap(map);
            equityMarker.setMap(map);
            campusMarker.setMap(map);
            ceramicsMarker.setMap(map);
            clowMarker.setMap(map);
            gardensMarker.setMap(map);
            dempseyMarker.setMap(map);
            donnerMarker.setMap(map);
            eastMarker.setMap(map);
            environmentalMarker.setMap(map);
            evansMarker.setMap(map);
            fletcherMarker.setMap(map);
            fredricMarker.setMap(map);
            gruenhagenMarker.setMap(map);
            halseyMarker.setMap(map);
            harringtonMarker.setMap(map);
            heatingMarker.setMap(map);
            parkingRampMarker.setMap(map);
            horizonMarker.setMap(map);
            kolfMarker.setMap(map);
            lincolnMarker.setMap(map);
            multiculturalMarker.setMap(map);
            nursingMarker.setMap(map);
            oviattMarker.setMap(map);
            pollockMarker.setMap(map);
            polkMarker.setMap(map);
            radfordMarker.setMap(map);
            reeveMarker.setMap(map);
            sageMarker.setMap(map);
            scottMarker.setMap(map);
            stewartMarker.setMap(map);
            recreationMarker.setMap(map);
            successMarker.setMap(map);
            swartMarker.setMap(map);
            taylorMarker.setMap(map);
            titanMarker.setMap(map);
            policeMarker.setMap(map);
            websterMarker.setMap(map);

        }
        // remove all buildings
        function removeBuilding(){
            albeeMarker.setMap(null);
            baseballMarker.setMap(null);
            alumniMarker.setMap(null);
            acMarker.setMap(null);
            athleticMarker.setMap(null);
            blackhawkMarker.setMap(null);
            biodigesterMarker.setMap(null);
            buckstaffMarker.setMap(null);
            equityMarker.setMap(null);
            campusMarker.setMap(null);
            ceramicsMarker.setMap(null);
            clowMarker.setMap(null);
            gardensMarker.setMap(null);
            dempseyMarker.setMap(null);
            donnerMarker.setMap(null);
            eastMarker.setMap(null);
            environmentalMarker.setMap(null);
            evansMarker.setMap(null);
            fletcherMarker.setMap(null);
            fredricMarker.setMap(null);
            gruenhagenMarker.setMap(null);
            halseyMarker.setMap(null);
            harringtonMarker.setMap(null);
            heatingMarker.setMap(null);
            parkingRampMarker.setMap(null);
            horizonMarker.setMap(null);
            kolfMarker.setMap(null);
            lincolnMarker.setMap(null);
            multiculturalMarker.setMap(null);
            nursingMarker.setMap(null);
            oviattMarker.setMap(null);
            pollockMarker.setMap(null);
            polkMarker.setMap(null);
            radfordMarker.setMap(null);
            reeveMarker.setMap(null);
            sageMarker.setMap(null);
            scottMarker.setMap(null);
            stewartMarker.setMap(null);
            recreationMarker.setMap(null);
            successMarker.setMap(null);
            swartMarker.setMap(null);
            taylorMarker.setMap(null);
            titanMarker.setMap(null);
            policeMarker.setMap(null);
            websterMarker.setMap(null);
        }


        //one function for all open/close

        function markerOpenClose(name){
            // debugger;
            //close all hover when new marker is clicked
            
            //toggle hoverOpen/close when marker is clicked
            // $("#" + name + "Hover").toggleClass("hoverOpen");
            //if marker is clicked open hover element and set the image on it
            if(!$("#" + name + "Hover").hasClass("hoverOpen")){
                //depending on the name make sure that the right image and popup are put up
                closeAllHover();
                    if (name === "albee"){
                        albeeHoverCard.open(map, albeeMarker);
                        $("#albeeHover > img").attr("src", "images/campuspictures/albeehall.jpeg");
                    }
                    else if (name === "baseball"){
                        baseballHoverCard.open(map, baseballMarker);
                        //baseball has no image atm
                    }
                    else if (name === "alumni"){
                        alumniHoverCard.open(map, alumniMarker);
                        $("#alumniHover > img").attr("src", "images/campuspictures/awcc-building.jpg");
                    }
                    else if (name === "ac"){
                        acHoverCard.open(map, acMarker);
                        $("#acHover > img").attr("src", "images/campuspictures/artscommunications.jpeg");
                    }
                    else if (name === "athletic"){
                        athleticHoverCard.open(map, athleticMarker);
                        $("#athleticHover > img").attr("src", "images/campuspictures/athleticservice.jpeg");
                    }
                    else if (name === "blackhawk"){
                        blackhawkHoverCard.open(map, blackhawkMarker);
                        $("#blackhawkHover > img").attr("src", "images/campuspictures/blackhawk.jpeg");
                    }
                    else if (name === "biodigester"){
                        biodigesterHoverCard.open(map, biodigesterMarker);
                        $("#biodigesterHover > img").attr("src", "images/campuspictures/biodigester.jpg");
                    }
                    else if (name === "buckstaff"){
                        buckstaffHoverCard.open(map, buckstaffMarker);
                        $("#buckstaffHover > img").attr("src", "images/campuspictures/buckstaff.jpeg");
                    }
                    else if (name === "equity"){
                        equityHoverCard.open(map, equityMarker);
                        $("#equityHover > img").attr("src", "images/campuspictures/centerforequity.jpeg");
                    }
                    else if (name === "campus"){
                        campusHoverCard.open(map, campusMarker);
                        $("#campusHover > img").attr("src", "images/campuspictures/campus-services.jpg");
                    }
                    else if (name === "ceramics"){
                        ceramicsHoverCard.open(map, ceramicsMarker);
                        $("#ceramicsHover > img").attr("src", "images/campuspictures/ceramicslab.jpeg");
                    }
                    else if (name === "clow"){
                        clowHoverCard.open(map, clowMarker);
                        $("#clowHover > img").attr("src", "images/campuspictures/clow.jpeg");
                    }
                    else if (name === "gardens"){
                        gardensHoverCard.open(map, gardensMarker);
                        $("#gardensHover > img").attr("src", "images/campuspictures/community-gardens.jpg");
                    }
                    else if (name === "dempsey"){
                        dempseyHoverCard.open(map, dempseyMarker);
                        $("#dempseyHover > img").attr("src", "images/campuspictures/dempsey.jpeg");
                    } else if (name === "donner"){
                        donnerHoverCard.open(map, donnerMarker);
                        $("#donnerHover > img").attr("src", "images/campuspictures/donner.jpeg");
                    }
                    else if (name === "east"){
                        eastHoverCard.open(map, eastMarker);
                        $("#eastHover > img").attr("src", "images/campuspictures/easthall.jpg");
                    }
                    else if (name === "environmental"){
                        environmentalHoverCard.open(map, environmentalMarker);
                        $("#environmentalHover > img").attr("src", "images/campuspictures/aquaticstudiescenter.jpeg");
                    }
                    else if (name === "evans"){
                        evansHoverCard.open(map, evansMarker);
                        $("#evansHover > img").attr("src", "images/campuspictures/evans.jpeg");
                    }
                    else if (name === "fletcher"){
                        fletcherHoverCard.open(map, fletcherMarker);
                        $("#fletcherHover > img").attr("src", "images/campuspictures/fletcher.jpeg");
                    }
                    else if (name === "fredric"){
                        fredricHoverCard.open(map, fredricMarker);
                        $("#fredricHover > img").attr("src", "images/campuspictures/fredricmarch.jpeg");
                    }
                    else if (name === "gruenhagen"){
                        gruenhagenHoverCard.open(map, gruenhagenMarker);
                        $("#gruenhagenHover > img").attr("src", "images/campuspictures/gruenhagen.jpeg");
                    }
                    else if (name === "halsey"){
                        halseyHoverCard.open(map, halseyMarker);
                        $("#halseyHover > img").attr("src", "images/campuspictures/halsey.jpeg");
                    }
                    else if (name === "harrington"){
                        harringtonHoverCard.open(map, harringtonMarker);
                        $("#harringtonHover > img").attr("src", "images/campuspictures/harrington.jpeg");
                    }
                    else if (name === "heating"){
                        heatingHoverCard.open(map, heatingMarker);
                        $("#heatingHover > img").attr("src", "images/campuspictures/heatingplant.jpeg");
                    }
                    else if (name === "parkingRamp"){
                        parkingRampHoverCard.open(map, parkingRampMarker);
                        $("#parkingRampHover > img").attr("src", "images/campuspictures/parkingramp.jpeg");
                    }
                    else if (name === "horizon"){
                        horizonHoverCard.open(map, horizonMarker);
                        $("#horizonHover > img").attr("src", "images/campuspictures/horizon.jpeg");
                    }
                    else if (name === "kolf"){
                        kolfHoverCard.open(map, kolfMarker);
                        $("#kolfHover > img").attr("src", "images/campuspictures/kolf.jpeg");
                    }
                    else if (name === "lincoln"){
                        lincolnHoverCard.open(map, lincolnMarker);
                        $("#lincolnHover > img").attr("src", "images/campuspictures/lincoln-hall.jpg");
                    }
                    else if (name === "multicultural"){
                        multiculturalHoverCard.open(map, multiculturalMarker);
                        $("#multiculturalHover > img").attr("src", "images/campuspictures/multiculturaleducation.jpeg");
                    }
                    else if (name === "nursing"){
                        nursingHoverCard.open(map, nursingMarker);
                        $("#nursingHover > img").attr("src", "images/campuspictures/nursingeducation.jpeg");
                    }
                    else if (name === "oviatt"){
                        oviattHoverCard.open(map, oviattMarker);
                        $("#oviattHover > img").attr("src", "images/campuspictures/oviatt.jpeg");
                    }
                    else if (name === "pollock"){
                        pollockHoverCard.open(map, pollockMarker);
                        $("#pollockHover > img").attr("src", "images/campuspictures/pollock.jpeg");
                    }
                    else if (name === "polk"){
                        polkHoverCard.open(map, polkMarker);
                        $("#polkHover > img").attr("src", "images/campuspictures/polk.jpeg");
                    }
                    else if (name === "radford"){
                        radfordHoverCard.open(map, radfordMarker);
                        $("#radfordHover > img").attr("src",  "images/campuspictures/radford.jpeg");
                    }
                    else if (name === "reeve"){
                        reeveHoverCard.open(map, reeveMarker);
                        $("#reeveHover > img").attr("src", "images/campuspictures/reeve.jpeg");
                    }
                    else if (name === "sage"){
                        sageHoverCard.open(map, sageMarker);
                        $("#sageHover > img").attr("src", "images/campuspictures/sage.jpeg");
                    }
                    else if (name === "scott"){
                        scottHoverCard.open(map, scottMarker);
                        $("#scottHover > img").attr("src", "images/campuspictures/scott.jpeg");
                    }
                    else if (name === "stewart"){
                        stewartHoverCard.open(map, stewartMarker);
                        $("#stewartHover > img").attr("src", "images/campuspictures/stewart.jpeg");
                    }
                    else if (name === "recreation"){
                        recreationHoverCard.open(map, recreationMarker);
                        $("#recreationHover > img").attr("src", "images/campuspictures/srwc.jpeg");
                    }
                    else if (name === "success"){
                        successHoverCard.open(map, successMarker);
                        $("#successHover > img").attr("src", "images/campuspictures/studentsuccess.jpeg");
                    }
                    else if (name === "swart"){
                        swartHoverCard.open(map, swartMarker);
                        $("#swartHover > img").attr("src", "images/campuspictures/swart.jpeg");
                    }
                    else if (name === "taylor"){
                        taylorHoverCard.open(map, taylorMarker);
                        $("#taylorHover > img").attr("src", "images/campuspictures/taylor.jpeg");
                    }
                    else if (name === "titan"){
                        titanHoverCard.open(map, titanMarker);
                        $("#titanHover > img").attr("src", "images/campuspictures/titanstadium.jpeg");
                    }
                    else if (name === "police"){
                        policeHoverCard.open(map, policeMarker);
                        $("#policeHover > img").attr("src", "images/campuspictures/universitypolice.jpeg");
                    }
                    else if (name === "webster"){
                        websterHoverCard.open(map, websterMarker);
                        $("#websterHover > img").attr("src", "images/campuspictures/webster.jpeg");
                    }
                 $("#" + name + "Hover").addClass("hoverOpen");
            //if marker is not clicked/clicked to close change src of image to empty
            } else{
                $("#" + name + "Hover > img").attr("src", "");
                $("#" + name + "Hover").removeClass("hoverOpen");
                closeAllHover();
            }
        }
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        function popupOpen(name){
            $('#overlay').css('visibility', 'visible');
            $('#overlay').animate({"opacity": "0.3"}, "slow");

            $("#" + name + "Popup").css('visibility', 'visible');
            $("#" + name + "Popup").animate({"opacity": "1"}, "slow");

            if(name === "albee"){
                $('#albeeiframe').attr('src',"https://www.youtube.com/embed/AW5cpKVsXWA");
                $('#albeeAboutImage > img').attr('src',"images/campuspictures/albeehallFull.jpeg");
            }
            else if(name === "alumni"){
                $("#alumniAboutImage > img").attr("src", "images/campuspictures/awcc-buildingFull.jpg");
            }
            else if (name === "ac"){
                $("#acAboutImage > img").attr("src","images/campuspictures/artscommunicationsFull.jpeg");
            }
            else if (name === "athletic"){
                $("#athleticAboutText > img").attr("src", "images/campuspictures/athleticserviceFull.jpeg");
            } 
            else if (name === "blackhawk"){
                $("#blackhawkAboutImage > img").attr("src", "images/campuspictures/blackhawkFull.jpeg");
            }
            else if (name === "biodigester"){
                $("#biodigesterAboutImage > img").attr("src", "images/campuspictures/biodigesterFull.jpg");
            }
            else if (name === "buckstaff"){
                $("#buckstaffAboutImage > img").attr("src", "images/campuspictures/buckstaffFull.jpeg");
            }
            else if (name === "equity"){
                $("#equityAboutImage > img").attr("src", "images/campuspictures/centerforequityFull.jpeg");
            }
            else if (name === "campus"){
                $("#campusAboutImage > img").attr("src", "images/campuspictures/campus-servicesFull.jpg");
            }
            else if (name === "ceramics"){
                $("#ceramicsAboutImage > img").attr("src", "images/campuspictures/ceramicslabFull.jpeg");
            }
            else if (name === "clow"){
                $("#clowAboutImage > img").attr("src", "images/campuspictures/clowFull.jpeg");
            }
            else if (name === "gardens"){
                $("#gardensAboutImage > img").attr("src", "images/campuspictures/community-gardensFull.jpg");
            }
            else if (name === "dempsey"){
                $("#dempseyAboutImage > img").attr("src", "images/campuspictures/dempseyFull.jpeg");
            }
            else if (name === "donner"){
                $("#donnerAboutImage > img").attr("src", "images/campuspictures/donnerFull.jpeg");
            }
            else if (name === "east"){
                $("#eastAboutImage > img").attr("src", "images/campuspictures/easthallFull.jpg");
            }
            else if (name === "environmental"){
                $("#environmentalAboutImage > img").attr("src", "images/campuspictures/aquaticstudiescenterFull.jpeg");
            }
            else if (name === "evans"){
                $("#evansAboutImage > img").attr("src", "images/campuspictures/evansFull.jpeg");
            }
            else if (name === "fletcher"){
                $("#fletcherAboutImage > img").attr("src", "images/campuspictures/fletcherFull.jpeg");
            }
            else if (name === "fredric"){
                $("#fredricAboutImage > img").attr("src", "images/campuspictures/fredricmarchFull.jpeg");
            }
            else if (name === "gruenhagen"){
                $("#gruenhagenAboutImage > img").attr("src", "images/campuspictures/gruenhagenFull.jpeg");
            }
            else if (name === "halsey"){
                $("#halseyAboutImage > img").attr("src", "images/campuspictures/halseyFull.jpeg");
            }
            else if (name === "harrington"){
                $("#harringtonAboutImage > img").attr("src", "images/campuspictures/harringtonFull.jpeg");
            }
            else if (name === "heating"){
                $("#heatingAboutImage > img").attr("src", "images/campuspictures/heatingplantFull.jpeg");
            }
            else if (name === "parkingRamp"){
                $("#parkingAboutImage > img").attr("src", "images/campuspictures/parkingrampFull.jpeg");
            }
            else if (name === "horizon"){
                $("#horizonAboutImage > img").attr("src", "images/campuspictures/horizonFull.jpeg");
            }
            else if (name === "kolf"){
                $("#kolfAboutImage > img").attr("src", "images/campuspictures/kolfFull.jpeg");
            }
            else if (name === "lincoln"){
                $("#lincolnAboutImage > img").attr("src", "images/campuspictures/lincoln-hallFull.jpg");
            }
            else if (name === "multicultural"){
                $("#multiculturalAboutImage > img").attr("src", "images/campuspictures/multiculturaleducationFull.jpeg");
            }
            else if (name === "nursing"){
                $("#nursingAboutImage > img").attr("src", "images/campuspictures/nursingeducationFull.jpeg");

            }
            else if (name === "oviatt"){
                $("#oviattAboutImage > img").attr("src", "images/campuspictures/oviattFull.jpeg");
            }
            else if (name === "pollock"){
                $("#pollockAboutImage > img").attr("src", "images/campuspictures/pollockFull.jpeg");
            }
            else if (name === "polk"){
                $('#polkiframe').attr('src',"https://www.youtube.com/embed/iHPdc89AD_c");
                $("#polkAboutImage > img").attr("src", "images/campuspictures/polkFull.jpeg");
            }
            else if (name === "radford"){
                $("#radfordAboutImage > img").attr("src", "images/campuspictures/radfordFull.jpeg");
            }
            else if (name === "reeve"){
                $('#reeveiframe').attr('src',"https://www.youtube.com/embed/QAtW972K3cQ");
                $("#reeveAboutImage > img").attr("src", "images/campuspictures/reeveFull.jpeg");
            }
            else if (name === "sage"){
                $('#sageiframe').attr('src',"https://www.youtube.com/embed/DVRbh2fCCZ0");
                $("#sageAboutImage > img").attr("src", "images/campuspictures/sageFull.jpeg");
            }
            else if (name === "scott"){
                $("#scottAboutImage > img").attr("src", "images/campuspictures/scottFull.jpeg");
            }
            else if (name === "stewart"){
                $("#stewartAboutImage > img").attr("src", "images/campuspictures/stewartFull.jpeg");
            }
            else if (name === "recreation"){
                $("#recreationAboutImage > img").attr("src", "images/campuspictures/srwcFull.jpeg");
            }
            else if (name === "success"){
                $('#successiframe').attr('src',"https://www.youtube.com/embed/NjZjuqM7SBg");
                $("#successAboutImage > img").attr("src", "images/campuspictures/studentsuccessFull.jpeg");
            }
            else if (name === "swart"){
                $("#swartAboutImage > img").attr("src", "images/campuspictures/swartFull.jpeg");
            }
            else if (name === "taylor"){
                $("#taylorAboutImage > img").attr("src", "images/campuspictures/taylorFull.jpeg");
            }
            else if (name === "titan"){
                $("#titanAboutImage > img").attr("src", "images/campuspictures/titanstadiumFull.jpeg");
            }
            else if (name === "police"){
                $("#policeAboutImage > img").attr("src", "images/campuspictures/universitypoliceFull.jpeg");
            }
            else if (name === "webster"){
                $("#websterAboutImage > img").attr("src", "images/campuspictures/websterFull.jpeg");
            }
        }
        //function for all popupclosure
        function popupClose(name){
            $('#overlay').animate({"opacity": "0"}, "slow");
            $('#overlay').css('visibility', 'hidden');

            $("#" + name + "Popup").animate({"opacity": "0"}, "slow");
            $("#" + name + "Popup").css('visibility', 'hidden');
            //all of them have an AboutImage 
            $("#" + name + "AboutImage > img").attr('src',"");

            //some have iframe/dining tab/parking tab images wowwwee
            if (name === "albee" || name === "polk" || name === "reeve" || name === "sage" || name === "success"){
                //iframe
                $("#" + name + "iframe").attr('src',"");
            }
            else if (name === "blackhawk" || name === "clow" || name === "halsey" || name === "reeve"|| name === "sage"
                    || name === "dining"){
                //dining tab image
                $("#" + name + "DiningImage > img").attr("src", "");
            }
            else if (name === "parkingRamp"){
                //parking tab image
                $("#parkingRampParkingImage> img").attr("src", "");
            }
        }

        // adding hover cards for building markers
        var albeeHover = document.getElementById('albeeHover');
        var albeeHoverCard = new google.maps.InfoWindow({
            content: albeeHover,
        });
        //when marker is clicked, open hover 
        albeeMarker.addListener('click', function(){
            markerOpenClose("albee");
        });
        // when link on hover is clicked, open popup
        $("#albeeLink").click(function(){
            popupOpen("albee");
        });
        // when x on popup is clicked, close popup
        $("#albeePopupClose").click(function(){
            popupClose("albee");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        function tabs(name, tab, openClose){
            if(openClose === "open"){
                if (tab === "About"){
                    $("#" + name + "AboutImage").css('display', "block");
                    $("#" + name + "AboutText").css('display', "initial");
                }
            }
            else if (openClose === "close"){

            }
        }
        $("#albeeAboutLi").click(function(){
            $("#albeeTourVideo").css('display', "none");
            $("#albeeTourText").css('display', "none");
            $("#albeeSustainability").css('display', "none");

            $("#albeeAboutImage").css('display', "block");
            $("#albeeAboutText").css('display', "initial");
        });
        $("#albeeTourLi").click(function(){
            $("#albeeAboutImage").css('display', "none");
            $("#albeeAboutText").css('display', "none");
            $("#albeeSustainability").css('display', "none");
            
            $("#albeeTourVideo").css('display', "initial");
            $("#albeeTourText").css('display', "initial");
        });
        $("#albeeSustainabilityLi").click(function(){
            $("#albeeAboutImage").css('display', "none");
            $("#albeeAboutText").css('display', "none");
            $("#albeeTourVideo").css('display', "none");
            $("#albeeTourText").css('display', "none");

            $("#albeeSustainability ").css('display', "initial");
        });

        var baseballHover = document.getElementById('baseballHover');
        var baseballHoverCard = new google.maps.InfoWindow({
            content: baseballHover,
        });

        baseballMarker.addListener('click', function(){
            markerOpenClose("baseball");
        });
        
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#baseballLink").click(function(){
            popupOpen("baseball");
        });
        // when x on popup is clicked, close popup
        $("#baseballPopupClose").click(function(){
            popupClose("baseball");
        });

        var alumniHover = document.getElementById('alumniHover');
        var alumniHoverCard = new google.maps.InfoWindow({
            content: alumniHover,
        });
        alumniMarker.addListener('click', function(){
            markerOpenClose("alumni");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#alumniLink").click(function(){
            popupOpen("alumni");
        });
        // when x on popup is clicked, close popup
        $("#alumniPopupClose").click(function(){
            popupClose("alumni");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#alumniAboutLi").click(function(){
            $("#alumniSustainability").css('display', "none");

            $("#alumniAboutImage").css('display', "block");
            $("#alumniAboutText").css('display', "initial");
        });
        $("#alumniSustainabilityLi").click(function(){
            $("#alumniAboutImage").css('display', "none");
            $("#alumniAboutText").css('display', "none");

            $("#alumniSustainability ").css('display', "initial");
        });

        // a&c hover
        var acHover = document.getElementById('acHover');
        var acHoverCard = new google.maps.InfoWindow({
            content: acHover,
        });
        acMarker.addListener('click', function(){
            markerOpenClose("ac");
        });
        
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#acLink").click(function(){
            popupOpen("ac");
        });
        // when x on popup is clicked, close popup
        $("#acPopupClose").click(function(){
            popupClose("ac");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#acAboutLi").click(function(){
            $("#acBathrooms").css('display', "none");

            $("#acAboutImage").css('display', "block");
            $("#acAboutText").css('display', "initial");
        });
        $("#acBathroomsLi").click(function(){
            $("#acAboutImage").css('display', "none");
            $("#acAboutText").css('display', "none");

            $("#acBathrooms").css('display', "initial");
        });

        var athleticHover = document.getElementById('athleticHover');
        var athleticHoverCard = new google.maps.InfoWindow({
            content: athleticHover,
        });
        
        athleticMarker.addListener('click', function(){
            markerOpenClose("athletic");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#athleticLink").click(function(){
            popupOpen("athletic");
        });
        // when x on popup is clicked, close popup
        $("#athleticPopupClose").click(function(){
            popupClose("athletic");
        });

        var blackhawkHover = document.getElementById('blackhawkHover');
        var blackhawkHoverCard = new google.maps.InfoWindow({
            content: blackhawkHover,
        });
        blackhawkMarker.addListener('click', function(){
            markerOpenClose("blackhawk");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#blackhawkLink").click(function(){
            popupOpen("blackhawk");
        });
        // when x on popup is clicked, close popup
        $("#blackhawkPopupClose").click(function(){
            popupClose("blackhawk");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#blackhawkAboutLi").click(function(){
            $("#blackhawkBathrooms").css('display', "none");
            $("#blackhawkSustainability").css('display', "none");
            $("#blackhawkDiningImage").css('display', "none");
            $("#blackhawkDiningText").css('display', "none");

            $("#blackhawkAboutImage").css('display', "block");
            $("#blackhawkAboutText").css('display', "initial");
        });
        $("#blackhawkSustainabilityLi").click(function(){
            $("#blackhawkAboutImage").css('display', "none");
            $("#blackhawkAboutText").css('display', "none");
            $("#blackhawkBathrooms").css('display', "none");
            $("#blackhawkDiningImage").css('display', "none");
            $("#blackhawkDiningText").css('display', "none");

            $("#blackhawkSustainability ").css('display', "initial");
        });
        $("#blackhawkBathroomsLi").click(function(){
            $("#blackhawkAboutImage").css('display', "none");
            $("#blackhawkAboutText").css('display', "none");
            $("#blackhawkSustainability").css('display', "none");
            $("#blackhawkDiningImage").css('display', "none");
            $("#blackhawkDiningText").css('display', "none");

            $("#blackhawkBathrooms").css('display', "initial");
        });
        $("#blackhawkDiningLi").click(function(){
            $("#blackhawkAboutImage").css('display', "none");
            $("#blackhawkAboutText").css('display', "none");
            $("#blackhawkSustainability").css('display', "none");
            $("#blackhawkBathrooms").css('display', "none");
            $("#blackhawkDiningImage > img").attr("src", "images/campuspictures/blackhawkGif.gif");

            $("#blackhawkDiningImage").css('display', "block");
            $("#blackhawkDiningText").css('display', "initial");
        });

        var biodigesterHover = document.getElementById('biodigesterHover');
        var biodigesterHoverCard = new google.maps.InfoWindow({
            content: biodigesterHover,
        });

        biodigesterMarker.addListener('click', function(){
            markerOpenClose("biodigester");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#biodigesterLink").click(function(){
            popupOpen("biodigester");
        });
        // when x on popup is clicked, close popup
        $("#biodigesterPopupClose").click(function(){
            popupClose("biodigester");
        });

        var buckstaffHover = document.getElementById('buckstaffHover');
        var buckstaffHoverCard = new google.maps.InfoWindow({
            content: buckstaffHover,
        });
        
        buckstaffMarker.addListener('click', function(){
            markerOpenClose("buckstaff");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#buckstaffLink").click(function(){
            popupOpen("buckstaff");
        });
        // when x on popup is clicked, close popup
        $("#buckstaffPopupClose").click(function(){
            popupClose("buckstaff");
        });

        var equityHover = document.getElementById('equityHover');
        var equityHoverCard = new google.maps.InfoWindow({
            content: equityHover,
        });

        equityMarker.addListener('click', function(){
            markerOpenClose("equity");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#equityLink").click(function(){
            popupOpen("equity");
        });
        // when x on popup is clicked, close popup
        $("#equityPopupClose").click(function(){
            popupClose("equity");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#equityAboutLi").click(function(){
            $("#equityBathrooms").css('display', "none");

            $("#equityAboutImage").css('display', "block");
            $("#equityAboutText").css('display', "initial");
        });
        $("#equityBathroomsLi").click(function(){
            $("#equityAboutImage").css('display', "none");
            $("#equityAboutText").css('display', "none");

            $("#equityBathrooms").css('display', "initial");
        });

        var campusHover = document.getElementById('campusHover');
        var campusHoverCard = new google.maps.InfoWindow({
            content: campusHover,
        });
        campusMarker.addListener('click', function(){
            markerOpenClose("campus");
        });
        
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#campusLink").click(function(){
            popupOpen("campus");
        });
        // when x on popup is clicked, close popup
        $("#campusPopupClose").click(function(){
            popupClose("campus");
        });

        var ceramicsHover = document.getElementById('ceramicsHover');
        var ceramicsHoverCard = new google.maps.InfoWindow({
            content: ceramicsHover,
        });
        ceramicsMarker.addListener('click', function(){
            markerOpenClose("ceramics");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#ceramicsLink").click(function(){
            popupOpen("ceramics");
        });
        // when x on popup is clicked, close popup
        $("#ceramicsPopupClose").click(function(){
            popupClose("ceramics");
        });

        var clowHover = document.getElementById('clowHover');
        var clowHoverCard = new google.maps.InfoWindow({
            content: clowHover,
        });
        clowMarker.addListener('click', function(){
            markerOpenClose("clow");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#clowLink").click(function(){
            popupOpen("clow");
        });
        // when x on popup is clicked, close popup
        $("#clowPopupClose").click(function(){
            popupClose("clow");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#clowAboutLi").click(function(){
            $("#clowDiningImage").css('display', "none");
            $("#clowDiningText").css('display', "none");

            $("#clowAboutImage").css('display', "block");
            $("#clowAboutText").css('display', "initial");
        });
        $("#clowDiningLi").click(function(){
            $("#clowAboutImage").css('display', "none");
            $("#clowAboutText").css('display', "none");
            $("#clowDiningImage > img").attr("src", "images/campuspictures/clowGif.gif");

            $("#clowDiningImage").css('display', "block");
            $("#clowDiningText").css('display', "initial");
        });


        var gardensHover = document.getElementById('gardensHover');
        var gardensHoverCard = new google.maps.InfoWindow({
            content: gardensHover,
        });
        gardensMarker.addListener('click', function(){
            markerOpenClose("gardens");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#gardensLink").click(function(){
            popupOpen("gardens");
        });
        // when x on popup is clicked, close popup
        $("#gardensPopupClose").click(function(){
            popupClose("gardens");
        });


        var dempseyHover = document.getElementById('dempseyHover');
        var dempseyHoverCard = new google.maps.InfoWindow({
            content: dempseyHover,
        });
        
        dempseyMarker.addListener('click', function(){
            markerOpenClose("dempsey");
        });
       
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#dempseyLink").click(function(){
            popupOpen("dempsey");
        });
        // when x on popup is clicked, close popup
        $("#dempseyPopupClose").click(function(){
            popupClose("dempsey");
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#dempseyAboutLi").click(function(){
            $("#dempseyBathrooms").css('display', "none");

            $("#dempseyAboutImage").css('display', "block");
            $("#dempseyAboutText").css('display', "initial");
        });
        $("#dempseyBathroomsLi").click(function(){
            $("#dempseyAboutImage").css('display', "none");
            $("#dempseyAboutText").css('display', "none");

            $("#dempseyBathrooms").css('display', "initial");
        });


        var donnerHover = document.getElementById('donnerHover');
        var donnerHoverCard = new google.maps.InfoWindow({
            content: donnerHover,
        });
        donnerMarker.addListener('click', function(){
            markerOpenClose("donner");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#donnerLink").click(function(){
            popupOpen("donner");
        });
        // when x on popup is clicked, close popup
        $("#donnerPopupClose").click(function(){
            popupClose("donner");
        });


        var eastHover = document.getElementById('eastHover');
        var eastHoverCard = new google.maps.InfoWindow({
            content: eastHover,
        });
        eastMarker.addListener('click', function(){
            markerOpenClose("east");
        });
        
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#eastLink").click(function(){
            popupOpen("east");
        });
        // when x on popup is clicked, close popup
        $("#eastPopupClose").click(function(){
            popupClose("east");
        });

        var environmentalHover = document.getElementById('environmentalHover');
        var environmentalHoverCard = new google.maps.InfoWindow({
            content: environmentalHover,
        });
        environmentalMarker.addListener('click', function(){
            markerOpenClose("environmental");
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#environmentalLink").click(function(){
            popupOpen("environmental");
        });
        // when x on popup is clicked, close popup
        $("#environmentalPopupClose").click(function(){
            popupClose("environmental");
        });

        var evansHover = document.getElementById('evansHover');
        var evansHoverCard = new google.maps.InfoWindow({
            content: evansHover,
        });
        
        evansMarker.addListener('click', function(){
            var evans = "evans";
            markerOpenClose(evans);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#evansLink").click(function(){
            var evans = "evans";
            popupOpen(evans);
        });
        // when x on popup is clicked, close popup
        $("#evansPopupClose").click(function(){
            var evans = "evans";
            popupClose(evans);
        });

        var fletcherHover = document.getElementById('fletcherHover');
        var fletcherHoverCard = new google.maps.InfoWindow({
            content: fletcherHover,
        });
        fletcherMarker.addListener('click', function(){
            var fletcher = "fletcher";
            markerOpenClose(fletcher);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fletcherLink").click(function(){
            var fletcher = "fletcher";
            popupOpen(fletcher);
        });
        // when x on popup is clicked, close popup
        $("#fletcherPopupClose").click(function(){
            var fletcher = "fletcher";
            popupClose("fletcher");
        });

        var fredricHover = document.getElementById('fredricHover');
        var fredricHoverCard = new google.maps.InfoWindow({
            content: fredricHover,
        });
        fredricMarker.addListener('click', function(){
            var fredric = "fredric";
            markerOpenClose(fredric);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fredricLink").click(function(){
            var fredric = "fredric";
            popupOpen(fredric);
        });
        // when x on popup is clicked, close popup
        $("#fredricPopupClose").click(function(){
            var fredric = "fredric";
            popupClose(fredric);
        });

        // GRUENHAGEN
        // declare variable
        var gruenhagenHover = document.getElementById('gruenhagenHover');
        // create variable as content card
        var gruenhagenHoverCard = new google.maps.InfoWindow({
            content: gruenhagenHover,
        });
        gruenhagenMarker.addListener('click', function(){
            var gruenhagen = "gruenhagen";
            markerOpenClose(gruenhagen);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#gruenhagenLink").click(function(){
            var gruenhagen  = "gruenhagen";
            popupOpen(gruenhagen);
        });
        // when x on popup is clicked, close popup
        $("#gruenhagenPopupClose").click(function(){
            var gruenhagen = "gruenhagen";
            popupClose(gruenhagen);
        });


        var halseyHover = document.getElementById('halseyHover');
        var halseyHoverCard = new google.maps.InfoWindow({
            content: halseyHover,
        });
        halseyMarker.addListener('click', function(){
            var halsey = "halsey";
            markerOpenClose(halsey);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#halseyLink").click(function(){
            var halsey = "halsey";
            popupOpen(halsey);
        });
        // when x on popup is clicked, close popup
        $("#halseyPopupClose").click(function(){
            var halsey = "halsey";
            popupClose(halsey);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#halseyAboutLi").click(function(){
            $("#halseyBathrooms").css('display', "none");
            $("#halseyDiningImage").css('display', "none");
            $("#halseyDiningText").css('display', "none");

            $("#halseyAboutImage").css('display', "block");
            $("#halseyAboutText").css('display', "initial");
        });
        $("#halseyBathroomsLi").click(function(){
            $("#halseyAboutImage").css('display', "none");
            $("#halseyAboutText").css('display', "none");
            $("#halseyDiningImage").css('display', "none");
            $("#halseyDiningText").css('display', "none");

            $("#halseyBathrooms").css('display', "initial");
        });
        $("#halseyDiningLi").click(function(){
            $("#halseyAboutImage").css('display', "none");
            $("#halseyAboutText").css('display', "none");
            $("#halseyBathrooms").css('display', "none");
            $("#halseyDiningImage > img").attr("src", "images/campuspictures/halseyGif.gif");

            $("#halseyDiningImage").css('display', "block");
            $("#halseyDiningText").css('display', "initial");

        });



        var harringtonHover = document.getElementById('harringtonHover');
        var harringtonHoverCard = new google.maps.InfoWindow({
            content: harringtonHover,
        });
        harringtonMarker.addListener('click', function(){
           var harrington = "harrington";
           markerOpenClose(harrington);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#harringtonLink").click(function(){
            var harrington = "harrington";
            popupOpen(harrington);
        });
        // when x on popup is clicked, close popup
        $("#harringtonPopupClose").click(function(){
            var harrington = "harrington";
            popupClose(harrington);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#harringtonAboutLi").click(function(){
            $("#harringtonBathrooms").css('display', "none");

            $("#harringtonAboutImage").css('display', "block");
            $("#harringtonAboutText").css('display', "initial");
        });
        $("#harringtonBathroomsLi").click(function(){
            $("#harringtonAboutImage").css('display', "none");
            $("#harringtonAboutText").css('display', "none");

            $("#harringtonBathrooms").css('display', "initial");
        });

        var heatingHover = document.getElementById('heatingHover');
        var heatingHoverCard = new google.maps.InfoWindow({
            content: heatingHover,
        });
        heatingMarker.addListener('click', function(){
            var heating = "heating";
            markerOpenClose(heating);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#heatingLink").click(function(){
            var heating = "heating";
            popupOpen(heating);
        });
        // when x on popup is clicked, close popup
        $("#heatingPopupClose").click(function(){
            var heating = "heating";
            popupClose(heating);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#heatingAboutLi").click(function(){
            $("#heatingSustainability").css('display', "none");

            $("#heatingAboutImage").css('display', "block");
            $("#heatingAboutText").css('display', "initial");
        });
        $("#heatingSustainabilityLi").click(function(){
            $("#heatingAboutImage").css('display', "none");
            $("#heatingAboutText").css('display', "none");

            $("#heatingSustainability").css('display', "initial");
        });


        var parkingRampHover = document.getElementById('parkingRampHover');
        var parkingRampHoverCard = new google.maps.InfoWindow({
            content: parkingRampHover,
        });
        parkingRampMarker.addListener('click', function(){
            var parkingRamp = "parkingRamp";
            markerOpenClose(parkingRamp);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#parkingRampLink").click(function(){
            var parkingRamp = "parkingRamp";
            popupOpen(parkingRamp);
        });
        // when x on popup is clicked, close popup
        $("#parkingRampPopupClose").click(function(){
            var parkingRamp = "parkingRamp";
            popupClose(parkingRamp);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#parkingAboutLi").click(function(){
            $("#parkingRampParkingImage").css('display', "none");
            $("#parkingRampParkingText").css('display', "none");

            $("#parkingAboutImage").css('display', "block");
            $("#parkingAboutText").css('display', "initial");
        });
        $("#parkingParkingLi").click(function(){
            $("#parkingAboutImage").css('display', "none");
            $("#parkingAboutText").css('display', "none");
            $("#parkingRampParkingImage> img").attr("src", "images/campuspictures/parkingRamp.png");

            $("#parkingRampParkingImage").css('display', "initial");
            $("#parkingRampParkingText").css('display', "initial");
        });

        var horizonHover = document.getElementById('horizonHover');
        var horizonHoverCard = new google.maps.InfoWindow({
            content: horizonHover,
        });
        horizonMarker.addListener('click', function(){
            var horizon = "horizon";
            markerOpenClose(horizon);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#horizonLink").click(function(){
            var horizon = "horizon";
            popupOpen(horizon);
        });
        // when x on popup is clicked, close popup
        $("#horizonPopupClose").click(function(){
            var horizon = "horizon";
            popupClose(horizon);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#horizonAboutLi").click(function(){
            $("#horizonSustainability").css('display', "none");

            $("#horizonAboutImage").css('display', "block");
            $("#horizonAboutText").css('display', "initial");
        });
        $("#horizonSustainabilityLi").click(function(){
            $("#horizonAboutImage").css('display', "none");
            $("#horizonAboutText").css('display', "none");

            $("#horizonSustainability").css('display', "initial");
        });

        var kolfHover = document.getElementById('kolfHover');
        var kolfHoverCard = new google.maps.InfoWindow({
            content: kolfHover,
        });
        kolfMarker.addListener('click', function(){
            var kolf = "kolf";
            markerOpenClose(kolf);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#kolfLink").click(function(){
            var kolf = "kolf";
            popupOpen(kolf);
        });
        // when x on popup is clicked, close popup
        $("#kolfPopupClose").click(function(){
            var kolf = "kolf";
            popupClose(kolf);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#kolfAboutLi").click(function(){
            $("#kolfBathrooms").css('display', "none");

            $("#kolfAboutImage").css('display', "block");
            $("#kolfAboutText").css('display', "initial");
        });
        $("#kolfBathroomsLi").click(function(){
            $("#kolfAboutImage").css('display', "none");
            $("#kolfAboutText").css('display', "none");

            $("#kolfBathrooms").css('display', "initial");
        });

        var lincolnHover = document.getElementById('lincolnHover');
        var lincolnHoverCard = new google.maps.InfoWindow({
            content: lincolnHover,
        });
        lincolnMarker.addListener('click', function(){
            var lincoln = "lincoln";
            markerOpenClose(lincoln);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#lincolnLink").click(function(){
            var lincoln = "lincoln";
            popupOpen(lincoln);
        });
        // when x on popup is clicked, close popup
        $("#lincolnPopupClose").click(function(){
            var lincoln = "lincoln";
            popupClose(lincoln);
        });

        var multiculturalHover = document.getElementById('multiculturalHover');
        var multiculturalHoverCard = new google.maps.InfoWindow({
            content: multiculturalHover,
        });
        multiculturalMarker.addListener('click', function(){
            var multicultural = "multicultural";
            markerOpenClose(multicultural);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#multiculturalLink").click(function(){
            var multicultural = "multicultural";
            popupOpen(multicultural);
        });
        // when x on popup is clicked, close popup
        $("#multiculturalPopupClose").click(function(){
            var multicultural = "multicultural";
            popupClose(multicultural);
        });

        var nursingHover = document.getElementById('nursingHover');
        var nursingHoverCard = new google.maps.InfoWindow({
            content: nursingHover,
        });
        nursingMarker.addListener('click', function(){
            var nursing = "nursing";
            markerOpenClose(nursing);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#nursingLink").click(function(){
            var nursing = "nursing";
            popupOpen(nursing);
        });
        // when x on popup is clicked, close popup
        $("#nursingPopupClose").click(function(){
            var nursing = "nursing";
            popupClose(nursing);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#nursingAboutLi").click(function(){
            $("#nursingBathrooms").css('display', "none");

            $("#nursingAboutImage").css('display', "block");
            $("#nursingAboutText").css('display', "initial");
        });
        $("#nursingBathroomsLi").click(function(){
            $("#nursingAboutImage").css('display', "none");
            $("#nursingAboutText").css('display', "none");

            $("#nursingBathrooms").css('display', "initial");
        });


        var oviattHover = document.getElementById('oviattHover');
        var oviattHoverCard = new google.maps.InfoWindow({
            content: oviattHover,
        });
        oviattMarker.addListener('click', function(){
            var oviatt = "oviatt";
            markerOpenClose(oviatt);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#oviattLink").click(function(){
            var oviatt = "oviatt";
            popupOpen(oviatt);
        });
        // when x on popup is clicked, close popup
        $("#oviattPopupClose").click(function(){
            var oviatt = "oviatt";
            popupClose(oviatt);
        });

        var pollockHover = document.getElementById('pollockHover');
        var pollockHoverCard = new google.maps.InfoWindow({
            content: pollockHover,
        });
        pollockMarker.addListener('click', function(){
        
        var pollock = "pollock";
        markerOpenClose(pollock);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#pollockLink").click(function(){
            var pollock = "pollock";
            popupOpen(pollock);
        });
        // when x on popup is clicked, close popup
        $("#pollockPopupClose").click(function(){
            var pollock = "pollock";
            popupClose(pollock);
        });


        var polkHover = document.getElementById('polkHover');
        var polkHoverCard = new google.maps.InfoWindow({
            content: polkHover,
        });
        polkMarker.addListener('click', function(){
            var polk = "polk";
            markerOpenClose(polk);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#polkLink").click(function(){
            var polk = "polk";
            popupOpen(polk);
        });
        // when x on popup is clicked, close popup
        $("#polkPopupClose").click(function(){
            var polk = "polk";
            popupClose(polk);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#polkAboutLi").click(function(){
            $("#polkTourVideo").css('display', "none");
            $("#polkTourText").css('display', "none");

            $("#polkAboutImage").css('display', "block");
            $("#polkAboutText").css('display', "initial");
        });
        $("#polkTourLi").click(function(){
            $("#polkAboutImage").css('display', "none");
            $("#polkAboutText").css('display', "none");

            $("#polkTourText").css('display', "initial");
            $("#polkTourVideo").css('display', "initial");
        });


        var radfordHover = document.getElementById('radfordHover');
        var radfordHoverCard = new google.maps.InfoWindow({
            content: radfordHover,
        });
        radfordMarker.addListener('click', function(){
            var radford = "radford";
            markerOpenClose(radford);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#radfordLink").click(function(){
            var radford = "radford";
            popupOpen(radford);
        });
        // when x on popup is clicked, close popup
        $("#radfordPopupClose").click(function(){
            var radford = "radford";
            popupClose(radford);
        });

        var reeveHover = document.getElementById('reeveHover');
        var reeveHoverCard = new google.maps.InfoWindow({
            content: reeveHover,
        });
        reeveMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#reeveLink").click(function(){
            var reeve = "reeve";
            popupOpen(reeve);
        });
        // when x on popup is clicked, close popup
        $("#reevePopupClose").click(function(){
            var reeve = "reeve";
            popupClose(reeve);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#reeveAboutLi").click(function(){
            $("#reeveTourVideo").css('display', "none");
            $("#reeveTourText").css('display', "none");
            $("#reeveSustainability").css('display', "none");
            $("#reeveBathrooms").css('display', "none");
            $("#reeveDiningImage").css('display', "none");
            $("#reeveDiningText").css('display', "none");

            $("#reeveAboutImage").css('display', "block");
            $("#reeveAboutText").css('display', "initial");
        });
        $("#reeveTourLi").click(function(){
            $("#reeveAboutImage").css('display', "none");
            $("#reeveAboutText").css('display', "none");
            $("#reeveSustainability").css('display', "none");
            $("#reeveBathrooms").css('display', "none");
            $("#reeveDiningImage").css('display', "none");
            $("#reeveDiningText").css('display', "none");

            $("#reeveTourText").css('display', "initial");
            $("#reeveTourVideo").css('display', "initial");
        });
        $("#reeveSustainabilityLi").click(function(){
            $("#reeveAboutImage").css('display', "none");
            $("#reeveAboutText").css('display', "none");
            $("#reeveTourVideo").css('display', "none");
            $("#reeveTourText").css('display', "none");
            $("#reeveBathrooms").css('display', "none");
            $("#reeveDiningImage").css('display', "none");
            $("#reeveDiningText").css('display', "none");

            $("#reeveSustainability").css('display', "initial");
        });
        $("#reeveBathroomsLi").click(function(){
            $("#reeveAboutImage").css('display', "none");
            $("#reeveAboutText").css('display', "none");
            $("#reeveTourVideo").css('display', "none");
            $("#reeveTourText").css('display', "none");
            $("#reeveSustainability").css('display', "none");
            $("#reeveDiningImage").css('display', "none");
            $("#reeveDiningText").css('display', "none");

            $("#reeveBathrooms").css('display', "initial");
        });
        $("#reeveDiningLi").click(function(){
            $("#reeveAboutImage").css('display', "none");
            $("#reeveAboutText").css('display', "none");
            $("#reeveTourVideo").css('display', "none");
            $("#reeveTourText").css('display', "none");
            $("#reeveSustainability").css('display', "none");
            $("#reeveBathrooms").css('display', "none");
            $("#reeveDiningImage > img").attr("src", "images/campuspictures/reeveGif.gif");

            $("#reeveDiningImage").css('display', "block");
            $("#reeveDiningText").css('display', "initial");
        });


        var sageHover = document.getElementById('sageHover');
        var sageHoverCard = new google.maps.InfoWindow({
            content: sageHover,
        });
        sageMarker.addListener('click', function(){
            var sage = "sage";
            markerOpenClose(sage);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#sageLink").click(function(){
            var sage = "sage";
            popupOpen(sage);
        });
        // when x on popup is clicked, close popup
        $("#sagePopupClose").click(function(){
            var sage = "sage";
            popupClose(sage);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#sageAboutLi").click(function(){
            $("#sageTourVideo").css('display', "none");
            $("#sageTourText").css('display', "none");
            $("#sageSustainability").css('display', "none");
            $("#sageBathrooms").css('display', "none");
            $("#sageDiningImage").css('display', "none");
            $("#sageDiningText").css('display', "none");

            $("#sageAboutImage").css('display', "block");
            $("#sageAboutText").css('display', "initial");
        });
        $("#sageTourLi").click(function(){
        $("#sageAboutImage").css('display', "none");
            $("#sageAboutText").css('display', "none");
            $("#sageSustainability").css('display', "none");
            $("#sageBathrooms").css('display', "none");
            $("#sageDiningImage").css('display', "none");
            $("#sageDiningText").css('display', "none");

            $("#sageTourText").css('display', "initial");
            $("#sageTourVideo").css('display', "initial");
        });
        $("#sageSustainabilityLi").click(function(){
            $("#sageAboutImage").css('display', "none");
            $("#sageAboutText").css('display', "none");
            $("#sageTourVideo").css('display', "none");
            $("#sageTourText").css('display', "none");
            $("#sageBathrooms").css('display', "none");
            $("#sageDiningImage").css('display', "none");
            $("#sageDiningText").css('display', "none");

            $("#sageSustainability").css('display', "initial");
        });
        $("#sageBathroomsLi").click(function(){
            $("#sageAboutImage").css('display', "none");
            $("#sageAboutText").css('display', "none");
            $("#sageTourVideo").css('display', "none");
            $("#sageTourText").css('display', "none");
            $("#sageSustainability").css('display', "none");
            $("#sageDiningImage").css('display', "none");
            $("#sageDiningText").css('display', "none");

            $("#sageBathrooms").css('display', "initial");
        });
        $("#sageDiningLi").click(function(){
            $("#sageAboutImage").css('display', "none");
            $("#sageAboutText").css('display', "none");
            $("#sageTourVideo").css('display', "none");
            $("#sageTourText").css('display', "none");
            $("#sageSustainability").css('display', "none");
            $("#sageBathrooms").css('display', "none");
            $("#sageDiningImage > img").attr("src", "images/campuspictures/sageGif.gif");

            $("#sageDiningImage").css('display', "block");
            $("#sageDiningText").css('display', "initial");
        });

        var scottHover = document.getElementById('scottHover');
        var scottHoverCard = new google.maps.InfoWindow({
            content: scottHover,
        });
        scottMarker.addListener('click', function(){
            var scott = "scott";
            markerOpenClose(scott);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#scottLink").click(function(){
            var scott = "scott";
            popupOpen(scott);
        });
        // when x on popup is clicked, close popup
        $("#scottPopupClose").click(function(){
            var scott = "scott";
            popupClose(scott);
        });
        // tab clicking/content displaying
        $("#scottAboutLi").click(function(){
            $("#scottDiningImage").css('display', "none");
            $("#scottDiningText").css('display', "none");

            $("#scottAboutImage").css('display', "block");
            $("#scottAboutText").css('display', "initial");
        });
        $("#scottDiningLi").click(function(){
            $("#scottAboutImage").css('display', "none");
            $("#scottAboutText").css('display', "none");
            $("#scottDiningImage > img").attr("src", "images/campuspictures/scottGif.gif");

            $("#scottDiningImage").css('display', "block");
            $("#scottDiningText").css('display', "initial");
        });

        var stewartHover = document.getElementById('stewartHover');
        var stewartHoverCard = new google.maps.InfoWindow({
            content: stewartHover,
        });
        stewartMarker.addListener('click', function(){
            var stewart = "stewart";
            markerOpenClose(stewart);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#stewartLink").click(function(){
            var stewart = "stewart";
            popupOpen(stewart);
        });
        // when x on popup is clicked, close popup
        $("#stewartPopupClose").click(function(){
            var stewart = "stewart";
            popupClose(stewart);
        });


        var recreationHover = document.getElementById('recreationHover');
        var recreationHoverCard = new google.maps.InfoWindow({
            content: recreationHover,
        });
        recreationMarker.addListener('click', function(){
            var recreation = "recreation";
            markerOpenClose(recreation);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#recreationLink").click(function(){
            var recreation = "recreation";
            popupOpen(recreation);
        });
        // when x on popup is clicked, close popup
        $("#recreationPopupClose").click(function(){
            var recreation = "recreation";
            popupClose(recreation);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#recreationAboutLi").click(function(){
            $("#recreationSustainability").css('display', "none");
            $("#recreationBathrooms").css('display', "none");

            $("#recreationAboutImage").css('display', "block");
            $("#recreationAboutText").css('display', "initial");
        });
        $("#recreationSustainabilityLi").click(function(){
            $("#recreationAboutImage").css('display', "none");
            $("#recreationAboutText").css('display', "none");
            $("#recreationBathrooms").css('display', "none");

            $("#recreationSustainability").css('display', "initial");
        });
        $("#recreationBathroomsLi").click(function(){
            $("#recreationAboutImage").css('display', "none");
            $("#recreationAboutText").css('display', "none");
            $("#recreationSustainability").css('display', "none");

            $("#recreationBathrooms").css('display', "initial");
        });

        var successHover = document.getElementById('successHover');
        var successHoverCard = new google.maps.InfoWindow({
            content: successHover,
        });
        successMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#successLink").click(function(){
            var success = "success";
            popupOpen(success);
        });
        // when x on popup is clicked, close popup
        $("#successPopupClose").click(function(){
            var success = "success";
            popupClose(success);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#successAboutLi").click(function(){
            $("#successSustainability").css('display', "none");
            $("#successBathrooms").css('display', "none");
            $("#successTourText").css('display', "none");
            $("#successTourVideo").css('display', "none");

            $("#successAboutImage").css('display', "block");
            $("#successAboutText").css('display', "initial");
        });
        $("#successTourLi").click(function(){
            $("#successAboutImage").css('display', "none");
            $("#successAboutText").css('display', "none");
            $("#successBathrooms").css('display', "none");
            $("#successSustainability").css('display', "none");

            $("#successTourVideo").css('display', "initial");
            $("#successTourText").css('display', "initial");
        });
        $("#successSustainabilityLi").click(function(){
            $("#successAboutImage").css('display', "none");
            $("#successAboutText").css('display', "none");
            $("#successBathrooms").css('display', "none");
            $("#successTourText").css('display', "none");
            $("#successTourVideo").css('display', "none");

            $("#successSustainability").css('display', "initial");
        });
        $("#successBathroomsLi").click(function(){
            $("#successAboutImage").css('display', "none");
            $("#successAboutText").css('display', "none");
            $("#successSustainability").css('display', "none");
            $("#successTourText").css('display', "none");
            $("#successTourVideo").css('display', "none");

            $("#successBathrooms").css('display', "initial");
        });


        var swartHover = document.getElementById('swartHover');
        var swartHoverCard = new google.maps.InfoWindow({
            content: swartHover,
        });
        swartMarker.addListener('click', function(){
            var swart = "swart";
            markerOpenClose(swart);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#swartLink").click(function(){
           var swart = "swart";
           popupOpen(swart);
        });
        // when x on popup is clicked, close popup
        $("#swartPopupClose").click(function(){
            var swart = "swart";
            popupClose(swart);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#swartAboutLi").click(function(){
            $("#swartBathrooms").css('display', "none");

            $("#swartAboutImage").css('display', "block");
            $("#swartAboutText").css('display', "initial");
        });
        $("#swartBathroomsLi").click(function(){
            $("#swartAboutImage").css('display', "none");
            $("#swartAboutText").css('display', "none");

            $("#swartBathrooms").css('display', "initial");
        });

        var taylorHover = document.getElementById('taylorHover');
        var taylorHoverCard = new google.maps.InfoWindow({
            content: taylorHover,
        });
        taylorMarker.addListener('click', function(){
            var taylor = "taylor";
            markerOpenClose(taylor);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#taylorLink").click(function(){
            var taylor = "taylor";
            popupOpen(taylor);
        });
        // when x on popup is clicked, close popup
        $("#taylorPopupClose").click(function(){
            var taylor = "taylor";
            popupClose(taylor);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#taylorAboutLi").click(function(){
            $("#taylorSustainability").css('display', "none");

            $("#taylorAboutImage").css('display', "block");
            $("#taylorAboutText").css('display', "initial");
        });
        $("#taylorSustainabilityLi").click(function(){
            $("#taylorAboutImage").css('display', "none");
            $("#taylorAboutText").css('display', "none");

            $("#taylorSustainability").css('display', "initial");
        });

        var titanHover = document.getElementById('titanHover');
        var titanHoverCard = new google.maps.InfoWindow({
            content: titanHover,
        });
        titanMarker.addListener('click', function(){
            var titan = "titan";
            markerOpenClose(titan);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#titanLink").click(function(){
            var titan = "titan";
            popupOpen(titan);
        });
        // when x on popup is clicked, close popup
        $("#titanPopupClose").click(function(){
            var titan = "titan";
            popupClose(titan);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#titanAboutLi").click(function(){
            $("#titanSustainability").css('display', "none");

            $("#titanAboutImage").css('display', "block");
            $("#titanAboutText").css('display', "initial");
        });
        $("#titanSustainabilityLi").click(function(){
            $("#titanAboutImage").css('display', "none");
            $("#titanAboutText").css('display', "none");

            $("#titanSustainability").css('display', "initial");
        });


        var policeHover = document.getElementById('policeHover');
        var policeHoverCard = new google.maps.InfoWindow({
            content: policeHover,
        });
        policeMarker.addListener('click', function(){
            var police = "police";
            markerOpenClose(police);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#policeLink").click(function(){
            var police = "police";
            popupOpen(police);
        });
        // when x on popup is clicked, close popup
        $("#policePopupClose").click(function(){
            var police = "police";
            popupClose(police);
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#policeAboutLi").click(function(){
            $("#policeBathrooms").css('display', "none");

            $("#policeAboutImage").css('display', "block");
            $("#policeAboutText").css('display', "initial");
        });
        $("#policeBathroomsLi").click(function(){
            $("#policeAboutImage").css('display', "none");
            $("#policeAboutText").css('display', "none");

            $("#policeBathrooms").css('display', "initial");
        });


        var websterHover = document.getElementById('websterHover');
        var websterHoverCard = new google.maps.InfoWindow({
            content: websterHover,
        });
        websterMarker.addListener('click', function(){
            var webster = "webster";
            markerOpenClose(webster);
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#websterLink").click(function(){
            var webster = "webster";
            popupOpen(webster);
        });
        // when x on popup is clicked, close popup
        $("#websterPopupClose").click(function(){
            var webster = "webster";
            popupClose(webster);
        });


        

        // array for parking lots
        var parkingLots = [
            // [0] Lot 11
            {lat: 44.030449, lng: -88.552415},
            // [1] Lot 35
            {lat: 44.029428, lng: -88.558183},
            // [2] Lot 27
            {lat: 44.029026, lng: -88.554960},
            // [3] Lot 21
            {lat: 44.029123, lng: -88.553173},
            // [4] Lot 26
            {lat: 44.029838, lng: -88.551684},
            // [5] Lot 4
            {lat: 44.029100, lng: -88.551581},
            // [6] Lot 4a
            {lat: 44.028586, lng: -88.552649},
            // [7] Lot 16
            {lat: 44.028822, lng: -88.550956},
            // [8] Lot 17
            {lat: 44.028648, lng: -88.549711},
            // [9] Lot 29
            {lat: 44.027825, lng: -88.553434},
            // [10] Lot 25
            {lat: 44.027233, lng: -88.553602},
            // [11] Lot 8
            {lat: 44.026371, lng: -88.554322},
            // [12] Lot 33
            {lat: 44.025668, lng: -88.555558},
            // [13] Lot 34
            {lat: 44.027133, lng: -88.548009},
            // [14] Lot 28
            {lat: 44.025858, lng: -88.548893},
            // [15] Lot 23
            {lat: 44.025511, lng: -88.546748},
            // [16] Lot 14a
            {lat: 44.025828, lng: -88.552416},
            // [17] Lot 14b
            {lat: 44.025673, lng: -88.551929},
            // [18] Lot 14c
            {lat: 44.025302, lng: -88.551711},
            // [19] Lot 7
            {lat: 44.025023, lng: -88.553519},
            // [20] Lot 5a
            {lat: 44.024150, lng: -88.554291},
            // [21] Lot 5
            {lat: 44.023717, lng: -88.553693},
            // [22] Lot 7a
            {lat: 44.023897, lng: -88.552670},
            // [23] Lot 15
            {lat: 44.024142, lng: -88.549694},
            // [24] Lot 32
            {lat: 44.023912, lng: -88.550031},
            // [25] Lot 13
            {lat: 44.023505, lng: -88.551579},
            // [26] Lot 12
            {lat: 44.022135, lng: -88.551702},
            // [27] Lot 6a
            {lat: 44.021216, lng: -88.551093},
            // [28] Lot 6
            {lat: 44.020887, lng: -88.549848},
            // [29] Lot 10
            {lat: 44.021857, lng: -88.548831},
            // [30] Lot 9a
            {lat: 44.022435, lng: -88.548564},
            // [31] Lot 9
            {lat: 44.021955, lng:  -88.548167},
            // [32] Lot 18
            {lat: 44.022368, lng: -88.546827},
            // [33] Lot 30
            {lat: 44.021440, lng: -88.547947},
            // [34] Lot 39
            {lat: 44.018367, lng: -88.556821}
        ];
        // parking lots markers
        var elevenMarker = new google.maps.Marker({
            position: parkingLots[0],
            icon: purpleMarker,
            title: "Lot 11"
        });
        var thirtyfiveMarker = new google.maps.Marker({
            position: parkingLots[1],
            icon: purpleMarker,
            title: "Lot 35"
        });
        var twentysevenMarker = new google.maps.Marker({
            position: parkingLots[2],
            icon: purpleMarker,
            title: "Lot 27"
        });
        var twentyoneMarker = new google.maps.Marker({
            position: parkingLots[3],
            icon: purpleMarker,
            title: "Lot 21"
        });
        var twentysixMarker = new google.maps.Marker({
            position: parkingLots[4],
            icon: purpleMarker,
            title: "Lot 26"
        });
        var fourMarker = new google.maps.Marker({
            position: parkingLots[5],
            icon: purpleMarker,
            title: "Lot 4"
        });
        var fouraMarker = new google.maps.Marker({
            position: parkingLots[6],
            icon: purpleMarker,
            title: "Lot 4a"
        });
        var sixteenMarker = new google.maps.Marker({
            position: parkingLots[7],
            icon: purpleMarker,
            title: "Lot 16"
        });
        var seventeenMarker = new google.maps.Marker({
            position: parkingLots[8],
            icon: purpleMarker,
            title: "Lot 17"
        });
        var twentynineMarker = new google.maps.Marker({
            position: parkingLots[9],
            icon: purpleMarker,
            title: "Lot 29"
        });
        var twentyfiveMarker = new google.maps.Marker({
            position: parkingLots[10],
            icon: purpleMarker,
            title: "Lot 25"
        });
        var eightMarker = new google.maps.Marker({
            position: parkingLots[11],
            icon: purpleMarker,
            title: "Lot 8"
        });
        var thirtythreeMarker = new google.maps.Marker({
            position: parkingLots[12],
            icon: purpleMarker,
            title: "Lot 33"
        });
        var thirtyfourMarker = new google.maps.Marker({
            position: parkingLots[13],
            icon: purpleMarker,
            title: "Lot 34"
        });
        var twentyeightMarker = new google.maps.Marker({
            position: parkingLots[14],
            icon: purpleMarker,
            title: "Lot 28"
        });
        var twentythreeMarker = new google.maps.Marker({
            position: parkingLots[15],
            icon: purpleMarker,
            title: "Lot 23"
        });
        var fourteenaMarker = new google.maps.Marker({
            position: parkingLots[16],
            icon: purpleMarker,
            title: "Lot 14a"
        });
        var fourteenbMarker = new google.maps.Marker({
            position: parkingLots[17],
            icon: purpleMarker,
            title: "Lot 14b"
        });
        var fourteencMarker = new google.maps.Marker({
            position: parkingLots[18],
            icon: purpleMarker,
            title: "Lot 14c"
        });
        var sevenMarker = new google.maps.Marker({
            position: parkingLots[19],
            icon: purpleMarker,
            title: "Lot 7"
        });
        var fiveaMarker = new google.maps.Marker({
            position: parkingLots[20],
            icon: purpleMarker,
            title: "Lot 5a"
        });
        var fiveMarker = new google.maps.Marker({
            position: parkingLots[21],
            icon: purpleMarker,
            title: "Lot 5"
        });
        var sevenaMarker = new google.maps.Marker({
            position: parkingLots[22],
            icon: purpleMarker,
            title: "Lot 7a"
        });
        var fifteenMarker = new google.maps.Marker({
            position: parkingLots[23],
            icon: purpleMarker,
            title: "Lot 15"
        });
        var thirtytwoMarker = new google.maps.Marker({
            position: parkingLots[24],
            icon: purpleMarker,
            title: "Lot 32"
        });
        var thirteenMarker = new google.maps.Marker({
            position: parkingLots[25],
            icon: purpleMarker,
            title: "Lot 13"
        });
        var twelveMarker = new google.maps.Marker({
            position: parkingLots[26],
            icon: purpleMarker,
            title: "Lot 12"
        });
        var sixaMarker = new google.maps.Marker({
            position: parkingLots[27],
            icon: purpleMarker,
            title: "Lot 6a"
        });
        var sixMarker = new google.maps.Marker({
            position: parkingLots[28],
            icon: purpleMarker,
            title: "Lot 6"
        });
        var tenMarker = new google.maps.Marker({
            position: parkingLots[29],
            icon: purpleMarker,
            title: "Lot 10"
        });
        var nineaMarker = new google.maps.Marker({
            position: parkingLots[30],
            icon: purpleMarker,
            title: "Lot 9a"
        });
        var nineMarker = new google.maps.Marker({
            position: parkingLots[31],
            icon: purpleMarker,
            title: "Lot 9"
        });
        var eighteenMarker = new google.maps.Marker({
            position: parkingLots[32],
            icon: purpleMarker,
            title: "Lot 18"
        });
        var thirtyMarker = new google.maps.Marker({
            position: parkingLots[33],
            icon: purpleMarker,
            title: "Lot 30"
        });
        var thirtynineMarker = new google.maps.Marker({
            position: parkingLots[34],
            icon: purpleMarker,
            title: "Lot 39"
        });

        // set parking lot markers
        function setParkingLots(){
            parkingRampMarker.setMap(map);
            elevenMarker.setMap(map);
            thirtyfiveMarker.setMap(map);
            twentysevenMarker.setMap(map);
            twentyoneMarker.setMap(map);
            twentysixMarker.setMap(map);
            fourMarker.setMap(map);
            fouraMarker.setMap(map);
            sixteenMarker.setMap(map);
            seventeenMarker.setMap(map);
            twentynineMarker.setMap(map);
            twentyfiveMarker.setMap(map);
            eightMarker.setMap(map);
            thirtythreeMarker.setMap(map);
            thirtyfourMarker.setMap(map);
            twentyeightMarker.setMap(map);
            twentythreeMarker.setMap(map);
            fourteenaMarker.setMap(map);
            fourteenbMarker.setMap(map);
            fourteencMarker.setMap(map);
            sevenMarker.setMap(map);
            fiveaMarker.setMap(map);
            fiveMarker.setMap(map);
            sevenaMarker.setMap(map);
            fifteenMarker.setMap(map);
            thirtytwoMarker.setMap(map);
            thirteenMarker.setMap(map);
            twelveMarker.setMap(map);
            sixaMarker.setMap(map);
            sixMarker.setMap(map);
            tenMarker.setMap(map);
            nineaMarker.setMap(map);
            nineMarker.setMap(map);
            eighteenMarker.setMap(map);
            thirtyMarker.setMap(map);
            thirtynineMarker.setMap(map);
        }
        // remove parking lot markers
        function removeParkingLots(){
            parkingRampMarker.setMap(null);
            elevenMarker.setMap(null);
            thirtyfiveMarker.setMap(null);
            twentysevenMarker.setMap(null);
            twentyoneMarker.setMap(null);
            twentysixMarker.setMap(null);
            fourMarker.setMap(null);
            fouraMarker.setMap(null);
            sixteenMarker.setMap(null);
            seventeenMarker.setMap(null);
            twentynineMarker.setMap(null);
            twentyfiveMarker.setMap(null);
            eightMarker.setMap(null);
            thirtythreeMarker.setMap(null);
            thirtyfourMarker.setMap(null);
            twentyeightMarker.setMap(null);
            twentythreeMarker.setMap(null);
            fourteenaMarker.setMap(null);
            fourteenbMarker.setMap(null);
            fourteencMarker.setMap(null);
            sevenMarker.setMap(null);
            fiveaMarker.setMap(null);
            fiveMarker.setMap(null);
            sevenaMarker.setMap(null);
            fifteenMarker.setMap(null);
            thirtytwoMarker.setMap(null);
            thirteenMarker.setMap(null);
            twelveMarker.setMap(null);
            sixaMarker.setMap(null);
            sixMarker.setMap(null);
            tenMarker.setMap(null);
            nineaMarker.setMap(null);
            nineMarker.setMap(null);
            eighteenMarker.setMap(null);
            thirtyMarker.setMap(null);
            thirtynineMarker.setMap(null);
        }
        // parking marker hovers + marker functionality
 
        function parkingOpenClose(name){
            if(!$("#" + name + "Hover").hasClass("hoverOpen")){
                closeAllHover();
                if(name === "eleven"){
                    elevenHoverCard.open(map, elevenMarker);
                }
                else if (name === "thirtyfive"){
                    thirtyfiveHoverCard.open(map, thirtyfiveMarker);
                }
                else if (name === "twentyseven"){
                    twentysevenHoverCard.open(map, twentysevenMarker);
                }
                else if (name === "twentyone"){
                    twentyoneHoverCard.open(map, twentyoneMarker);
                }
                else if(name === "twentysix"){
                    twentysixHoverCard.open(map, twentysixMarker);
                }
                else if (name === "four"){
                    fourHoverCard.open(map, fourMarker);
                }
                else if (name === "foura"){
                    fouraHoverCard.open(map, fouraMarker);
                }
                else if (name === "sixteen"){
                    sixteenHoverCard.open(map, sixteenMarker);
                }
                else if (name === "seventeen"){
                    seventeenHoverCard.open(map, seventeenMarker);
                }
                else if (name === "twentynine"){
                    twentynineHoverCard.open(map, twentynineMarker);
                }
                else if (name === "twentyfive"){
                    twentyfiveHoverCard.open(map, twentyfiveMarker);
                }
                else if (name === "eight"){
                    eightHoverCard.open(map, eightMarker);
                }
                else if (name === "thirtythree"){
                    thirtythreeHoverCard.open(map, thirtythreeMarker);
                }
                else if (name === "thirtyfour"){
                    thirtyfourHoverCard.open(map, thirtyfourMarker);
                }
                else if (name === "twentyeight"){
                    twentyeightHoverCard.open(map, twentyeightMarker);
                }
                else if (name === "twentythree"){
                    twentythreeHoverCard.open(map, twentythreeMarker);
                }
                else if (name === "fourteena"){
                    fourteenaHoverCard.open(map, fourteenaMarker);
                }
                else if (name === "fourteenb"){
                    fourteenbHoverCard.open(map, fourteenbMarker);
                }
                else if (name === "fourteenc"){
                    fourteencHoverCard.open(map, fourteencMarker);
                }
                else if (name === "seven"){
                    sevenHoverCard.open(map, sevenMarker);
                }
                else if (name === "fivea"){
                    fiveaHoverCard.open(map, fiveaMarker);
                }
                else if (name === "five"){
                    fiveHoverCard.open(map, fiveMarker);
                }
                else if (name === "sevena"){
                    sevenaHoverCard.open(map, sevenaMarker);
                }
                else if (name === "fifteen"){
                    fifteenHoverCard.open(map, fifteenMarker);
                }
                else if (name === "thirtytwo"){
                    thirtytwoHoverCard.open(map, thirtytwoMarker);
                }
                else if (name === "thirteen"){
                    thirteenHoverCard.open(map, thirteenMarker);
                }
                else if (name === "twelve"){
                    twelveHoverCard.open(map, twelveMarker);
                }
                else if (name === "sixa"){
                    sixaHoverCard.open(map, sixaMarker);
                }
                else if (name === "six"){
                    sixHoverCard.open(map, sixMarker);
                }
                else if (name === "ten"){
                    tenHoverCard.open(map, tenMarker);
                }
                else if (name === "ninea"){
                    nineaHoverCard.open(map, nineaMarker);
                }
                else if (name === "nine"){
                    nineHoverCard.open(map, nineMarker);
                }
                else if (name === "eighteen"){
                    eighteenHoverCard.open(map, eighteenMarker);
                }
                else if (name === "thirty"){
                    thirtyHoverCard.open(map, thirtyMarker);
                }
                else if (name === "thirtynine"){
                    thirtynineHoverCard.open(map, thirtynineMarker);
                }
                else if (name === "womensCenter"){
                    womensCenterHoverCard.open(map, womensCenterMarker);
                }
                else if (name === "titanOne"){
                    titanOneHoverCard.open(map, titanOneMarker);
                }
                else if (name === "titanTwo"){
                    titanTwoHoverCard.open(map, titanTwoMarker);
                }
            $("#" + name + "Hover").addClass("hoverOpen");
            } else {
                $("#" + name + "Hover").removeClass("hoverOpen");
                closeAllHover();
            }
        }
        // lot 11 hover
        var elevenHover = document.getElementById('elevenHover');
        var elevenHoverCard = new google.maps.InfoWindow({
            content: elevenHover,
        });
        elevenMarker.addListener('click', function(){
            var eleven = "eleven";
            parkingOpenClose(eleven);
        });
        // lot 35 hover
        var thirtyfiveHover = document.getElementById('thirtyfiveHover');
        var thirtyfiveHoverCard = new google.maps.InfoWindow({
            content: thirtyfiveHover,
        });
        thirtyfiveMarker.addListener('click', function(){
            var thirtyfive = "thirtyfive";
            parkingOpenClose(thirtyfive);
        });

        // lot 27 hover
        var twentysevenHover = document.getElementById('twentysevenHover');
        var twentysevenHoverCard = new google.maps.InfoWindow({
            content: twentysevenHover,
        });
        twentysevenMarker.addListener('click', function(){
            var twentyseven = "twentyseven";
            parkingOpenClose(twentyseven);
        });

        // lot 21 hover
        var twentyoneHover = document.getElementById('twentyoneHover');
        var twentyoneHoverCard = new google.maps.InfoWindow({
            content: twentyoneHover,
        });
        twentyoneMarker.addListener('click', function(){
            var twentyone = "twentyone";
            parkingOpenClose(twentyone);
        });

        // lot 26 hover
        var twentysixHover = document.getElementById('twentysixHover');
        var twentysixHoverCard = new google.maps.InfoWindow({
            content: twentysixHover,
        });
        twentysixMarker.addListener('click', function(){
            var twentysix = "twentysix";
            parkingOpenClose(twentysix);
        });

        // lot 4 hover
        var fourHover = document.getElementById('fourHover');
        var fourHoverCard = new google.maps.InfoWindow({
            content: fourHover,
        });
        fourMarker.addListener('click', function(){
            var four = "four";
            parkingOpenClose(four);
        });

        // lot 4a hover
        var fouraHover = document.getElementById('fouraHover');
        var fouraHoverCard = new google.maps.InfoWindow({
            content: fouraHover,
        });
        fouraMarker.addListener('click', function(){
            var foura = "foura";
            parkingOpenClose(foura);
        });

        // lot 16 hover
        var sixteenHover = document.getElementById('sixteenHover');
        var sixteenHoverCard = new google.maps.InfoWindow({
            content: sixteenHover,
        });
        sixteenMarker.addListener('click', function(){
            var sixteen = "sixteen";
            parkingOpenClose(sixteen);
        });

        // lot 17 hover
        var seventeenHover = document.getElementById('seventeenHover');
        var seventeenHoverCard = new google.maps.InfoWindow({
            content: seventeenHover,
        });

        seventeenMarker.addListener('click', function(){
            var seventeen = "seventeen";
            parkingOpenClose(seventeen);
        });

        // lot 29 hover
        var twentynineHover = document.getElementById('twentynineHover');
        var twentynineHoverCard = new google.maps.InfoWindow({
            content: twentynineHover,
        });
        twentynineMarker.addListener('click', function(){
            var twentynine = "twentynine";
            parkingOpenClose(twentynine);
        });

        // lot 25 hover
        var twentyfiveHover = document.getElementById('twentyfiveHover');
        var twentyfiveHoverCard = new google.maps.InfoWindow({
            content: twentyfiveHover,
        });
        twentyfiveMarker.addListener('click', function(){
            var twentyfive = "twentyfive";
            parkingOpenClose(twentyfive);
        });

        // lot 8 hover
        var eightHover = document.getElementById('eightHover');
        var eightHoverCard = new google.maps.InfoWindow({
            content: eightHover,
        });
        eightMarker.addListener('click', function(){
            var eight = "eight";
            parkingOpenClose(eight);
        });

        // lot 33 hover
        var thirtythreeHover = document.getElementById('thirtythreeHover');
        var thirtythreeHoverCard = new google.maps.InfoWindow({
            content: thirtythreeHover,
        });
        thirtythreeMarker.addListener('click', function(){
            var thirtythree = "thirtythree";
            parkingOpenClose(thirtythree);
        });

        // lot 34 hover
        var thirtyfourHover = document.getElementById('thirtyfourHover');
        var thirtyfourHoverCard = new google.maps.InfoWindow({
            content: thirtyfourHover,
        });
        thirtyfourMarker.addListener('click', function(){
            var thirtyfour = "thirtyfour";
            parkingOpenClose(thirtyfour);
        });

        // lot 28 hover
        var twentyeightHover = document.getElementById('twentyeightHover');
        var twentyeightHoverCard = new google.maps.InfoWindow({
            content: twentyeightHover,
        });
        twentyeightMarker.addListener('click', function(){
            var twentyeight = "twentyeight";
            parkingOpenClose(twentyeight);
        });

        // lot 23 hover
        var twentythreeHover = document.getElementById('twentythreeHover');
        var twentythreeHoverCard = new google.maps.InfoWindow({
            content: twentythreeHover,
        });
        twentythreeMarker.addListener('click', function(){
            var twentythree = "twentythree";
            parkingOpenClose(twentythree);
        });

        // lot 14a hover
        var fourteenaHover = document.getElementById('fourteenaHover');
        var fourteenaHoverCard = new google.maps.InfoWindow({
            content: fourteenaHover,
        });
        fourteenaMarker.addListener('click', function(){
            var fourteena = "fourteena";
            parkingOpenClose(fourteena);
        });

        // lot 14b hover
        var fourteenbHover = document.getElementById('fourteenbHover');
        var fourteenbHoverCard = new google.maps.InfoWindow({
            content: fourteenbHover,
        });
        fourteenbMarker.addListener('click', function(){
            var fourteenb = "fourteenb";
            parkingOpenClose(fourteenb);
        });

        // lot 14c hover
        var fourteencHover = document.getElementById('fourteencHover');
        var fourteencHoverCard = new google.maps.InfoWindow({
            content: fourteencHover,
        });
        fourteencMarker.addListener('click', function(){
            var fourteenc = "fourteenc";
            parkingOpenClose(fourteenc);
        });

        // lot 7 hover
        var sevenHover = document.getElementById('sevenHover');
        var sevenHoverCard = new google.maps.InfoWindow({
            content: sevenHover,
        });
        sevenMarker.addListener('click', function(){
            var seven = "seven";
            parkingOpenClose(seven);
        });

        // lot 5a hover
        var fiveaHover = document.getElementById('fiveaHover');
        var fiveaHoverCard = new google.maps.InfoWindow({
            content: fiveaHover,
        });
        fiveaMarker.addListener('click', function(){
            var fivea = "fivea";
            parkingOpenClose(fivea);
        });

        // lot 5 hover
        var fiveHover = document.getElementById('fiveHover');
        var fiveHoverCard = new google.maps.InfoWindow({
            content: fiveHover,
        });
        fiveMarker.addListener('click', function(){
            var five = "five";
            parkingOpenClose(five);
        });

        // lot 7a hover
        var sevenaHover = document.getElementById('sevenaHover');
        var sevenaHoverCard = new google.maps.InfoWindow({
            content: sevenaHover,
        });
        sevenaMarker.addListener('click', function(){
            var sevena = "sevena";
            parkingOpenClose(sevena);
        });

        // lot 15 hover
        var fifteenHover = document.getElementById('fifteenHover');
        var fifteenHoverCard = new google.maps.InfoWindow({
            content: fifteenHover,
        });
        fifteenMarker.addListener('click', function(){
            var fifteen = "fifteen";
            parkingOpenClose(fifteen);
        });

        // lot 32 hover
        var thirtytwoHover = document.getElementById('thirtytwoHover');
        var thirtytwoHoverCard = new google.maps.InfoWindow({
            content: thirtytwoHover,
        });
        thirtytwoMarker.addListener('click', function(){
            var thirtytwo = "thirtytwo";
            parkingOpenClose(thirtytwo);
        });

        // lot 13 hover
        var thirteenHover = document.getElementById('thirteenHover');
        var thirteenHoverCard = new google.maps.InfoWindow({
            content: thirteenHover,
        });
        thirteenMarker.addListener('click', function(){
            var thirteen = "thirteen";
            parkingOpenClose(thirteen);
        });

        // lot 12 hover
        var twelveHover = document.getElementById('twelveHover');
        var twelveHoverCard = new google.maps.InfoWindow({
            content: twelveHover,
        });
        twelveMarker.addListener('click', function(){
            var twelve = "twelve";
            parkingOpenClose(twelve);
        });

        // lot 6a hover
        var sixaHover = document.getElementById('sixaHover');
        var sixaHoverCard = new google.maps.InfoWindow({
            content: sixaHover,
        });
        sixaMarker.addListener('click', function(){
            var sixa = "sixa";
            parkingOpenClose(sixa);
        });

        // lot 6 hover
        var sixHover = document.getElementById('sixHover');
        var sixHoverCard = new google.maps.InfoWindow({
            content: sixHover,
        });
        sixMarker.addListener('click', function(){
            var six = "six";
            parkingOpenClose(six);
        });

        // lot 10 hover
        var tenHover = document.getElementById('tenHover');
        var tenHoverCard = new google.maps.InfoWindow({
            content: tenHover,
        });
        tenMarker.addListener('click', function(){
            var ten = "ten";
            parkingOpenClose(ten);
        });

        // lot 9a hover
        var nineaHover = document.getElementById('nineaHover');
        var nineaHoverCard = new google.maps.InfoWindow({
            content: nineaHover,
        });
        nineaMarker.addListener('click', function(){
            var ninea = "ninea";
            parkingOpenClose(ninea);
        });

        // lot 9 hover
        var nineHover = document.getElementById('nineHover');
        var nineHoverCard = new google.maps.InfoWindow({
            content: nineHover,
        });
        nineMarker.addListener('click', function(){
            var nine = "nine";
            parkingOpenClose(nine);
        });

        // lot 18 hover
        var eighteenHover = document.getElementById('eighteenHover');
        var eighteenHoverCard = new google.maps.InfoWindow({
            content: eighteenHover,
        });
        eighteenMarker.addListener('click', function(){
            var eighteen = "eighteen";
            parkingOpenClose(eighteen);
        });

        // lot 30 hover
        var thirtyHover = document.getElementById('thirtyHover');
        var thirtyHoverCard = new google.maps.InfoWindow({
            content: thirtyHover,
        });
        thirtyMarker.addListener('click', function(){
            var thirty = "thirty";
            parkingOpenClose(thirty);
        });

        // lot 39 hover
        var thirtynineHover = document.getElementById('thirtynineHover');
        var thirtynineHoverCard = new google.maps.InfoWindow({
            content: thirtynineHover,
        });
        thirtynineMarker.addListener('click', function(){
            var thirtynine = "thirtynine";
            parkingOpenClose(thirtynine);
        });


        // accEnt markers
        var albeeAccEntMarker = new google.maps.Marker({
            position: buildings[0],
            icon: orangeMarker,
            title: "Albee Hall"
        });
        var acAccEntMarker = new google.maps.Marker({
            position: buildings[3],
            icon: orangeMarker,
            title: "Arts and Communications"
        });
        var blackhawkAccEntMarker = new google.maps.Marker({
            position: buildings[5],
            icon: orangeMarker,
            title: "Blackhawk Commons"
        });
        var equityAccEntMarker = new google.maps.Marker({
            position: buildings[8],
            icon: orangeMarker,
            title: "Campus Center for Equity and Diversity"
        });
        var clowAccEntMarker = new google.maps.Marker({
            position: buildings[11],
            icon: orangeMarker,
            title: "Clow Social Science Center"
        });
        var dempseyAccEntMarker = new google.maps.Marker({
            position: buildings[13],
            icon: orangeMarker,
            title: "Dempsey Hall"
        });
        var donnerAccEntMarker = new google.maps.Marker({
            position: buildings[14],
            icon: orangeMarker,
            title: "Donner Hall"
        });
        var fletcherAccEntMarker = new google.maps.Marker({
            position: buildings[18],
            icon: orangeMarker,
            title: "Fletcher Hall"
        });
        var fredricAccEntMarker = new google.maps.Marker({
            position: buildings[19],
            icon: orangeMarker,
            title: "Fredric March Theater"
        });
        var gruenhagenAccEntMarker = new google.maps.Marker({
            position: buildings[20],
            icon: orangeMarker,
            title: "Gruenhagen Conference Center"
        });
        var halseyAccEntMarker = new google.maps.Marker({
            position: buildings[21],
            icon: orangeMarker,
            title: "Halsey Science Center"
        });
        var harringtonAccEntMarker = new google.maps.Marker({
            position: buildings[22],
            icon: orangeMarker,
            title: "Harrington Hall"
        });
        var kolfAccEntMarker = new google.maps.Marker({
            position: buildings[26],
            icon: orangeMarker,
            title: "Kolf Sports Center"
        });
        var nursingAccEntMarker = new google.maps.Marker({
            position: buildings[29],
            icon: orangeMarker,
            title: "Nursing and Education Building"
        });
        var polkAccEntMarker = new google.maps.Marker({
            position: buildings[32],
            icon: orangeMarker,
            title: "Polk Library"
        });
        var radfordAccEntMarker = new google.maps.Marker({
            position: buildings[33],
            icon: orangeMarker,
            title: "Radford Hall and Student Health Center"
        });
        var reeveAccEntMarker = new google.maps.Marker({
            position: buildings[34],
            icon: orangeMarker,
            title: "Reeve Memorial Union"
        });
        var scottAccEntMarker = new google.maps.Marker({
            position: buildings[36],
            icon: orangeMarker,
            title: "Scott Hall"
        });
        var stewartAccEntMarker = new google.maps.Marker({
            position: buildings[37],
            icon: orangeMarker,
            title: "Stewart Hall"
        });
        var successAccEntMarker = new google.maps.Marker({
            position: buildings[39],
            icon: orangeMarker,
            title: "Student Success Center"
        });
        var swartAccEntMarker = new google.maps.Marker({
            position: buildings[40],
            icon: orangeMarker,
            title: "Swart Hall"
        });
        var taylorAccEntMarker = new google.maps.Marker({
            position: buildings[41],
            icon: orangeMarker,
            title: "Taylor Hall"
        });
        var websterAccEntMarker = new google.maps.Marker({
            position: buildings[44],
            icon: orangeMarker,
            title: "Webster Hall"
        });

        // accEnt hover cards for markers
        albeeAccEntMarker.addListener('click', function(){
            var albee = "albee";
            markerOpenClose(albee);
        });

        acAccEntMarker.addListener('click', function(){
            var ac = "ac";
            markerOpenClose(ac);
        });

        blackhawkAccEntMarker.addListener('click', function(){
            var blackhawk = "blackhawk";
            markerOpenClose(blackhawk);
        });

        equityAccEntMarker.addListener('click', function(){
            var equity = "equity";
            markerOpenClose(equity);
        });

        clowAccEntMarker.addListener('click', function(){
            var clow = "clow";
            markerOpenClose(clow);
        });

        dempseyAccEntMarker.addListener('click', function(){
            var dempsey = "dempsey";
            markerOpenClose(dempsey);
            
        });

        donnerAccEntMarker.addListener('click', function(){
            var donner = "donner";
            markerOpenClose(donner);
        });

        fletcherAccEntMarker.addListener('click', function(){
            var fletcher = "fletcher";
            markerOpenClose(fletcher);
        });

        fredricAccEntMarker.addListener('click', function(){
            var fredric = "fredric";
            markerOpenClose(fredric);
         });

        gruenhagenAccEntMarker.addListener('click', function(){
            var gruenhagen = "gruenhagen";
            markerOpenClose(gruenhagen);
        });

        halseyAccEntMarker.addListener('click', function(){
            var halsey = "halsey";
            markerOpenClose(halsey);
        });

        harringtonAccEntMarker.addListener('click', function(){
            var harrington = "harrington";
            markerOpenClose(harrington);
        });

        kolfAccEntMarker.addListener('click', function(){
            var kolf = "kolf";
            markerOpenClose(kolf);
        });

        nursingAccEntMarker.addListener('click', function(){
            var nursing = "nursing";
            markerOpenClose(nursing);
        });

        polkAccEntMarker.addListener('click', function(){
            var polk = "polk";
            markerOpenClose(polk);
        });

        radfordAccEntMarker.addListener('click', function(){
            var radford = "radford";
            markerOpenClose(radford);
        });

        reeveAccEntMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        scottAccEntMarker.addListener('click', function(){
            var scott = "scott";
            markerOpenClose(scott);
        });

        stewartAccEntMarker.addListener('click', function(){
            var stewart = "stewart";
            markerOpenClose(stewart);
        });

        successAccEntMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });

        swartAccEntMarker.addListener('click', function(){
            var swart = "swart";
            markerOpenClose(swart);
        });

        taylorAccEntMarker.addListener('click', function(){
            var taylor = "taylor";
            markerOpenClose(taylor);
        });

        websterAccEntMarker.addListener('click', function(){
            var webster = "webster";
            markerOpenClose(webster);
        });


        // accessible entries (buildings)
        function setAccEnt(){
            albeeAccEntMarker.setMap(map);
            acAccEntMarker.setMap(map);
            blackhawkAccEntMarker.setMap(map);
            equityAccEntMarker.setMap(map);
            clowAccEntMarker.setMap(map);
            dempseyAccEntMarker.setMap(map);
            donnerAccEntMarker.setMap(map);
            fletcherAccEntMarker.setMap(map);
            fredricAccEntMarker.setMap(map);
            gruenhagenAccEntMarker.setMap(map);
            halseyAccEntMarker.setMap(map);
            harringtonAccEntMarker.setMap(map);
            kolfAccEntMarker.setMap(map);
            nursingAccEntMarker.setMap(map);
            polkAccEntMarker.setMap(map);
            radfordAccEntMarker.setMap(map);
            reeveAccEntMarker.setMap(map);
            scottAccEntMarker.setMap(map);
            stewartAccEntMarker.setMap(map);
            successAccEntMarker.setMap(map);
            swartAccEntMarker.setMap(map);
            taylorAccEntMarker.setMap(map);
            websterAccEntMarker.setMap(map);
        }
        function removeAccEnt(){
            albeeAccEntMarker.setMap(null);
            acAccEntMarker.setMap(null);
            blackhawkAccEntMarker.setMap(null);
            equityAccEntMarker.setMap(null);
            clowAccEntMarker.setMap(null);
            dempseyAccEntMarker.setMap(null);
            donnerAccEntMarker.setMap(null);
            fletcherAccEntMarker.setMap(null);
            fredricAccEntMarker.setMap(null);
            gruenhagenAccEntMarker.setMap(null);
            halseyAccEntMarker.setMap(null);
            harringtonAccEntMarker.setMap(null);
            kolfAccEntMarker.setMap(null);
            nursingAccEntMarker.setMap(null);
            polkAccEntMarker.setMap(null);
            radfordAccEntMarker.setMap(null);
            reeveAccEntMarker.setMap(null);
            scottAccEntMarker.setMap(null);
            stewartAccEntMarker.setMap(null);
            successAccEntMarker.setMap(null);
            swartAccEntMarker.setMap(null);
            taylorAccEntMarker.setMap(null);
            websterAccEntMarker.setMap(null);
        }
        
        // markers for accessible parking locations
        var womensCenter = {lat: 44.024816, lng: -88.546638};
        var womensCenterMarker = new google.maps.Marker({
            position: womensCenter,
            icon: pinkMarker,
            title: "Women's Center"
        });

        var titanOne = {lat: 44.024401, lng: -88.564253};
        var titanOneMarker = new google.maps.Marker({
            position: titanOne,
            icon: pinkMarker,
            title: "Titan One"
        });

        var titanTwo = {lat: 44.023007, lng:  -88.564339};
        var titanTwoMarker = new google.maps.Marker({
            position: titanTwo,
            icon: pinkMarker,
            title: "Titan Two"
        });
        var elevenAccParMarker = new google.maps.Marker({
            position: parkingLots[0],
            icon: pinkMarker,
            title: "Lot 11"
        });
        var fourAccParMarker = new google.maps.Marker({
            position: parkingLots[5],
            icon: pinkMarker,
            title: "Lot 4"
        });
        var fouraAccParMarker = new google.maps.Marker({
            position: parkingLots[6],
            icon: pinkMarker,
            title: "Lot 4a"
        });
        var sixteenAccParMarker = new google.maps.Marker({
            position: parkingLots[7],
            icon: pinkMarker,
            title: "Lot 16"
        });
        var seventeenAccParMarker = new google.maps.Marker({
            position: parkingLots[8],
            icon: pinkMarker,
            title: "Lot 17"
        });
        var twentynineAccParMarker = new google.maps.Marker({
            position: parkingLots[9],
            icon: pinkMarker,
            title: "Lot 29"
        });
        var twentyfiveAccParMarker = new google.maps.Marker({
            position: parkingLots[10],
            icon: pinkMarker,
            title: "Lot 25"
        });
        var thirtythreeAccParMarker = new google.maps.Marker({
            position: parkingLots[12],
            icon: pinkMarker,
            title: "Lot 33"
        });
        var fourteenaAccParMarker = new google.maps.Marker({
            position: parkingLots[16],
            icon: pinkMarker,
            title: "Lot 14a"
        });
        var sevenaAccParMarker = new google.maps.Marker({
            position: parkingLots[22],
            icon: pinkMarker,
            title: "Lot 7a"
        });
        var thirteenAccParMarker = new google.maps.Marker({
            position: parkingLots[25],
            icon: pinkMarker,
            title: "Lot 13"
        });
        var thirtyfourAccParMarker = new google.maps.Marker({
            position: parkingLots[13],
            icon: pinkMarker,
            title: "Lot 34"
        });
        var twentyeightAccParMarker = new google.maps.Marker({
            position: parkingLots[14],
            icon: pinkMarker,
            title: "Lot 28"
        });
        var twentythreeAccParMarker = new google.maps.Marker({
            position: parkingLots[15],
            icon: pinkMarker,
            title: "Lot 23"
        });
        var fifteenAccParMarker = new google.maps.Marker({
            position: parkingLots[23],
            icon: pinkMarker,
            title: "Lot 15"
        });
        var thirtytwoAccParMarker = new google.maps.Marker({
            position: parkingLots[24],
            icon: pinkMarker,
            title: "Lot 32"
        });
        var tenAccParMarker = new google.maps.Marker({
            position: parkingLots[29],
            icon: pinkMarker,
            title: "Lot 10"
        });
        var twelveAccParMarker = new google.maps.Marker({
            position: parkingLots[26],
            icon: pinkMarker,
            title: "Lot 12"
        });
        var sixaAccParMarker = new google.maps.Marker({
            position: parkingLots[27],
            icon: pinkMarker,
            title: "Lot 6a"
        });
        var sixAccParMarker = new google.maps.Marker({
            position: parkingLots[28],
            icon: pinkMarker,
            title: "Lot 6"
        });
        var eighteenAccParMarker = new google.maps.Marker({
            position: parkingLots[32],
            icon: pinkMarker,
            title: "Lot 18"
        });
        //  hover event listeners for accessible parking here
        elevenAccParMarker.addListener('click', function(){
            var eleven = "eleven";
            parkingOpenClose(eleven);
        });
        fourAccParMarker.addListener('click', function(){
            var four = "four";
            parkingOpenClose(four);
        });
        fouraAccParMarker.addListener('click', function(){
            var foura = "foura";
            parkingOpenClose(foura);
        });
        sixteenAccParMarker.addListener('click', function(){
            var sixteen = "sixteen";
            parkingOpenClose(sixteen);
        });
        seventeenAccParMarker.addListener('click', function(){
            var seventeen = "seventeen";
            parkingOpenClose(seventeen);
        });
        twentynineAccParMarker.addListener('click', function(){
            var twentynine = "twentynine";
            parkingOpenClose(twentynine);
        });
        twentyfiveAccParMarker.addListener('click', function(){
            var twentyfive = "twentyfive";
            parkingOpenClose(twentyfive);
        });
        thirtythreeAccParMarker.addListener('click', function(){
            var thirtythree = "thirtythree";
            parkingOpenClose(thirtythree);
        });
        fourteenaAccParMarker.addListener('click', function(){
            var fourteena = "fourteena";
            parkingOpenClose(fourteena);
        });
        sevenaAccParMarker.addListener('click', function(){
            var sevena = "sevena";
            parkingOpenClose(sevena);
        });
        thirteenAccParMarker.addListener('click', function(){
            var thirteen = "thirteen";
            parkingOpenClose(thirteen);
        });
        thirtyfourAccParMarker.addListener('click', function(){
            var thirtyfour = "thirtyfour";
            parkingOpenClose(thirtyfour);
        });
        twentyeightAccParMarker.addListener('click', function(){
            var twentyeight = "twentyeight";
            parkingOpenClose(twentyeight);
        });
        twentythreeAccParMarker.addListener('click', function(){
            var twentythree = "twentythree";
            parkingOpenClose(twentythree);
        });
        // womens center
        var womensCenterHover = document.getElementById('womensCenterHover');
        var womensCenterHoverCard = new google.maps.InfoWindow({
            content: womensCenterHover,
        });
        womensCenterMarker.addListener('click', function(){
            var womensCenter = "womensCenter";
            parkingOpenClose(womensCenter);
        });

        fifteenAccParMarker.addListener('click', function(){
            var fifteen = "fifteen";
            parkingOpenClose(fifteen);
        });
        thirtytwoAccParMarker.addListener('click', function(){
            var thirtytwo = "thirtytwo";
            parkingOpenClose(thirtytwo);
        });

        // parking ramp

        tenAccParMarker.addListener('click', function(){
             var ten = "ten";
            parkingOpenClose(ten);
        });
        twelveAccParMarker.addListener('click', function(){
            var twelve = "twelve";
            parkingOpenClose(twelve);
        });
        sixaAccParMarker.addListener('click', function(){
            var sixa = "sixa";
            parkingOpenClose(sixa);
        });
        sixAccParMarker.addListener('click', function(){
            var six = "six";
            parkingOpenClose(six);
        });
        eighteenAccParMarker.addListener('click', function(){
            var eighteen = "eighteen";
            parkingOpenClose(eighteen);
        });

        // titan one
        var titanOneHover = document.getElementById('titanOneHover');
        var titanOneHoverCard = new google.maps.InfoWindow({
            content: titanOneHover,
        });
        titanOneMarker.addListener('click', function(){
            var titanOne = "titanOne";
            parkingOpenClose(titanOne);
        });
        // titan two
        var titanTwoHover = document.getElementById('titanTwoHover');
        var titanTwoHoverCard = new google.maps.InfoWindow({
            content: titanTwoHover,
        });
        titanTwoMarker.addListener('click', function(){
            var titanTwo = "titanTwo";
            parkingOpenClose(titanTwo);
        });



        // accessible parking set markers
        function setAccPar(){
            elevenAccParMarker.setMap(map);
            fourAccParMarker.setMap(map);
            fouraAccParMarker.setMap(map);
            sixteenAccParMarker.setMap(map);
            seventeenAccParMarker.setMap(map);
            twentynineAccParMarker.setMap(map);
            twentyfiveAccParMarker.setMap(map);
            thirtythreeAccParMarker.setMap(map);
            fourteenaAccParMarker.setMap(map);
            sevenaAccParMarker.setMap(map);
            thirteenAccParMarker.setMap(map);
            thirtyfourAccParMarker.setMap(map);
            twentyeightAccParMarker.setMap(map);
            twentythreeAccParMarker.setMap(map);
            womensCenterMarker.setMap(map);
            fifteenAccParMarker.setMap(map);
            thirtytwoAccParMarker.setMap(map);
            parkingRampMarker.setMap(map);
            tenAccParMarker.setMap(map);
            twelveAccParMarker.setMap(map);
            sixaAccParMarker.setMap(map);
            sixAccParMarker.setMap(map);
            eighteenAccParMarker.setMap(map);
            titanOneMarker.setMap(map);
            titanTwoMarker.setMap(map);

        }
        // remove accessible parking markers
        function removeAccPar(){
            elevenAccParMarker.setMap(null);
            fourAccParMarker.setMap(null);
            fouraAccParMarker.setMap(null);
            sixteenAccParMarker.setMap(null);
            seventeenAccParMarker.setMap(null);
            twentynineAccParMarker.setMap(null);
            twentyfiveAccParMarker.setMap(null);
            thirtythreeAccParMarker.setMap(null);
            fourteenaAccParMarker.setMap(null);
            sevenaAccParMarker.setMap(null);
            thirteenAccParMarker.setMap(null);
            thirtyfourAccParMarker.setMap(null);
            twentyeightAccParMarker.setMap(null);
            twentythreeAccParMarker.setMap(null);
            womensCenterMarker.setMap(null);
            fifteenAccParMarker.setMap(null);
            thirtytwoAccParMarker.setMap(null);
            parkingRampMarker.setMap(null);
            tenAccParMarker.setMap(null);
            twelveAccParMarker.setMap(null);
            sixaAccParMarker.setMap(null);
            sixAccParMarker.setMap(null);
            eighteenAccParMarker.setMap(null);
            titanOneMarker.setMap(null);
            titanTwoMarker.setMap(null);
        }
        
        // Emergency phones
        var emergencyPhones = [
            // Phone[0] Lot 35
            {lat: 44.029568, lng: -88.557150},
            // Phone[1] Lot 40
            {lat: 44.029075, lng: -88.558184},
            // Phone[2] lot 27
            {lat: 44.028831, lng: -88.555125},
            // Phone[3] heating plant
            {lat: 44.028514, lng: -88.554386},
            // Phone[4] behind a & c
            {lat: 44.029626, lng: -88.552936},
            // Phone[5] in between halsey and swart
            {lat: 44.028456, lng: -88.551907},
            // Phone[6] lot 25
            {lat: 44.027457	, lng: -88.553422},
            // Phone[7] lot 17
            {lat: 44.028501, lng: -88.549911},
            // Phone[8] Wiouwash Trail Oshkosh, WI 54901
            {lat: 44.025255, lng: -88.555618},
            // Phone[9] in front of slow
            {lat: 44.026028, lng: -88.552211},
            // Phone[10] behind dempsey
            {lat: 44.026556, lng: -88.550250},
            // Phone[11] lot 34
            {lat: 44.026670, lng: -88.547795},
            // Phone[12] in between fletcher, stewart and evans
            {lat: 44.025771, lng: -88.547412},
            // Phone[13] center for equity and diversity
            {lat: 44.024777, lng: -88.546711},
            // Phone[14] in between reeve and horizon
            {lat: 44.024921, lng: -88.548533},
            // Phone[15] lot 7
            {lat: 44.024921, lng: -88.548533},
            // Phone[16] lot 5
            {lat: 44.023941, lng: -88.554160},
            // Phone[17] environmental research and innovation center
            {lat: 44.023489, lng: -88.553277},
            // Phone[18] behind student recreation and wellness center
            {lat: 44.022102, lng: -88.552487},
            // Phone[19] path to student rec center
            {lat: 44.023313, lng: -88.551255},
            // Phone[20] between taylor and webster
            {lat: 44.024791, lng: -88.551402},
            // Phone[21] lot 15
            {lat: 44.024395, lng:  -88.550325},
            // Phone[22] behind blackhawk
            {lat: 44.023321, lng: -88.548516},
            // Phone[23] wellness center front
            {lat: 44.021428, lng: -88.550672},
            // Phone[24]wellness center  behind
            {lat: 44.021057, lng: -88.551801},
            // Phone[25] lot 30
            {lat: 44.021727, lng: -88.548169},
            // Phone[26] lot 18
            {lat: 44.022676, lng:  -88.546843},
            // Phone[27] lot 39
            {lat: 44.018830, lng: -88.556802}
        ];
        // creating emergency phone markers
        var phoneZero = new google.maps.Marker({
            position: emergencyPhones[0],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneOne = new google.maps.Marker({
            position: emergencyPhones[1],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwo = new google.maps.Marker({
            position: emergencyPhones[2],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneThree = new google.maps.Marker({
            position: emergencyPhones[3],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneFour = new google.maps.Marker({
            position: emergencyPhones[4],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneFive= new google.maps.Marker({
            position: emergencyPhones[5],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneSix = new google.maps.Marker({
            position: emergencyPhones[6],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneSeven = new google.maps.Marker({
            position: emergencyPhones[7],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneEight = new google.maps.Marker({
            position: emergencyPhones[8],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneNine = new google.maps.Marker({
            position: emergencyPhones[9],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTen = new google.maps.Marker({
            position: emergencyPhones[10],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneEleven = new google.maps.Marker({
            position: emergencyPhones[11],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwelve = new google.maps.Marker({
            position: emergencyPhones[12],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneThirteen = new google.maps.Marker({
            position: emergencyPhones[13],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneFourteen = new google.maps.Marker({
            position: emergencyPhones[14],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneFifteen = new google.maps.Marker({
            position: emergencyPhones[15],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneSixteen = new google.maps.Marker({
            position: emergencyPhones[16],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneSeventeen = new google.maps.Marker({
            position: emergencyPhones[17],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneEighteen = new google.maps.Marker({
            position: emergencyPhones[18],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneNineteen = new google.maps.Marker({
            position: emergencyPhones[19],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwenty = new google.maps.Marker({
            position: emergencyPhones[20],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentyOne = new google.maps.Marker({
            position: emergencyPhones[21],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentyTwo = new google.maps.Marker({
            position: emergencyPhones[22],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentyThree = new google.maps.Marker({
            position: emergencyPhones[23],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentyFour = new google.maps.Marker({
            position: emergencyPhones[24],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentyFive = new google.maps.Marker({
            position: emergencyPhones[25],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentySix = new google.maps.Marker({
            position: emergencyPhones[26],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        var phoneTwentySeven = new google.maps.Marker({
            position: emergencyPhones[27],
            icon: skyblueMarker,
            title: "Emergency Phone"
        });
        // function for setting emergency phone markers
        function setEmergencyPhones(){
            phoneZero.setMap(map);
            phoneOne.setMap(map);
            phoneTwo.setMap(map);
            phoneThree.setMap(map);
            phoneFour.setMap(map);
            phoneFive.setMap(map);
            phoneSix.setMap(map);
            phoneSeven.setMap(map);
            phoneEight.setMap(map);
            phoneNine.setMap(map);
            phoneTen.setMap(map);
            phoneEleven.setMap(map);
            phoneTwelve.setMap(map);
            phoneThirteen.setMap(map);
            phoneFourteen.setMap(map);
            phoneFifteen.setMap(map);
            phoneSixteen.setMap(map);
            phoneSeventeen.setMap(map);
            phoneEighteen.setMap(map);
            phoneNineteen.setMap(map);
            phoneTwenty.setMap(map);
            phoneTwentyOne.setMap(map);
            phoneTwentyTwo.setMap(map);
            phoneTwentyThree.setMap(map);
            phoneTwentyFour.setMap(map);
            phoneTwentyFive.setMap(map);
            phoneTwentySix.setMap(map);
            phoneTwentySeven.setMap(map);
        }
        // function for removing emergency phone markers
        function removeEmergencyPhones(){
            phoneZero.setMap(null);
            phoneOne.setMap(null);
            phoneTwo.setMap(null);
            phoneThree.setMap(null);
            phoneFour.setMap(null);
            phoneFive.setMap(null);
            phoneSix.setMap(null);
            phoneSeven.setMap(null);
            phoneEight.setMap(null);
            phoneNine.setMap(null);
            phoneTen.setMap(null);
            phoneEleven.setMap(null);
            phoneTwelve.setMap(null);
            phoneThirteen.setMap(null);
            phoneFourteen.setMap(null);
            phoneFifteen.setMap(null);
            phoneSixteen.setMap(null);
            phoneSeventeen.setMap(null);
            phoneEighteen.setMap(null);
            phoneNineteen.setMap(null);
            phoneTwenty.setMap(null);
            phoneTwentyOne.setMap(null);
            phoneTwentyTwo.setMap(null);
            phoneTwentyThree.setMap(null);
            phoneTwentyFour.setMap(null);
            phoneTwentyFive.setMap(null);
            phoneTwentySix.setMap(null);
            phoneTwentySeven.setMap(null);
        }
        

        // creating sust markers
        var albeeSustMarker = new google.maps.Marker({
            position: buildings[0],
            icon: redMarker,
            title: "Albee Hall"
        });
        var alumniSustMarker = new google.maps.Marker({
            position: buildings[2],
            icon: redMarker,
            title: "Alumni Welcome and Conference Center"
        });
        var blackhawkSustMarker = new google.maps.Marker({
            position: buildings[5],
            icon: redMarker,
            title: "Blackhawk Commons"
        });
        var biodigesterSustMarker = new google.maps.Marker({
            position: buildings[6],
            icon: redMarker,
            title: "Biodigester"
        });
        var heatingSustMarker = new google.maps.Marker({
            position: buildings[23],
            icon: redMarker,
            title: "Heating Plant"
        });
        var horizonSustMarker = new google.maps.Marker({
            position: buildings[25],
            icon: redMarker,
            title: "Horizon Village"
        });
        var reeveSustMarker = new google.maps.Marker({
            position: buildings[34],
            icon: redMarker,
            title: "Reeve Memorial Union"
        });
        var sageSustMarker = new google.maps.Marker({
            position: buildings[35],
            icon: redMarker,
            title: "Sage Hall"
        });
        var recreationSustMarker = new google.maps.Marker({
            position: buildings[38],
            icon: redMarker,
            title: "Student Recreation and Conference Center"
        });
        var successSustMarker = new google.maps.Marker({
            position: buildings[39],
            icon: redMarker,
            title: "Student Success Center"
        });
        var taylorSustMarker = new google.maps.Marker({
            position: buildings[41],
            icon: redMarker,
            title: "Taylor Hall"
        });
        var titanSustMarker = new google.maps.Marker({
            position: buildings[42],
            icon: redMarker,
            title: "Titan Stadium"
        });

        // sust hovers
        albeeSustMarker.addListener('click', function(){
            var albee = "albee";
            markerOpenClose(albee);
        });

        alumniSustMarker.addListener('click', function(){
            var alumni = "alumni";
            markerOpenClose(alumni);
        });

        blackhawkSustMarker.addListener('click', function(){
            var blackhawk = "blackhawk";
            markerOpenClose(blackhawk);
        });

        biodigesterSustMarker.addListener('click', function(){
            var biodigester = "biodigester";
            markerOpenClose(biodigester);
        });

        heatingSustMarker.addListener('click', function(){
            var heating = "heating";
            markerOpenClose(heating);
        });

        horizonSustMarker.addListener('click', function(){
            var horizon = "horizon";
            markerOpenClose(horizon);
        });

        reeveSustMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        sageSustMarker.addListener('click', function(){
            var sage = "sage";
            markerOpenClose(sage);
        });

        recreationSustMarker.addListener('click', function(){
            var recreation = "recreation";
            markerOpenClose(recreation);
        });

        successSustMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });

        taylorSustMarker.addListener('click', function(){
            var taylor = "taylor";
            markerOpenClose(taylor);
        });

        titanSustMarker.addListener('click', function(){
            var titan = "titan";
            markerOpenClose(titan);
        });


        // setting sustainability markers
        function setSust(){
            albeeSustMarker.setMap(map);
            alumniSustMarker.setMap(map);
            blackhawkSustMarker.setMap(map);
            biodigesterSustMarker.setMap(map);
            heatingSustMarker.setMap(map);
            horizonSustMarker.setMap(map);
            reeveSustMarker.setMap(map);
            sageSustMarker.setMap(map);
            recreationSustMarker.setMap(map);
            successSustMarker.setMap(map);
            taylorSustMarker.setMap(map);
            titanSustMarker.setMap(map);
        }
        // remove sustainability markers
        function removeSust(){
            albeeSustMarker.setMap(null);
            alumniSustMarker.setMap(null);
            blackhawkSustMarker.setMap(null);
            biodigesterSustMarker.setMap(null);
            heatingSustMarker.setMap(null);
            horizonSustMarker.setMap(null);
            reeveSustMarker.setMap(null);
            sageSustMarker.setMap(null);
            recreationSustMarker.setMap(null);
            successSustMarker.setMap(null);
            taylorSustMarker.setMap(null);
            titanSustMarker.setMap(null);
        }
       
        // create gender markers
        var acGenderMarker = new google.maps.Marker({
            position: buildings[3],
            icon: greenMarker,
            title: "Arts and Communications"
        });
        var blackhawkGenderMarker = new google.maps.Marker({
            position: buildings[5],
            icon: greenMarker,
            title: "Blackhawk Commons"
        });
        var campusGenderMarker = new google.maps.Marker({
            position: buildings[9],
            icon: greenMarker,
            title: "Campus Center for Equity and Diversity"
        });
        var dempseyGenderMarker = new google.maps.Marker({
            position: buildings[13],
            icon: greenMarker,
            title: "Dempsey Hall"
        });
        var halseyGenderMarker = new google.maps.Marker({
            position: buildings[21],
            icon: greenMarker,
            title: "Halsey Science Center"
        });
        var harringtonGenderMarker = new google.maps.Marker({
            position: buildings[22],
            icon: greenMarker,
            title: "Harrington Hall"
        });
        var kolfGenderMarker = new google.maps.Marker({
            position: buildings[26],
            icon: greenMarker,
            title: "Kolf Sports Center"
        });
        var nursingGenderMarker = new google.maps.Marker({
            position: buildings[29],
            icon: greenMarker,
            title: "Nursing and Education Building"
        });
        var reeveGenderMarker = new google.maps.Marker({
            position: buildings[34],
            icon: greenMarker,
            title: "Reeve Memorial Union"
        });
        var sageGenderMarker = new google.maps.Marker({
            position: buildings[35],
            icon: greenMarker,
            title: "Sage Hall"
        });
        var recreationGenderMarker = new google.maps.Marker({
            position: buildings[38],
            icon: greenMarker,
            title: "Student Recreation and Wellness Center"
        });
        var successGenderMarker = new google.maps.Marker({
            position: buildings[39],
            icon: greenMarker,
            title: "Student Success Center"
        });
        var swartGenderMarker = new google.maps.Marker({
            position: buildings[40],
            icon: greenMarker,
            title: "Swart Hall"
        });
        var policeGenderMarker = new google.maps.Marker({
            position: buildings[43],
            icon: greenMarker,
            title: "University Police"
        });


        // gender hover
        acGenderMarker.addListener('click', function(){
            var ac = "ac";
            markerOpenClose(ac);
        });

        blackhawkGenderMarker.addListener('click', function(){
            var blackhawk = "blackhawk";
            markerOpenClose(blackhawk);
        });

        campusGenderMarker.addListener('click', function(){
            var campus = "campus";
            markerOpenClose(campus);
        });

        dempseyGenderMarker.addListener('click', function(){
            var dempsey = "dempsey";
            markerOpenClose(dempsey);
            
        });

        halseyGenderMarker.addListener('click', function(){
            var halsey = "halsey";
            markerOpenClose(halsey);
        });

        harringtonGenderMarker.addListener('click', function(){
            var harrington = "harrington";
            markerOpenClose(harrington);
        });

        kolfGenderMarker.addListener('click', function(){
            var kolf = "kolf";
            markerOpenClose(kolf);
        });

        nursingGenderMarker.addListener('click', function(){
            var nursing = "nursing";
            markerOpenClose(nursing);
        });

        reeveGenderMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        sageGenderMarker.addListener('click', function(){
            var sage = "sage";
            markerOpenClose(sage);
        });

        recreationGenderMarker.addListener('click', function(){
            var recreation = "recreation";
            markerOpenClose(recreation);
        });

        successGenderMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });

        swartGenderMarker.addListener('click', function(){
            var swart = "swart";
            markerOpenClose(swart);
        });

        policeGenderMarker.addListener('click', function(){
            var police = "police";
            markerOpenClose(police);
        });

        // setting gender markers
        function setGender(){
            acGenderMarker.setMap(map);
            blackhawkGenderMarker.setMap(map);
            campusGenderMarker.setMap(map);
            dempseyGenderMarker.setMap(map);
            halseyGenderMarker.setMap(map);
            harringtonGenderMarker.setMap(map);
            kolfGenderMarker.setMap(map);
            nursingGenderMarker.setMap(map);
            reeveGenderMarker.setMap(map);
            sageGenderMarker.setMap(map);
            recreationGenderMarker.setMap(map);
            successGenderMarker.setMap(map);
            swartGenderMarker.setMap(map);
            policeGenderMarker.setMap(map);

        }
        // removing gender markers
        function removeGender(){
            acGenderMarker.setMap(null);
            blackhawkGenderMarker.setMap(null);
            campusGenderMarker.setMap(null);
            dempseyGenderMarker.setMap(null);
            halseyGenderMarker.setMap(null);
            harringtonGenderMarker.setMap(null);
            kolfGenderMarker.setMap(null);
            nursingGenderMarker.setMap(null);
            reeveGenderMarker.setMap(null);
            sageGenderMarker.setMap(null);
            recreationGenderMarker.setMap(null);
            successGenderMarker.setMap(null);
            swartGenderMarker.setMap(null);
            policeGenderMarker.setMap(null);
        }

        

        // AccaF markers
        var albeeAccaFMarker = new google.maps.Marker({
            position: buildings[0],
            icon: acaFMarker,
            title: "Albee Hall"
        });
        var acAccaFMarker = new google.maps.Marker({
            position: buildings[3],
            icon: acaFMarker,
            title: "Arts and Communications"
        });
        var ceramicsAccaFMarker = new google.maps.Marker({
            position: buildings[10],
            icon: acaFMarker,
            title: "Ceramics Laboratory"
        });
        var clowAccaFMarker = new google.maps.Marker({
            position: buildings[11],
            icon: acaFMarker,
            title: "Clow Social Science Center"
        });
        var environmentalAccaFMarker = new google.maps.Marker({
            position: buildings[16],
            icon: acaFMarker,
            title: "Environmental Science and Research Center"
        });
        var fredricAccaFMarker = new google.maps.Marker({
            position: buildings[19],
            icon: acaFMarker,
            title: "Fredric March Theater"
        });
        var halseyAccaFMarker = new google.maps.Marker({
            position: buildings[21],
            icon: acaFMarker,
            title: "Halsey Science Center"
        });
        var harringtonAccaFMarker = new google.maps.Marker({
            position: buildings[22],
            icon: acaFMarker,
            title: "Harrington Hall"
        });
        var kolfAccaFMarker = new google.maps.Marker({
            position: buildings[26],
            icon: acaFMarker,
            title: "Kolf Sports Center"
        });
        var nursingAccaFMarker = new google.maps.Marker({
            position: buildings[29],
            icon: acaFMarker,
            title: "Nursing and Education Building"
        });
        var polkAccaFMarker = new google.maps.Marker({
            position: buildings[32],
            icon: acaFMarker,
            title: "Polk Library"
        });
        var radfordAccaFMarker = new google.maps.Marker({
            position: buildings[33],
            icon: acaFMarker,
            title: "Radford Hall and Student Health Center"
        });
        var sageAccaFMarker = new google.maps.Marker({
            position: buildings[35],
            icon: acaFMarker,
            title: "Sage Hall"
        });
        var swartAccaFMarker = new google.maps.Marker({
            position: buildings[40],
            icon: acaFMarker,
            title: "Swart Hall"
        });

        // hover for AccaF
        albeeAccaFMarker.addListener('click', function(){
            var albee = "albee";
            markerOpenClose(albee);
        });

        acAccaFMarker.addListener('click', function(){
            var ac = "ac";
            markerOpenClose(ac);
        });

        ceramicsAccaFMarker.addListener('click', function(){
            var ceramics = "ceramics";
            markerOpenClose(ceramics);        
        });

        clowAccaFMarker.addListener('click', function(){
            var clow = "clow";
            markerOpenClose(clow);
        });

        environmentalAccaFMarker.addListener('click', function(){
            var environmental = "environmental";
            markerOpenClose(environmental);
        });

        fredricAccaFMarker.addListener('click', function(){
            var fredric = "fredric";
            markerOpenClose(fredric);
        });

        halseyAccaFMarker.addListener('click', function(){
            var halsey = "halsey";
            markerOpenClose(halsey);
        });

        harringtonAccaFMarker.addListener('click', function(){
            var harrington = "harrington";
            markerOpenClose(harrington);
        });

        kolfAccaFMarker.addListener('click', function(){
            var kolf = "kolf";
            markerOpenClose(kolf);
        });

        swartAccaFMarker.addListener('click', function(){
            var swart = "swart";
            markerOpenClose(swart);
        });

        nursingAccaFMarker.addListener('click', function(){
            var nursing = "nursing";
            markerOpenClose(nursing);
        });

        polkAccaFMarker.addListener('click', function(){
            var polk = "polk";
            markerOpenClose(polk);
        });

        radfordAccaFMarker.addListener('click', function(){
            var radford = "radford";
            markerOpenClose(radford);
        });

        sageAccaFMarker.addListener('click', function(){
            var sage = "sage";
            markerOpenClose(sage);
        });

        // functions for categories select/remove markers
        function setAccaF(){
            acAccaFMarker.setMap(map);
            albeeAccaFMarker.setMap(map);
            ceramicsAccaFMarker.setMap(map);
            clowAccaFMarker.setMap(map);
            environmentalAccaFMarker.setMap(map);
            fredricAccaFMarker.setMap(map);
            halseyAccaFMarker.setMap(map);
            harringtonAccaFMarker.setMap(map);
            kolfAccaFMarker.setMap(map);
            swartAccaFMarker.setMap(map);
            nursingAccaFMarker.setMap(map);
            polkAccaFMarker.setMap(map);
            radfordAccaFMarker.setMap(map);
            sageAccaFMarker.setMap(map);

        }
        function removeAccaF(){
            acAccaFMarker.setMap(null);
            albeeAccaFMarker.setMap(null);
            ceramicsAccaFMarker.setMap(null);
            clowAccaFMarker.setMap(null);
            environmentalAccaFMarker.setMap(null);
            fredricAccaFMarker.setMap(null);
            halseyAccaFMarker.setMap(null);
            harringtonAccaFMarker.setMap(null);
            kolfAccaFMarker.setMap(null);
            swartAccaFMarker.setMap(null);
            nursingAccaFMarker.setMap(null);
            polkAccaFMarker.setMap(null);
            radfordAccaFMarker.setMap(null);
            sageAccaFMarker.setMap(null);
        }
        
        // create markers for athletics
        var albeeAthMarker = new google.maps.Marker({
            position: buildings[0],
            icon: athMarker,
            title: "Albee Hall"
        });
        var baseballAthMarker = new google.maps.Marker({
            position: buildings[1],
            icon: athMarker,
            title: "Alumni Baseball Stadium"
        });
        var athleticAthMarker = new google.maps.Marker({
            position: buildings[4],
            icon: athMarker,
            title: "Athletic Service Building"
        });
        var eastAthMarker = new google.maps.Marker({
            position: buildings[15],
            icon: athMarker,
            title: "East Hall"
        });
        var kolfAthMarker = new google.maps.Marker({
            position: buildings[26],
            icon: athMarker,
            title: "Kolf Sports Center"
        });

        var titanAthMarker = new google.maps.Marker({
            position: buildings[42],
            icon: athMarker,
            title: "Titan Stadium"
        });
        // athletics marker hover
        albeeAthMarker.addListener('click', function(){
            var albee = "albee";
            markerOpenClose(albee);        
        });

        athleticAthMarker.addListener('click', function(){
            var athletic = "athletic";
            markerOpenClose(athletic);
        });

        baseballAthMarker.addListener('click', function(){
            var baseball = "baseball";
            markerOpenClose(baseball);
        });

        eastAthMarker.addListener('click', function(){
            var east = "east";
            markerOpenClose(east);
        });


        kolfAthMarker.addListener('click', function(){
            var kolf = "kolf";
            markerOpenClose(kolf);
        });

        titanAthMarker.addListener('click', function(){
            var titan = "titan";
            markerOpenClose(titan);
        });


        function setAth(){
            albeeAthMarker.setMap(map);
            athleticAthMarker.setMap(map);
            baseballAthMarker.setMap(map);
            eastAthMarker.setMap(map);
            kolfAthMarker.setMap(map);
            titanAthMarker.setMap(map);
        }
        function removeAth(){
            albeeAthMarker.setMap(null);
            athleticAthMarker.setMap(null);
            baseballAthMarker.setMap(null);
            eastAthMarker.setMap(null);
            kolfAthMarker.setMap(null);
            titanAthMarker.setMap(null);
        }
       
        // AccaS markers
        var equityAccaSMarker = new google.maps.Marker({
            position: buildings[8],
            icon: acaSMarker,
            title: "Campus Center for Diversity and Equity"
        });
        var nursingAccaSMarker = new google.maps.Marker({
            position: buildings[29],
            icon: acaSMarker,
            title: "Nursing and Education Building"
        });
        var successAccaSMarker = new google.maps.Marker({
            position: buildings[39],
            icon: acaSMarker,
            title: "Student Success Center"
        });
        var swartAccaSMarker = new google.maps.Marker({
            position: buildings[40],
            icon: acaSMarker,
            title: "Swart Hall"
        });

        // AccaS hover
        equityAccaSMarker.addListener('click', function(){
            var equity = "equity";
            markerOpenClose(equity);
        });

        nursingAccaSMarker.addListener('click', function(){
            var nursing = "nursing";
            markerOpenClose(nursing);
        });

        successAccaSMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });

        swartAccaSMarker.addListener('click', function(){
            var swart = "swart";
            markerOpenClose(swart);
        });


        // set/remove AccaS
        function setAccaS(){
            equityAccaSMarker.setMap(map);
            nursingAccaSMarker.setMap(map);
            successAccaSMarker.setMap(map);
            swartAccaSMarker.setMap(map);

        }
        function removeAccaS(){
            equityAccaSMarker.setMap(null);
            nursingAccaSMarker.setMap(null);
            successAccaSMarker.setMap(null);
            swartAccaSMarker.setMap(null);

        }
        
        // CampS markers
        var equityCampSMarker = new google.maps.Marker({
            position: buildings[8],
            icon: campSMarker,
            title: "Campus Center for Diversity and Equity"
        });
        var campusCampSMarker = new google.maps.Marker({
            position: buildings[9],
            icon: campSMarker,
            title: "Campus Services"
        });
        var dempseyCampSMarker = new google.maps.Marker({
            position: buildings[13],
            icon: campSMarker,
            title: "Dempsey Hall"
        });
        var multiculturalCampSMarker = new google.maps.Marker({
            position: buildings[28],
            icon: campSMarker,
            title: "Multicultural Education Center"
        });
        var pollockCampSMarker = new google.maps.Marker({
            position: buildings[31],
            icon: campSMarker,
            title: "Pollock House"
        });
        var radfordCampSMarker = new google.maps.Marker({
            position: buildings[33],
            icon: campSMarker,
            title: "Radford Hall and Student Health Center"
        });
        var reeveCampSMarker = new google.maps.Marker({
            position: buildings[34],
            icon: campSMarker,
            title: "Reeve Memorial Union"
        });
        var recreationCampSMarker = new google.maps.Marker({
            position: buildings[38],
            icon: campSMarker,
            title: "Student Recreation and Wellness Center"
        });
        var successCampSMarker = new google.maps.Marker({
            position: buildings[39],
            icon: campSMarker,
            title: "Student Success Center"
        });


        // CampS hover
        equityCampSMarker.addListener('click', function(){
            var equity = "equity";
            markerOpenClose(equity);
        });

        campusCampSMarker.addListener('click', function(){
            var campus = "campus";
            markerOpenClose(campus);
        });

        dempseyCampSMarker.addListener('click', function(){
            var dempsey = "dempsey";
            markerOpenClose(dempsey);
            
        });

        multiculturalCampSMarker.addListener('click', function(){
            var multicultural = "multicultural";
            markerOpenClose(multicultural);
        });

        pollockCampSMarker.addListener('click', function(){
            var pollock = "pollock";
            markerOpenClose(pollock);
        });

        radfordCampSMarker.addListener('click', function(){
            var radford = "radford";
            markerOpenClose(radford);
        });

        reeveCampSMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        recreationCampSMarker.addListener('click', function(){
            var recreation = "recreation";
            markerOpenClose(recreation);
        });

        successCampSMarker.addListener('click', function(){
            var success = "success";
            markerOpenClose(success);
        });


        // set/remove CampS

        function setCampS(){
            equityCampSMarker.setMap(map);
            campusCampSMarker.setMap(map);
            dempseyCampSMarker.setMap(map);
            multiculturalCampSMarker.setMap(map);
            pollockCampSMarker.setMap(map);
            recreationCampSMarker.setMap(map);
            radfordCampSMarker.setMap(map);
            reeveCampSMarker.setMap(map);
            successCampSMarker.setMap(map);

        }
        function removeCampS(){
            equityCampSMarker.setMap(null);
            campusCampSMarker.setMap(null);
            dempseyCampSMarker.setMap(null);
            multiculturalCampSMarker.setMap(null);
            pollockCampSMarker.setMap(null);
            recreationCampSMarker.setMap(null);
            radfordCampSMarker.setMap(null);
            reeveCampSMarker.setMap(null);
            successCampSMarker.setMap(null);
        }
        
        // ResH markers
        var donnerResHMarker = new google.maps.Marker({
            position: buildings[14],
            icon: resHMarker,
            title: "Donner Hall"
        });
        var evansResHMarker = new google.maps.Marker({
            position: buildings[17],
            icon: resHMarker,
            title: "Evans Hall"
        });
        var fletcherResHMarker = new google.maps.Marker({
            position: buildings[18],
            icon: resHMarker,
            title: "Fletcher Hall"
        });
        var gruenhagenResHMarker = new google.maps.Marker({
            position: buildings[20],
            icon: resHMarker,
            title: "Gruenhagen Conference Center"
        });
        var horizonResHMarker = new google.maps.Marker({
            position: buildings[25],
            icon: resHMarker,
            title: "Horizon Village"
        });
        var stewartResHMarker = new google.maps.Marker({
            position: buildings[37],
            icon: resHMarker,
            title: "Stewart Hall"
        });
        var scottResHMarker = new google.maps.Marker({
            position: buildings[36],
            icon: resHMarker,
            title: "Scott Hall"
        });
        var taylorResHMarker = new google.maps.Marker({
            position: buildings[41],
            icon: resHMarker,
            title: "Taylor Hall"
        });
        var websterResHMarker = new google.maps.Marker({
            position: buildings[44],
            icon: resHMarker,
            title: "Webster Hall"
        });

        // ResH hover
        donnerResHMarker.addListener('click', function(){
            var donner = "donner";
            markerOpenClose(donner);
        });

        evansResHMarker.addListener('click', function(){
            var evans = "evans";
            markerOpenClose(evans);
         });

        fletcherResHMarker.addListener('click', function(){
            var fletcher = "fletcher";
            markerOpenClose(fletcher);
         });

        gruenhagenResHMarker.addListener('click', function(){
            var gruenhagen = "gruenhagen";
            markerOpenClose(gruenhagen);
        });

        horizonResHMarker.addListener('click', function(){
            var horizon = "horizon";
            markerOpenClose(horizon);
        });

        stewartResHMarker.addListener('click', function(){
            var stewart = "stewart";
            markerOpenClose(stewart);
        });

        scottResHMarker.addListener('click', function(){
            var scott = "scott";
            markerOpenClose(scott);
        });

        taylorResHMarker.addListener('click', function(){
            var taylor = "taylor";
            markerOpenClose(taylor);
        });

        websterResHMarker.addListener('click', function(){
            var webster = "webster";
            markerOpenClose(webster);
        });


        // ResH set/remove
        function setResH(){
            donnerResHMarker.setMap(map);
            evansResHMarker.setMap(map);
            fletcherResHMarker.setMap(map);
            gruenhagenResHMarker.setMap(map);
            horizonResHMarker.setMap(map);
            stewartResHMarker.setMap(map);
            scottResHMarker.setMap(map);
            taylorResHMarker.setMap(map);
            websterResHMarker.setMap(map);

        }
        function removeResH(){
            donnerResHMarker.setMap(null);
            evansResHMarker.setMap(null);
            fletcherResHMarker.setMap(null);
            gruenhagenResHMarker.setMap(null);
            horizonResHMarker.setMap(null);
            stewartResHMarker.setMap(null);
            scottResHMarker.setMap(null);
            taylorResHMarker.setMap(null);
            websterResHMarker.setMap(null);
        }
        
        // dining markers
        var blackhawkDiningMarker = new google.maps.Marker({
            position: buildings[5],
            icon: diningMarker,
            title: "Blackhawk Commons"
        });
        var clowDiningMarker = new google.maps.Marker({
            position: buildings[11],
            icon: diningMarker,
            title: "Clow Social Science Center"
        });
        var halseyDiningMarker = new google.maps.Marker({
            position: buildings[21],
            icon: diningMarker,
            title: "Halsey Science Center"
        });
        var reeveDiningMarker = new google.maps.Marker({
            position: buildings[34],
            icon: diningMarker,
            title: "Reeve Memorial Union"
        });
        var sageDiningMarker = new google.maps.Marker({
            position: buildings[35],
            icon: diningMarker,
            title: "Sage Hall"
        });
        var scottDiningMarker = new google.maps.Marker({
            position: buildings[36],
            icon: diningMarker,
            title: "Scott Hall"
        });

        // dining hover
        blackhawkDiningMarker.addListener('click', function(){
            var blackhawk = "blackhawk";
            markerOpenClose(blackhawk);
        });

        clowDiningMarker.addListener('click', function(){
            var clow = "clow";
            markerOpenClose(clow);
        });

        halseyDiningMarker.addListener('click', function(){
            var halsey = "halsey";
            markerOpenClose(halsey);
        });

        reeveDiningMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        sageDiningMarker.addListener('click', function(){
            var sage = "sage";
            markerOpenClose(sage);
        });

        scottDiningMarker.addListener('click', function(){
            var scott = "scott";
            markerOpenClose(scott);
        });

        // set/remove dining
        function setDining(){
            blackhawkDiningMarker.setMap(map);
            clowDiningMarker.setMap(map);
            halseyDiningMarker.setMap(map);
            reeveDiningMarker.setMap(map);
            sageDiningMarker.setMap(map);
            scottDiningMarker.setMap(map);

        }
        function removeDining(){
            blackhawkDiningMarker.setMap(null);
            clowDiningMarker.setMap(null);
            halseyDiningMarker.setMap(null);
            reeveDiningMarker.setMap(null);
            sageDiningMarker.setMap(null);
            scottDiningMarker.setMap(null);
        }
        
        // StuR markers
        var reeveStuRMarker = new google.maps.Marker({
            position: buildings[34],
            icon: stuRMarker,
            title: "Reeve Memorial Union"
        });
        var recreationStuRMarker = new google.maps.Marker({
            position: buildings[38],
            icon: stuRMarker,
            title: "Student Recreation and Wellness Center"
        });

        // StuR hover
        recreationStuRMarker.addListener('click', function(){
            var recreation = "recreation";
            markerOpenClose(recreation);
        });

        reeveStuRMarker.addListener('click', function(){
            var reeve = "reeve";
            markerOpenClose(reeve);
        });

        // StuR set/remove
        function setStuR(){
            reeveStuRMarker.setMap(map);
            recreationStuRMarker.setMap(map);
        }
        function removeStuR(){
            reeveStuRMarker.setMap(null);
            recreationStuRMarker.setMap(null);
        }
        
        // close all buildings
        function closeAllBuildings(){
          albeeHoverCard.close(map, albeeMarker);
          baseballHoverCard.close(map, baseballMarker);
          alumniHoverCard.close(map, alumniMarker);
          acHoverCard.close(map,acMarker);
          athleticHoverCard.close(map, athleticMarker);
          blackhawkHoverCard.close(map, blackhawkMarker);
          biodigesterHoverCard.close(map, biodigesterMarker);
          buckstaffHoverCard.close(map,buckstaffMarker);
          equityHoverCard.close(map, equityMarker);
          campusHoverCard.close(map, campusMarker);
          ceramicsHoverCard.close(map, ceramicsMarker);
          clowHoverCard.close(map, clowMarker);
          gardensHoverCard.close(map, gardensMarker);
          dempseyHoverCard.close(map, dempseyMarker);
          donnerHoverCard.close(map, donnerMarker);
          eastHoverCard.close(map,eastMarker);
          environmentalHoverCard.close(map, environmentalMarker);
          evansHoverCard.close(map, evansMarker);
          fletcherHoverCard.close(map, fletcherMarker);
          fredricHoverCard.close(map,fredricMarker);
          gruenhagenHoverCard.close(map,gruenhagenMarker);
          halseyHoverCard.close(map, halseyMarker);
          harringtonHoverCard.close(map, harringtonMarker);
          heatingHoverCard.close(map,heatingMarker);
          parkingRampHoverCard.close(map, parkingRampMarker);
          horizonHoverCard.close(map, horizonMarker);
          kolfHoverCard.close(map, kolfMarker);
          lincolnHoverCard.close(map, lincolnMarker);
          multiculturalHoverCard.close(map, multiculturalMarker);
          nursingHoverCard.close(map, nursingMarker);
          oviattHoverCard.close(map, oviattMarker);
          pollockHoverCard.close(map, pollockMarker);
          polkHoverCard.close(map, polkMarker);
          radfordHoverCard.close(map, radfordMarker);
          reeveHoverCard.close(map, reeveMarker);
          sageHoverCard.close(map, sageMarker);
          scottHoverCard.close(map, scottMarker);
          stewartHoverCard.close(map, stewartMarker);
          recreationHoverCard.close(map, recreationMarker);
          successHoverCard.close(map, successMarker);
          swartHoverCard.close(map, swartMarker);
          taylorHoverCard.close(map, taylorMarker);
          titanHoverCard.close(map, titanMarker);
          policeHoverCard.close(map, policeMarker);
          websterHoverCard.close(map, websterMarker);
        }
        //close parking lots cards
        function closeAllParking(){
          elevenHoverCard.close(map, elevenMarker);
          thirtyfiveHoverCard.close(map, thirtyfiveMarker);
          twentysevenHoverCard.close(map, twentysevenMarker);
          twentyoneHoverCard.close(map, twentyoneMarker);
          twentysixHoverCard.close(map, twentysixMarker);
          fourHoverCard.close(map, fourMarker);
          fouraHoverCard.close(map, fourMarker);
          sixteenHoverCard.close(map, sixteenMarker);
          seventeenHoverCard.close(map, seventeenMarker);
          twentynineHoverCard.close(map, twentynineMarker);
          twentyfiveHoverCard.close(map, twentyfiveMarker);
          eightHoverCard.close(map, eightMarker);
          thirtythreeHoverCard.close(map, thirtythreeMarker);
          thirtyfourHoverCard.close(map, thirtyfourMarker);
          twentyeightHoverCard.close(map, twentyeightMarker);
          twentythreeHoverCard.close(map, twentythreeMarker);
          fourteenaHoverCard.close(map, fourteenaMarker);
          fourteenbHoverCard.close(map, fourteenbMarker);
          fourteencHoverCard.close(map, fourteencMarker);
          sevenHoverCard.close(map, sevenMarker);
          fiveaHoverCard.close(map, fiveaMarker);
          fiveHoverCard.close(map, fiveMarker);
          sevenaHoverCard.close(map, sevenaMarker);
          fifteenHoverCard.close(map, fifteenMarker);
          thirtytwoHoverCard.close(map, thirtytwoMarker);
          thirteenHoverCard.close(map, thirteenMarker);
          twelveHoverCard.close(map, twelveMarker);
          sixaHoverCard.close(map, sixaMarker);
          sixHoverCard.close(map, sixMarker);
          tenHoverCard.close(map, tenMarker);
          nineaHoverCard.close(map, nineaMarker);
          nineHoverCard.close(map, nineMarker);
          eighteenHoverCard.close(map, eighteenMarker);
          thirtyHoverCard.close(map, thirtyMarker);
          thirtynineHoverCard.close(map, thirtynineMarker);
          womensCenterHoverCard.close(map, womensCenterMarker);
          titanOneHoverCard.close(map, titanOneMarker);
          titanTwoHoverCard.close(map, titanTwoMarker);
        }
        // close all accEnt cards
        function closeAllAccEnt(){
          albeeHoverCard.close(map, albeeMarker);
          acHoverCard.close(map,acMarker);
          blackhawkHoverCard.close(map, blackhawkMarker);
          equityHoverCard.close(map, equityMarker);
          clowHoverCard.close(map, clowMarker);
          dempseyHoverCard.close(map, dempseyMarker);
          donnerHoverCard.close(map, donnerMarker);
          fletcherHoverCard.close(map, fletcherMarker);
          fredricHoverCard.close(map,fredricMarker);
          gruenhagenHoverCard.close(map,gruenhagenMarker);
          halseyHoverCard.close(map, halseyMarker);
          harringtonHoverCard.close(map, harringtonMarker);
          kolfHoverCard.close(map, kolfMarker);
          nursingHoverCard.close(map, nursingMarker);
          polkHoverCard.close(map, polkMarker);
          radfordHoverCard.close(map, radfordMarker);
          reeveHoverCard.close(map, reeveMarker);
          scottHoverCard.close(map, scottMarker);
          stewartHoverCard.close(map, stewartMarker);
          successHoverCard.close(map, successMarker);
          swartHoverCard.close(map, swartMarker);
          taylorHoverCard.close(map, taylorMarker);
          websterHoverCard.close(map, websterMarker);
        }
        //close all AccPark cards
        function closeAllAccPark(){
          womensCenterHoverCard.close(map, womensCenterMarker);
          titanOneHoverCard.close(map, titanOneMarker);
          titanTwoHoverCard.close(map, titanTwoMarker);
          elevenHoverCard.close(map, elevenMarker);
          fourHoverCard.close(map, fourMarker);
          fouraHoverCard.close(map, fourMarker);
          sixteenHoverCard.close(map, sixteenMarker);
          seventeenHoverCard.close(map, seventeenMarker);
          twentynineHoverCard.close(map, twentynineMarker);
          twentyfiveHoverCard.close(map, twentyfiveMarker);
          thirtythreeHoverCard.close(map, thirtythreeMarker);
          fourteenaHoverCard.close(map, fourteenaMarker);
          sevenaHoverCard.close(map, sevenaMarker);
          thirteenHoverCard.close(map, thirteenMarker);
          thirtyfourHoverCard.close(map, thirtyfourMarker);
          twentyeightHoverCard.close(map, twentyeightMarker);
          twentythreeHoverCard.close(map, twentythreeMarker);
          fifteenHoverCard.close(map, fifteenMarker);
          thirtytwoHoverCard.close(map, thirtytwoMarker);
          tenHoverCard.close(map, tenMarker);
          twelveHoverCard.close(map, twelveMarker);
          sixaHoverCard.close(map, sixaMarker);
          sixHoverCard.close(map, sixMarker);
          eighteenHoverCard.close(map, eighteenMarker);
        }
        //close all sust cards
        function closeAllSust(){
          albeeHoverCard.close(map, albeeMarker);
          alumniHoverCard.close(map, alumniMarker);
          blackhawkHoverCard.close(map, blackhawkMarker);
          biodigesterHoverCard.close(map, biodigesterMarker);
          heatingHoverCard.close(map,heatingMarker);
          horizonHoverCard.close(map, horizonMarker);
          reeveHoverCard.close(map, reeveMarker);
          sageHoverCard.close(map, sageMarker);
          recreationHoverCard.close(map, recreationMarker);
          successHoverCard.close(map, successMarker);
          taylorHoverCard.close(map, taylorMarker);
          titanHoverCard.close(map, titanMarker);
        }
        //close all gender cards
        function closeAllGender(){
          acHoverCard.close(map,acMarker);
          blackhawkHoverCard.close(map, blackhawkMarker);
          campusHoverCard.close(map, campusMarker);
          dempseyHoverCard.close(map, dempseyMarker);
          halseyHoverCard.close(map, halseyMarker);
          harringtonHoverCard.close(map, harringtonMarker);
          kolfHoverCard.close(map, kolfMarker);
          nursingHoverCard.close(map, nursingMarker);
          reeveHoverCard.close(map, reeveMarker);
          sageHoverCard.close(map, sageMarker);
          recreationHoverCard.close(map, recreationMarker);
          successHoverCard.close(map, successMarker);
          swartHoverCard.close(map, swartMarker);
          policeHoverCard.close(map, policeMarker);
        }
        //close all AccaF cards
        function closeAllAccaF(){
          albeeHoverCard.close(map, albeeMarker);
          acHoverCard.close(map,acMarker);
          ceramicsHoverCard.close(map, ceramicsMarker);
          clowHoverCard.close(map, clowMarker);
          environmentalHoverCard.close(map, environmentalMarker);
          fredricHoverCard.close(map,fredricMarker);
          halseyHoverCard.close(map, halseyMarker);
          harringtonHoverCard.close(map, harringtonMarker);
          kolfHoverCard.close(map, kolfMarker);
          nursingHoverCard.close(map, nursingMarker);
          polkHoverCard.close(map, polkMarker);
          radfordHoverCard.close(map, radfordMarker);
          sageHoverCard.close(map, sageMarker);
          swartHoverCard.close(map, swartMarker);
        }
        //close all athletics cards
        function closeAllAth(){
          albeeHoverCard.close(map, albeeMarker);
          baseballHoverCard.close(map, baseballMarker);
          athleticHoverCard.close(map, athleticMarker);
          eastHoverCard.close(map,eastMarker);
          kolfHoverCard.close(map, kolfMarker);
          titanHoverCard.close(map, titanMarker);
        }
        //close all AccaS cards
        function closeAllAccaS(){
          equityHoverCard.close(map, equityMarker);
          nursingHoverCard.close(map, nursingMarker);
          successHoverCard.close(map, successMarker);
          swartHoverCard.close(map, swartMarker);
        }
        //close all CampS cards
        function closeAllCampS(){
          equityHoverCard.close(map, equityMarker);
          campusHoverCard.close(map, campusMarker);
          dempseyHoverCard.close(map, dempseyMarker);
          multiculturalHoverCard.close(map, multiculturalMarker);
          pollockHoverCard.close(map, pollockMarker);
          radfordHoverCard.close(map, radfordMarker);
          reeveHoverCard.close(map, reeveMarker);
          recreationHoverCard.close(map, recreationMarker);
          successHoverCard.close(map, successMarker);
        }
        //close all resH cards
        function closeAllResH(){
          donnerHoverCard.close(map, donnerMarker);
          evansHoverCard.close(map, evansMarker);
          fletcherHoverCard.close(map, fletcherMarker);
          gruenhagenHoverCard.close(map,gruenhagenMarker);
          horizonHoverCard.close(map, horizonMarker);
          stewartHoverCard.close(map, stewartMarker);
          scottHoverCard.close(map, scottMarker);
          taylorHoverCard.close(map, taylorMarker);
          websterHoverCard.close(map, websterMarker);
        }
        //close all dining cards
        function closeAllDining(){
          blackhawkHoverCard.close(map, blackhawkMarker);
          clowHoverCard.close(map, clowMarker);
          halseyHoverCard.close(map, halseyMarker);
          reeveHoverCard.close(map, reeveMarker);
          sageHoverCard.close(map, sageMarker);
          scottHoverCard.close(map, scottMarker);
        }
        //close all StuR cards
        function closeAllStuR(){
          reeveHoverCard.close(map, reeveMarker);
          recreationHoverCard.close(map, recreationMarker);
        }
        // close all hover cards
        function closeAllHover(){
            albeeHoverCard.close(map, albeeMarker);
            baseballHoverCard.close(map, baseballMarker);
            alumniHoverCard.close(map, alumniMarker);
            acHoverCard.close(map,acMarker);
            athleticHoverCard.close(map, athleticMarker);
            blackhawkHoverCard.close(map, blackhawkMarker);
            biodigesterHoverCard.close(map, biodigesterMarker);
            buckstaffHoverCard.close(map,buckstaffMarker);
            equityHoverCard.close(map, equityMarker);
            campusHoverCard.close(map, campusMarker);
            ceramicsHoverCard.close(map, ceramicsMarker);
            clowHoverCard.close(map, clowMarker);
            gardensHoverCard.close(map, gardensMarker);
            dempseyHoverCard.close(map, dempseyMarker);
            donnerHoverCard.close(map, donnerMarker);
            eastHoverCard.close(map,eastMarker);
            environmentalHoverCard.close(map, environmentalMarker);
            evansHoverCard.close(map, evansMarker);
            fletcherHoverCard.close(map, fletcherMarker);
            fredricHoverCard.close(map,fredricMarker);
            gruenhagenHoverCard.close(map,gruenhagenMarker);
            halseyHoverCard.close(map, halseyMarker);
            harringtonHoverCard.close(map, harringtonMarker);
            heatingHoverCard.close(map,heatingMarker);
            parkingRampHoverCard.close(map, parkingRampMarker);
            horizonHoverCard.close(map, horizonMarker);
            kolfHoverCard.close(map, kolfMarker);
            lincolnHoverCard.close(map, lincolnMarker);
            multiculturalHoverCard.close(map, multiculturalMarker);
            nursingHoverCard.close(map, nursingMarker);
            oviattHoverCard.close(map, oviattMarker);
            pollockHoverCard.close(map, pollockMarker);
            polkHoverCard.close(map, polkMarker);
            radfordHoverCard.close(map, radfordMarker);
            reeveHoverCard.close(map, reeveMarker);
            sageHoverCard.close(map, sageMarker);
            scottHoverCard.close(map, scottMarker);
            stewartHoverCard.close(map, stewartMarker);
            recreationHoverCard.close(map, recreationMarker);
            successHoverCard.close(map, successMarker);
            swartHoverCard.close(map, swartMarker);
            taylorHoverCard.close(map, taylorMarker);
            titanHoverCard.close(map, titanMarker);
            policeHoverCard.close(map, policeMarker);
            websterHoverCard.close(map, websterMarker);
            elevenHoverCard.close(map, elevenMarker);
            thirtyfiveHoverCard.close(map, thirtyfiveMarker);
            twentysevenHoverCard.close(map, twentysevenMarker);
            twentyoneHoverCard.close(map, twentyoneMarker);
            twentysixHoverCard.close(map, twentysixMarker);
            fourHoverCard.close(map, fourMarker);
            fouraHoverCard.close(map, fourMarker);
            sixteenHoverCard.close(map, sixteenMarker);
            seventeenHoverCard.close(map, seventeenMarker);
            twentynineHoverCard.close(map, twentynineMarker);
            twentyfiveHoverCard.close(map, twentyfiveMarker);
            eightHoverCard.close(map, eightMarker);
            thirtythreeHoverCard.close(map, thirtythreeMarker);
            thirtyfourHoverCard.close(map, thirtyfourMarker);
            twentyeightHoverCard.close(map, twentyeightMarker);
            twentythreeHoverCard.close(map, twentythreeMarker);
            fourteenaHoverCard.close(map, fourteenaMarker);
            fourteenbHoverCard.close(map, fourteenbMarker);
            fourteencHoverCard.close(map, fourteencMarker);
            sevenHoverCard.close(map, sevenMarker);
            fiveaHoverCard.close(map, fiveaMarker);
            fiveHoverCard.close(map, fiveMarker);
            sevenaHoverCard.close(map, sevenaMarker);
            fifteenHoverCard.close(map, fifteenMarker);
            thirtytwoHoverCard.close(map, thirtytwoMarker);
            thirteenHoverCard.close(map, thirteenMarker);
            twelveHoverCard.close(map, twelveMarker);
            sixaHoverCard.close(map, sixaMarker);
            sixHoverCard.close(map, sixMarker);
            tenHoverCard.close(map, tenMarker);
            nineaHoverCard.close(map, nineaMarker);
            nineHoverCard.close(map, nineMarker);
            eighteenHoverCard.close(map, eighteenMarker);
            thirtyHoverCard.close(map, thirtyMarker);
            thirtynineHoverCard.close(map, thirtynineMarker);
            womensCenterHoverCard.close(map, womensCenterMarker);
            titanOneHoverCard.close(map, titanOneMarker);
            titanTwoHoverCard.close(map, titanTwoMarker);
            
        }


    
    //functions for checkboxes
    // naming conventions for checkboxes: ex. "buildingsLabel" "name + Label" is the element that has the class "is-checked" is added to
    // ex. "buildings" without "Label" added onto the end is the input element with attribute " type= 'checkbox' "

     // triggerCheck and triggerUncheck check and uncheck the checkboxes
     //primarily should only be needed for the selectall functions
  function triggerCheck(name){
    // fancy schmancy method Material Design already gives for checking le checkbox
    document.getElementById(name + "Label").MaterialCheckbox.check();
    checkboxMarkersandCards(name);
  }

  function triggerUncheck(name){
    // fancy schmancy method Material Design already gives for unchecking le checkbox
    document.getElementById(name + "Label").MaterialCheckbox.uncheck();
    uncheckMarkersandCards(name);
  
  }
    //   the following functions handle setting/removing markers and hover cards when checkboxes are checked or unchecked

  //checks if name corresponds with specific ids and sets the buildings & their markers accordingly
  function checkboxMarkersandCards(name){
        if(name === "buildings"){
            // if buildings is checked, set all buildings markers
            setBuilding();
        } 
        else if (name === "parking"){
            setParkingLots();
        }
        else if (name === "accEnt"){
            setAccEnt();
        }
        else if (name === "accPar"){
            setAccPar();
        }
        else if (name === "emergency"){
            setEmergencyPhones();
        }
        else if (name === "sust"){
            setSust();
        }
        else if (name === "gender"){
            setGender();
        }
        else if (name === "accaF"){
            setAccaF();
        }
        else if (name === "ath"){
            setAth();
        }
        else if (name === "accS"){
            setAccaS();
        }
        else if (name === "campS"){
            setCampS();
        }
        else if (name === "resH"){
            setResH();
        }
        else if (name === "dining"){
            setDining();
        }
        else if (name === "stuR"){
            setStuR();
        }
    }
    //checks if name corresponds with specific ids and sets the buildings & their markers accordingly
   function uncheckMarkersandCards(name){
        if (name === "buildings"){
            // removes hoverpopups (not markers, the white popups after you click markers)
            // must come before markers are removed
            closeAllBuildings();
            // removes building markers
            removeBuilding();
        } 
        else if (name === "parking"){
            closeAllParking();
            removeParkingLots();
        }
        else if (name === "accEnt"){
           closeAllAccEnt();
            removeAccEnt();
        }
        else if (name === "accPar"){
            closeAllAccPark();
            removeAccPar();
         }
         else if (name === "emergency"){
            removeEmergencyPhones();
            // emergency phones do not have any hovercards attached to their markers atm
         }
         else if (name === "sust"){
            closeAllSust();
            removeSust();
        }
        else if (name === "gender"){
            closeAllGender();
            removeGender();
        }
        else if (name === "accaF"){
            closeAllAccaF();
            removeAccaF();
        }
        else if (name === "ath"){
            closeAllAth();
            removeAth();
        }
        else if (name === "accS"){
            closeAllAccaS();
            removeAccaS();
        }
        else if (name === "campS"){
            closeAllCampS();
            removeCampS();
        }
        else if (name === "resH"){
            closeAllResH();
            removeResH();
        }
        else if (name === "dining"){
            closeAllDining();
            removeDining();
        }
        else if (name === "stuR"){
            closeAllStuR();
            removeStuR();
        }
        
    }
    // watches for change event on checkbox, checks if it has class is-checked and then sets the markers and hover cards accordingly
    function checkIfChecked(name){
        // debugger;
             if(!$("#" + name + "Label").hasClass("is-checked")){
                 //  if checkbox is checked, set markers
                 checkboxMarkersandCards(name);
             } else {
                //  if checkbox is unchecked, remove markers and hover cards
                uncheckMarkersandCards(name);
             }
        
    }

    //right away trigger buildings to be checked (easier for first time users to see how to use the site)
    function triggerBuildings(){
        $("#buildings").trigger("click");
        setBuilding();
    }
    triggerBuildings();
    
    // all onchange functions for the checkboxes

    // checks if the checkbox is checked or not and then sets markers/hover cards accordingly
    // to work: buildings needs to be added to functions: "checkboxMarkersandCards" and "uncheckMarkersandCards"
    // selector for .change function should use the id for the input element 
   $("#buildings").change(function(){
    // sets up parameter as string
       var buildings = "buildings";
       checkIfChecked(buildings);
   });
   $("#parking").change(function(){
       var parking = "parking";
       checkIfChecked(parking);
   });
   $("#accEnt").change(function(){
        var accEnt = "accEnt";
        checkIfChecked(accEnt);
   });
   $("#accPar").change(function(){
        var accPar = "accPar";
        checkIfChecked(accPar);
   });
   $("#emergency").change(function(){
        var emergency = "emergency";
        checkIfChecked(emergency);
   });
   $("#sust").change(function(){
        var sust = "sust";
        checkIfChecked(sust);
   });
   $("#gender").change(function(){
        var gender = "gender";
        checkIfChecked(gender);
   });
   $("#accaF").change(function(){
        var accaF = "accaF";
        checkIfChecked(accaF);
    });
    $("#ath").change(function(){
        var ath= "ath";
        checkIfChecked(ath);
     });
     $("#accS").change(function(){
        var accS = "accS";
        checkIfChecked(accS);
     });
     $("#campS").change(function(){
        var campS = "campS";
        checkIfChecked(campS);
     });
     $("#resH").change(function(){
        var resH = "resH";
        checkIfChecked(resH);
     });
     $("#dining").change(function(){
        var dining = "dining";
        checkIfChecked(dining);
     });
     $("#stuR").change(function(){
        var stuR = "stuR";
        checkIfChecked(stuR);
     });


 $("#selectAllOne").change(function(){
   var buildings = "buildings";
   var parking = "parking";
   var accEnt = "accEnt";
   var accPar = "accPar";
   var emergency = "emergency";
   var sust = "sust";
   var gender = "gender";

       if( !$("#selectAllOne").hasClass("is-checked") ){
         //if select all is unchecked, all others should be unchecked
        //  uncheck: unchecks checkbox and removes markers and hover cards
        
        // HAS TO COME BEFORE UNCHECK IS TRIGGERED
         closeAllHover();

         triggerUncheck(buildings);
         triggerUncheck(parking);
         triggerUncheck(accEnt);
         triggerUncheck(accPar);
         triggerUncheck(emergency);
         triggerUncheck(sust);
         triggerUncheck(gender);
       }else{
         //if selectall is checked, all others should be checked
        //  check: checks checkbox and sets markers 
         triggerCheck(buildings);
         triggerCheck(parking);
         triggerCheck(accEnt);
         triggerCheck(accPar);
         triggerCheck(emergency);
         triggerCheck(sust);
         triggerCheck(gender);
       }

 });

 $("#selectAllTwo").change(function(){
          var accaF = "accaF";
          var ath = "ath";
          var accS = "accS";
          var campS = "campS";
          var resH = "resH";
          var dining = "dining";
          var stuR = "stuR";

          if( !$("#selectAllTwo").hasClass("is-checked") ){
              // HAS TO COME BEFORE UNCHECK IS TRIGGERED
             closeAllHover();
            triggerUncheck(accaF);
            triggerUncheck(ath);
            triggerUncheck(accS);
            triggerUncheck(campS);
            triggerUncheck(resH);
            triggerUncheck(dining);
            triggerUncheck(stuR);
          } else {
            triggerCheck(accaF);
            triggerCheck(ath);
            triggerCheck(accS);
            triggerCheck(campS);
            triggerCheck(resH);
            triggerCheck(dining);
            triggerCheck(stuR);
          }
  
    });


}



