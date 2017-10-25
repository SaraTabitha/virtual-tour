// google map!
// function for intitial map load (what appears when the page first loads)
function initMap() {
        // center of map (UWO coordinates)
        var uwo = {lat: 44.025098, lng: -88.554610};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: uwo
        });
        
        //Markers curtesy of Nick Pierson of the Reslife Arists Office in Gruenhagen!
        //first group: yellow, pink, red, teal, green, blue, lightpurple
        //second group: maroon, orange, darkgreen, lightblue, navy, darkpurple, brown
        var pinkMarker = "images/markers/pink.png";
        var redMarker = "images/markers/red.png";
        var maroonMarker = "images/markers/maroon.png";
        var orangeMarker = "images/markers/orange.png";
        var yellowMarker = "images/markers/yellow.png";
        var greenMarker = "images/markers/green.png";
        var darkgreenMarker = "images/markers/darkgreen.png";
        var tealMarker = "images/markers/teal.png";
        var lightblueMarker = "images/markers/lightblue.png";
        var blueMarker = "images/markers/blue.png";
        var navyMarker = "images/markers/navy.png";
        var lightpurpleMarker = "images/markers/lightpurple.png";
        var darkpurpleMarker = "images/markers/darkpurple.png";
        var brownMarker = "images/markers/brown.png";

        
        //list of all the things you could possibly need for buildings/parking lots/phones
        //0-44 = buildings
        //45-82 = parking lots
        //83-110 = emergency phones
        var allMarkersInfo = [
            //0 albee
            //position: lat, lng, title: are all used for creating the markers that go on the map
            {position: {lat: 44.025729, lng: -88.550248}, title: "Albee Hall",
            //thumbnail is for the infowindow that pops up when you click on a marker, hoverSelector is the selector for the 
            //html element in index.html that is the content for the infoWindow 
            thumbnail: "images/campuspictures/albeehall.jpeg", hoverSelector: document.getElementById('albeeHover')
            },
            //1 baseball
            {position: {lat: 44.023042, lng: -88.561892},title: "Alumni Baseball Stadium",
            thumbnail:"images/campuspictures/baseball.jpg",  hoverSelector: document.getElementById('baseballHover')
            },
            //2 alumni
            {position: {lat: 44.020528, lng: -88.550432},title: "Alumni Welcome and Conference Center",
            thumbnail: "images/campuspictures/awcc-building.jpg", hoverSelector: document.getElementById('alumniHover')
            },
            //3 ac
            {position: {lat: 44.029640, lng: -88.552137},title: "Arts and Communications",
            thumbnail: "images/campuspictures/artscommunications.jpeg", hoverSelector: document.getElementById('acHover')
            },
            //4 athletic
            {position: {lat: 44.023077, lng: -88.561081},title: "Athletic Service Building",
            thumbnail: "images/campuspictures/athleticservice.jpeg", hoverSelector:document.getElementById('athleticHover') 
            },
            //5 blackhawk
            {position: {lat: 44.023591, lng: -88.549157},title: "Blackhawk Commons",
            thumbnail: "images/campuspictures/blackhawk.jpeg", hoverSelector: document.getElementById('blackhawkHover')
            },
            //6 biodigester
            {position: {lat: 44.018897, lng: -88.558015},title: "Biodigester",
            thumbnail:"images/campuspictures/biodigester.jpg",  hoverSelector:document.getElementById('biodigesterHover')
            },
            //7 buckstaff
            { position: {lat: 44.028428, lng: -88.551581},title: "Buckstaff Planetarium",
            thumbnail: "images/campuspictures/buckstaff.jpeg",  hoverSelector: document.getElementById('buckstaffHover')
            },
            //8 equity 
            {position: {lat: 44.024655, lng: -88.547217},title: "Campus Center for Equity and Diversity",
            thumbnail: "images/campuspictures/centerforequity.jpeg", hoverSelector: document.getElementById('equityHover')
            },
            //9 campus services
            {position: {lat: 44.017782, lng: -88.556446},title: "Campus Services",
            thumbnail: "images/campuspictures/campus-services.jpg", hoverSelector: document.getElementById('campusHover')
            },
            //10 ceramics
            {position: {lat: 44.025559, lng: -88.555515},title: "Ceramics Laboratory",
            thumbnail: "images/campuspictures/ceramicslab.jpeg", hoverSelector: document.getElementById('ceramicsHover')
            },
            //11 clow
            {position: {lat: 44.026306, lng: -88.552268},title: "Clow Social Sciences Center",
            thumbnail:"images/campuspictures/clow.jpeg",  hoverSelector: document.getElementById('clowHover')
            },
            //12 gardens
            {position: {lat: 44.015573, lng: -88.555929},title: "Community Gardens",
            thumbnail:"images/campuspictures/community-gardens.jpg",  hoverSelector: document.getElementById('gardensHover')
            },
            //13 dempsey
            {position: {lat: 44.026603, lng: -88.550707},title: "Dempsey Hall",
            thumbnail:"images/campuspictures/dempsey.jpeg",  hoverSelector: document.getElementById('dempseyHover')
            },
            //14 donner
            {position: {lat: 44.025420, lng: -88.552287}, title: "Donner Hall",
            thumbnail:"images/campuspictures/donner.jpeg",  hoverSelector:document.getElementById('donnerHover')
             },
            //15 east
            {position: {lat: 44.031217, lng: -88.543806},title: "East Hall",
            thumbnail: "images/campuspictures/easthall.jpg", hoverSelector: document.getElementById('eastHover')
            },
            //16 environmental
            { position: {lat: 44.023518, lng: -88.553851}, title: "Environmental Science and Research Center",
            thumbnail:"images/campuspictures/aquaticstudiescenter.jpeg",  hoverSelector: document.getElementById('environmentalHover')
            },
            //17 evans
            {position: {lat: 44.026168, lng: -88.547397},title: "Evans Hall",
            thumbnail:"images/campuspictures/evans.jpeg", hoverSelector: document.getElementById('evansHover')
             },
            //18 fletcher
            { position: {lat: 44.025332, lng: -88.547240}, title: "Fletcher Hall",
            thumbnail: "images/campuspictures/fletcher.jpeg",hoverSelector: document.getElementById('fletcherHover')
            },
            //19 fredric
            {position: {lat:  44.029000, lng:-88.552919},title: "Fredric March Theater",
            thumbnail:"images/campuspictures/fredricmarch.jpeg", hoverSelector: document.getElementById('fredricHover')
             },
            //20 gruenhagen
            { position: {lat: 44.022405, lng:  -88.548824}, title: "Gruenhagen Conference Center",
            thumbnail:"images/campuspictures/gruenhagen.jpeg", hoverSelector: document.getElementById('gruenhagenHover')
             },
            //21 halsey
            {position: {lat:  44.028497, lng: -88.551027},title: "Halsey Science Center",
            thumbnail:"images/campuspictures/halsey.jpeg", hoverSelector: document.getElementById('halseyHover')
            },
            //22 harrington
            {position: {lat:  44.027736, lng: -88.550172}, title: "Harrington Hall",
            thumbnail:"images/campuspictures/harrington.jpeg", hoverSelector: document.getElementById('harringtonHover')
             },
            //23 heating 
            {position: {lat: 44.028235, lng: -88.554312},title: "Heating Plant",
            thumbnail:"images/campuspictures/heatingplant.jpeg", hoverSelector: document.getElementById('heatingHover')
             },
            //24 parking ramp
            {position: {lat: 44.022960, lng: -88.549791},title: "High Avenue Parking Ramp",
            thumbnail:"images/campuspictures/parkingramp.jpeg", hoverSelector: document.getElementById('parkingRampHover')
             },
            //25 horizon
            {position: {lat: 44.024363, lng: -88.547972},title: "Horizon Village",
            thumbnail:"images/campuspictures/horizon.jpeg", hoverSelector: document.getElementById('horizonHover')
             },
            //26 kolf
            {position: {lat: 44.024323, lng: -88.552214},title: "Kolf Sports Center",
            thumbnail:"images/campuspictures/kolf.jpeg", hoverSelector: document.getElementById('kolfHover')
             },
            //27 lincoln
            {position: {lat: 44.023204, lng: -88.546359},title: "Lincoln Hall",
            thumbnail:"images/campuspictures/lincoln-hall.jpg", hoverSelector: document.getElementById('lincolnHover')
              },
            //28 multicultural
            { position: {lat: 44.024842, lng: -88.550613}, title: "Multicultural Education Center",
            thumbnail:"images/campuspictures/multiculturaleducation.jpeg", hoverSelector: document.getElementById('multiculturalHover')
             },
            //29 nursing
            {position: {lat: 44.027051, lng: -88.552813},title: "Nursing and Education Building",
            thumbnail:"images/campuspictures/nursingeducation.jpeg", hoverSelector: document.getElementById('nursingHover')
             },
            //30 oviatt
            {position: {lat:  44.027156, lng: -88.551466},title: "Oviatt House",
            thumbnail:"images/campuspictures/oviatt.jpeg", hoverSelector: document.getElementById('oviattHover')
            },
            //31 pollock
            { position:  {lat: 44.025227, lng:  -88.551292},title: "Pollock House",
            thumbnail:"images/campuspictures/pollock.jpeg", hoverSelector: document.getElementById('pollockHover')
              },
            //32 polk
            { position: {lat: 44.026379, lng: -88.549602}, title: "Polk Library",
            thumbnail:"images/campuspictures/polk.jpeg", hoverSelector: document.getElementById('polkHover')
            },
            //33 radford
            { position: {lat: 44.025671, lng: -88.551561}, title: "Radford Hall and Student Health Center",
            thumbnail:"images/campuspictures/radford.jpeg", hoverSelector: document.getElementById('radfordHover')
            },
            //34 reeve
            { position: {lat: 44.024934, lng: -88.549448}, title: "Reeve Memorial Union",
            thumbnail:"images/campuspictures/reeve.jpeg", hoverSelector: document.getElementById('reeveHover')
              },
            //35 sage
            { position: {lat: 44.025720, lng: -88.553770},  title: "Sage Hall",
            thumbnail:"images/campuspictures/sage.jpeg", hoverSelector: document.getElementById('sageHover')
             },
            //36 scott
            {position: {lat: 44.022556, lng: -88.547344},title: "Scott Hall",
            thumbnail:"images/campuspictures/scott.jpeg", hoverSelector: document.getElementById('scottHover')
             },
            //37 stewart
            {position: {lat: 44.026060, lng: -88.546952},title: "Stewart Hall",
            thumbnail: "images/campuspictures/stewart.jpeg", hoverSelector: document.getElementById('stewartHover')
             },
            //38 recreation
            {position: {lat: 44.021752, lng: -88.551694},title: "Student Recreation and Wellness Center",
            thumbnail:"images/campuspictures/srwc.jpeg", hoverSelector: document.getElementById('recreationHover')
             },
            //39 success
            { position: {lat: 44.026205, lng: -88.548163},  title: "Student Success Center",
            thumbnail:"images/campuspictures/studentsuccess.jpeg", hoverSelector: document.getElementById('successHover')
             },
            //40 swart
            { position: {lat:  44.027872, lng:  -88.551962}, title: "Swart Hall",
            thumbnail:"images/campuspictures/swart.jpeg", hoverSelector: document.getElementById('swartHover')  
             },
            //41 taylor
            {position:  {lat: 44.024577, lng: -88.551215}, title: "Taylor Hall",
            thumbnail:"images/campuspictures/taylor.jpeg", hoverSelector: document.getElementById('taylorHover')
             },
            //42 titan
            {position:  {lat: 44.023671, lng: -88.562917},title: "Titan Stadium",
            thumbnail:"images/campuspictures/titanstadium.jpeg", hoverSelector: document.getElementById('titanHover')
            },
            //43 police
            {position:  {lat: 44.023763, lng: -88.549972},title: "University Police",
            thumbnail:"images/campuspictures/universitypolice.jpeg", hoverSelector: document.getElementById('policeHover')
            },
            //44 webster
            {position: {lat: 44.025002, lng: -88.551681},title: "Webster Hall",
            thumbnail:"images/campuspictures/webster.jpeg", hoverSelector: document.getElementById('websterHover')
            },
            
            //parking lots
            // [45] Lot 11
            {position: {lat: 44.030449, lng: -88.552415},title: "Lot 11",
            hoverSelector: document.getElementById('elevenHover')
            },
            // [46] Lot 35
            { position: {lat: 44.029428, lng: -88.558183}, title: "Lot 35",
            hoverSelector: document.getElementById('thirtyfiveHover')
            },
            // [47] Lot 27
            {position: {lat: 44.029026, lng: -88.554960}, title: "Lot 27",
            hoverSelector: document.getElementById('twentysevenHover')
            },
            // [48] Lot 21
            {position: {lat: 44.029123, lng: -88.553173},title: "Lot 21",
            hoverSelector: document.getElementById('twentyoneHover')
            },
            // [49] Lot 26
            {position: {lat: 44.029838, lng: -88.551684},  title: "Lot 26",
            hoverSelector: document.getElementById('twentysixHover')
            },
            // [50] Lot 4
            {position: {lat: 44.029100, lng: -88.551581},title: "Lot 4",
            hoverSelector: document.getElementById('fourHover')
            },
            // [51] Lot 4a
            {position: {lat: 44.028586, lng: -88.552649},  title: "Lot 4a",
            hoverSelector: document.getElementById('fouraHover')
            },
            // [52] Lot 16
            {position: {lat: 44.028822, lng: -88.550956},title: "Lot 16",
            hoverSelector: document.getElementById('sixteenHover')
            },
            // [53] Lot 17
            {position: {lat: 44.028648, lng: -88.549711},title: "Lot 17",
            hoverSelector: document.getElementById('seventeenHover')
            },
            // [54] Lot 29
            { position: {lat: 44.027825, lng: -88.553434}, title: "Lot 29",
            hoverSelector: document.getElementById('twentynineHover')
            },
            // [55] Lot 25
            {position: {lat: 44.027233, lng: -88.553602}, title: "Lot 25",
            hoverSelector: document.getElementById('twentyfiveHover')
            },
            // [56] Lot 8
            {position: {lat: 44.026371, lng: -88.554322}, title: "Lot 8",
            hoverSelector: document.getElementById('eightHover')
            },
            // [57] Lot 33
            {position: {lat: 44.025668, lng: -88.555558},   title: "Lot 33",
            hoverSelector: document.getElementById('thirtythreeHover')
            },
            // [58] Lot 34
            {position: {lat: 44.027133, lng: -88.548009},title: "Lot 34",
            hoverSelector: document.getElementById('thirtyfourHover')
            },
            // [59] Lot 28
            {position: {lat: 44.025858, lng: -88.548893},title: "Lot 28",
            hoverSelector: document.getElementById('twentyeightHover')
            },
            // [60] Lot 23
            {position: {lat: 44.025511, lng: -88.546748},   title: "Lot 23",
            hoverSelector: document.getElementById('twentythreeHover')
            },
            // [61] Lot 14a
            {position: {lat: 44.025828, lng: -88.552416},title: "Lot 14a",
            hoverSelector: document.getElementById('fourteenaHover')
            },
            // [62] Lot 14b
            {position: {lat: 44.025673, lng: -88.551929},title: "Lot 14b",
            hoverSelector: document.getElementById('fourteenbHover')
            },
            // [63] Lot 14c
            {position: {lat: 44.025302, lng: -88.551711},title: "Lot 14c",
            hoverSelector: document.getElementById('fourteencHover')
            },
            // [64] Lot 7
            {position: {lat: 44.025023, lng: -88.553519},title: "Lot 7",
            hoverSelector: document.getElementById('sevenHover')
            },
            // [65] Lot 5a
            {position: {lat: 44.024150, lng: -88.554291},title: "Lot 5a",
            hoverSelector: document.getElementById('fiveaHover')
            },
            // [66] Lot 5
            {position: {lat: 44.023717, lng: -88.553693}, title: "Lot 5",
            hoverSelector: document.getElementById('fiveHover')
            },
            // [67] Lot 7a
            {position: {lat: 44.023897, lng: -88.552670}, title: "Lot 7a",
            hoverSelector: document.getElementById('sevenaHover')
            },
            // [68] Lot 15
            {position: {lat: 44.024142, lng: -88.549694},title: "Lot 15",
            hoverSelector: document.getElementById('fifteenHover')
            },
            // [69] Lot 32
            {position: {lat: 44.023912, lng: -88.550031},title: "Lot 32",
            hoverSelector: document.getElementById('thirtytwoHover')
            },
            // [70] Lot 13
            {position: {lat: 44.023505, lng: -88.551579},title: "Lot 13",
            hoverSelector: document.getElementById('thirteenHover')
            },
            // [71] Lot 12
            {position: {lat: 44.022135, lng: -88.551702}, title: "Lot 12",
            hoverSelector: document.getElementById('twelveHover')
            },
            // [72] Lot 6a
            {position: {lat: 44.021216, lng: -88.551093}, title: "Lot 6a",
            hoverSelector: document.getElementById('sixaHover')
            },
            // [73] Lot 6
            {position: {lat: 44.020887, lng: -88.549848}, title: "Lot 6",
            hoverSelector: document.getElementById('sixHover')
            },
            // [74] Lot 10
            {position: {lat: 44.021857, lng: -88.548831},title: "Lot 10",
            hoverSelector: document.getElementById('tenHover')
            },
            // [75] Lot 9a
            {position: {lat: 44.022435, lng: -88.548564},title: "Lot 9a",
            hoverSelector: document.getElementById('nineaHover')
            },
            // [76] Lot 9
            {position: {lat: 44.021955, lng:  -88.548167},title: "Lot 9",
            hoverSelector: document.getElementById('nineHover')
            },
            // [77] Lot 18
            {position: {lat: 44.022368, lng: -88.546827},title: "Lot 18",
            hoverSelector: document.getElementById('eighteenHover')
            },
            // [78] Lot 30
            {position: {lat: 44.021440, lng: -88.547947},title: "Lot 30",
            hoverSelector: document.getElementById('thirtyHover')
            },
            // [79] Lot 39
            {position: {lat: 44.018367, lng: -88.556821},title: "Lot 39",
            hoverSelector: document.getElementById('thirtynineHover')
            },
            //[80] womens center lot
            { position: {lat: 44.024816, lng: -88.546638},title: "Women's Center",
            hoverSelector: document.getElementById('womensCenterHover')
            },
            //[81] titan one lot
            { position: {lat: 44.024401, lng: -88.564253},title: "Titan One",
            hoverSelector: document.getElementById('titanOneHover')
            },
            //[82] titan two lot
            { position: {lat: 44.023007, lng:  -88.564339},title: "Titan Two",
            hoverSelector: document.getElementById('titanTwoHover')
            },

            //emergency phones
            //[83] phonezero
            {position: {lat: 44.029568, lng: -88.557150},title: "Emergency Phone"},
            //[84] phoneone
            {position: {lat: 44.029075, lng: -88.558184},title: "Emergency Phone"},
            //[85] phonetwo
            {position: {lat: 44.028831, lng: -88.555125},title: "Emergency Phone"},
            //[86] phonethree
            {position: {lat: 44.028514, lng: -88.554386},title: "Emergency Phone"},
            //[87] phonefour
            {position: {lat: 44.029626, lng: -88.552936},title: "Emergency Phone"},
            //[88] phonefive
            {position: {lat: 44.028456, lng: -88.551907},title: "Emergency Phone"},
            //[89] phonesix
            {position: {lat: 44.027457	, lng: -88.553422},title: "Emergency Phone"},
            //[90] phoneseven
            {position: {lat: 44.028501, lng: -88.549911},title: "Emergency Phone"},
            //[91] phoneeight
            {position: {lat: 44.025255, lng: -88.555618},title: "Emergency Phone"},
            //[92] phonenine
            {position: {lat: 44.026028, lng: -88.552211},title: "Emergency Phone" },
            //[93] phoneten
            {position: {lat: 44.026556, lng: -88.550250},title: "Emergency Phone"},
            //[94] phoneeleven
            {position: {lat: 44.026670, lng: -88.547795},title: "Emergency Phone"},
            //[95] phonetwelve
            {position:{lat: 44.025771, lng: -88.547412},title: "Emergency Phone"},
            //[96] phonethirteen
            {position: {lat: 44.024777, lng: -88.546711},title: "Emergency Phone" },
            //[97] phonefourteen
            {position: {lat: 44.024921, lng: -88.548533},title: "Emergency Phone"},
            //[98] phonefifteen
            {position: {lat: 44.024921, lng: -88.548533},title: "Emergency Phone" },
            //[99] phonesixteen
            {position: {lat: 44.023941, lng: -88.554160},title: "Emergency Phone" },
            //[100] phoneseventeen
            { position: {lat: 44.023489, lng: -88.553277},title: "Emergency Phone"},
            //[101] phoneeighteen
            {position: {lat: 44.022102, lng: -88.552487},title: "Emergency Phone" },
            //[102] phonenineteen
            { position: {lat: 44.023313, lng: -88.551255},title: "Emergency Phone" },
            //[103] phonetwenty
            {position:{lat: 44.024791, lng: -88.551402}, title: "Emergency Phone" },
            //[104] phonetwentyone
            { position:{lat: 44.024395, lng:  -88.550325},title: "Emergency Phone"},
            //[105] phonetwentytwo
            {position:{lat: 44.023321, lng: -88.548516},title: "Emergency Phone" },
            //[106] phonetwentythree
            {position: {lat: 44.021428, lng: -88.550672}, title: "Emergency Phone" },
            //[107] phonetwentyfour
            {position: {lat: 44.021057, lng: -88.551801},title: "Emergency Phone"},
            //[108] phonetwentyfive
            {position: {lat: 44.021727, lng: -88.548169},title: "Emergency Phone" },
            //[109] phonetwentysix
            {position: {lat: 44.022676, lng:  -88.546843},title: "Emergency Phone" },
            //[110] phonetwentyseven
            {position: {lat: 44.018830, lng: -88.556802}, title: "Emergency Phone"}
            
        ]
        
        //the list that will contain all of the buildingMarker objects made with "new google.maps.Marker"
        //has to be initiliazed outside of a function to use the list items with event listeners and other methods in any other functions
        var allMarkers = [];
        //function for creating marker objects and adding them to the allMarkers list using the data from the buildingMarkerInfo array
         for(i = 0, len = allMarkersInfo.length; i < len; i++){
                    allMarkers[i] = new google.maps.Marker({
                    position: allMarkersInfo[i].position, title: allMarkersInfo[i].title
                });
        }
            
        
        // adding hover cards for building markers
        //ex of what it looks like to set the content for just one building
        // var albeeHover =  document.getElementById('albeeHover');
        //    var hoverContentSelectors = [
        //          document.getElementById('albeeHover'),
        //     ];
        var hoverCardsAll = [
                
         ]
        //basic single object creation for all hover infoWindows that popup when a marker is clicked
        // var albeeHoverCard = new google.maps.InfoWindow({
         //     content: hoverContentSelectors[0],
        // });
         //loop to take the info from hoverContentSelectors and make a new array of hover InfoWindows
         for(i = 0; i < 83; i++){
            hoverCardsAll[i] = new google.maps.InfoWindow({
                 content: buildingExtras[i].thumbnail,
             });
         }
        


        //sets marker on the map
        // allMarkers[0].setMap(map);
        //sets the png image for the marker (if no icon is set it defaults to the google red marker)
        // allMarkers[0].setIcon(yellowMarker);
        //adds click event listener to the object 
        // allMarkers[0].addListener('click', function(){
        //     allMarkers[0].setIcon(redMarker);
        // });
        
       
        //setting all markers /removing them from the map 
        //setting all buildings markers to the map and making them yellow
        function setBuilding(){
            for (i = 0; i < 45; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(yellowMarker);
            }
        }
        // remove all buildings from the map
        //(problematic; if other checkboxes are selected they need to reset and color their markers 
        //(if they share common markers with this set))
        function removeBuilding(){
            for (i = 0; i < 45; i++){
                allMarkers[i].setMap(null);
            }
            
            
        }
        // set parking lot markers
        function setParkingLots(){
            //parking ramp
            allMarkers[24].setMap(map);
            allMarkers[24].setIcon(pinkMarker);
            //45-82 of the markers array
            for (i = 45; i < 83; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(pinkMarker);
            }
        
        }
        // remove parking lot markers
        function removeParkingLots(){
            //parking ramp
            allMarkers[24].setMap(null);
            //45-82 of the markers array
            for (i = 45; i < 83; i++){
                allMarkers[i].setMap(null);
            }
            
        }
        // accessible entries (buildings)
        function setAccEnt(){
            //accEnt buildings: albee, ac, blackhawk, equity, clow, dempsey, donner, kolf, nursing, scott, stewart, webster
            //fletcher, fredric, gruenhagen, halsey, harrington, polk, radford, reeve, success, swart, taylor
            allMarkers[0].setMap(map);
            allMarkers[3].setMap(map);
            allMarkers[5].setMap(map);
            allMarkers[8].setMap(map);
            allMarkers[11].setMap(map);
            allMarkers[13].setMap(map);
            allMarkers[14].setMap(map);
            allMarkers[26].setMap(map);
            allMarkers[29].setMap(map);
            allMarkers[36].setMap(map);
            allMarkers[37].setMap(map);
            allMarkers[44].setMap(map);
            allMarkers[0].setIcon(redMarker);
            allMarkers[3].setIcon(redMarker);
            allMarkers[5].setIcon(redMarker);
            allMarkers[8].setIcon(redMarker);
            allMarkers[11].setIcon(redMarker);
            allMarkers[13].setIcon(redMarker);
            allMarkers[14].setIcon(redMarker);
            allMarkers[26].setIcon(redMarker);
            allMarkers[29].setIcon(redMarker);
            allMarkers[36].setIcon(redMarker);
            allMarkers[37].setIcon(redMarker);
            allMarkers[44].setIcon(redMarker);
            //18-22
            for(i = 18; i < 23; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(redMarker);
            }
            //32-34
            for(i = 32; i < 35; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(redMarker);
            }
            //39-41
            for (i = 39; i < 42; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(redMarker);
            }
             
        }
        function removeAccEnt(){
             //accEnt buildings: albee, ac, blackhawk, equity, clow, dempsey, donner, kolf, nursing, scott, stewart, webster
            //fletcher, fredric, gruenhagen, halsey, harrington, polk, radford, reeve, success, swart, taylor
            allMarkers[0].setMap(null);
            allMarkers[3].setMap(null);
            allMarkers[5].setMap(null);
            allMarkers[8].setMap(null);
            allMarkers[11].setMap(null);
            allMarkers[13].setMap(null);
            allMarkers[14].setMap(null);
            allMarkers[26].setMap(null);
            allMarkers[29].setMap(null);
            allMarkers[36].setMap(null);
            allMarkers[37].setMap(null);
            allMarkers[44].setMap(null);
            //18-22
            for(i = 18; i < 23; i++){
                allMarkers[i].setMap(null);
            }
            //32-34
            for(i = 32; i < 35; i++){
                allMarkers[i].setMap(null);
            }
            //39-41
            for (i = 39; i < 42; i++){
                allMarkers[i].setMap(null);
            }

        }
        // accessible parking set markers
        function setAccPar(){
            //accPar Lots: 11, 4, 4a, 16, 17, 29, 25, 33, 14, 7a, 13, 34, 28, 23, womens center parking, 
            //15, 32, parking ramp, 10, 12, 6a, 6, 18, titanOne, titanTwo
            allMarkers[24].setMap(map);
            allMarkers[45].setMap(map);
            allMarkers[77].setMap(map);
            allMarkers[24].setIcon(tealMarker);
            allMarkers[45].setIcon(tealMarker);
            allMarkers[77].setIcon(tealMarker);
            //50-55
            for(i = 50; i < 56; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(tealMarker);
            }
            //57-61
            for(i = 57; i < 62; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(tealMarker);
            }
            //67-74
            for(i = 67; i < 75; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(tealMarker);
            }
            //80-82
            for(i = 80; i < 83; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(tealMarker);
            }
            

        }
        // remove accessible parking markers
        function removeAccPar(){
            //accPar Lots: 11, 4, 4a, 16, 17, 29, 25, 33, 14, 7a, 13, 34, 28, 23, womens center parking, 
            //15, 32, parking ramp, 10, 12, 6a, 6, 18, titanOne, titanTwo
            allMarkers[24].setMap(null);
            allMarkers[45].setMap(null);
            allMarkers[77].setMap(null);
            //50-55
            for(i = 50; i < 56; i++){
                allMarkers[i].setMap(null);
            }
            //57-61
            for(i = 57; i < 62; i++){
                allMarkers[i].setMap(null);
            }
            //67-74
            for(i = 67; i < 75; i++){
                allMarkers[i].setMap(null);
            }
            //80-82
            for(i = 80; i < 83; i++){
                allMarkers[i].setMap(null);
            }
        }
        
        
        
        // function for setting emergency phone markers
        function setEmergencyPhones(){
            //83-110 
            for(i = 83; i < 111; i++){
                allMarkers[i].setMap(map);
                allMarkers[i].setIcon(blueMarker);
            }
            
        }
        // function for removing emergency phone markers
        function removeEmergencyPhones(){
            //83-110 
            for(i = 83; i < 111; i++){
                allMarkers[i].setMap(null);
            }
           
        }
        // setting sustainability markers
        function setSust(){
            //sust buildings: albee, alumni, blackhawk, biodigester, heating, horizon, reeve, sage, recreation
            //success, taylor, titanStadium
            allMarkers[0].setMap(map);
            allMarkers[2].setMap(map);
            allMarkers[5].setMap(map);
            allMarkers[6].setMap(map);
            allMarkers[23].setMap(map);
            allMarkers[25].setMap(map);
            allMarkers[34].setMap(map);
            allMarkers[35].setMap(map);
            allMarkers[38].setMap(map);
            allMarkers[39].setMap(map);
            allMarkers[41].setMap(map);
            allMarkers[42].setMap(map);
            allMarkers[0].setIcon(greenMarker);
            allMarkers[2].setIcon(greenMarker);
            allMarkers[5].setIcon(greenMarker);
            allMarkers[6].setIcon(greenMarker);
            allMarkers[23].setIcon(greenMarker);
            allMarkers[25].setIcon(greenMarker);
            allMarkers[34].setIcon(greenMarker);
            allMarkers[35].setIcon(greenMarker);
            allMarkers[38].setIcon(greenMarker);
            allMarkers[39].setIcon(greenMarker);
            allMarkers[41].setIcon(greenMarker);
            allMarkers[42].setIcon(greenMarker);

        }
        // remove sustainability markers
        function removeSust(){
            //sust buildings: albee, alumni, blackhawk, biodigester, heating, horizon, reeve, sage, recreation
            //success, taylor, titanStadium
            allMarkers[0].setMap(null);
            allMarkers[2].setMap(null);
            allMarkers[5].setMap(null);
            allMarkers[6].setMap(null);
            allMarkers[23].setMap(null);
            allMarkers[25].setMap(null);
            allMarkers[34].setMap(null);
            allMarkers[35].setMap(null);
            allMarkers[38].setMap(null);
            allMarkers[39].setMap(null);
            allMarkers[41].setMap(null);
            allMarkers[42].setMap(null);
        }
       
       
        // setting gender markers
        function setGender(){
            //gender buildings: ac, blackhawk, campus, dempsey, halsey, harrington, nursing, reeve, sage
            //recreation, success, swart, police
            allMarkers[0].setMap(map);
            allMarkers[5].setMap(map);
            allMarkers[9].setMap(map);
            allMarkers[13].setMap(map);
            allMarkers[21].setMap(map);
            allMarkers[22].setMap(map);
            allMarkers[26].setMap(map);
            allMarkers[29].setMap(map);
            allMarkers[34].setMap(map);
            allMarkers[35].setMap(map);
            allMarkers[38].setMap(map);
            allMarkers[39].setMap(map);
            allMarkers[40].setMap(map);
            allMarkers[43].setMap(map);
            allMarkers[0].setIcon(lightpurpleMarker);
            allMarkers[5].setIcon(lightpurpleMarker);
            allMarkers[9].setIcon(lightpurpleMarker);
            allMarkers[13].setIcon(lightpurpleMarker);
            allMarkers[21].setIcon(lightpurpleMarker);
            allMarkers[22].setIcon(lightpurpleMarker);
            allMarkers[26].setIcon(lightpurpleMarker);
            allMarkers[29].setIcon(lightpurpleMarker);
            allMarkers[34].setIcon(lightpurpleMarker);
            allMarkers[35].setIcon(lightpurpleMarker);
            allMarkers[38].setIcon(lightpurpleMarker);
            allMarkers[39].setIcon(lightpurpleMarker);
            allMarkers[40].setIcon(lightpurpleMarker);
            allMarkers[43].setIcon(lightpurpleMarker);

        }
        // removing gender markers
        function removeGender(){
            //gender buildings: ac, blackhawk, campus, dempsey, halsey, harrington, nursing, reeve, sage
            //recreation, success, swart, police
            allMarkers[0].setMap(null);
            allMarkers[5].setMap(null);
            allMarkers[9].setMap(null);
            allMarkers[13].setMap(null);
            allMarkers[21].setMap(null);
            allMarkers[22].setMap(null);
            allMarkers[26].setMap(null);
            allMarkers[29].setMap(null);
            allMarkers[34].setMap(null);
            allMarkers[35].setMap(null);
            allMarkers[38].setMap(null);
            allMarkers[39].setMap(null);
            allMarkers[40].setMap(null);
            allMarkers[43].setMap(null);
        }
        // functions for categories select/remove markers
        function setAccaF(){
            //accaF buildings: ac, albee, ceramics, clow, environmental, fredric, halsey, harrington, swart, nursing, polk, radford, sage
            allMarkers[0].setMap(map);
            allMarkers[3].setMap(map);
            allMarkers[10].setMap(map);
            allMarkers[11].setMap(map);
            allMarkers[16].setMap(map);
            allMarkers[19].setMap(map);
            allMarkers[21].setMap(map);
            allMarkers[22].setMap(map);
            allMarkers[26].setMap(map);
            allMarkers[29].setMap(map);
            allMarkers[32].setMap(map);
            allMarkers[33].setMap(map);
            allMarkers[35].setMap(map);
            allMarkers[40].setMap(map);
            allMarkers[0].setIcon(maroonMarker);
            allMarkers[3].setIcon(maroonMarker);
            allMarkers[10].setIcon(maroonMarker);
            allMarkers[11].setIcon(maroonMarker);
            allMarkers[16].setIcon(maroonMarker);
            allMarkers[19].setIcon(maroonMarker);
            allMarkers[21].setIcon(maroonMarker);
            allMarkers[26].setIcon(maroonMarker);
            allMarkers[29].setIcon(maroonMarker);
            allMarkers[32].setIcon(maroonMarker);
            allMarkers[33].setIcon(maroonMarker);
            allMarkers[35].setIcon(maroonMarker);
            allMarkers[40].setIcon(maroonMarker);

        }
        function removeAccaF(){
             //accaF buildings: ac, albee, ceramics, clow, environmental, fredric, halsey, harrington, swart, nursing, polk, radford, sage
             allMarkers[0].setMap(null);
             allMarkers[3].setMap(null);
             allMarkers[10].setMap(null);
             allMarkers[11].setMap(null);
             allMarkers[16].setMap(null);
             allMarkers[19].setMap(null);
             allMarkers[21].setMap(null);
             allMarkers[22].setMap(null);
             allMarkers[26].setMap(null);
             allMarkers[29].setMap(null);
             allMarkers[32].setMap(null);
             allMarkers[33].setMap(null);
             allMarkers[35].setMap(null);
             allMarkers[40].setMap(null);
        }
        function setAth(){
            //ath buildings: albee, athletic, baseball, east, kolf, titanstadium
            allMarkers[0].setMap(map);
            allMarkers[1].setMap(map);
            allMarkers[4].setMap(map);
            allMarkers[15].setMap(map);
            allMarkers[26].setMap(map);
            allMarkers[42].setMap(map);
            allMarkers[0].setIcon(orangeMarker);
            allMarkers[1].setIcon(orangeMarker);
            allMarkers[4].setIcon(orangeMarker);
            allMarkers[15].setIcon(orangeMarker);
            allMarkers[26].setIcon(orangeMarker);
            allMarkers[42].setIcon(orangeMarker);
        }
        function removeAth(){
            //ath buildings: albee, athletic, baseball, east, kolf, titanstadium
            allMarkers[0].setMap(null);
            allMarkers[1].setMap(null);
            allMarkers[4].setMap(null);
            allMarkers[15].setMap(null);
            allMarkers[26].setMap(null);
            allMarkers[42].setMap(null);
        }
        // set/remove AccaS
        function setAccaS(){
            //accaS buildings: equity, nursing, success, swart
            allMarkers[8].setMap(map);
            allMarkers[29].setMap(map);
            allMarkers[39].setMap(map);
            allMarkers[40].setMap(map);
            allMarkers[8].setIcon(brownMarker);
            allMarkers[29].setIcon(brownMarker);
            allMarkers[39].setIcon(brownMarker);
            allMarkers[40].setIcon(brownMarker);

        }
        function removeAccaS(){
            //accaS buildings: equity, nursing, success, swart
            allMarkers[8].setMap(null);
            allMarkers[29].setMap(null);
            allMarkers[39].setMap(null);
            allMarkers[40].setMap(null);

        }
        function setCampS(){
            //campS buildings: equity, campus, dempsey, multicultural, pollock, recreation, radford, reeve, success
            allMarkers[8].setMap(map);
            allMarkers[9].setMap(map);
            allMarkers[13].setMap(map);
            allMarkers[28].setMap(map);
            allMarkers[31].setMap(map);
            allMarkers[38].setMap(map);
            allMarkers[33].setMap(map);
            allMarkers[34].setMap(map);
            allMarkers[39].setMap(map);
            allMarkers[8].setIcon(darkgreenMarker);
            allMarkers[9].setIcon(darkgreenMarker);
            allMarkers[13].setIcon(darkgreenMarker);
            allMarkers[28].setIcon(darkgreenMarker);
            allMarkers[31].setIcon(darkgreenMarker);
            allMarkers[38].setIcon(darkgreenMarker);
            allMarkers[33].setIcon(darkgreenMarker);
            allMarkers[34].setIcon(darkgreenMarker);
            allMarkers[39].setIcon(darkgreenMarker);

        }
        function removeCampS(){
             //campS buildings: equity, campus, dempsey, multicultural, pollock, recreation, radford, reeve, success
             allMarkers[8].setMap(null);
             allMarkers[9].setMap(null);
             allMarkers[13].setMap(null);
             allMarkers[28].setMap(null);
             allMarkers[31].setMap(null);
             allMarkers[38].setMap(null);
             allMarkers[33].setMap(null);
             allMarkers[34].setMap(null);
             allMarkers[39].setMap(null);
        }
        // ResH set/remove
        function setResH(){
            //resH buildings: donner, evans, fletcher, gruenhagen, horizon, stewart, scott, taylor, webster
            allMarkers[14].setMap(map);
            allMarkers[17].setMap(map);
            allMarkers[18].setMap(map);
            allMarkers[20].setMap(map);
            allMarkers[25].setMap(map);
            allMarkers[37].setMap(map);
            allMarkers[36].setMap(map);
            allMarkers[41].setMap(map);
            allMarkers[44].setMap(map);
            allMarkers[14].setIcon(lightblueMarker);
            allMarkers[17].setIcon(lightblueMarker);
            allMarkers[18].setIcon(lightblueMarker);
            allMarkers[20].setIcon(lightblueMarker);
            allMarkers[25].setIcon(lightblueMarker);
            allMarkers[37].setIcon(lightblueMarker);
            allMarkers[36].setIcon(lightblueMarker);
            allMarkers[41].setIcon(lightblueMarker);
            allMarkers[44].setIcon(lightblueMarker);

        }
        function removeResH(){
            //resH buildings: donner, evans, fletcher, gruenhagen, horizon, stewart, scott, taylor, webster
            allMarkers[14].setMap(null);
            allMarkers[17].setMap(null);
            allMarkers[18].setMap(null);
            allMarkers[20].setMap(null);
            allMarkers[25].setMap(null);
            allMarkers[37].setMap(null);
            allMarkers[36].setMap(null);
            allMarkers[41].setMap(null);
            allMarkers[44].setMap(null);
        }
        // set/remove dining
        function setDining(){
            //dining buildings: blackhawk, clow, halsey, reeve, sage, scott
            allMarkers[5].setMap(map);
            allMarkers[11].setMap(map);
            allMarkers[21].setMap(map);
            allMarkers[34].setMap(map);
            allMarkers[35].setMap(map);
            allMarkers[36].setMap(map);
            allMarkers[5].setIcon(navyMarker);
            allMarkers[11].setIcon(navyMarker);
            allMarkers[21].setIcon(navyMarker);
            allMarkers[34].setIcon(navyMarker);
            allMarkers[35].setIcon(navyMarker);
            allMarkers[36].setIcon(navyMarker);

        }
        function removeDining(){
            //dining buildings: blackhawk, clow, halsey, reeve, sage, scott
            allMarkers[5].setMap(null);
            allMarkers[11].setMap(null);
            allMarkers[21].setMap(null);
            allMarkers[34].setMap(null);
            allMarkers[35].setMap(null);
            allMarkers[36].setMap(null);
        }
        
        

        // StuR set/remove
        function setStuR(){
            //buildings stuR: reeve, recreation
            allMarkers[34].setMap(map);
            allMarkers[38].setMap(map);
            allMarkers[34].setIcon(darkpurpleMarker);
            allMarkers[38].setIcon(darkpurpleMarker);
        }
        function removeStuR(){
            //buildings stuR: reeve, recreation
            allMarkers[34].setMap(null);
            allMarkers[38].setMap(null);
        }
        

        // close all hovers attached to buildings
        function closeAllBuildings(){
          albeeHoverCard.close(map, allMarkers[0]);
          baseballHoverCard.close(map, allMarkers[1]);
          alumniHoverCard.close(map, allMarkers[2]);
          acHoverCard.close(map, allMarkers[3]);
          athleticHoverCard.close(map, allMarkers[4]);
          blackhawkHoverCard.close(map, allMarkers[5]);
          biodigesterHoverCard.close(map, allMarkers[6]);
          buckstaffHoverCard.close(map,allMarkers[7]);
          equityHoverCard.close(map, allMarkers[8]);
          campusHoverCard.close(map, allMarkers[9]);
          ceramicsHoverCard.close(map, allMarkers[10]);
          clowHoverCard.close(map, allMarkers[11]);
          gardensHoverCard.close(map, allMarkers[12]);
          dempseyHoverCard.close(map, allMarkers[13]);
          donnerHoverCard.close(map, allMarkers[14]);
          eastHoverCard.close(map,allMarkers[15]);
          environmentalHoverCard.close(map, allMarkers[16]);
          evansHoverCard.close(map, allMarkers[17]);
          fletcherHoverCard.close(map, allMarkers[18]);
          fredricHoverCard.close(map,allMarkers[19]);
          gruenhagenHoverCard.close(map,allMarkers[20]);
          halseyHoverCard.close(map, allMarkers[21]);
          harringtonHoverCard.close(map, allMarkers[22]);
          heatingHoverCard.close(map,allMarkers[23]);
          parkingRampHoverCard.close(map, allMarkers[24]);
          horizonHoverCard.close(map, allMarkers[25]);
          kolfHoverCard.close(map, allMarkers[26]);
          lincolnHoverCard.close(map, allMarkers[27]);
          multiculturalHoverCard.close(map, allMarkers[28]);
          nursingHoverCard.close(map, allMarkers[29]);
          oviattHoverCard.close(map, allMarkers[30]);
          pollockHoverCard.close(map, allMarkers[31]);
          polkHoverCard.close(map, allMarkers[32]);
          radfordHoverCard.close(map, allMarkers[33]);
          reeveHoverCard.close(map, allMarkers[34]);
          sageHoverCard.close(map, allMarkers[35]);
          scottHoverCard.close(map, allMarkers[36]);
          stewartHoverCard.close(map, allMarkers[37]);
          recreationHoverCard.close(map, allMarkers[38]);
          successHoverCard.close(map, allMarkers[39]);
          swartHoverCard.close(map, allMarkers[40]);
          taylorHoverCard.close(map, allMarkers[41]);
          titanHoverCard.close(map, allMarkers[42]);
          policeHoverCard.close(map, allMarkers[43]);
          websterHoverCard.close(map, allMarkers[44]);
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
          albeeHoverCard.close(map, allMarkers[0]);
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
          albeeHoverCard.close(map, allMarkers[0]);
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
          albeeHoverCard.close(map, allMarkers[0]);
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
          albeeHoverCard.close(map, allMarkers[0]);
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
            albeeHoverCard.close(map, allMarkers[0]);
            baseballHoverCard.close(map, allMarkers[1]);
            alumniHoverCard.close(map, allMarkers[2]);
            acHoverCard.close(map,allMarkers[3]);
            athleticHoverCard.close(map, allMarkers[4]);
            blackhawkHoverCard.close(map, allMarkers[5]);
            biodigesterHoverCard.close(map, allMarkers[6]);
            buckstaffHoverCard.close(map,allMarkers[7]);
            equityHoverCard.close(map, allMarkers[8]);
            campusHoverCard.close(map, allMarkers[9]);
            ceramicsHoverCard.close(map, allMarkers[10]);
            clowHoverCard.close(map, allMarkers[11]);
            gardensHoverCard.close(map, allMarkers[12]);
            dempseyHoverCard.close(map, allMarkers[13]);
            donnerHoverCard.close(map, allMarkers[14]);
            eastHoverCard.close(map,allMarkers[15]);
            environmentalHoverCard.close(map, allMarkers[16]);
            evansHoverCard.close(map, allMarkers[17]);
            fletcherHoverCard.close(map, allMarkers[18]);
            fredricHoverCard.close(map,allMarkers[19]);
            gruenhagenHoverCard.close(map,allMarkers[20]);
            halseyHoverCard.close(map, allMarkers[21]);
            harringtonHoverCard.close(map, allMarkers[22]);
            heatingHoverCard.close(map,allMarkers[23]);
            parkingRampHoverCard.close(map, allMarkers[24]);
            horizonHoverCard.close(map, allMarkers[25]);
            kolfHoverCard.close(map, allMarkers[26]);
            lincolnHoverCard.close(map, allMarkers[27]);
            multiculturalHoverCard.close(map, allMarkers[28]);
            nursingHoverCard.close(map, allMarkers[29]);
            oviattHoverCard.close(map, allMarkers[30]);
            pollockHoverCard.close(map, allMarkers[31]);
            polkHoverCard.close(map, allMarkers[32]);
            radfordHoverCard.close(map, allMarkers[33]);
            reeveHoverCard.close(map, allMarkers[34]);
            sageHoverCard.close(map, allMarkers[35]);
            scottHoverCard.close(map, allMarkers[36]);
            stewartHoverCard.close(map, allMarkers[37]);
            recreationHoverCard.close(map, allMarkers[38]);
            successHoverCard.close(map, allMarkers[39]);
            swartHoverCard.close(map, allMarkers[40]);
            taylorHoverCard.close(map, allMarkers[41]);
            titanHoverCard.close(map, allMarkers[42]);
            policeHoverCard.close(map, allMarkers[43]);
            websterHoverCard.close(map, allMarkers[44]);
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
        //one function for all open/close
        //for the hover thingaroos not the popups
        //set images to the thumbnails of the places
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
                        albeeHoverCard.open(map, allMarkers[0]);
                        $("#albeeHover > img").attr("src", allMarkersInfo[0].thumbnail);
                    }
                    else if (name === "baseball"){
                        baseballHoverCard.open(map, allMarkersInfo[].thumbnail);
                        //baseball has no image atm
                    }
                    else if (name === "alumni"){
                        alumniHoverCard.open(map, allMarkers[2]);
                        $("#alumniHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "ac"){
                        acHoverCard.open(map, allMarkers[3]);
                        $("#acHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "athletic"){
                        athleticHoverCard.open(map, allMarkers[4]);
                        $("#athleticHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "blackhawk"){
                        blackhawkHoverCard.open(map, allMarkers[5]);
                        $("#blackhawkHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "biodigester"){
                        biodigesterHoverCard.open(map, allMarkers[6]);
                        $("#biodigesterHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "buckstaff"){
                        buckstaffHoverCard.open(map, allMarkers[7]);
                        $("#buckstaffHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "equity"){
                        equityHoverCard.open(map, allMarkers[8]);
                        $("#equityHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "campus"){
                        campusHoverCard.open(map, allMarkers[9]);
                        $("#campusHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "ceramics"){
                        ceramicsHoverCard.open(map, allMarkers[10]);
                        $("#ceramicsHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "clow"){
                        clowHoverCard.open(map, allMarkers[11]);
                        $("#clowHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "gardens"){
                        gardensHoverCard.open(map, allMarkers[12]);
                        $("#gardensHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "dempsey"){
                        dempseyHoverCard.open(map, allMarkers[13]);
                        $("#dempseyHover > img").attr("src", allMarkersInfo[].thumbnail);
                    } else if (name === "donner"){
                        donnerHoverCard.open(map, allMarkers[14]);
                        $("#donnerHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "east"){
                        eastHoverCard.open(map, allMarkers[15]);
                        $("#eastHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "environmental"){
                        environmentalHoverCard.open(map, allMarkers[16]);
                        $("#environmentalHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "evans"){
                        evansHoverCard.open(map, allMarkers[17]);
                        $("#evansHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "fletcher"){
                        fletcherHoverCard.open(map, allMarkers[18]);
                        $("#fletcherHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "fredric"){
                        fredricHoverCard.open(map, allMarkers[19]);
                        $("#fredricHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "gruenhagen"){
                        gruenhagenHoverCard.open(map, allMarkers[20]);
                        $("#gruenhagenHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "halsey"){
                        halseyHoverCard.open(map, allMarkers[21]);
                        $("#halseyHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "harrington"){
                        harringtonHoverCard.open(map, allMarkers[22]);
                        $("#harringtonHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "heating"){
                        heatingHoverCard.open(map, allMarkers[23]);
                        $("#heatingHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "parkingRamp"){
                        parkingRampHoverCard.open(map, allMarkers[24]);
                        $("#parkingRampHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "horizon"){
                        horizonHoverCard.open(map, allMarkers[25]);
                        $("#horizonHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "kolf"){
                        kolfHoverCard.open(map, allMarkers[26]);
                        $("#kolfHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "lincoln"){
                        lincolnHoverCard.open(map, allMarkers[27]);
                        $("#lincolnHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "multicultural"){
                        multiculturalHoverCard.open(map, allMarkers[28]);
                        $("#multiculturalHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "nursing"){
                        nursingHoverCard.open(map, allMarkers[29]);
                        $("#nursingHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "oviatt"){
                        oviattHoverCard.open(map, allMarkers[30]);
                        $("#oviattHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "pollock"){
                        pollockHoverCard.open(map, allMarkers[31]);
                        $("#pollockHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "polk"){
                        polkHoverCard.open(map, allMarkers[32]);
                        $("#polkHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "radford"){
                        radfordHoverCard.open(map, allMarkers[33]);
                        $("#radfordHover > img").attr("src",  allMarkersInfo[].thumbnail);
                    }
                    else if (name === "reeve"){
                        reeveHoverCard.open(map, allMarkers[34]);
                        $("#reeveHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "sage"){
                        sageHoverCard.open(map, allMarkers[35]);
                        $("#sageHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "scott"){
                        scottHoverCard.open(map, allMarkers[36]);
                        $("#scottHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "stewart"){
                        stewartHoverCard.open(map, allMarkers[37]);
                        $("#stewartHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "recreation"){
                        recreationHoverCard.open(map, allMarkers[38]);
                        $("#recreationHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "success"){
                        successHoverCard.open(map, allMarkers[39]);
                        $("#successHover > img").attr("src",allMarkersInfo[].thumbnail);
                    }
                    else if (name === "swart"){
                        swartHoverCard.open(map, allMarkers[40]);
                        $("#swartHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "taylor"){
                        taylorHoverCard.open(map, allMarkers[41]);
                        $("#taylorHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "titan"){
                        titanHoverCard.open(map, allMarkers[42]);
                        $("#titanHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "police"){
                        policeHoverCard.open(map, allMarkers[43]);
                        $("#policeHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                    else if (name === "webster"){
                        websterHoverCard.open(map, allMarkers[44]);
                        $("#websterHover > img").attr("src", allMarkersInfo[].thumbnail);
                    }
                 $("#" + name + "Hover").addClass("hoverOpen");
            //if marker is not clicked/clicked to close change src of image to empty
            } else{
                $("#" + name + "Hover > img").attr("src", "");
                $("#" + name + "Hover").removeClass("hoverOpen");
                closeAllHover();
            }
        }
         // parking marker hovers + marker functionality
         function parkingOpenClose(name){
            if(!$("#" + name + "Hover").hasClass("hoverOpen")){
                closeAllHover();
                if(name === "eleven"){
                    elevenHoverCard.open(map, allMarkers[45]);
                }
                else if (name === "thirtyfive"){
                    thirtyfiveHoverCard.open(map, allMarkers[46]);
                }
                else if (name === "twentyseven"){
                    twentysevenHoverCard.open(map, allMarkers[47]);
                }
                else if (name === "twentyone"){
                    twentyoneHoverCard.open(map, allMarkers[48]);
                }
                else if(name === "twentysix"){
                    twentysixHoverCard.open(map, allMarkers[49]);
                }
                else if (name === "four"){
                    fourHoverCard.open(map, allMarkers[50]);
                }
                else if (name === "foura"){
                    fouraHoverCard.open(map, allMarkers[51]);
                }
                else if (name === "sixteen"){
                    sixteenHoverCard.open(map, allMarkers[52]);
                }
                else if (name === "seventeen"){
                    seventeenHoverCard.open(map, allMarkers[53]);
                }
                else if (name === "twentynine"){
                    twentynineHoverCard.open(map, allMarkers[54]);
                }
                else if (name === "twentyfive"){
                    twentyfiveHoverCard.open(map, allMarkers[55]);
                }
                else if (name === "eight"){
                    eightHoverCard.open(map, allMarkers[56]);
                }
                else if (name === "thirtythree"){
                    thirtythreeHoverCard.open(map, allMarkers[57]);
                }
                else if (name === "thirtyfour"){
                    thirtyfourHoverCard.open(map, allMarkers[58]);
                }
                else if (name === "twentyeight"){
                    twentyeightHoverCard.open(map, allMarkers[59]);
                }
                else if (name === "twentythree"){
                    twentythreeHoverCard.open(map, allMarkers[60]);
                }
                else if (name === "fourteena"){
                    fourteenaHoverCard.open(map, allMarkers[61]);
                }
                else if (name === "fourteenb"){
                    fourteenbHoverCard.open(map, allMarkers[62]);
                }
                else if (name === "fourteenc"){
                    fourteencHoverCard.open(map, allMarkers[63]);
                }
                else if (name === "seven"){
                    sevenHoverCard.open(map, allMarkers[64]);
                }
                else if (name === "fivea"){
                    fiveaHoverCard.open(map, allMarkers[65]);
                }
                else if (name === "five"){
                    fiveHoverCard.open(map, allMarkers[66]);
                }
                else if (name === "sevena"){
                    sevenaHoverCard.open(map, allMarkers[67]);
                }
                else if (name === "fifteen"){
                    fifteenHoverCard.open(map, allMarkers[68]);
                }
                else if (name === "thirtytwo"){
                    thirtytwoHoverCard.open(map, allMarkers[69]);
                }
                else if (name === "thirteen"){
                    thirteenHoverCard.open(map, allMarkers[70]);
                }
                else if (name === "twelve"){
                    twelveHoverCard.open(map, allMarkers[71]);
                }
                else if (name === "sixa"){
                    sixaHoverCard.open(map, allMarkers[72]);
                }
                else if (name === "six"){
                    sixHoverCard.open(map, allMarkers[73]);
                }
                else if (name === "ten"){
                    tenHoverCard.open(map, allMarkers[74]);
                }
                else if (name === "ninea"){
                    nineaHoverCard.open(map, allMarkers[75]);
                }
                else if (name === "nine"){
                    nineHoverCard.open(map, allMarkers[76]);
                }
                else if (name === "eighteen"){
                    eighteenHoverCard.open(map, allMarkers[77]);
                }
                else if (name === "thirty"){
                    thirtyHoverCard.open(map, allMarkers[78]);
                }
                else if (name === "thirtynine"){
                    thirtynineHoverCard.open(map, allMarkers[79]);
                }
                else if (name === "womensCenter"){
                    womensCenterHoverCard.open(map, allMarkers[80]);
                }
                else if (name === "titanOne"){
                    titanOneHoverCard.open(map, allMarkers[81]);
                }
                else if (name === "titanTwo"){
                    titanTwoHoverCard.open(map, allMarkers[82]);
                }
            $("#" + name + "Hover").addClass("hoverOpen");
            } else {
                $("#" + name + "Hover").removeClass("hoverOpen");
                closeAllHover();
            }
        }
        

       
        


        //click event listeners for all markers
        //when marker is clicked it will open hover InfoWindow
        allMarkers[0].addListener('click', function(){
            markerOpenClose("albee");
        });
        allMarkers[1].addListener('click', function(){
            markerOpenClose("baseball");
        });
        allMarkers[2].addListener('click', function(){
            markerOpenClose("alumni");
        });
        allMarkers[3].addListener('click', function(){
            markerOpenClose("ac");
        });
        allMarkers[4].addListener('click', function(){
            markerOpenClose("athletic");
        });
        allMarkers[5].addListener('click', function(){
            markerOpenClose("blackhawk");
        });
        allMarkers[6].addListener('click', function(){
            markerOpenClose("biodigester");
        });
        allMarkers[7].addListener('click', function(){
            markerOpenClose("buckstaff");
        });
        allMarkers[8].addListener('click', function(){
            markerOpenClose("equity");
        });
        allMarkers[9].addListener('click', function(){
            markerOpenClose("campus");
        });
        allMarkers[10].addListener('click', function(){
            markerOpenClose("ceramics");
        });
        allMarkers[11].addListener('click', function(){
            markerOpenClose("clow");
        });
        allMarkers[12].addListener('click', function(){
            markerOpenClose("gardens");
        });
        allMarkers[13].addListener('click', function(){
            markerOpenClose("dempsey");
        });
        allMarkers[14].addListener('click', function(){
            markerOpenClose("donner");
        });
        allMarkers[15].addListener('click', function(){
            markerOpenClose("east");
        });
        allMarkers[16].addListener('click', function(){
            markerOpenClose("environmental");
        });
        allMarkers[17].addListener('click', function(){
            markerOpenClose("evans");
        });
        allMarkers[18].addListener('click', function(){
            markerOpenClose("fletcher");
        });
        allMarkers[19].addListener('click', function(){
            markerOpenClose("fredric");
        });
        allMarkers[20].addListener('click', function(){
            markerOpenClose("gruenhagen");
        });
        allMarkers[21].addListener('click', function(){
            markerOpenClose("halsey");
        });
        allMarkers[22].addListener('click', function(){
            markerOpenClose("harrington");
         });
         allMarkers[23].addListener('click', function(){
            markerOpenClose("heating");
        });
        allMarkers[24].addListener('click', function(){
            markerOpenClose("parkingRamp");
        });
        allMarkers[25].addListener('click', function(){
            markerOpenClose("horizon");
        });
        allMarkers[26].addListener('click', function(){
            markerOpenClose("kolf");
        });
        allMarkers[27].addListener('click', function(){
            markerOpenClose("lincoln");
        });
        allMarkers[28].addListener('click', function(){
            markerOpenClose( "multicultural");
        });
        allMarkers[29].addListener('click', function(){
            markerOpenClose("nursing");
        });
        allMarkers[30].addListener('click', function(){
            markerOpenClose("oviatt");
        });
        allMarkers[31].addListener('click', function(){
            markerOpenClose("pollock");
         });
        allMarkers[32].addListener('click', function(){
            markerOpenClose("polk");
         });
         allMarkers[33].addListener('click', function(){
            markerOpenClose("radford");
        });
        allMarkers[34].addListener('click', function(){
            markerOpenClose("reeve");
        });
        allMarkers[35].addListener('click', function(){
            markerOpenClose("sage");
        });
        allMarkers[36].addListener('click', function(){
            markerOpenClose("scott");
        });
        allMarkers[37].addListener('click', function(){ 
            markerOpenClose("stewart");
        });
        allMarkers[38].addListener('click', function(){
            markerOpenClose("recreation");
        });
        allMarkers[39].addListener('click', function(){
            markerOpenClose("success");
        });
        allMarkers[40].addListener('click', function(){ 
            markerOpenClose("swart");
        });
        allMarkers[41].addListener('click', function(){
            markerOpenClose("taylor");
        });
        allMarkers[42].addListener('click', function(){
            markerOpenClose("titan");
        });
        allMarkers[43].addListener('click', function(){
            markerOpenClose("police");
        });
        allMarkers[44].addListener('click', function(){
            markerOpenClose("webster");
        });
        allMarkers[45].addListener('click', function(){
            parkingOpenClose("eleven");
        });
        
        allMarkers[46].addListener('click', function(){
            parkingOpenClose("thirtyfive");
        });
        allMarkers[47].addListener('click', function(){
            parkingOpenClose("twentyseven");
        });
        allMarkers[48].addListener('click', function(){
            parkingOpenClose("twentyone");
        });
        allMarkers[49].addListener('click', function(){
            parkingOpenClose("twentysix");
        });
        allMarkers[50].addListener('click', function(){
            parkingOpenClose("four");
        });
        allMarkers[51].addListener('click', function(){
            parkingOpenClose("foura");
        });
        allMarkers[52].addListener('click', function(){
            parkingOpenClose("sixteen");
        });
        allMarkers[53].addListener('click', function(){
            parkingOpenClose("seventeen");
        });
        allMarkers[54].addListener('click', function(){
            parkingOpenClose("twentynine");
        });
        allMarkers[55].addListener('click', function(){
            parkingOpenClose("twentyfive");
        });
        allMarkers[56].addListener('click', function(){
            parkingOpenClose("eight");
        });
        allMarkers[57].addListener('click', function(){
            parkingOpenClose("thirtythree");
        });
        allMarkers[58].addListener('click', function(){
            parkingOpenClose("thirtyfour");
        });
        allMarkers[59].addListener('click', function(){
            parkingOpenClose("twentyeight");
        });
        allMarkers[60].addListener('click', function(){
            parkingOpenClose("twentythree");
        });
        allMarkers[61].addListener('click', function(){
            parkingOpenClose("fourteena");
        });
        allMarkers[62].addListener('click', function(){
            parkingOpenClose("fourteenb");
        });
        allMarkers[63].addListener('click', function(){
            parkingOpenClose("fourteenc");
        });
        allMarkers[64].addListener('click', function(){
            parkingOpenClose("seven");
        });
        allMarkers[65].addListener('click', function(){
            parkingOpenClose("fivea");
        });
        allMarkers[66].addListener('click', function(){
            parkingOpenClose("five");
        });
        allMarkers[67].addListener('click', function(){
            parkingOpenClose("sevena");
        });
        allMarkers[68].addListener('click', function(){
            parkingOpenClose("fifteen");
        });
        allMarkers[69].addListener('click', function(){
            parkingOpenClose("thirtytwo");
        });
        allMarkers[70].addListener('click', function(){
            parkingOpenClose("thirteen");
        });
        allMarkers[71].addListener('click', function(){
            parkingOpenClose("twelve");
        });
        allMarkers[72].addListener('click', function(){
            parkingOpenClose("sixa");
        });
        allMarkers[73].addListener('click', function(){
            parkingOpenClose("six");
        });
        allMarkers[74].addListener('click', function(){
            parkingOpenClose("ten");
        });
        allMarkers[75].addListener('click', function(){
            parkingOpenClose("ninea");
        });
        allMarkers[76].addListener('click', function(){
            parkingOpenClose("nine");
        });
        allMarkers[77].addListener('click', function(){
            parkingOpenClose("eighteen");
        });
        allMarkers[78].addListener('click', function(){
            parkingOpenClose("thirty");
        });
        allMarkers[79].addListener('click', function(){
            parkingOpenClose("thirtynine");
         });

         allMarkers[81].addListener('click', function(){
            parkingOpenClose("titanOne");
        });
        allMarkers[82].addListener('click', function(){
            parkingOpenClose("titanTwo");
        });

        

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        //set src values
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
        //close all of the popups themselves and remove src values
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#evansLink").click(function(){
            popupOpen("evans");
        });
        // when x on popup is clicked, close popup
        $("#evansPopupClose").click(function(){
            popupClose("evans");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fletcherLink").click(function(){
            popupOpen("fletcher");
        });
        // when x on popup is clicked, close popup
        $("#fletcherPopupClose").click(function(){
            popupClose("fletcher");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fredricLink").click(function(){
            popupOpen("fredric");
        });
        // when x on popup is clicked, close popup
        $("#fredricPopupClose").click(function(){
            popupClose("fredric");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#gruenhagenLink").click(function(){
            popupOpen("gruenhagen");
        });
        // when x on popup is clicked, close popup
        $("#gruenhagenPopupClose").click(function(){
            popupClose("gruenhagen");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#halseyLink").click(function(){
            popupOpen("halsey");
        });
        // when x on popup is clicked, close popup
        $("#halseyPopupClose").click(function(){
            popupClose("halsey");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#harringtonLink").click(function(){
            popupOpen("harrington");
        });
        // when x on popup is clicked, close popup
        $("#harringtonPopupClose").click(function(){
            popupClose("harrington");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#heatingLink").click(function(){
            popupOpen("heating");
        });
        // when x on popup is clicked, close popup
        $("#heatingPopupClose").click(function(){
            popupClose("heating");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#parkingRampLink").click(function(){
            popupOpen("parkingRamp");
        });
        // when x on popup is clicked, close popup
        $("#parkingRampPopupClose").click(function(){
            popupClose("parkingRamp");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#horizonLink").click(function(){
            popupOpen("horizon");
        });
        // when x on popup is clicked, close popup
        $("#horizonPopupClose").click(function(){
            popupClose("horizon");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#kolfLink").click(function(){
            popupOpen("kolf");
        });
        // when x on popup is clicked, close popup
        $("#kolfPopupClose").click(function(){
            popupClose("kolf");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#lincolnLink").click(function(){
            popupOpen("lincoln");
        });
        // when x on popup is clicked, close popup
        $("#lincolnPopupClose").click(function(){
            popupClose("lincoln");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#multiculturalLink").click(function(){
            popupOpen("multicultural");
        });
        // when x on popup is clicked, close popup
        $("#multiculturalPopupClose").click(function(){
            popupClose("multicultural");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#nursingLink").click(function(){
            popupOpen("nursing");
        });
        // when x on popup is clicked, close popup
        $("#nursingPopupClose").click(function(){
            popupClose("nursing");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#oviattLink").click(function(){
            popupOpen("oviatt");
        });
        // when x on popup is clicked, close popup
        $("#oviattPopupClose").click(function(){
            popupClose("oviatt");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#pollockLink").click(function(){
            popupOpen("pollock");
        });
        // when x on popup is clicked, close popup
        $("#pollockPopupClose").click(function(){
            popupClose("pollock");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#polkLink").click(function(){
            popupOpen("polk");
        });
        // when x on popup is clicked, close popup
        $("#polkPopupClose").click(function(){
            popupClose("polk");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#radfordLink").click(function(){
            popupOpen("radford");
        });
        // when x on popup is clicked, close popup
        $("#radfordPopupClose").click(function(){
            popupClose("radford");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#reeveLink").click(function(){
            popupOpen("reeve");
        });
        // when x on popup is clicked, close popup
        $("#reevePopupClose").click(function(){
            popupClose("reeve");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#sageLink").click(function(){
            popupOpen("sage");
        });
        // when x on popup is clicked, close popup
        $("#sagePopupClose").click(function(){
            popupClose("sage");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#scottLink").click(function(){
            popupOpen("scott");
        });
        // when x on popup is clicked, close popup
        $("#scottPopupClose").click(function(){
            popupClose("scott");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#stewartLink").click(function(){ 
            popupOpen("stewart");
        });
        // when x on popup is clicked, close popup
        $("#stewartPopupClose").click(function(){ 
            popupClose("stewart");
        });

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#recreationLink").click(function(){
            popupOpen("recreation");
        });
        // when x on popup is clicked, close popup
        $("#recreationPopupClose").click(function(){
            popupClose("recreation");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#successLink").click(function(){
            popupOpen("success");
        });
        // when x on popup is clicked, close popup
        $("#successPopupClose").click(function(){
            popupClose("success");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#swartLink").click(function(){ 
           popupOpen("swart");
        });
        // when x on popup is clicked, close popup
        $("#swartPopupClose").click(function(){ 
            popupClose("swart");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#taylorLink").click(function(){
            popupOpen("taylor");
        });
        // when x on popup is clicked, close popup
        $("#taylorPopupClose").click(function(){
            popupClose("taylor");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#titanLink").click(function(){
            popupOpen("titan");
        });
        // when x on popup is clicked, close popup
        $("#titanPopupClose").click(function(){
            popupClose("titan");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#policeLink").click(function(){
            popupOpen("police");
        });
        // when x on popup is clicked, close popup
        $("#policePopupClose").click(function(){
            popupClose("police");
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

        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#websterLink").click(function(){
            popupOpen("webster");
        });
        // when x on popup is clicked, close popup
        $("#websterPopupClose").click(function(){
            popupClose("webster");
        });


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
       checkIfChecked("buildings");
   });
   $("#parking").change(function(){
       checkIfChecked("parking");
   });
   $("#accEnt").change(function(){
        checkIfChecked("accEnt");
   });
   $("#accPar").change(function(){
        checkIfChecked( "accPar");
   });
   $("#emergency").change(function(){
        checkIfChecked("emergency");
   });
   $("#sust").change(function(){
        checkIfChecked("sust");
   });
   $("#gender").change(function(){
        checkIfChecked("gender");
   });
   $("#accaF").change(function(){
        checkIfChecked("accaF");
    });
    $("#ath").change(function(){
        checkIfChecked("ath");
     });
     $("#accS").change(function(){
        checkIfChecked("accS");
     });
     $("#campS").change(function(){
        checkIfChecked("campS");
     });
     $("#resH").change(function(){
        checkIfChecked("resH");
     });
     $("#dining").change(function(){
        checkIfChecked("dining");
     });
     $("#stuR").change(function(){
        checkIfChecked("stuR");
     });


        $("#selectAllOne").change(function(){
                if( !$("#selectAllOne").hasClass("is-checked") ){
                    //if select all is unchecked, all others should be unchecked
                    //  uncheck: unchecks checkbox and removes markers and hover cards
                    
                    // HAS TO COME BEFORE UNCHECK IS TRIGGERED
                    closeAllHover();

                    triggerUncheck("buildings");
                    triggerUncheck("parking");
                    triggerUncheck("accEnt");
                    triggerUncheck("accPar");
                    triggerUncheck("emergency");
                    triggerUncheck("sust");
                    triggerUncheck("gender");
                }else{
                    //if selectall is checked, all others should be checked
                    //  check: checks checkbox and sets markers 
                    triggerCheck("buildings");
                    triggerCheck("parking");
                    triggerCheck("accEnt");
                    triggerCheck("accPar");
                    triggerCheck("emergency");
                    triggerCheck("sust");
                    triggerCheck("gender");
                }
        });

        $("#selectAllTwo").change(function(){

                if( !$("#selectAllTwo").hasClass("is-checked") ){
                    // HAS TO COME BEFORE UNCHECK IS TRIGGERED
                    closeAllHover();
                    triggerUncheck("accaF");
                    triggerUncheck("ath");
                    triggerUncheck("accS");
                    triggerUncheck("campS");
                    triggerUncheck("resH");
                    triggerUncheck("dining");
                    triggerUncheck("stuR");
                } else {
                    triggerCheck("accaF");
                    triggerCheck("ath");
                    triggerCheck("accS");
                    triggerCheck("campS");
                    triggerCheck("resH");
                    triggerCheck("dining");
                    triggerCheck("stuR");
                }
  
         });


    
}

//here lie ye old code
//lot 11 hover
// var elevenHover = document.getElementById('elevenHover');
// var elevenHoverCard = new google.maps.InfoWindow({
//     content: elevenHover,
// });
// // lot 35 hover
// var thirtyfiveHover = document.getElementById('thirtyfiveHover');
// var thirtyfiveHoverCard = new google.maps.InfoWindow({
//     content: thirtyfiveHover,
// });
// // lot 27 hover
// var twentysevenHover = document.getElementById('twentysevenHover');
// var twentysevenHoverCard = new google.maps.InfoWindow({
//     content: twentysevenHover,
// });
// // lot 21 hover
// var twentyoneHover = document.getElementById('twentyoneHover');
// var twentyoneHoverCard = new google.maps.InfoWindow({
//     content: twentyoneHover,
// });
// // lot 26 hover
// var twentysixHover = document.getElementById('twentysixHover');
// var twentysixHoverCard = new google.maps.InfoWindow({
//     content: twentysixHover,
// });
// // lot 4 hover
// var fourHover = document.getElementById('fourHover');
// var fourHoverCard = new google.maps.InfoWindow({
//     content: fourHover,
// });
// // lot 4a hover
// var fouraHover = document.getElementById('fouraHover');
// var fouraHoverCard = new google.maps.InfoWindow({
//     content: fouraHover,
// });
// // lot 16 hover
// var sixteenHover = document.getElementById('sixteenHover');
// var sixteenHoverCard = new google.maps.InfoWindow({
//     content: sixteenHover,
// });
// // lot 17 hover
// var seventeenHover = document.getElementById('seventeenHover');
// var seventeenHoverCard = new google.maps.InfoWindow({
//     content: seventeenHover,
// });
// // lot 29 hover
// var twentynineHover = document.getElementById('twentynineHover');
// var twentynineHoverCard = new google.maps.InfoWindow({
//     content: twentynineHover,
// });
// // lot 25 hover
// var twentyfiveHover = document.getElementById('twentyfiveHover');
// var twentyfiveHoverCard = new google.maps.InfoWindow({
//     content: twentyfiveHover,
// });
// // lot 8 hover
// var eightHover = document.getElementById('eightHover');
// var eightHoverCard = new google.maps.InfoWindow({
//     content: eightHover,
// });
// // lot 33 hover
// var thirtythreeHover = document.getElementById('thirtythreeHover');
// var thirtythreeHoverCard = new google.maps.InfoWindow({
//     content: thirtythreeHover,
// });
// // lot 34 hover
// var thirtyfourHover = document.getElementById('thirtyfourHover');
// var thirtyfourHoverCard = new google.maps.InfoWindow({
//     content: thirtyfourHover,
// });
// // lot 28 hover
// var twentyeightHover = document.getElementById('twentyeightHover');
// var twentyeightHoverCard = new google.maps.InfoWindow({
//     content: twentyeightHover,
// });
// // lot 23 hover
// var twentythreeHover = document.getElementById('twentythreeHover');
// var twentythreeHoverCard = new google.maps.InfoWindow({
//     content: twentythreeHover,
// });
// // lot 14a hover
// var fourteenaHover = document.getElementById('fourteenaHover');
// var fourteenaHoverCard = new google.maps.InfoWindow({
//     content: fourteenaHover,
// });
// // lot 14b hover
// var fourteenbHover = document.getElementById('fourteenbHover');
// var fourteenbHoverCard = new google.maps.InfoWindow({
//     content: fourteenbHover,
// });
// // lot 14c hover
// var fourteencHover = document.getElementById('fourteencHover');
// var fourteencHoverCard = new google.maps.InfoWindow({
//     content: fourteencHover,
// });
// // lot 7 hover
// var sevenHover = document.getElementById('sevenHover');
// var sevenHoverCard = new google.maps.InfoWindow({
//     content: sevenHover,
// });
// // lot 5a hover
// var fiveaHover = document.getElementById('fiveaHover');
// var fiveaHoverCard = new google.maps.InfoWindow({
//     content: fiveaHover,
// });
//  // lot 5 hover
//  var fiveHover = document.getElementById('fiveHover');
//  var fiveHoverCard = new google.maps.InfoWindow({
//      content: fiveHover,
//  });
//  // lot 7a hover
// var sevenaHover = document.getElementById('sevenaHover');
// var sevenaHoverCard = new google.maps.InfoWindow({
//     content: sevenaHover,
// });
// // lot 15 hover
// var fifteenHover = document.getElementById('fifteenHover');
// var fifteenHoverCard = new google.maps.InfoWindow({
//     content: fifteenHover,
// });
// // lot 32 hover
// var thirtytwoHover = document.getElementById('thirtytwoHover');
// var thirtytwoHoverCard = new google.maps.InfoWindow({
//     content: thirtytwoHover,
// });
// // lot 13 hover
// var thirteenHover = document.getElementById('thirteenHover');
// var thirteenHoverCard = new google.maps.InfoWindow({
//     content: thirteenHover,
// });
// // lot 12 hover
// var twelveHover = document.getElementById('twelveHover');
// var twelveHoverCard = new google.maps.InfoWindow({
//     content: twelveHover,
// });
// // lot 6a hover
// var sixaHover = document.getElementById('sixaHover');
// var sixaHoverCard = new google.maps.InfoWindow({
//     content: sixaHover,
// });

// // lot 6 hover
// var sixHover = document.getElementById('sixHover');
// var sixHoverCard = new google.maps.InfoWindow({
//     content: sixHover,
// });
// // lot 10 hover
// var tenHover = document.getElementById('tenHover');
// var tenHoverCard = new google.maps.InfoWindow({
//     content: tenHover,
// });
// // lot 9a hover
// var nineaHover = document.getElementById('nineaHover');
// var nineaHoverCard = new google.maps.InfoWindow({
//     content: nineaHover,
// });
// // lot 9 hover
// var nineHover = document.getElementById('nineHover');
// var nineHoverCard = new google.maps.InfoWindow({
//     content: nineHover,
// });
// // lot 18 hover
// var eighteenHover = document.getElementById('eighteenHover');
// var eighteenHoverCard = new google.maps.InfoWindow({
//     content: eighteenHover,
// });
//  // lot 30 hover
//  var thirtyHover = document.getElementById('thirtyHover');
//  var thirtyHoverCard = new google.maps.InfoWindow({
//      content: thirtyHover,
//  });
//  // lot 39 hover
//  var thirtynineHover = document.getElementById('thirtynineHover');
//  var thirtynineHoverCard = new google.maps.InfoWindow({
//      content: thirtynineHover,
//  });
//  // womens center
//  var womensCenterHover = document.getElementById('womensCenterHover');
//  var womensCenterHoverCard = new google.maps.InfoWindow({
//      content: womensCenterHover,
//  });
//  // titan one
//  var titanOneHover = document.getElementById('titanOneHover');
//  var titanOneHoverCard = new google.maps.InfoWindow({
//      content: titanOneHover,
//  });
//  // titan two
//  var titanTwoHover = document.getElementById('titanTwoHover');
//  var titanTwoHoverCard = new google.maps.InfoWindow({
//      content: titanTwoHover,
//  });
//var baseballHover = document.getElementById('baseballHover');
// var baseballHoverCard = new google.maps.InfoWindow({
//     content: baseballHover,
// });
// var alumniHover = document.getElementById('alumniHover');
// var alumniHoverCard = new google.maps.InfoWindow({
//     content: alumniHover,
// });
// // a&c hover
// var acHover = document.getElementById('acHover');
// var acHoverCard = new google.maps.InfoWindow({
//     content: acHover,
// });
// var athleticHover = document.getElementById('athleticHover');
// var athleticHoverCard = new google.maps.InfoWindow({
//     content: athleticHover,
// });
// var blackhawkHover = document.getElementById('blackhawkHover');
// var blackhawkHoverCard = new google.maps.InfoWindow({
//     content: blackhawkHover,
// });
// var biodigesterHover = document.getElementById('biodigesterHover');
// var biodigesterHoverCard = new google.maps.InfoWindow({
//     content: biodigesterHover,
// });
// var buckstaffHover = document.getElementById('buckstaffHover');
// var buckstaffHoverCard = new google.maps.InfoWindow({
//     content: buckstaffHover,
// });
// var equityHover = document.getElementById('equityHover');
// var equityHoverCard = new google.maps.InfoWindow({
//     content: equityHover,
// });
// var campusHover = document.getElementById('campusHover');
// var campusHoverCard = new google.maps.InfoWindow({
//     content: campusHover,
// });
// var ceramicsHover = document.getElementById('ceramicsHover');
// var ceramicsHoverCard = new google.maps.InfoWindow({
//     content: ceramicsHover,
// });
// var clowHover = document.getElementById('clowHover');
// var clowHoverCard = new google.maps.InfoWindow({
//     content: clowHover,
// });
// var gardensHover = document.getElementById('gardensHover');
// var gardensHoverCard = new google.maps.InfoWindow({
//     content: gardensHover,
// });
// var dempseyHover = document.getElementById('dempseyHover');
// var dempseyHoverCard = new google.maps.InfoWindow({
//     content: dempseyHover,
// });
// var donnerHover = document.getElementById('donnerHover');
// var donnerHoverCard = new google.maps.InfoWindow({
//     content: donnerHover,
// });
// var eastHover = document.getElementById('eastHover');
// var eastHoverCard = new google.maps.InfoWindow({
//     content: eastHover,
// });
// var environmentalHover = document.getElementById('environmentalHover');
// var environmentalHoverCard = new google.maps.InfoWindow({
//     content: environmentalHover,
// });
// var evansHover = document.getElementById('evansHover');
// var evansHoverCard = new google.maps.InfoWindow({
//     content: evansHover,
// });
// var fletcherHover = document.getElementById('fletcherHover');
// var fletcherHoverCard = new google.maps.InfoWindow({
//     content: fletcherHover,
// });
// var fredricHover = document.getElementById('fredricHover');
// var fredricHoverCard = new google.maps.InfoWindow({
//     content: fredricHover,
// });

// // GRUENHAGEN
// // declare variable
// var gruenhagenHover = document.getElementById('gruenhagenHover');
// // create variable as content card
// var gruenhagenHoverCard = new google.maps.InfoWindow({
//     content: gruenhagenHover,
// });
// var halseyHover = document.getElementById('halseyHover');
// var halseyHoverCard = new google.maps.InfoWindow({
//     content: halseyHover,
// });
// var harringtonHover = document.getElementById('harringtonHover');
// var harringtonHoverCard = new google.maps.InfoWindow({
//     content: harringtonHover,
// });
// var heatingHover = document.getElementById('heatingHover');
// var heatingHoverCard = new google.maps.InfoWindow({
//     content: heatingHover,
// });
// var parkingRampHover = document.getElementById('parkingRampHover');
// var parkingRampHoverCard = new google.maps.InfoWindow({
//     content: parkingRampHover,
// });
// var horizonHover = document.getElementById('horizonHover');
// var horizonHoverCard = new google.maps.InfoWindow({
//     content: horizonHover,
// });
// var kolfHover = document.getElementById('kolfHover');
// var kolfHoverCard = new google.maps.InfoWindow({
//     content: kolfHover,
// });
// var lincolnHover = document.getElementById('lincolnHover');
// var lincolnHoverCard = new google.maps.InfoWindow({
//     content: lincolnHover,
// });
// var multiculturalHover = document.getElementById('multiculturalHover');
// var multiculturalHoverCard = new google.maps.InfoWindow({
//     content: multiculturalHover,
// });
// var nursingHover = document.getElementById('nursingHover');
// var nursingHoverCard = new google.maps.InfoWindow({
//     content: nursingHover,
// });
// var oviattHover = document.getElementById('oviattHover');
// var oviattHoverCard = new google.maps.InfoWindow({
//     content: oviattHover,
// });
// var pollockHover = document.getElementById('pollockHover');
// var pollockHoverCard = new google.maps.InfoWindow({
//     content: pollockHover,
// });
// var polkHover = document.getElementById('polkHover');
// var polkHoverCard = new google.maps.InfoWindow({
//     content: polkHover,
// });
// var radfordHover = document.getElementById('radfordHover');
// var radfordHoverCard = new google.maps.InfoWindow({
//     content: radfordHover,
// });
// var reeveHover = document.getElementById('reeveHover');
// var reeveHoverCard = new google.maps.InfoWindow({
//     content: reeveHover,
// });
// var sageHover = document.getElementById('sageHover');
// var sageHoverCard = new google.maps.InfoWindow({
//     content: sageHover,
// });
// var scottHover = document.getElementById('scottHover');
// var scottHoverCard = new google.maps.InfoWindow({
//     content: scottHover,
// });
// var stewartHover = document.getElementById('stewartHover');
// var stewartHoverCard = new google.maps.InfoWindow({
//     content: stewartHover,
// });
// var recreationHover = document.getElementById('recreationHover');
// var recreationHoverCard = new google.maps.InfoWindow({
//     content: recreationHover,
// });
// var successHover = document.getElementById('successHover');
// var successHoverCard = new google.maps.InfoWindow({
//     content: successHover,
// });
// var swartHover = document.getElementById('swartHover');
// var swartHoverCard = new google.maps.InfoWindow({
//     content: swartHover,
// });
// var taylorHover = document.getElementById('taylorHover');
// var taylorHoverCard = new google.maps.InfoWindow({
//     content: taylorHover,
// });
// var titanHover = document.getElementById('titanHover');
// var titanHoverCard = new google.maps.InfoWindow({
//     content: titanHover,
// });
// var policeHover = document.getElementById('policeHover');
// var policeHoverCard = new google.maps.InfoWindow({
//     content: policeHover,
// });
// var websterHover = document.getElementById('websterHover');
// var websterHoverCard = new google.maps.InfoWindow({
//     content: websterHover,
// });
//all of the thumbnail images for the infowindows that open when a marker is clicked
        //order of buildings is very important that they stay the same between arrays otherwise
        //they wont match up when they are put together in loops
        // var buildingExtras= [
        //     //0 albee
        //     {thumbnail: "images/campuspictures/albeehall.jpeg", 
        //      hoverSelector: document.getElementById('albeeHover')},
        //     //1 baseball
        //     {thumbnail:"images/campuspictures/baseball.jpg",  hoverSelector: document.getElementById('baseballHover') },
            
        //     //2 alumni
        //     {thumbnail: "images/campuspictures/awcc-building.jpg", hoverSelector: document.getElementById('alumniHover')},
            
        //     //3 ac
        //     {thumbnail: "images/campuspictures/artscommunications.jpeg", hoverSelector: document.getElementById('acHover')},
            
        //     //4 athletic
        //     {thumbnail: "images/campuspictures/athleticservice.jpeg", hoverSelector:document.getElementById('athleticHover') },
            
        //     //5 blackhawk
        //     {thumbnail: "images/campuspictures/blackhawk.jpeg", hoverSelector: document.getElementById('blackhawkHover')},
            
        //     //6 biodigester
        //     {thumbnail:"images/campuspictures/biodigester.jpg",  hoverSelector:document.getElementById('biodigesterHover') },
            
        //     //7 buckstaff
        //     {thumbnail: "images/campuspictures/buckstaff.jpeg",  hoverSelector: document.getElementById('buckstaffHover')},
            
        //     //8 equity
        //     {thumbnail: "images/campuspictures/centerforequity.jpeg", hoverSelector: document.getElementById('equityHover')},
            
        //     //9 campus
        //     {thumbnail: "images/campuspictures/campus-services.jpg", hoverSelector: document.getElementById('campusHover')},
            
        //     //10 ceramics
        //     {thumbnail: "images/campuspictures/ceramicslab.jpeg", hoverSelector: document.getElementById('ceramicsHover')},
            
        //     //11 clow
        //     {thumbnail:"images/campuspictures/clow.jpeg",  hoverSelector: document.getElementById('clowHover')},
            
        //     //12 gardens
        //     {thumbnail:"images/campuspictures/community-gardens.jpg",  hoverSelector: document.getElementById('gardensHover')},
            
        //     //13 dempsey
        //     {thumbnail:"images/campuspictures/dempsey.jpeg",  hoverSelector: document.getElementById('dempseyHover')},
            
        //     //14 donner
        //     {thumbnail:"images/campuspictures/donner.jpeg",  hoverSelector:document.getElementById('donnerHover')},
            
        //     //15 east
        //     {thumbnail: "images/campuspictures/easthall.jpg", hoverSelector: document.getElementById('eastHover')},
            
        //     //16 environmental
        //     {thumbnail:"images/campuspictures/aquaticstudiescenter.jpeg",  hoverSelector: document.getElementById('environmentalHover')},
            
        //     //17 evans
        //     {thumbnail:"images/campuspictures/evans.jpeg", hoverSelector: document.getElementById('evansHover')},
            
        //     //18 fletcher
        //     {thumbnail: "images/campuspictures/fletcher.jpeg",hoverSelector: document.getElementById('fletcherHover')},
            
        //     //19 fredric
        //     {thumbnail:"images/campuspictures/fredricmarch.jpeg", hoverSelector: document.getElementById('fredricHover')},
            
        //     //20 gruenhagen
        //     {thumbnail:"images/campuspictures/gruenhagen.jpeg", hoverSelector: document.getElementById('gruenhagenHover')},
            
        //     //21 halsey
        //     {thumbnail:"images/campuspictures/halsey.jpeg", hoverSelector: document.getElementById('halseyHover')},
            
        //     //22 harrington
        //     {thumbnail:"images/campuspictures/harrington.jpeg", hoverSelector: document.getElementById('harringtonHover')},
            
        //     //23 heating
        //     {thumbnail:"images/campuspictures/heatingplant.jpeg", hoverSelector: document.getElementById('heatingHover')},
            
        //     //24 parkingRamp
        //     {thumbnail:"images/campuspictures/parkingramp.jpeg", hoverSelector: document.getElementById('parkingRampHover')},
            
        //     //25 horizon
        //     {thumbnail:"images/campuspictures/horizon.jpeg", hoverSelector: document.getElementById('horizonHover')},
            
        //     //26 kolf
        //     {thumbnail:"images/campuspictures/kolf.jpeg", hoverSelector: document.getElementById('kolfHover')},
            
        //     //27 lincoln
        //     {thumbnail:"images/campuspictures/lincoln-hall.jpg", hoverSelector: document.getElementById('lincolnHover')},
            
        //     //28 multicultural
        //     {thumbnail:"images/campuspictures/multiculturaleducation.jpeg", hoverSelector: document.getElementById('multiculturalHover')},
            
        //     //29 nursing
        //     {thumbnail:"images/campuspictures/nursingeducation.jpeg", hoverSelector: document.getElementById('nursingHover')},
            
        //     //30 oviatt
        //     {thumbnail:"images/campuspictures/oviatt.jpeg", hoverSelector: document.getElementById('oviattHover')},
            
        //     //31 pollock
        //     {thumbnail:"images/campuspictures/pollock.jpeg", hoverSelector: document.getElementById('pollockHover')},
            
        //     //32 polk
        //     {thumbnail:"images/campuspictures/polk.jpeg", hoverSelector: document.getElementById('polkHover')},
            
        //     //33 radford
        //     {thumbnail:"images/campuspictures/radford.jpeg", hoverSelector: document.getElementById('radfordHover')},
            
        //     //34 reeve
        //     {thumbnail:"images/campuspictures/reeve.jpeg", hoverSelector: document.getElementById('reeveHover')},
            
        //     //35 sage
        //     {thumbnail:"images/campuspictures/sage.jpeg", hoverSelector: document.getElementById('sageHover')},
            
        //     //36 scott
        //     {thumbnail:"images/campuspictures/scott.jpeg", hoverSelector: document.getElementById('scottHover')},
            
        //     //37 stewart
        //     {thumbnail: "images/campuspictures/stewart.jpeg", hoverSelector: document.getElementById('stewartHover')},
           
        //     //38 recreation
        //     {thumbnail:"images/campuspictures/srwc.jpeg", hoverSelector: document.getElementById('recreationHover')},
            
        //     //39 success
        //     {thumbnail:"images/campuspictures/studentsuccess.jpeg", hoverSelector: document.getElementById('successHover')},
            
        //     //40 swart
        //     {thumbnail:"images/campuspictures/swart.jpeg", hoverSelector: document.getElementById('swartHover')},
            
        //     //41 taylor
        //     {thumbnail:"images/campuspictures/taylor.jpeg", hoverSelector: document.getElementById('taylorHover')},
            
        //     //42 titan
        //     {thumbnail:"images/campuspictures/titanstadium.jpeg", hoverSelector: document.getElementById('titanHover')},
            
        //     //43 police
        //     {thumbnail:"images/campuspictures/universitypolice.jpeg", hoverSelector: document.getElementById('policeHover')},
            
        //     //44 webster
        //     {thumbnail:"images/campuspictures/webster.jpeg", hoverSelector: document.getElementById('websterHover')},
            
        // ]
// buildings array, sets locations for all of the places
        //0-44 = buildings
        //45-82 = parking lots
        //83-110 = emergency phones
        // var locations = [
            
        //                 //buildings
        //                 // albee hall [0]
        //                 {lat: 44.025729, lng: -88.550248},
        //                 // alumni baseball stadium [1]
        //                 {lat: 44.023042, lng: -88.561892},
        //                 // alumni welcome and conference center [2]
        //                 {lat: 44.020528, lng: -88.550432},
        //                 // A&C [3]
        //                 {lat: 44.029640, lng: -88.552137},
        //                 // athletic service building [4]
        //                 {lat: 44.023077, lng: -88.561081},
        //                 // blackhawk commons [5]
        //                 {lat: 44.023591, lng: -88.549157},
        //                 // biodigester [6]
        //                 {lat: 44.018897, lng: -88.558015},
        //                 // Buckstaff Planetarium [7]
        //                 {lat: 44.028428, lng: -88.551581},
        //                 // campus center for equity and diversity [8]
        //                 {lat: 44.024655, lng: -88.547217},
        //                 // campus services [9]
        //                 {lat: 44.017782, lng: -88.556446},
        //                 // ceramics laboratory [10]
        //                 {lat: 44.025559, lng: -88.555515},
        //                 //  clow [11]
        //                 {lat: 44.026306, lng: -88.552268},
        //                 // community gardens [12]
        //                 {lat: 44.015573, lng: -88.555929},
        //                 // Dempsey hall [13]
        //                 {lat: 44.026603, lng: -88.550707},
        //                 // donner hall [14]
        //                 {lat: 44.025420, lng: -88.552287},
        //                 // East Hall [15]
        //                 {lat: 44.031217, lng: -88.543806},
        //                 // environmental science and research center [16]
        //                 {lat: 44.023518, lng: -88.553851},
        //                 // evans hall [17]
        //                 {lat: 44.026168, lng: -88.547397},
        //                 // fletcher hall [18]
        //                 {lat: 44.025332, lng: -88.547240},
        //                 // Fredric March Theater [19]
        //                 {lat:  44.029000, lng:-88.552919},
        //                 // gruenhagen [20]
        //                 {lat: 44.022405, lng:  -88.548824},
        //                 // Halsey Science Center [21]
        //                 {lat:  44.028497, lng: -88.551027},
        //                 // Harrington Hall [22]
        //                 {lat:  44.027736, lng: -88.550172},
        //                 // Heating Plant [23]
        //                 {lat: 44.028235, lng: -88.554312},
        //                 // high avenue parking ramp [24]
        //                 {lat: 44.022960, lng: -88.549791},
        //                 // horizon village [25]
        //                 {lat: 44.024363, lng: -88.547972},
        //                 // kolf sports center [26]
        //                 {lat: 44.024323, lng: -88.552214},
        //                 // lincoln hall [27]
        //                 {lat: 44.023204, lng: -88.546359},
        //                 // multicultural education center [28]
        //                 {lat: 44.024842, lng: -88.550613},
        //                 // Nursing and Education Building [29]
        //                 {lat: 44.027051, lng: -88.552813},
        //                 // Oviatt House [30]
        //                 {lat:  44.027156, lng: -88.551466},
        //                 // pollock house [31]
        //                 {lat: 44.025227, lng:  -88.551292},
        //                 // polk library [32]
        //                 {lat: 44.026379, lng: -88.549602},
        //                 // radford hall & student health center [33]
        //                 {lat: 44.025671, lng: -88.551561},
        //                 // reeve memorial union [34]
        //                 {lat: 44.024934, lng: -88.549448},
        //                 // sage hall [35]
        //                 {lat: 44.025720, lng: -88.553770},
        //                 // scott hall [36]
        //                 {lat: 44.022556, lng: -88.547344},
        //                 // stewart hall [37]
        //                 {lat: 44.026060, lng: -88.546952},
        //                 // student recreation and wellness center [38]
        //                 {lat: 44.021752, lng: -88.551694},
        //                 // student success center [39]
        //                 {lat: 44.026205, lng: -88.548163},
        //                 // Swart Hall [40]
        //                 {lat:  44.027872, lng:  -88.551962},
        //                 //  taylor hall [41]
        //                 {lat: 44.024577, lng: -88.551215},
        //                 // titan stadium [42]
        //                 {lat: 44.023671, lng: -88.562917},
        //                 // university police [43]
        //                 {lat: 44.023763, lng: -88.549972},
        //                 // webster hall [44]
        //                 {lat: 44.025002, lng: -88.551681},
            
        //                 //parking lots
        //                 // [45] Lot 11
        //                 {lat: 44.030449, lng: -88.552415},
        //                 // [46] Lot 35
        //                 {lat: 44.029428, lng: -88.558183},
        //                 // [47] Lot 27
        //                 {lat: 44.029026, lng: -88.554960},
        //                 // [48] Lot 21
        //                 {lat: 44.029123, lng: -88.553173},
        //                 // [49] Lot 26
        //                 {lat: 44.029838, lng: -88.551684},
        //                 // [50] Lot 4
        //                 {lat: 44.029100, lng: -88.551581},
        //                 // [51] Lot 4a
        //                 {lat: 44.028586, lng: -88.552649},
        //                 // [52] Lot 16
        //                 {lat: 44.028822, lng: -88.550956},
        //                 // [53] Lot 17
        //                 {lat: 44.028648, lng: -88.549711},
        //                 // [54] Lot 29
        //                 {lat: 44.027825, lng: -88.553434},
        //                 // [55] Lot 25
        //                 {lat: 44.027233, lng: -88.553602},
        //                 // [56] Lot 8
        //                 {lat: 44.026371, lng: -88.554322},
        //                 // [57] Lot 33
        //                 {lat: 44.025668, lng: -88.555558},
        //                 // [58] Lot 34
        //                 {lat: 44.027133, lng: -88.548009},
        //                 // [59] Lot 28
        //                 {lat: 44.025858, lng: -88.548893},
        //                 // [60] Lot 23
        //                 {lat: 44.025511, lng: -88.546748},
        //                 // [61] Lot 14a
        //                 {lat: 44.025828, lng: -88.552416},
        //                 // [62] Lot 14b
        //                 {lat: 44.025673, lng: -88.551929},
        //                 // [63] Lot 14c
        //                 {lat: 44.025302, lng: -88.551711},
        //                 // [64] Lot 7
        //                 {lat: 44.025023, lng: -88.553519},
        //                 // [65] Lot 5a
        //                 {lat: 44.024150, lng: -88.554291},
        //                 // [66] Lot 5
        //                 {lat: 44.023717, lng: -88.553693},
        //                 // [67] Lot 7a
        //                 {lat: 44.023897, lng: -88.552670},
        //                 // [68] Lot 15
        //                 {lat: 44.024142, lng: -88.549694},
        //                 // [69] Lot 32
        //                 {lat: 44.023912, lng: -88.550031},
        //                 // [70] Lot 13
        //                 {lat: 44.023505, lng: -88.551579},
        //                 // [71] Lot 12
        //                 {lat: 44.022135, lng: -88.551702},
        //                 // [72] Lot 6a
        //                 {lat: 44.021216, lng: -88.551093},
        //                 // [73] Lot 6
        //                 {lat: 44.020887, lng: -88.549848},
        //                 // [74] Lot 10
        //                 {lat: 44.021857, lng: -88.548831},
        //                 // [75] Lot 9a
        //                 {lat: 44.022435, lng: -88.548564},
        //                 // [76] Lot 9
        //                 {lat: 44.021955, lng:  -88.548167},
        //                 // [77] Lot 18
        //                 {lat: 44.022368, lng: -88.546827},
        //                 // [78] Lot 30
        //                 {lat: 44.021440, lng: -88.547947},
        //                 // [79] Lot 39
        //                 {lat: 44.018367, lng: -88.556821},
        //                 //[80] womens center
        //                 {lat: 44.024816, lng: -88.546638},
        //                 //[81] titan one
        //                 {lat: 44.024401, lng: -88.564253},
        //                 //[82] titan two
        //                 {lat: 44.023007, lng:  -88.564339},
            
        //                 //emergency phones
        //                 // Phone[83] Lot 35, phonezero
        //                 {lat: 44.029568, lng: -88.557150},
        //                 // Phone[84] Lot 40, phoneone
        //                 {lat: 44.029075, lng: -88.558184},
        //                 // Phone[85] lot 27, phonetwo
        //                 {lat: 44.028831, lng: -88.555125},
        //                 // Phone[86] heating plant, phonethree
        //                 {lat: 44.028514, lng: -88.554386},
        //                 // Phone[87] behind a & c,phonefour 
        //                 {lat: 44.029626, lng: -88.552936},
        //                 // Phone[88] in between halsey and swart,phonefive 
        //                 {lat: 44.028456, lng: -88.551907},
        //                 // Phone[89] lot 25, phonesix
        //                 {lat: 44.027457	, lng: -88.553422},
        //                 // Phone[90] lot 17,phoneseven 
        //                 {lat: 44.028501, lng: -88.549911},
        //                 // Phone[91] Wiouwash Trail Oshkosh, WI 54901,phoneeight 
        //                 {lat: 44.025255, lng: -88.555618},
        //                 // Phone[92] in front of clow,phonenine 
        //                 {lat: 44.026028, lng: -88.552211},
        //                 // Phone[93] behind dempsey,phoneten 
        //                 {lat: 44.026556, lng: -88.550250},
        //                 // Phone[94] lot 34,phoneeleven 
        //                 {lat: 44.026670, lng: -88.547795},
        //                 // Phone[95] in between fletcher, stewart and evans,phonetwelve 
        //                 {lat: 44.025771, lng: -88.547412},
        //                 // Phone[96] center for equity and diversity,phonethirteen 
        //                 {lat: 44.024777, lng: -88.546711},
        //                 // Phone[97] in between reeve and horizon,phonefourteen 
        //                 {lat: 44.024921, lng: -88.548533},
        //                 // Phone[98] lot 7,phonefifteen 
        //                 {lat: 44.024921, lng: -88.548533},
        //                 // Phone[99] lot 5,phonesixteen 
        //                 {lat: 44.023941, lng: -88.554160},
        //                 // Phone[100] environmental research and innovation center,phoneseventeen 
        //                 {lat: 44.023489, lng: -88.553277},
        //                 // Phone[101] behind student recreation and wellness center,phoneeighteen 
        //                 {lat: 44.022102, lng: -88.552487},
        //                 // Phone[102] path to student rec center,phonenineteen 
        //                 {lat: 44.023313, lng: -88.551255},
        //                 // Phone[103] between taylor and webster,phonetwenty 
        //                 {lat: 44.024791, lng: -88.551402},
        //                 // Phone[104] lot 15,phonetwentyone 
        //                 {lat: 44.024395, lng:  -88.550325},
        //                 // Phone[105] behind blackhawk,phonetwentytwo 
        //                 {lat: 44.023321, lng: -88.548516},
        //                 // Phone[106] wellness center front,phonetwentythree 
        //                 {lat: 44.021428, lng: -88.550672},
        //                 // Phone[107]wellness center  behind,phonetwentyfour 
        //                 {lat: 44.021057, lng: -88.551801},
        //                 // Phone[108] lot 30,phonetwentyfive 
        //                 {lat: 44.021727, lng: -88.548169},
        //                 // Phone[109] lot 18,phonetwentysix 
        //                 {lat: 44.022676, lng:  -88.546843},
        //                 // Phone[110] lot 39,phonetwentyseven 
        //                 {lat: 44.018830, lng: -88.556802}
        //             ];
    // array for parking lots
        // var parkingLots = [
        //     // [0] Lot 11
        //     {lat: 44.030449, lng: -88.552415},
        //     // [1] Lot 35
        //     {lat: 44.029428, lng: -88.558183},
        //     // [2] Lot 27
        //     {lat: 44.029026, lng: -88.554960},
        //     // [3] Lot 21
        //     {lat: 44.029123, lng: -88.553173},
        //     // [4] Lot 26
        //     {lat: 44.029838, lng: -88.551684},
        //     // [5] Lot 4
        //     {lat: 44.029100, lng: -88.551581},
        //     // [6] Lot 4a
        //     {lat: 44.028586, lng: -88.552649},
        //     // [7] Lot 16
        //     {lat: 44.028822, lng: -88.550956},
        //     // [8] Lot 17
        //     {lat: 44.028648, lng: -88.549711},
        //     // [9] Lot 29
        //     {lat: 44.027825, lng: -88.553434},
        //     // [10] Lot 25
        //     {lat: 44.027233, lng: -88.553602},
        //     // [11] Lot 8
        //     {lat: 44.026371, lng: -88.554322},
        //     // [12] Lot 33
        //     {lat: 44.025668, lng: -88.555558},
        //     // [13] Lot 34
        //     {lat: 44.027133, lng: -88.548009},
        //     // [14] Lot 28
        //     {lat: 44.025858, lng: -88.548893},
        //     // [15] Lot 23
        //     {lat: 44.025511, lng: -88.546748},
        //     // [16] Lot 14a
        //     {lat: 44.025828, lng: -88.552416},
        //     // [17] Lot 14b
        //     {lat: 44.025673, lng: -88.551929},
        //     // [18] Lot 14c
        //     {lat: 44.025302, lng: -88.551711},
        //     // [19] Lot 7
        //     {lat: 44.025023, lng: -88.553519},
        //     // [20] Lot 5a
        //     {lat: 44.024150, lng: -88.554291},
        //     // [21] Lot 5
        //     {lat: 44.023717, lng: -88.553693},
        //     // [22] Lot 7a
        //     {lat: 44.023897, lng: -88.552670},
        //     // [23] Lot 15
        //     {lat: 44.024142, lng: -88.549694},
        //     // [24] Lot 32
        //     {lat: 44.023912, lng: -88.550031},
        //     // [25] Lot 13
        //     {lat: 44.023505, lng: -88.551579},
        //     // [26] Lot 12
        //     {lat: 44.022135, lng: -88.551702},
        //     // [27] Lot 6a
        //     {lat: 44.021216, lng: -88.551093},
        //     // [28] Lot 6
        //     {lat: 44.020887, lng: -88.549848},
        //     // [29] Lot 10
        //     {lat: 44.021857, lng: -88.548831},
        //     // [30] Lot 9a
        //     {lat: 44.022435, lng: -88.548564},
        //     // [31] Lot 9
        //     {lat: 44.021955, lng:  -88.548167},
        //     // [32] Lot 18
        //     {lat: 44.022368, lng: -88.546827},
        //     // [33] Lot 30
        //     {lat: 44.021440, lng: -88.547947},
        //     // [34] Lot 39
        //     {lat: 44.018367, lng: -88.556821}
        // ];
        // Emergency phones
        // var emergencyPhones = [
        //     // Phone[0] Lot 35
        //     {lat: 44.029568, lng: -88.557150},
        //     // Phone[1] Lot 40
        //     {lat: 44.029075, lng: -88.558184},
        //     // Phone[2] lot 27
        //     {lat: 44.028831, lng: -88.555125},
        //     // Phone[3] heating plant
        //     {lat: 44.028514, lng: -88.554386},
        //     // Phone[4] behind a & c
        //     {lat: 44.029626, lng: -88.552936},
        //     // Phone[5] in between halsey and swart
        //     {lat: 44.028456, lng: -88.551907},
        //     // Phone[6] lot 25
        //     {lat: 44.027457	, lng: -88.553422},
        //     // Phone[7] lot 17
        //     {lat: 44.028501, lng: -88.549911},
        //     // Phone[8] Wiouwash Trail Oshkosh, WI 54901
        //     {lat: 44.025255, lng: -88.555618},
        //     // Phone[9] in front of slow
        //     {lat: 44.026028, lng: -88.552211},
        //     // Phone[10] behind dempsey
        //     {lat: 44.026556, lng: -88.550250},
        //     // Phone[11] lot 34
        //     {lat: 44.026670, lng: -88.547795},
        //     // Phone[12] in between fletcher, stewart and evans
        //     {lat: 44.025771, lng: -88.547412},
        //     // Phone[13] center for equity and diversity
        //     {lat: 44.024777, lng: -88.546711},
        //     // Phone[14] in between reeve and horizon
        //     {lat: 44.024921, lng: -88.548533},
        //     // Phone[15] lot 7
        //     {lat: 44.024921, lng: -88.548533},
        //     // Phone[16] lot 5
        //     {lat: 44.023941, lng: -88.554160},
        //     // Phone[17] environmental research and innovation center
        //     {lat: 44.023489, lng: -88.553277},
        //     // Phone[18] behind student recreation and wellness center
        //     {lat: 44.022102, lng: -88.552487},
        //     // Phone[19] path to student rec center
        //     {lat: 44.023313, lng: -88.551255},
        //     // Phone[20] between taylor and webster
        //     {lat: 44.024791, lng: -88.551402},
        //     // Phone[21] lot 15
        //     {lat: 44.024395, lng:  -88.550325},
        //     // Phone[22] behind blackhawk
        //     {lat: 44.023321, lng: -88.548516},
        //     // Phone[23] wellness center front
        //     {lat: 44.021428, lng: -88.550672},
        //     // Phone[24]wellness center  behind
        //     {lat: 44.021057, lng: -88.551801},
        //     // Phone[25] lot 30
        //     {lat: 44.021727, lng: -88.548169},
        //     // Phone[26] lot 18
        //     {lat: 44.022676, lng:  -88.546843},
        //     // Phone[27] lot 39
        //     {lat: 44.018830, lng: -88.556802}
        // ];

        // AccaF markers
        // var albeeAccaFMarker = new google.maps.Marker({
        //     position: buildings[0],
        //     icon: maroonMarker,
        //     title: "Albee Hall"
        // });
        // var acAccaFMarker = new google.maps.Marker({
        //     position: buildings[3],
        //     icon: maroonMarker,
        //     title: "Arts and Communications"
        // });
        // var ceramicsAccaFMarker = new google.maps.Marker({
        //     position: buildings[10],
        //     icon: maroonMarker,
        //     title: "Ceramics Laboratory"
        // });
        // var clowAccaFMarker = new google.maps.Marker({
        //     position: buildings[11],
        //     icon: maroonMarker,
        //     title: "Clow Social Science Center"
        // });
        // var environmentalAccaFMarker = new google.maps.Marker({
        //     position: buildings[16],
        //     icon: maroonMarker,
        //     title: "Environmental Science and Research Center"
        // });
        // var fredricAccaFMarker = new google.maps.Marker({
        //     position: buildings[19],
        //     icon: maroonMarker,
        //     title: "Fredric March Theater"
        // });
        // var halseyAccaFMarker = new google.maps.Marker({
        //     position: buildings[21],
        //     icon: maroonMarker,
        //     title: "Halsey Science Center"
        // });
        // var harringtonAccaFMarker = new google.maps.Marker({
        //     position: buildings[22],
        //     icon: maroonMarker,
        //     title: "Harrington Hall"
        // });
        // var kolfAccaFMarker = new google.maps.Marker({
        //     position: buildings[26],
        //     icon: maroonMarker,
        //     title: "Kolf Sports Center"
        // });
        // var nursingAccaFMarker = new google.maps.Marker({
        //     position: buildings[29],
        //     icon: maroonMarker,
        //     title: "Nursing and Education Building"
        // });
        // var polkAccaFMarker = new google.maps.Marker({
        //     position: buildings[32],
        //     icon: maroonMarker,
        //     title: "Polk Library"
        // });
        // var radfordAccaFMarker = new google.maps.Marker({
        //     position: buildings[33],
        //     icon: maroonMarker,
        //     title: "Radford Hall and Student Health Center"
        // });
        // var sageAccaFMarker = new google.maps.Marker({
        //     position: buildings[35],
        //     icon: maroonMarker,
        //     title: "Sage Hall"
        // });
        // var swartAccaFMarker = new google.maps.Marker({
        //     position: buildings[40],
        //     icon: maroonMarker,
        //     title: "Swart Hall"
        // });

        // hover for AccaF
        // albeeAccaFMarker.addListener('click', function(){
        //     var albee = "albee";
        //     markerOpenClose(albee);
        // });

        // acAccaFMarker.addListener('click', function(){
        //     var ac = "ac";
        //     markerOpenClose(ac);
        // });

        // ceramicsAccaFMarker.addListener('click', function(){
        //     var ceramics = "ceramics";
        //     markerOpenClose(ceramics);        
        // });

        // clowAccaFMarker.addListener('click', function(){
        //     var clow = "clow";
        //     markerOpenClose(clow);
        // });

        // environmentalAccaFMarker.addListener('click', function(){
        //     var environmental = "environmental";
        //     markerOpenClose(environmental);
        // });

        // fredricAccaFMarker.addListener('click', function(){
        //     var fredric = "fredric";
        //     markerOpenClose(fredric);
        // });

        // halseyAccaFMarker.addListener('click', function(){
        //     var halsey = "halsey";
        //     markerOpenClose(halsey);
        // });

        // harringtonAccaFMarker.addListener('click', function(){
        //     var harrington = "harrington";
        //     markerOpenClose(harrington);
        // });

        // kolfAccaFMarker.addListener('click', function(){
        //     var kolf = "kolf";
        //     markerOpenClose(kolf);
        // });

        // swartAccaFMarker.addListener('click', function(){
        //     var swart = "swart";
        //     markerOpenClose(swart);
        // });

        // nursingAccaFMarker.addListener('click', function(){
        //     var nursing = "nursing";
        //     markerOpenClose(nursing);
        // });

        // polkAccaFMarker.addListener('click', function(){
        //     var polk = "polk";
        //     markerOpenClose(polk);
        // });

        // radfordAccaFMarker.addListener('click', function(){
        //     var radford = "radford";
        //     markerOpenClose(radford);
        // });

        // sageAccaFMarker.addListener('click', function(){
        //     var sage = "sage";
        //     markerOpenClose(sage);
        // });

        
        
        // create markers for athletics
        // var albeeAthMarker = new google.maps.Marker({
        //     position: buildings[0],
        //     icon: orangeMarker,
        //     title: "Albee Hall"
        // });
        // var baseballAthMarker = new google.maps.Marker({
        //     position: buildings[1],
        //     icon: orangeMarker,
        //     title: "Alumni Baseball Stadium"
        // });
        // var athleticAthMarker = new google.maps.Marker({
        //     position: buildings[4],
        //     icon: orangeMarker,
        //     title: "Athletic Service Building"
        // });
        // var eastAthMarker = new google.maps.Marker({
        //     position: buildings[15],
        //     icon: orangeMarker,
        //     title: "East Hall"
        // });
        // var kolfAthMarker = new google.maps.Marker({
        //     position: buildings[26],
        //     icon: orangeMarker,
        //     title: "Kolf Sports Center"
        // });

        // var titanAthMarker = new google.maps.Marker({
        //     position: buildings[42],
        //     icon: orangeMarker,
        //     title: "Titan Stadium"
        // });
        // // athletics marker hover
        // albeeAthMarker.addListener('click', function(){
        //     var albee = "albee";
        //     markerOpenClose(albee);        
        // });

        // athleticAthMarker.addListener('click', function(){
        //     var athletic = "athletic";
        //     markerOpenClose(athletic);
        // });

        // baseballAthMarker.addListener('click', function(){
        //     var baseball = "baseball";
        //     markerOpenClose(baseball);
        // });

        // eastAthMarker.addListener('click', function(){
        //     var east = "east";
        //     markerOpenClose(east);
        // });


        // kolfAthMarker.addListener('click', function(){
        //     var kolf = "kolf";
        //     markerOpenClose(kolf);
        // });

        // titanAthMarker.addListener('click', function(){
        //     var titan = "titan";
        //     markerOpenClose(titan);
        // });


        
       
        // AccaS markers
        // var equityAccaSMarker = new google.maps.Marker({
        //     position: buildings[8],
        //     icon: brownMarker,
        //     title: "Campus Center for Diversity and Equity"
        // });
        // var nursingAccaSMarker = new google.maps.Marker({
        //     position: buildings[29],
        //     icon: brownMarker,
        //     title: "Nursing and Education Building"
        // });
        // var successAccaSMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     icon: brownMarker,
        //     title: "Student Success Center"
        // });
        // var swartAccaSMarker = new google.maps.Marker({
        //     position: buildings[40],
        //     icon: brownMarker,
        //     title: "Swart Hall"
        // });

        // AccaS hover
        // equityAccaSMarker.addListener('click', function(){
        //     var equity = "equity";
        //     markerOpenClose(equity);
        // });

        // nursingAccaSMarker.addListener('click', function(){
        //     var nursing = "nursing";
        //     markerOpenClose(nursing);
        // });

        // successAccaSMarker.addListener('click', function(){
        //     var success = "success";
        //     markerOpenClose(success);
        // });

        // swartAccaSMarker.addListener('click', function(){
        //     var swart = "swart";
        //     markerOpenClose(swart);
        // });


        
        
        // CampS markers
        // var equityCampSMarker = new google.maps.Marker({
        //     position: buildings[8],
        //     icon: darkgreenMarker,
        //     title: "Campus Center for Diversity and Equity"
        // });
        // var campusCampSMarker = new google.maps.Marker({
        //     position: buildings[9],
        //     icon: darkgreenMarker,
        //     title: "Campus Services"
        // });
        // var dempseyCampSMarker = new google.maps.Marker({
        //     position: buildings[13],
        //     icon: darkgreenMarker,
        //     title: "Dempsey Hall"
        // });
        // var multiculturalCampSMarker = new google.maps.Marker({
        //     position: buildings[28],
        //     icon: darkgreenMarker,
        //     title: "Multicultural Education Center"
        // });
        // var pollockCampSMarker = new google.maps.Marker({
        //     position: buildings[31],
        //     icon: darkgreenMarker,
        //     title: "Pollock House"
        // });
        // var radfordCampSMarker = new google.maps.Marker({
        //     position: buildings[33],
        //     icon: darkgreenMarker,
        //     title: "Radford Hall and Student Health Center"
        // });
        // var reeveCampSMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: darkgreenMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var recreationCampSMarker = new google.maps.Marker({
        //     position: buildings[38],
        //     icon: darkgreenMarker,
        //     title: "Student Recreation and Wellness Center"
        // });
        // var successCampSMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     icon: darkgreenMarker,
        //     title: "Student Success Center"
        // });


        // CampS hover
        // equityCampSMarker.addListener('click', function(){
        //     var equity = "equity";
        //     markerOpenClose(equity);
        // });

        // campusCampSMarker.addListener('click', function(){
        //     var campus = "campus";
        //     markerOpenClose(campus);
        // });

        // dempseyCampSMarker.addListener('click', function(){
        //     var dempsey = "dempsey";
        //     markerOpenClose(dempsey);
            
        // });

        // multiculturalCampSMarker.addListener('click', function(){
        //     var multicultural = "multicultural";
        //     markerOpenClose(multicultural);
        // });

        // pollockCampSMarker.addListener('click', function(){
        //     var pollock = "pollock";
        //     markerOpenClose(pollock);
        // });

        // radfordCampSMarker.addListener('click', function(){
        //     var radford = "radford";
        //     markerOpenClose(radford);
        // });

        // reeveCampSMarker.addListener('click', function(){
        //     var reeve = "reeve";
        //     markerOpenClose(reeve);
        // });

        // recreationCampSMarker.addListener('click', function(){
        //     var recreation = "recreation";
        //     markerOpenClose(recreation);
        // });

        // successCampSMarker.addListener('click', function(){
        //     var success = "success";
        //     markerOpenClose(success);
        // });


        // set/remove CampS

       
        
        // ResH markers
        // var donnerResHMarker = new google.maps.Marker({
        //     position: buildings[14],
        //     icon: lightblueMarker,
        //     title: "Donner Hall"
        // });
        // var evansResHMarker = new google.maps.Marker({
        //     position: buildings[17],
        //     icon: lightblueMarker,
        //     title: "Evans Hall"
        // });
        // var fletcherResHMarker = new google.maps.Marker({
        //     position: buildings[18],
        //     icon: lightblueMarker,
        //     title: "Fletcher Hall"
        // });
        // var gruenhagenResHMarker = new google.maps.Marker({
        //     position: buildings[20],
        //     icon: lightblueMarker,
        //     title: "Gruenhagen Conference Center"
        // });
        // var horizonResHMarker = new google.maps.Marker({
        //     position: buildings[25],
        //     icon: lightblueMarker,
        //     title: "Horizon Village"
        // });
        // var stewartResHMarker = new google.maps.Marker({
        //     position: buildings[37],
        //     icon: lightblueMarker,
        //     title: "Stewart Hall"
        // });
        // var scottResHMarker = new google.maps.Marker({
        //     position: buildings[36],
        //     icon: lightblueMarker,
        //     title: "Scott Hall"
        // });
        // var taylorResHMarker = new google.maps.Marker({
        //     position: buildings[41],
        //     icon: lightblueMarker,
        //     title: "Taylor Hall"
        // });
        // var websterResHMarker = new google.maps.Marker({
        //     position: buildings[44],
        //     icon: lightblueMarker,
        //     title: "Webster Hall"
        // });

        // ResH hover
        // donnerResHMarker.addListener('click', function(){
        //     var donner = "donner";
        //     markerOpenClose(donner);
        // });

        // evansResHMarker.addListener('click', function(){
        //     var evans = "evans";
        //     markerOpenClose(evans);
        //  });

        // fletcherResHMarker.addListener('click', function(){
        //     var fletcher = "fletcher";
        //     markerOpenClose(fletcher);
        //  });

        // gruenhagenResHMarker.addListener('click', function(){
        //     var gruenhagen = "gruenhagen";
        //     markerOpenClose(gruenhagen);
        // });

        // horizonResHMarker.addListener('click', function(){
        //     var horizon = "horizon";
        //     markerOpenClose(horizon);
        // });

        // stewartResHMarker.addListener('click', function(){
        //     var stewart = "stewart";
        //     markerOpenClose(stewart);
        // });

        // scottResHMarker.addListener('click', function(){
        //     var scott = "scott";
        //     markerOpenClose(scott);
        // });

        // taylorResHMarker.addListener('click', function(){
        //     var taylor = "taylor";
        //     markerOpenClose(taylor);
        // });

        // websterResHMarker.addListener('click', function(){
        //     var webster = "webster";
        //     markerOpenClose(webster);
        // });


        
        
        // dining markers
        // var blackhawkDiningMarker = new google.maps.Marker({
        //     position: buildings[5],
        //     icon: navyMarker,
        //     title: "Blackhawk Commons"
        // });
        // var clowDiningMarker = new google.maps.Marker({
        //     position: buildings[11],
        //     icon: navyMarker,
        //     title: "Clow Social Science Center"
        // });
        // var halseyDiningMarker = new google.maps.Marker({
        //     position: buildings[21],
        //     icon: navyMarker,
        //     title: "Halsey Science Center"
        // });
        // var reeveDiningMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: navyMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var sageDiningMarker = new google.maps.Marker({
        //     position: buildings[35],
        //     icon: navyMarker,
        //     title: "Sage Hall"
        // });
        // var scottDiningMarker = new google.maps.Marker({
        //     position: buildings[36],
        //     icon: navyMarker,
        //     title: "Scott Hall"
        // });

        // dining hover
        // blackhawkDiningMarker.addListener('click', function(){
        //     var blackhawk = "blackhawk";
        //     markerOpenClose(blackhawk);
        // });

        // clowDiningMarker.addListener('click', function(){
        //     var clow = "clow";
        //     markerOpenClose(clow);
        // });

        // halseyDiningMarker.addListener('click', function(){
        //     var halsey = "halsey";
        //     markerOpenClose(halsey);
        // });

        // reeveDiningMarker.addListener('click', function(){
        //     var reeve = "reeve";
        //     markerOpenClose(reeve);
        // });

        // sageDiningMarker.addListener('click', function(){
        //     var sage = "sage";
        //     markerOpenClose(sage);
        // });

        // scottDiningMarker.addListener('click', function(){
        //     var scott = "scott";
        //     markerOpenClose(scott);
        // });
         // creating sust markers
        // var albeeSustMarker = new google.maps.Marker({
        //     position: buildings[0],
        //     icon: greenMarker,
        //     title: "Albee Hall"
        // });
        // var alumniSustMarker = new google.maps.Marker({
        //     position: buildings[2],
        //     icon: greenMarker,
        //     title: "Alumni Welcome and Conference Center"
        // });
        // var blackhawkSustMarker = new google.maps.Marker({
        //     position: buildings[5],
        //     icon: greenMarker,
        //     title: "Blackhawk Commons"
        // });
        // var biodigesterSustMarker = new google.maps.Marker({
        //     position: buildings[6],
        //     icon: greenMarker,
        //     title: "Biodigester"
        // });
        // var heatingSustMarker = new google.maps.Marker({
        //     position: buildings[23],
        //     icon: greenMarker,
        //     title: "Heating Plant"
        // });
        // var horizonSustMarker = new google.maps.Marker({
        //     position: buildings[25],
        //     icon: greenMarker,
        //     title: "Horizon Village"
        // });
        // var reeveSustMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: greenMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var sageSustMarker = new google.maps.Marker({
        //     position: buildings[35],
        //     icon: greenMarker,
        //     title: "Sage Hall"
        // });
        // var recreationSustMarker = new google.maps.Marker({
        //     position: buildings[38],
        //     icon: greenMarker,
        //     title: "Student Recreation and Conference Center"
        // });
        // var successSustMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     icon: greenMarker,
        //     title: "Student Success Center"
        // });
        // var taylorSustMarker = new google.maps.Marker({
        //     position: buildings[41],
        //     icon: greenMarker,
        //     title: "Taylor Hall"
        // });
        // var titanSustMarker = new google.maps.Marker({
        //     position: buildings[42],
        //     icon: greenMarker,
        //     title: "Titan Stadium"
        // });

        // sust hovers
        // albeeSustMarker.addListener('click', function(){
        //     markerOpenClose("albee");
        // });

        // alumniSustMarker.addListener('click', function(){
        //     markerOpenClose("alumni");
        // });

        // blackhawkSustMarker.addListener('click', function(){
        //     markerOpenClose("blackhawk");
        // });

        // biodigesterSustMarker.addListener('click', function(){
        //     markerOpenClose("biodigester");
        // });

        // heatingSustMarker.addListener('click', function(){
        //     markerOpenClose("heating");
        // });

        // horizonSustMarker.addListener('click', function(){
        //     var horizon = "horizon";
        //     markerOpenClose(horizon);
        // });

        // reeveSustMarker.addListener('click', function(){
        //     var reeve = "reeve";
        //     markerOpenClose(reeve);
        // });

        // sageSustMarker.addListener('click', function(){
        //     var sage = "sage";
        //     markerOpenClose(sage);
        // });

        // recreationSustMarker.addListener('click', function(){
        //     var recreation = "recreation";
        //     markerOpenClose(recreation);
        // });

        // successSustMarker.addListener('click', function(){
        //     var success = "success";
        //     markerOpenClose(success);
        // });

        // taylorSustMarker.addListener('click', function(){
        //     var taylor = "taylor";
        //     markerOpenClose(taylor);
        // });

        // titanSustMarker.addListener('click', function(){
        //     var titan = "titan";
        //     markerOpenClose(titan);
        // });
        // parking lots markers
        // var elevenMarker = new google.maps.Marker({
        //     position: parkingLots[0],
        //     title: "Lot 11"
        // });
        // var thirtyfiveMarker = new google.maps.Marker({
        //     position: parkingLots[1],
        //     title: "Lot 35"
        // });
        // var twentysevenMarker = new google.maps.Marker({
        //     position: parkingLots[2],
        //     title: "Lot 27"
        // });
        // var twentyoneMarker = new google.maps.Marker({
        //     position: parkingLots[3],
        //     title: "Lot 21"
        // });
        // var twentysixMarker = new google.maps.Marker({
        //     position: parkingLots[4],
        //     title: "Lot 26"
        // });
        // var fourMarker = new google.maps.Marker({
        //     position: parkingLots[5],
        //     title: "Lot 4"
        // });
        // var fouraMarker = new google.maps.Marker({
        //     position: parkingLots[6],
        //     title: "Lot 4a"
        // });
        // var sixteenMarker = new google.maps.Marker({
        //     position: parkingLots[7],
        //     title: "Lot 16"
        // });
        // var seventeenMarker = new google.maps.Marker({
        //     position: parkingLots[8],
        //     title: "Lot 17"
        // });
        // var twentynineMarker = new google.maps.Marker({
        //     position: parkingLots[9],
        //     title: "Lot 29"
        // });
        // var twentyfiveMarker = new google.maps.Marker({
        //     position: parkingLots[10],
        //     title: "Lot 25"
        // });
        // var eightMarker = new google.maps.Marker({
        //     position: parkingLots[11],
        //     title: "Lot 8"
        // });
        // var thirtythreeMarker = new google.maps.Marker({
        //     position: parkingLots[12],
        //     title: "Lot 33"
        // });
        // var twentyeightMarker = new google.maps.Marker({
        //     position: parkingLots[14],
        //     title: "Lot 28"
        // });
        // var twentythreeMarker = new google.maps.Marker({
        //     position: parkingLots[15],
        //     title: "Lot 23"
        // });
        // var fourteenaMarker = new google.maps.Marker({
        //     position: parkingLots[16],
        //     title: "Lot 14a"
        // });
        // var fourteenbMarker = new google.maps.Marker({
        //     position: parkingLots[17],
        //     title: "Lot 14b"
        // });
        // var fourteencMarker = new google.maps.Marker({
        //     position: parkingLots[18],
        //     title: "Lot 14c"
        // });
        // var sevenMarker = new google.maps.Marker({
        //     position: parkingLots[19],
        //     title: "Lot 7"
        // });
        // var fiveaMarker = new google.maps.Marker({
        //     position: parkingLots[20],
        //     title: "Lot 5a"
        // });
        // var fiveMarker = new google.maps.Marker({
        //     position: parkingLots[21],
        //     title: "Lot 5"
        // });
        // var sevenaMarker = new google.maps.Marker({
        //     position: parkingLots[22],
        //     title: "Lot 7a"
        // });
        // var fifteenMarker = new google.maps.Marker({
        //     position: parkingLots[23],
        //     title: "Lot 15"
        // });
        // var thirtytwoMarker = new google.maps.Marker({
        //     position: parkingLots[24],
        //     title: "Lot 32"
        // });
        // var thirteenMarker = new google.maps.Marker({
        //     position: parkingLots[25],
        //     title: "Lot 13"
        // });
        // var twelveMarker = new google.maps.Marker({
        //     position: parkingLots[26],
        //     title: "Lot 12"
        // });
        // var sixaMarker = new google.maps.Marker({
        //     position: parkingLots[27],
        //     title: "Lot 6a"
        // });
        // var sixMarker = new google.maps.Marker({
        //     position: parkingLots[28],
        //     title: "Lot 6"
        // });
        // var tenMarker = new google.maps.Marker({
        //     position: parkingLots[29],
        //     title: "Lot 10"
        // });
        // var nineaMarker = new google.maps.Marker({
        //     position: parkingLots[30],
        //     title: "Lot 9a"
        // });
        // var nineMarker = new google.maps.Marker({
        //     position: parkingLots[31],
        //     title: "Lot 9"
        // });
        // var eighteenMarker = new google.maps.Marker({
        //     position: parkingLots[32],
        //     title: "Lot 18"
        // });
        // var thirtyMarker = new google.maps.Marker({
        //     position: parkingLots[33],
        //     title: "Lot 30"
        // });
        // var thirtynineMarker = new google.maps.Marker({
        //     position: parkingLots[34],
        //     title: "Lot 39"
        // });
        // creating emergency phone markers
        // var phoneZero = new google.maps.Marker({
        //     position: emergencyPhones[0],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneOne = new google.maps.Marker({
        //     position: emergencyPhones[1],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwo = new google.maps.Marker({
        //     position: emergencyPhones[2],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneThree = new google.maps.Marker({
        //     position: emergencyPhones[3],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneFour = new google.maps.Marker({
        //     position: emergencyPhones[4],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneFive= new google.maps.Marker({
        //     position: emergencyPhones[5],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneSix = new google.maps.Marker({
        //     position: emergencyPhones[6],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneSeven = new google.maps.Marker({
        //     position: emergencyPhones[7],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneEight = new google.maps.Marker({
        //     position: emergencyPhones[8],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneNine = new google.maps.Marker({
        //     position: emergencyPhones[9],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTen = new google.maps.Marker({
        //     position: emergencyPhones[10],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneEleven = new google.maps.Marker({
        //     position: emergencyPhones[11],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwelve = new google.maps.Marker({
        //     position: emergencyPhones[12],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneThirteen = new google.maps.Marker({
        //     position: emergencyPhones[13],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneFourteen = new google.maps.Marker({
        //     position: emergencyPhones[14],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneFifteen = new google.maps.Marker({
        //     position: emergencyPhones[15],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneSixteen = new google.maps.Marker({
        //     position: emergencyPhones[16],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneSeventeen = new google.maps.Marker({
        //     position: emergencyPhones[17],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneEighteen = new google.maps.Marker({
        //     position: emergencyPhones[18],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneNineteen = new google.maps.Marker({
        //     position: emergencyPhones[19],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwenty = new google.maps.Marker({
        //     position: emergencyPhones[20],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentyOne = new google.maps.Marker({
        //     position: emergencyPhones[21],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentyTwo = new google.maps.Marker({
        //     position: emergencyPhones[22],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentyThree = new google.maps.Marker({
        //     position: emergencyPhones[23],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentyFour = new google.maps.Marker({
        //     position: emergencyPhones[24],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentyFive = new google.maps.Marker({
        //     position: emergencyPhones[25],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentySix = new google.maps.Marker({
        //     position: emergencyPhones[26],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // var phoneTwentySeven = new google.maps.Marker({
        //     position: emergencyPhones[27],
        //     icon: blueMarker,
        //     title: "Emergency Phone"
        // });
        // create markers for buildings
        // var albeeMarker = new google.maps.Marker({
        //     position: buildings[0],
        //     title: "Albee Hall"
        // });
        // albeeMarker.addListener('click', function(){
        //     albeeMarker.setIcon(redMarker);
        // });
        // var baseballMarker = new google.maps.Marker({
        //     position: buildings[1],
        //     title: "Alumni Baseball Stadium"
        // });
        // var alumniMarker = new google.maps.Marker({
        //     position: buildings[2],
        //     title: "Alumni Welcome and Conference Center"
        // });
        // var acMarker = new google.maps.Marker({
        //     position: buildings[3],
        //     title: "Arts and Communications"
        // });
        // var athleticMarker = new google.maps.Marker({
        //     position: buildings[4],
        //     title: "Athletic Service Building"
        // });
        // var blackhawkMarker = new google.maps.Marker({
        //     position: buildings[5],
        //     title: "Blackhawk Commons"
        // });
        // var biodigesterMarker = new google.maps.Marker({
        //     position: buildings[6],
        //     title: "Biodigester"
        // });
        // var buckstaffMarker = new google.maps.Marker({
        //     position: buildings[7],
        //     title: "Buckstaff Planetarium"
        // });
        // var equityMarker = new google.maps.Marker({
        //     position: buildings[8],
        //     title: "Campus Center for Equity and Diversity"
        // });
        // var campusMarker = new google.maps.Marker({
        //     position: buildings[9],
        //     title: "Campus Services"
        // });
        // var ceramicsMarker = new google.maps.Marker({
        //     position: buildings[10],
        //     title: "Ceramics Laboratory"
        // });
        // var clowMarker = new google.maps.Marker({
        //     position: buildings[11],
        //     title: "Clow Social Sciences Center"
        // });
        // var gardensMarker = new google.maps.Marker({
        //     position: buildings[12],
        //     title: "Community Gardens"
        // });
        // var dempseyMarker = new google.maps.Marker({
        //     position: buildings[13],
        //     title: "Dempsey Hall"
        // });
        // var donnerMarker = new google.maps.Marker({
        //     position: buildings[14],
        //     title: "Donner Hall"
        // });
        // var eastMarker = new google.maps.Marker({
        //     position: buildings[15],
        //     title: "East Hall"
        // });
        // var environmentalMarker = new google.maps.Marker({
        //     position: buildings[16],
        //     title: "Environmental Science and Research Center"
        // });
        // var evansMarker = new google.maps.Marker({
        //     position: buildings[17],
        //     title: "Evans Hall"
        // });
        // var fletcherMarker = new google.maps.Marker({
        //     position: buildings[18],
        //     title: "Fletcher Hall"
        // });
        // var fredricMarker = new google.maps.Marker({
        //     position: buildings[19],
        //     title: "Fredric March Theater"
        // });
        // var gruenhagenMarker = new google.maps.Marker({
        //     position: buildings[20],
        //     title: "Gruenhagen Conference Center"
        // });
        // var halseyMarker = new google.maps.Marker({
        //     position: buildings[21],
        //     title: "Halsey Science Center"
        // });
        // var harringtonMarker = new google.maps.Marker({
        //     position: buildings[22],
        //     title: "Harrington Hall"
        // });
        // var heatingMarker = new google.maps.Marker({
        //     position: buildings[23],
        //     title: "Heating Plant"

        // });
        // var parkingRampMarker = new google.maps.Marker({
        //     position: buildings[24],
        //     title: "High Avenue Parking Ramp"
        // });
        // var horizonMarker = new google.maps.Marker({
        //     position: buildings[25],
        //     title: "Horizon Village"
        // });
        // var kolfMarker = new google.maps.Marker({
        //     position: buildings[26],
        //     title: "Kolf Sports Center"
        // });
        // var lincolnMarker = new google.maps.Marker({
        //     position: buildings[27],
        //     title: "Lincoln Hall"
        // });
        // var multiculturalMarker = new google.maps.Marker({
        //     position: buildings[28],
        //     title: "Multicultural Education Center"
        // });
        // var nursingMarker = new google.maps.Marker({
        //     position: buildings[29],
        //     title: "Nursing and Education Building"
        // });
        // var oviattMarker = new google.maps.Marker({
        //     position: buildings[30],
        //     title: "Oviatt House"
        // });
        // var pollockMarker = new google.maps.Marker({
        //     position: buildings[31],
        //     title: "Pollock House"
        // });
        // var polkMarker = new google.maps.Marker({
        //     position: buildings[32],
        //     title: "Polk Library"
        // });
        // var radfordMarker = new google.maps.Marker({
        //     position: buildings[33],
        //     title: "Radford Hall and Student Health Center"
        // });
        // var reeveMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     title: "Reeve Memorial Union"
        // });
        // var sageMarker = new google.maps.Marker({
        //     position: buildings[35],
        //     title: "Sage Hall"
        // });
        // var scottMarker = new google.maps.Marker({
        //     position: buildings[36],
        //     title: "Scott Hall"
        // });
        // var stewartMarker = new google.maps.Marker({
        //     position: buildings[37],
        //     title: "Stewart Hall"
        // });
        // var recreationMarker = new google.maps.Marker({
        //     position: buildings[38],
        //     title: "Student Recreation and Wellness Center"
        // });
        // var successMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     title: "Student Success Center"
        // });
        // var swartMarker = new google.maps.Marker({
        //     position: buildings[40],
        //     title: "Swart Hall"
        // });
        // var taylorMarker = new google.maps.Marker({
        //     position: buildings[41],
        //     title: "Taylor Hall"
        // });
        // var titanMarker = new google.maps.Marker({
        //     position: buildings[42],
        //     title: "Titan Stadium"
        // });
        // var policeMarker = new google.maps.Marker({
        //     position: buildings[43],
        //     title: "University Police"
        // });
        // var websterMarker = new google.maps.Marker({
        //     position: buildings[44],
        //     title: "Webster Hall"
        // });
        // accEnt markers
        // var albeeAccEntMarker = new google.maps.Marker({
        //     position: buildings[0],
        //     icon: redMarker,
        //     title: "Albee Hall"
        // });
        // var acAccEntMarker = new google.maps.Marker({
        //     position: buildings[3],
        //     icon: redMarker,
        //     title: "Arts and Communications"
        // });
        // var blackhawkAccEntMarker = new google.maps.Marker({
        //     position: buildings[5],
        //     icon: redMarker,
        //     title: "Blackhawk Commons"
        // });
        // var equityAccEntMarker = new google.maps.Marker({
        //     position: buildings[8],
        //     icon: redMarker,
        //     title: "Campus Center for Equity and Diversity"
        // });
        // var clowAccEntMarker = new google.maps.Marker({
        //     position: buildings[11],
        //     icon: redMarker,
        //     title: "Clow Social Science Center"
        // });
        // var dempseyAccEntMarker = new google.maps.Marker({
        //     position: buildings[13],
        //     icon: redMarker,
        //     title: "Dempsey Hall"
        // });
        // var donnerAccEntMarker = new google.maps.Marker({
        //     position: buildings[14],
        //     icon: redMarker,
        //     title: "Donner Hall"
        // });
        // var fletcherAccEntMarker = new google.maps.Marker({
        //     position: buildings[18],
        //     icon: redMarker,
        //     title: "Fletcher Hall"
        // });
        // var fredricAccEntMarker = new google.maps.Marker({
        //     position: buildings[19],
        //     icon: redMarker,
        //     title: "Fredric March Theater"
        // });
        // var gruenhagenAccEntMarker = new google.maps.Marker({
        //     position: buildings[20],
        //     icon: redMarker,
        //     title: "Gruenhagen Conference Center"
        // });
        // var halseyAccEntMarker = new google.maps.Marker({
        //     position: buildings[21],
        //     icon: redMarker,
        //     title: "Halsey Science Center"
        // });
        // var harringtonAccEntMarker = new google.maps.Marker({
        //     position: buildings[22],
        //     icon: redMarker,
        //     title: "Harrington Hall"
        // });
        // var kolfAccEntMarker = new google.maps.Marker({
        //     position: buildings[26],
        //     icon: redMarker,
        //     title: "Kolf Sports Center"
        // });
        // var nursingAccEntMarker = new google.maps.Marker({
        //     position: buildings[29],
        //     icon: redMarker,
        //     title: "Nursing and Education Building"
        // });
        // var polkAccEntMarker = new google.maps.Marker({
        //     position: buildings[32],
        //     icon: redMarker,
        //     title: "Polk Library"
        // });
        // var radfordAccEntMarker = new google.maps.Marker({
        //     position: buildings[33],
        //     icon: redMarker,
        //     title: "Radford Hall and Student Health Center"
        // });
        // var reeveAccEntMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: redMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var scottAccEntMarker = new google.maps.Marker({
        //     position: buildings[36],
        //     icon: redMarker,
        //     title: "Scott Hall"
        // });
        // var stewartAccEntMarker = new google.maps.Marker({
        //     position: buildings[37],
        //     icon: redMarker,
        //     title: "Stewart Hall"
        // });
        // var successAccEntMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     icon: redMarker,
        //     title: "Student Success Center"
        // });
        // var swartAccEntMarker = new google.maps.Marker({
        //     position: buildings[40],
        //     icon: redMarker,
        //     title: "Swart Hall"
        // });
        // var taylorAccEntMarker = new google.maps.Marker({
        //     position: buildings[41],
        //     icon: redMarker,
        //     title: "Taylor Hall"
        // });
        // var websterAccEntMarker = new google.maps.Marker({
        //     position: buildings[44],
        //     icon: redMarker,
        //     title: "Webster Hall"
        // });
        // markers for accessible parking locations
        // var womensCenter = {lat: 44.024816, lng: -88.546638};
        // var womensCenterMarker = new google.maps.Marker({
        //     position: womensCenter,
        //     icon: tealMarker,
        //     title: "Women's Center"
        // });

        // var titanOne = {lat: 44.024401, lng: -88.564253};
        // var titanOneMarker = new google.maps.Marker({
        //     position: titanOne,
        //     icon: tealMarker,
        //     title: "Titan One"
        // });

        // var titanTwo = {lat: 44.023007, lng:  -88.564339};
        // var titanTwoMarker = new google.maps.Marker({
        //     position: titanTwo,
        //     icon: tealMarker,
        //     title: "Titan Two"
        // });
        // var elevenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[0],
        //     icon: tealMarker,
        //     title: "Lot 11"
        // });
        // var fourAccParMarker = new google.maps.Marker({
        //     position: parkingLots[5],
        //     icon:  tealMarker,
        //     title: "Lot 4"
        // });
        // var fouraAccParMarker = new google.maps.Marker({
        //     position: parkingLots[6],
        //     icon:  tealMarker,
        //     title: "Lot 4a"
        // });
        // var sixteenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[7],
        //     icon:  tealMarker,
        //     title: "Lot 16"
        // });
        // var seventeenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[8],
        //     icon:  tealMarker,
        //     title: "Lot 17"
        // });
        // var twentynineAccParMarker = new google.maps.Marker({
        //     position: parkingLots[9],
        //     icon: tealMarker,
        //     title: "Lot 29"
        // });
        // var twentyfiveAccParMarker = new google.maps.Marker({
        //     position: parkingLots[10],
        //     icon: tealMarker,
        //     title: "Lot 25"
        // });
        // var thirtythreeAccParMarker = new google.maps.Marker({
        //     position: parkingLots[12],
        //     icon: tealMarker,
        //     title: "Lot 33"
        // });
        // var fourteenaAccParMarker = new google.maps.Marker({
        //     position: parkingLots[16],
        //     icon: tealMarker,
        //     title: "Lot 14a"
        // });
        // var sevenaAccParMarker = new google.maps.Marker({
        //     position: parkingLots[22],
        //     icon: tealMarker,
        //     title: "Lot 7a"
        // });
        // var thirteenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[25],
        //     icon: tealMarker,
        //     title: "Lot 13"
        // });
        // var thirtyfourAccParMarker = new google.maps.Marker({
        //     position: parkingLots[13],
        //     icon: tealMarker,
        //     title: "Lot 34"
        // });
        // var twentyeightAccParMarker = new google.maps.Marker({
        //     position: parkingLots[14],
        //     icon: tealMarker,
        //     title: "Lot 28"
        // });
        // var twentythreeAccParMarker = new google.maps.Marker({
        //     position: parkingLots[15],
        //     icon: tealMarker,
        //     title: "Lot 23"
        // });
        // var fifteenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[23],
        //     icon:  tealMarker,
        //     title: "Lot 15"
        // });
        // var thirtytwoAccParMarker = new google.maps.Marker({
        //     position: parkingLots[24],
        //     icon:  tealMarker,
        //     title: "Lot 32"
        // });
        // var tenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[29],
        //     icon:  tealMarker,
        //     title: "Lot 10"
        // });
        // var twelveAccParMarker = new google.maps.Marker({
        //     position: parkingLots[26],
        //     icon:  tealMarker,
        //     title: "Lot 12"
        // });
        // var sixaAccParMarker = new google.maps.Marker({
        //     position: parkingLots[27],
        //     icon:  tealMarker,
        //     title: "Lot 6a"
        // });
        // var sixAccParMarker = new google.maps.Marker({
        //     position: parkingLots[28],
        //     icon: tealMarker,
        //     title: "Lot 6"
        // });
        // var eighteenAccParMarker = new google.maps.Marker({
        //     position: parkingLots[32],
        //     icon: tealMarker,
        //     title: "Lot 18"
        // });
         // create gender markers
        // var acGenderMarker = new google.maps.Marker({
        //     position: buildings[3],
        //     icon: lightpurpleMarker,
        //     title: "Arts and Communications"
        // });
        // var blackhawkGenderMarker = new google.maps.Marker({
        //     position: buildings[5],
        //     icon: lightpurpleMarker,
        //     title: "Blackhawk Commons"
        // });
        // var campusGenderMarker = new google.maps.Marker({
        //     position: buildings[9],
        //     icon: lightpurpleMarker,
        //     title: "Campus Center for Equity and Diversity"
        // });
        // var dempseyGenderMarker = new google.maps.Marker({
        //     position: buildings[13],
        //     icon: lightpurpleMarker,
        //     title: "Dempsey Hall"
        // });
        // var halseyGenderMarker = new google.maps.Marker({
        //     position: buildings[21],
        //     icon: lightpurpleMarker,
        //     title: "Halsey Science Center"
        // });
        // var harringtonGenderMarker = new google.maps.Marker({
        //     position: buildings[22],
        //     icon: lightpurpleMarker,
        //     title: "Harrington Hall"
        // });
        // var kolfGenderMarker = new google.maps.Marker({
        //     position: buildings[26],
        //     icon: lightpurpleMarker,
        //     title: "Kolf Sports Center"
        // });
        // var nursingGenderMarker = new google.maps.Marker({
        //     position: buildings[29],
        //     icon: lightpurpleMarker,
        //     title: "Nursing and Education Building"
        // });
        // var reeveGenderMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: lightpurpleMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var sageGenderMarker = new google.maps.Marker({
        //     position: buildings[35],
        //     icon: lightpurpleMarker,
        //     title: "Sage Hall"
        // });
        // var recreationGenderMarker = new google.maps.Marker({
        //     position: buildings[38],
        //     icon: lightpurpleMarker,
        //     title: "Student Recreation and Wellness Center"
        // });
        // var successGenderMarker = new google.maps.Marker({
        //     position: buildings[39],
        //     icon: lightpurpleMarker,
        //     title: "Student Success Center"
        // });
        // var swartGenderMarker = new google.maps.Marker({
        //     position: buildings[40],
        //     icon: lightpurpleMarker,
        //     title: "Swart Hall"
        // });
        // var policeGenderMarker = new google.maps.Marker({
        //     position: buildings[43],
        //     icon: lightpurpleMarker,
        //     title: "University Police"
        // });


        // gender hover
        // acGenderMarker.addListener('click', function(){
        //     var ac = "ac";
        //     markerOpenClose(ac);
        // });

        // blackhawkGenderMarker.addListener('click', function(){
        //     var blackhawk = "blackhawk";
        //     markerOpenClose(blackhawk);
        // });

        // campusGenderMarker.addListener('click', function(){
        //     var campus = "campus";
        //     markerOpenClose(campus);
        // });

        // dempseyGenderMarker.addListener('click', function(){
        //     var dempsey = "dempsey";
        //     markerOpenClose(dempsey);
            
        // });

        // halseyGenderMarker.addListener('click', function(){
        //     var halsey = "halsey";
        //     markerOpenClose(halsey);
        // });

        // harringtonGenderMarker.addListener('click', function(){
        //     var harrington = "harrington";
        //     markerOpenClose(harrington);
        // });

        // kolfGenderMarker.addListener('click', function(){
        //     var kolf = "kolf";
        //     markerOpenClose(kolf);
        // });

        // nursingGenderMarker.addListener('click', function(){
        //     var nursing = "nursing";
        //     markerOpenClose(nursing);
        // });

        // reeveGenderMarker.addListener('click', function(){
        //     var reeve = "reeve";
        //     markerOpenClose(reeve);
        // });

        // sageGenderMarker.addListener('click', function(){
        //     var sage = "sage";
        //     markerOpenClose(sage);
        // });

        // recreationGenderMarker.addListener('click', function(){
        //     var recreation = "recreation";
        //     markerOpenClose(recreation);
        // });

        // successGenderMarker.addListener('click', function(){
        //     var success = "success";
        //     markerOpenClose(success);
        // });

        // swartGenderMarker.addListener('click', function(){
        //     var swart = "swart";
        //     markerOpenClose(swart);
        // });

        // policeGenderMarker.addListener('click', function(){
        //     var police = "police";
        //     markerOpenClose(police);
        // });

        // accEnt hover cards for markers
        // albeeAccEntMarker.addListener('click', function(){
        //     markerOpenClose("albee");
        // });

        // acAccEntMarker.addListener('click', function(){
        //     markerOpenClose("ac");
        // });

        // blackhawkAccEntMarker.addListener('click', function(){
        //     markerOpenClose("blackhawk");
        // });

        // equityAccEntMarker.addListener('click', function(){
        //     markerOpenClose("equity");
        // });

        // clowAccEntMarker.addListener('click', function(){
        //     markerOpenClose("clow");
        // });

        // dempseyAccEntMarker.addListener('click', function(){
        //     markerOpenClose("dempsey");
            
        // });

        // donnerAccEntMarker.addListener('click', function(){
        //     markerOpenClose("donner");
        // });

        // fletcherAccEntMarker.addListener('click', function(){
        //     markerOpenClose("fletcher");
        // });

        // fredricAccEntMarker.addListener('click', function(){
        //     markerOpenClose("fredric");
        //  });

        // gruenhagenAccEntMarker.addListener('click', function(){
        //     markerOpenClose("gruenhagen");
        // });

        // halseyAccEntMarker.addListener('click', function(){
        //     markerOpenClose("halsey");
        // });

        // harringtonAccEntMarker.addListener('click', function(){
        //     markerOpenClose("harrington");
        // });

        // kolfAccEntMarker.addListener('click', function(){
        //     markerOpenClose("kolf");
        // });

        // nursingAccEntMarker.addListener('click', function(){
        //     markerOpenClose("nursing");
        // });

        // polkAccEntMarker.addListener('click', function(){
        //     markerOpenClose("polk");
        // });

        // radfordAccEntMarker.addListener('click', function(){
        //     markerOpenClose("radford");
        // });

        // reeveAccEntMarker.addListener('click', function(){
        //     markerOpenClose("reeve");
        // });

        // scottAccEntMarker.addListener('click', function(){
        //     markerOpenClose("scott");
        // });

        // stewartAccEntMarker.addListener('click', function(){
        //     markerOpenClose("stewart");
        // });

        // successAccEntMarker.addListener('click', function(){
        //     markerOpenClose("success");
        // });

        // swartAccEntMarker.addListener('click', function(){
        //     markerOpenClose("swart");
        // });

        // taylorAccEntMarker.addListener('click', function(){
        //     markerOpenClose("taylor");
        // });

        // websterAccEntMarker.addListener('click', function(){
        //     markerOpenClose("webster");
        // });
        // StuR markers
        // var reeveStuRMarker = new google.maps.Marker({
        //     position: buildings[34],
        //     icon: darkpurpleMarker,
        //     title: "Reeve Memorial Union"
        // });
        // var recreationStuRMarker = new google.maps.Marker({
        //     position: buildings[38],
        //     icon: darkpurpleMarker,
        //     title: "Student Recreation and Wellness Center"
        // });

        // StuR hover
        // recreationStuRMarker.addListener('click', function(){
        //     var recreation = "recreation";
        //     markerOpenClose(recreation);
        // });

        // reeveStuRMarker.addListener('click', function(){
        //     var reeve = "reeve";
        //     markerOpenClose(reeve);
        // });

        // //  hover event listeners for accessible parking here
        // elevenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("eleven");
        // });
        // fourAccParMarker.addListener('click', function(){
        //     parkingOpenClose("four");
        // });
        // fouraAccParMarker.addListener('click', function(){
        //     parkingOpenClose("foura");
        // });
        // sixteenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("sixteen");
        // });
        // seventeenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("seventeen");
        // });
        // twentynineAccParMarker.addListener('click', function(){
        //     parkingOpenClose("twentynine");
        // });
        // twentyfiveAccParMarker.addListener('click', function(){
        //     parkingOpenClose("twentyfive");
        // });
        // thirtythreeAccParMarker.addListener('click', function(){
        //     parkingOpenClose("thirtythree");
        // });
        // fourteenaAccParMarker.addListener('click', function(){
        //     parkingOpenClose("fourteena");
        // });
        // sevenaAccParMarker.addListener('click', function(){
        //     parkingOpenClose("sevena");
        // });
        // thirteenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("thirteen");
        // });
        // thirtyfourAccParMarker.addListener('click', function(){
        //     parkingOpenClose("thirtyfour");
        // });
        // twentyeightAccParMarker.addListener('click', function(){
        //     parkingOpenClose("twentyeight");
        // });
        // twentythreeAccParMarker.addListener('click', function(){
        //     parkingOpenClose( "twentythree");
        // });

        // womensCenterMarker.addListener('click', function(){
        //     parkingOpenClose("womensCenter");
        // });

        // fifteenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("fifteen");
        // });
        // thirtytwoAccParMarker.addListener('click', function(){
        //     parkingOpenClose("thirtytwo");
        // });

        // // parking ramp

        // tenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("ten");
        // });
        // twelveAccParMarker.addListener('click', function(){
        //     parkingOpenClose("twelve");
        // });
        // sixaAccParMarker.addListener('click', function(){
        //     parkingOpenClose("sixa");
        // });
        // sixAccParMarker.addListener('click', function(){
        //     parkingOpenClose("six");
        // });
        // eighteenAccParMarker.addListener('click', function(){
        //     parkingOpenClose("eighteen");
        // });
        // allMarkers[0].setMap(map);
            // baseballMarker.setMap(map);
            // alumniMarker.setMap(map);
            // acMarker.setMap(map);
            // athleticMarker.setMap(map);
            // blackhawkMarker.setMap(map);
            // biodigesterMarker.setMap(map);
            // buckstaffMarker.setMap(map);
            // equityMarker.setMap(map);
            // campusMarker.setMap(map);
            // ceramicsMarker.setMap(map);
            // clowMarker.setMap(map);
            // gardensMarker.setMap(map);
            // dempseyMarker.setMap(map);
            // donnerMarker.setMap(map);
            // eastMarker.setMap(map);
            // environmentalMarker.setMap(map);
            // evansMarker.setMap(map);
            // fletcherMarker.setMap(map);
            // fredricMarker.setMap(map);
            // gruenhagenMarker.setMap(map);
            // halseyMarker.setMap(map);
            // harringtonMarker.setMap(map);
            // heatingMarker.setMap(map);
            // parkingRampMarker.setMap(map);
            // horizonMarker.setMap(map);
            // kolfMarker.setMap(map);
            // lincolnMarker.setMap(map);
            // multiculturalMarker.setMap(map);
            // nursingMarker.setMap(map);
            // oviattMarker.setMap(map);
            // pollockMarker.setMap(map);
            // polkMarker.setMap(map);
            // radfordMarker.setMap(map);
            // reeveMarker.setMap(map);
            // sageMarker.setMap(map);
            // scottMarker.setMap(map);
            // stewartMarker.setMap(map);
            // recreationMarker.setMap(map);
            // successMarker.setMap(map);
            // swartMarker.setMap(map);
            // taylorMarker.setMap(map);
            // titanMarker.setMap(map);
            // policeMarker.setMap(map);
            // websterMarker.setMap(map);

            // allMarkers[0].setIcon(yellowMarker);
            // baseballMarker.setIcon(yellowMarker);
            // alumniMarker.setIcon(yellowMarker);
            // acMarker.setIcon(yellowMarker);
            // athleticMarker.setIcon(yellowMarker);
            // blackhawkMarker.setIcon(yellowMarker);
            // biodigesterMarker.setIcon(yellowMarker);
            // buckstaffMarker.setIcon(yellowMarker);
            // equityMarker.setIcon(yellowMarker);
            // campusMarker.setIcon(yellowMarker);
            // ceramicsMarker.setIcon(yellowMarker);
            // clowMarker.setIcon(yellowMarker);
            // gardensMarker.setIcon(yellowMarker);
            // dempseyMarker.setIcon(yellowMarker);
            // donnerMarker.setIcon(yellowMarker);
            // eastMarker.setIcon(yellowMarker);
            // environmentalMarker.setIcon(yellowMarker);
            // evansMarker.setIcon(yellowMarker);
            // fletcherMarker.setIcon(yellowMarker);
            // fredricMarker.setIcon(yellowMarker);
            // gruenhagenMarker.setIcon(yellowMarker);
            // halseyMarker.setIcon(yellowMarker);
            // harringtonMarker.setIcon(yellowMarker);
            // heatingMarker.setIcon(yellowMarker);
            // parkingRampMarker.setIcon(yellowMarker);
            // horizonMarker.setIcon(yellowMarker);
            // kolfMarker.setIcon(yellowMarker);
            // lincolnMarker.setIcon(yellowMarker);
            // multiculturalMarker.setIcon(yellowMarker);
            // nursingMarker.setIcon(yellowMarker);
            // oviattMarker.setIcon(yellowMarker);
            // pollockMarker.setIcon(yellowMarker);
            // polkMarker.setIcon(yellowMarker);
            // radfordMarker.setIcon(yellowMarker);
            // reeveMarker.setIcon(yellowMarker);
            // sageMarker.setIcon(yellowMarker);
            // scottMarker.setIcon(yellowMarker);
            // stewartMarker.setIcon(yellowMarker);
            // recreationMarker.setIcon(yellowMarker);
            // successMarker.setIcon(yellowMarker);
            // swartMarker.setIcon(yellowMarker);
            // taylorMarker.setIcon(yellowMarker);
            // titanMarker.setIcon(yellowMarker);
            // policeMarker.setIcon(yellowMarker);
            // websterMarker.setIcon(yellowMarker);
            // allMarkers[0].setMap(null);
            // baseballMarker.setMap(null);
            // alumniMarker.setMap(null);
            // acMarker.setMap(null);
            // athleticMarker.setMap(null);
            // blackhawkMarker.setMap(null);
            // biodigesterMarker.setMap(null);
            // buckstaffMarker.setMap(null);
            // equityMarker.setMap(null);
            // campusMarker.setMap(null);
            // ceramicsMarker.setMap(null);
            // clowMarker.setMap(null);
            // gardensMarker.setMap(null);
            // dempseyMarker.setMap(null);
            // donnerMarker.setMap(null);
            // eastMarker.setMap(null);
            // environmentalMarker.setMap(null);
            // evansMarker.setMap(null);
            // fletcherMarker.setMap(null);
            // fredricMarker.setMap(null);
            // gruenhagenMarker.setMap(null);
            // halseyMarker.setMap(null);
            // harringtonMarker.setMap(null);
            // heatingMarker.setMap(null);
            // parkingRampMarker.setMap(null);
            // horizonMarker.setMap(null);
            // kolfMarker.setMap(null);
            // lincolnMarker.setMap(null);
            // multiculturalMarker.setMap(null);
            // nursingMarker.setMap(null);
            // oviattMarker.setMap(null);
            // pollockMarker.setMap(null);
            // polkMarker.setMap(null);
            // radfordMarker.setMap(null);
            // reeveMarker.setMap(null);
            // sageMarker.setMap(null);
            // scottMarker.setMap(null);
            // stewartMarker.setMap(null);
            // recreationMarker.setMap(null);
            // successMarker.setMap(null);
            // swartMarker.setMap(null);
            // taylorMarker.setMap(null);
            // titanMarker.setMap(null);
            // policeMarker.setMap(null);
            // websterMarker.setMap(null);
             // elevenMarker.setMap(map);
            // thirtyfiveMarker.setMap(map);
            // twentysevenMarker.setMap(map);
            // twentyoneMarker.setMap(map);
            // twentysixMarker.setMap(map);
            // fourMarker.setMap(map);
            // fouraMarker.setMap(map);
            // sixteenMarker.setMap(map);
            // seventeenMarker.setMap(map);
            // twentynineMarker.setMap(map);
            // twentyfiveMarker.setMap(map);
            // eightMarker.setMap(map);
            // thirtythreeMarker.setMap(map);
            // thirtyfourMarker.setMap(map);
            // twentyeightMarker.setMap(map);
            // twentythreeMarker.setMap(map);
            // fourteenaMarker.setMap(map);
            // fourteenbMarker.setMap(map);
            // fourteencMarker.setMap(map);
            // sevenMarker.setMap(map);
            // fiveaMarker.setMap(map);
            // fiveMarker.setMap(map);
            // sevenaMarker.setMap(map);
            // fifteenMarker.setMap(map);
            // thirtytwoMarker.setMap(map);
            // thirteenMarker.setMap(map);
            // twelveMarker.setMap(map);
            // sixaMarker.setMap(map);
            // sixMarker.setMap(map);
            // tenMarker.setMap(map);
            // nineaMarker.setMap(map);
            // nineMarker.setMap(map);
            // eighteenMarker.setMap(map);
            // thirtyMarker.setMap(map);
            // thirtynineMarker.setMap(map);

            // allMarkers[24].setIcon(pinkMarker);

            // elevenMarker.setIcon(pinkMarker);
            // thirtyfiveMarker.setIcon(pinkMarker);
            // twentysevenMarker.setIcon(pinkMarker);
            // twentyoneMarker.setIcon(pinkMarker);
            // twentysixMarker.setIcon(pinkMarker);
            // fourMarker.setIcon(pinkMarker);
            // fouraMarker.setIcon(pinkMarker);
            // sixteenMarker.setIcon(pinkMarker);
            // seventeenMarker.setIcon(pinkMarker);
            // twentynineMarker.setIcon(pinkMarker);
            // twentyfiveMarker.setIcon(pinkMarker);
            // eightMarker.setIcon(pinkMarker);
            // thirtythreeMarker.setIcon(pinkMarker);
            // thirtyfourMarker.setIcon(pinkMarker);
            // twentyeightMarker.setIcon(pinkMarker);
            // twentythreeMarker.setIcon(pinkMarker);
            // fourteenaMarker.setIcon(pinkMarker);
            // fourteenbMarker.setIcon(pinkMarker);
            // fourteencMarker.setIcon(pinkMarker);
            // sevenMarker.setIcon(pinkMarker);
            // fiveaMarker.setIcon(pinkMarker);
            // fiveMarker.setIcon(pinkMarker);
            // sevenaMarker.setIcon(pinkMarker);
            // fifteenMarker.setIcon(pinkMarker);
            // thirtytwoMarker.setIcon(pinkMarker);
            // thirteenMarker.setIcon(pinkMarker);
            // twelveMarker.setIcon(pinkMarker);
            // sixaMarker.setIcon(pinkMarker);
            // sixMarker.setIcon(pinkMarker);
            // tenMarker.setIcon(pinkMarker);
            // nineaMarker.setIcon(pinkMarker);
            // nineMarker.setIcon(pinkMarker);
            // eighteenMarker.setIcon(pinkMarker);
            // thirtyMarker.setIcon(pinkMarker);
            // thirtynineMarker.setIcon(pinkMarker);
            // elevenMarker.setMap(null);
            // thirtyfiveMarker.setMap(null);
            // twentysevenMarker.setMap(null);
            // twentyoneMarker.setMap(null);
            // twentysixMarker.setMap(null);
            // fourMarker.setMap(null);
            // fouraMarker.setMap(null);
            // sixteenMarker.setMap(null);
            // seventeenMarker.setMap(null);
            // twentynineMarker.setMap(null);
            // twentyfiveMarker.setMap(null);
            // eightMarker.setMap(null);
            // thirtythreeMarker.setMap(null);
            // thirtyfourMarker.setMap(null);
            // twentyeightMarker.setMap(null);
            // twentythreeMarker.setMap(null);
            // fourteenaMarker.setMap(null);
            // fourteenbMarker.setMap(null);
            // fourteencMarker.setMap(null);
            // sevenMarker.setMap(null);
            // fiveaMarker.setMap(null);
            // fiveMarker.setMap(null);
            // sevenaMarker.setMap(null);
            // fifteenMarker.setMap(null);
            // thirtytwoMarker.setMap(null);
            // thirteenMarker.setMap(null);
            // twelveMarker.setMap(null);
            // sixaMarker.setMap(null);
            // sixMarker.setMap(null);
            // tenMarker.setMap(null);
            // nineaMarker.setMap(null);
            // nineMarker.setMap(null);
            // eighteenMarker.setMap(null);
            // thirtyMarker.setMap(null);
            // thirtynineMarker.setMap(null);
            // allMarkers[0].setIcon(redMarker);
            // acMarker.setIcon(redMarker);
            // blackhawkMarker.setIcon(redMarker);
            // equityMarker.setIcon(redMarker);
            // clowMarker.setIcon(redMarker);
            // dempseyMarker.setIcon(redMarker);
            // donnerMarker.setIcon(redMarker);
            // fletcherMarker.setIcon(redMarker);
            // fredricMarker.setIcon(redMarker);
            // gruenhagenMarker.setIcon(redMarker);
            // halseyMarker.setIcon(redMarker);
            // harringtonMarker.setIcon(redMarker);
            // kolfMarker.setIcon(redMarker);
            // nursingMarker.setIcon(redMarker);
            // polkMarker.setIcon(redMarker);
            // radfordMarker.setIcon(redMarker);
            // reeveMarker.setIcon(redMarker);
            // scottMarker.setIcon(redMarker);
            // stewartMarker.setIcon(redMarker);
            // successMarker.setIcon(redMarker);
            // swartMarker.setIcon(redMarker);
            // taylorMarker.setIcon(redMarker);
            // websterMarker.setIcon(redMarker);

            // allMarkers[0].setMap(null);
            // acMarker.setMap(null);
            // blackhawkMarker.setMap(null);
            // equityMarker.setMap(null);
            // clowMarker.setMap(null);
            // dempseyMarker.setMap(null);
            // donnerMarker.setMap(null);
            // fletcherMarker.setMap(null);
            // fredricMarker.setMap(null);
            // gruenhagenMarker.setMap(null);
            // halseyMarker.setMap(null);
            // harringtonMarker.setMap(null);
            // kolfMarker.setMap(null);
            // nursingMarker.setMap(null);
            // polkMarker.setMap(null);
            // radfordMarker.setMap(null);
            // reeveMarker.setMap(null);
            // scottMarker.setMap(null);
            // stewartMarker.setMap(null);
            // successMarker.setMap(null);
            // swartMarker.setMap(null);
            // taylorMarker.setMap(null);
            // websterMarker.setMap(null);
            // phoneZero.setMap(map);
            // phoneOne.setMap(map);
            // phoneTwo.setMap(map);
            // phoneThree.setMap(map);
            // phoneFour.setMap(map);
            // phoneFive.setMap(map);
            // phoneSix.setMap(map);
            // phoneSeven.setMap(map);
            // phoneEight.setMap(map);
            // phoneNine.setMap(map);
            // phoneTen.setMap(map);
            // phoneEleven.setMap(map);
            // phoneTwelve.setMap(map);
            // phoneThirteen.setMap(map);
            // phoneFourteen.setMap(map);
            // phoneFifteen.setMap(map);
            // phoneSixteen.setMap(map);
            // phoneSeventeen.setMap(map);
            // phoneEighteen.setMap(map);
            // phoneNineteen.setMap(map);
            // phoneTwenty.setMap(map);
            // phoneTwentyOne.setMap(map);
            // phoneTwentyTwo.setMap(map);
            // phoneTwentyThree.setMap(map);
            // phoneTwentyFour.setMap(map);
            // phoneTwentyFive.setMap(map);
            // phoneTwentySix.setMap(map);
            // phoneTwentySeven.setMap(map);
             // phoneZero.setMap(null);
            // phoneOne.setMap(null);
            // phoneTwo.setMap(null);
            // phoneThree.setMap(null);
            // phoneFour.setMap(null);
            // phoneFive.setMap(null);
            // phoneSix.setMap(null);
            // phoneSeven.setMap(null);
            // phoneEight.setMap(null);
            // phoneNine.setMap(null);
            // phoneTen.setMap(null);
            // phoneEleven.setMap(null);
            // phoneTwelve.setMap(null);
            // phoneThirteen.setMap(null);
            // phoneFourteen.setMap(null);
            // phoneFifteen.setMap(null);
            // phoneSixteen.setMap(null);
            // phoneSeventeen.setMap(null);
            // phoneEighteen.setMap(null);
            // phoneNineteen.setMap(null);
            // phoneTwenty.setMap(null);
            // phoneTwentyOne.setMap(null);
            // phoneTwentyTwo.setMap(null);
            // phoneTwentyThree.setMap(null);
            // phoneTwentyFour.setMap(null);
            // phoneTwentyFive.setMap(null);
            // phoneTwentySix.setMap(null);
            // phoneTwentySeven.setMap(null);