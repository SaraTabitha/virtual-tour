// google map!
// what you need to know: there are markers which are objects that are created and need a lat/lng of where they are on the map
// a title (so when you hover over the marker you know what it is called), and an icon image (made by the artists!)
// when you click on a marker there is an InfoWindow that pops up (also objects that have their content set to a selector for an 
// element in index.html)
// each InfoWindow for a Building has a thumbnail and a link that says "click here" which opens a Popup that has all of the information about 
// the building and tabs for things like bathrooms, sustainability etc. 
// all of this is handled in this file!
// recap: Markers, InfoWindows(might be referred to as Hover or Hovercards), and Popups
//
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
            //the shorthand is for html element selectors, ex "$("#albeeHover") can be accessed now with allMarkersInfo.shortHand[0] replacing "albee" in a loop
            {position: {lat: 44.025729, lng: -88.550248}, title: "Albee Hall", shortHand: "albee",
            //thumbnail is for the infowindow that pops up when you click on a marker, hoverSelector is the selector for the 
            //html element in index.html that is the content for the infoWindow 
            thumbnail: "images/campuspictures/albeehall.jpeg"
            },
            //1 baseball
            {position: {lat: 44.023042, lng: -88.561892},title: "Alumni Baseball Stadium", shortHand: "baseball",
            thumbnail:"images/campuspictures/baseball.jpg"
            },
            //2 alumni
            {position: {lat: 44.020528, lng: -88.550432},title: "Alumni Welcome and Conference Center", shortHand: "alumni",
            thumbnail: "images/campuspictures/awcc-building.jpg"
            },
            //3 ac
            {position: {lat: 44.029640, lng: -88.552137},title: "Arts and Communications", shortHand: "ac",
            thumbnail: "images/campuspictures/artscommunications.jpeg"
            },
            //4 athletic
            {position: {lat: 44.023077, lng: -88.561081},title: "Athletic Service Building", shortHand: "athletic",
            thumbnail: "images/campuspictures/athleticservice.jpeg" 
            },
            //5 blackhawk
            {position: {lat: 44.023591, lng: -88.549157},title: "Blackhawk Commons", shortHand: "blackhawk",
            thumbnail: "images/campuspictures/blackhawk.jpeg"
            },
            //6 biodigester
            {position: {lat: 44.018897, lng: -88.558015},title: "Biodigester",shortHand: "biodigester",
            thumbnail:"images/campuspictures/biodigester.jpg"
            },
            //7 buckstaff
            { position: {lat: 44.028428, lng: -88.551581},title: "Buckstaff Planetarium", shortHand: "buckstaff",
            thumbnail: "images/campuspictures/buckstaff.jpeg"
            },
            //8 equity 
            {position: {lat: 44.024655, lng: -88.547217},title: "Campus Center for Equity and Diversity",shortHand: "equity",
            thumbnail: "images/campuspictures/centerforequity.jpeg"
            },
            //9 campus services
            {position: {lat: 44.017782, lng: -88.556446},title: "Campus Services", shortHand: "campus",
            thumbnail: "images/campuspictures/campus-services.jpg"
            },
            //10 ceramics
            {position: {lat: 44.025559, lng: -88.555515},title: "Ceramics Laboratory",shortHand: "ceramics",
            thumbnail: "images/campuspictures/ceramicslab.jpeg"
            },
            //11 clow
            {position: {lat: 44.026306, lng: -88.552268},title: "Clow Social Sciences Center",shortHand: "clow",
            thumbnail:"images/campuspictures/clow.jpeg"
            },
            //12 gardens
            {position: {lat: 44.015573, lng: -88.555929},title: "Community Gardens",shortHand: "gardens",
            thumbnail:"images/campuspictures/community-gardens.jpg"
            },
            //13 dempsey
            {position: {lat: 44.026603, lng: -88.550707},title: "Dempsey Hall",shortHand: "dempsey",
            thumbnail:"images/campuspictures/dempsey.jpeg"
            },
            //14 donner
            {position: {lat: 44.025420, lng: -88.552287}, title: "Donner Hall",shortHand: "donner",
            thumbnail:"images/campuspictures/donner.jpeg"
             },
            //15 east
            {position: {lat: 44.031217, lng: -88.543806},title: "East Hall",shortHand: "east",
            thumbnail: "images/campuspictures/easthall.jpg"
            },
            //16 environmental
            { position: {lat: 44.023518, lng: -88.553851}, title: "Environmental Science and Research Center",shortHand: "environmental",
            thumbnail:"images/campuspictures/aquaticstudiescenter.jpeg"
            },
            //17 evans
            {position: {lat: 44.026168, lng: -88.547397},title: "Evans Hall",shortHand: "evans",
            thumbnail:"images/campuspictures/evans.jpeg"
             },
            //18 fletcher
            { position: {lat: 44.025332, lng: -88.547240}, title: "Fletcher Hall",shortHand: "fletcher",
            thumbnail: "images/campuspictures/fletcher.jpeg"
            },
            //19 fredric
            {position: {lat:  44.029000, lng:-88.552919},title: "Fredric March Theater",shortHand: "fredric",
            thumbnail:"images/campuspictures/fredricmarch.jpeg"
             },
            //20 gruenhagen
            { position: {lat: 44.022405, lng:  -88.548824}, title: "Gruenhagen Conference Center",shortHand: "gruenhagen",
            thumbnail:"images/campuspictures/gruenhagen.jpeg"
             },
            //21 halsey
            {position: {lat:  44.028497, lng: -88.551027},title: "Halsey Science Center",shortHand: "halsey",
            thumbnail:"images/campuspictures/halsey.jpeg"
            },
            //22 harrington
            {position: {lat:  44.027736, lng: -88.550172}, title: "Harrington Hall",shortHand: "harrington",
            thumbnail:"images/campuspictures/harrington.jpeg"
             },
            //23 heating 
            {position: {lat: 44.028235, lng: -88.554312},title: "Heating Plant",shortHand: "heating",
            thumbnail:"images/campuspictures/heatingplant.jpeg"
             },
            //24 parking ramp
            {position: {lat: 44.022960, lng: -88.549791},title: "High Avenue Parking Ramp",shortHand: "parkingRamp",
            thumbnail:"images/campuspictures/parkingramp.jpeg"
             },
            //25 horizon
            {position: {lat: 44.024363, lng: -88.547972},title: "Horizon Village",shortHand: "horizon",
            thumbnail:"images/campuspictures/horizon.jpeg"
             },
            //26 kolf
            {position: {lat: 44.024323, lng: -88.552214},title: "Kolf Sports Center",shortHand: "kolf",
            thumbnail:"images/campuspictures/kolf.jpeg"
             },
            //27 lincoln
            {position: {lat: 44.023204, lng: -88.546359},title: "Lincoln Hall",shortHand: "lincoln",
            thumbnail:"images/campuspictures/lincoln-hall.jpg"
              },
            //28 multicultural
            { position: {lat: 44.024842, lng: -88.550613}, title: "Multicultural Education Center",shortHand: "multicultural",
            thumbnail:"images/campuspictures/multiculturaleducation.jpeg"
             },
            //29 nursing
            {position: {lat: 44.027051, lng: -88.552813},title: "Nursing and Education Building",shortHand: "nursing",
            thumbnail:"images/campuspictures/nursingeducation.jpeg"
             },
            //30 oviatt
            {position: {lat:  44.027156, lng: -88.551466},title: "Oviatt House",shortHand: "oviatt",
            thumbnail:"images/campuspictures/oviatt.jpeg"
            },
            //31 pollock
            { position:  {lat: 44.025227, lng:  -88.551292},title: "Pollock House",shortHand: "pollock",
            thumbnail:"images/campuspictures/pollock.jpeg"
              },
            //32 polk
            { position: {lat: 44.026379, lng: -88.549602}, title: "Polk Library",shortHand: "polk",
            thumbnail:"images/campuspictures/polk.jpeg"
            },
            //33 radford
            { position: {lat: 44.025671, lng: -88.551561}, title: "Radford Hall and Student Health Center",shortHand: "radford",
            thumbnail:"images/campuspictures/radford.jpeg"
            },
            //34 reeve
            { position: {lat: 44.024934, lng: -88.549448}, title: "Reeve Memorial Union",shortHand: "reeve",
            thumbnail:"images/campuspictures/reeve.jpeg"
              },
            //35 sage
            { position: {lat: 44.025720, lng: -88.553770},  title: "Sage Hall",shortHand: "sage",
            thumbnail:"images/campuspictures/sage.jpeg"
             },
            //36 scott
            {position: {lat: 44.022556, lng: -88.547344},title: "Scott Hall",shortHand: "scott",
            thumbnail:"images/campuspictures/scott.jpeg"
             },
            //37 stewart
            {position: {lat: 44.026060, lng: -88.546952},title: "Stewart Hall",shortHand: "stewart",
            thumbnail: "images/campuspictures/stewart.jpeg"
             },
            //38 recreation
            {position: {lat: 44.021752, lng: -88.551694},title: "Student Recreation and Wellness Center",shortHand: "recreation",
            thumbnail:"images/campuspictures/srwc.jpeg"
             },
            //39 success
            { position: {lat: 44.026205, lng: -88.548163},  title: "Student Success Center",shortHand: "success",
            thumbnail:"images/campuspictures/studentsuccess.jpeg"
             },
            //40 swart
            { position: {lat:  44.027872, lng:  -88.551962}, title: "Swart Hall",shortHand: "swart",
            thumbnail:"images/campuspictures/swart.jpeg"
             },
            //41 taylor
            {position:  {lat: 44.024577, lng: -88.551215}, title: "Taylor Hall",shortHand: "taylor",
            thumbnail:"images/campuspictures/taylor.jpeg"
             },
            //42 titan
            {position:  {lat: 44.023671, lng: -88.562917},title: "Titan Stadium",shortHand: "titan",
            thumbnail:"images/campuspictures/titanstadium.jpeg"
            },
            //43 police
            {position:  {lat: 44.023763, lng: -88.549972},title: "University Police",shortHand: "police",
            thumbnail:"images/campuspictures/universitypolice.jpeg"
            },
            //44 webster
            {position: {lat: 44.025002, lng: -88.551681},title: "Webster Hall",shortHand: "webster",
            thumbnail:"images/campuspictures/webster.jpeg"
            },
            
            //parking lots
            // [45] Lot 11
            {position: {lat: 44.030449, lng: -88.552415},title: "Lot 11",shortHand: "eleven"
            },
            // [46] Lot 35
            { position: {lat: 44.029428, lng: -88.558183}, title: "Lot 35",shortHand: "thirtyfive"
            },
            // [47] Lot 27
            {position: {lat: 44.029026, lng: -88.554960}, title: "Lot 27",shortHand: "twentyseven"
            },
            // [48] Lot 21
            {position: {lat: 44.029123, lng: -88.553173},title: "Lot 21",shortHand: "twentyone"
            },
            // [49] Lot 26
            {position: {lat: 44.029838, lng: -88.551684},  title: "Lot 26",shortHand: "twentysix"
            },
            // [50] Lot 4
            {position: {lat: 44.029100, lng: -88.551581},title: "Lot 4",shortHand: "four"
            },
            // [51] Lot 4a
            {position: {lat: 44.028586, lng: -88.552649},  title: "Lot 4a",shortHand: "foura"
            },
            // [52] Lot 16
            {position: {lat: 44.028822, lng: -88.550956},title: "Lot 16",shortHand: "sixteen"
            },
            // [53] Lot 17
            {position: {lat: 44.028648, lng: -88.549711},title: "Lot 17",shortHand: "seventeen"
            },
            // [54] Lot 29
            { position: {lat: 44.027825, lng: -88.553434}, title: "Lot 29",shortHand: "twentynine"
            },
            // [55] Lot 25
            {position: {lat: 44.027233, lng: -88.553602}, title: "Lot 25",shortHand: "twentyfive"
            },
            // [56] Lot 8
            {position: {lat: 44.026371, lng: -88.554322}, title: "Lot 8",shortHand: "eight"
            },
            // [57] Lot 33
            {position: {lat: 44.025668, lng: -88.555558},   title: "Lot 33",shortHand: "thirtythree"
            },
            // [58] Lot 34
            {position: {lat: 44.027133, lng: -88.548009},title: "Lot 34",shortHand: "thirtyfour"
            },
            // [59] Lot 28
            {position: {lat: 44.025858, lng: -88.548893},title: "Lot 28",shortHand: "twentyeight"
            },
            // [60] Lot 23
            {position: {lat: 44.025511, lng: -88.546748},   title: "Lot 23",shortHand: "twentythree"
            },
            // [61] Lot 14a
            {position: {lat: 44.025828, lng: -88.552416},title: "Lot 14a",shortHand: "fourteena"
            },
            // [62] Lot 14b
            {position: {lat: 44.025673, lng: -88.551929},title: "Lot 14b",shortHand: "fourteenb"
            },
            // [63] Lot 14c
            {position: {lat: 44.025302, lng: -88.551711},title: "Lot 14c",shortHand: "fourteenc"
            },
            // [64] Lot 7
            {position: {lat: 44.025023, lng: -88.553519},title: "Lot 7",shortHand: "seven"
            },
            // [65] Lot 5a
            {position: {lat: 44.024150, lng: -88.554291},title: "Lot 5a",shortHand: "fivea"
            },
            // [66] Lot 5
            {position: {lat: 44.023717, lng: -88.553693}, title: "Lot 5",shortHand: "five"
            },
            // [67] Lot 7a
            {position: {lat: 44.023897, lng: -88.552670}, title: "Lot 7a",shortHand: "sevena"
            },
            // [68] Lot 15
            {position: {lat: 44.024142, lng: -88.549694},title: "Lot 15",shortHand: "fifteen"
            },
            // [69] Lot 32
            {position: {lat: 44.023912, lng: -88.550031},title: "Lot 32",shortHand: "thirtytwo"
            },
            // [70] Lot 13
            {position: {lat: 44.023505, lng: -88.551579},title: "Lot 13",shortHand: "thirteen"
            },
            // [71] Lot 12
            {position: {lat: 44.022135, lng: -88.551702}, title: "Lot 12",shortHand: "twelve"
            },
            // [72] Lot 6a
            {position: {lat: 44.021216, lng: -88.551093}, title: "Lot 6a",shortHand: "sixa"
            },
            // [73] Lot 6
            {position: {lat: 44.020887, lng: -88.549848}, title: "Lot 6",shortHand: "six"
            },
            // [74] Lot 10
            {position: {lat: 44.021857, lng: -88.548831},title: "Lot 10",shortHand: "ten"
            },
            // [75] Lot 9a
            {position: {lat: 44.022435, lng: -88.548564},title: "Lot 9a",shortHand: "ninea"
            },
            // [76] Lot 9
            {position: {lat: 44.021955, lng:  -88.548167},title: "Lot 9",shortHand: "nine"
            },
            // [77] Lot 18
            {position: {lat: 44.022368, lng: -88.546827},title: "Lot 18",shortHand: "eighteen"
            },
            // [78] Lot 30
            {position: {lat: 44.021440, lng: -88.547947},title: "Lot 30",shortHand: "thirty"
            },
            // [79] Lot 39
            {position: {lat: 44.018367, lng: -88.556821},title: "Lot 39",shortHand: "thirtynine"
            },
            //[80] womens center lot
            { position: {lat: 44.024816, lng: -88.546638},title: "Women's Center",shortHand: "womensCenter"
            },
            //[81] titan one lot
            { position: {lat: 44.024401, lng: -88.564253},title: "Titan One",shortHand: "titanOne"
            },
            //[82] titan two lot
            { position: {lat: 44.023007, lng:  -88.564339},title: "Titan Two",shortHand: "titanTwo"
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
         for(a = 0, len = allMarkersInfo.length; a < len; a++){
                    allMarkers[a] = new google.maps.Marker({
                    position: allMarkersInfo[a].position, title: allMarkersInfo[a].title
                });
        }
        // adding infoWindows for building markers 
        var infoWindowsAll = [];
          //basic single object creation for all hover infoWindows that popup when a marker is clicked
         //ex of what it looks like to set the content for just one building
        // var albeeHover =  document.getElementById('albeeHover'); (these are now the "hoverSelector:" part of the allInfo array)
        // var albeeHoverCard = new google.maps.InfoWindow({
         //     content: hoverContentSelectors[0],
        // });
         //loop to take the info from hoverContentSelectors and make a new array of hover InfoWindows
         for(b = 0; b < 83; b++){
            infoWindowsAll[b] = new google.maps.InfoWindow({
                 content: document.getElementById(allMarkersInfo[b].shortHand + "Hover"),
             });
         }
         
        //example of original code that might be useful for understanding what is happening throughout
        //sets marker on the map:
        // allMarkers[0].setMap(map);
        //sets the png image for the marker (if no icon is set it defaults to the google red marker):
        // allMarkers[0].setIcon(yellowMarker);
        //adds click event listener to the object (and will change icon color when clicked):
        // allMarkers[0].addListener('click', function(){
        //     allMarkers[0].setIcon(redMarker);
        // });
        
       
        //setting all markers /removing them from the map 
        //setting all buildings markers to the map and making them yellow
        function setBuilding(){
            for (c = 0; c < 45; c++){
                allMarkers[c].setMap(map);
                allMarkers[c].setIcon(yellowMarker);
            }
        }
        // remove all buildings from the map
        //(problematic; if other checkboxes are selected they need to reset and color their markers 
        //(if they share common markers with this set))
        function removeBuilding(){
            for (d = 0; d < 45; d++){
                allMarkers[d].setMap(null);
            }
        }
        // set parking lot markers
        function setParkingLots(){
            //parking ramp
            allMarkers[24].setMap(map);
            allMarkers[24].setIcon(pinkMarker);
            //45-82 of the markers array
            for (e = 45; e < 83; e++){
                allMarkers[e].setMap(map);
                allMarkers[e].setIcon(pinkMarker);
            }
        }
        // remove parking lot markers
        function removeParkingLots(){
            //parking ramp
            allMarkers[24].setMap(null);
            //45-82 of the markers array
            for (f = 45; f < 83; f++){
                allMarkers[f].setMap(null);
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
            for(g = 18; g < 23; g++){
                allMarkers[g].setMap(map);
                allMarkers[g].setIcon(redMarker);
            }
            //32-34
            for(h = 32; h < 35; h++){
                allMarkers[h].setMap(map);
                allMarkers[h].setIcon(redMarker);
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
            for(j = 18; j < 23; j++){
                allMarkers[j].setMap(null);
            }
            //32-34
            for(k = 32; k < 35; k++){
                allMarkers[k].setMap(null);
            }
            //39-41
            for (l = 39; l< 42; l++){
                allMarkers[l].setMap(null);
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
            for(m = 50; m < 56; m++){
                allMarkers[m].setMap(map);
                allMarkers[m].setIcon(tealMarker);
            }
            //57-61
            for(n = 57; n < 62; n++){
                allMarkers[n].setMap(map);
                allMarkers[n].setIcon(tealMarker);
            }
            //67-74
            for(o = 67; o < 75; o++){
                allMarkers[o].setMap(map);
                allMarkers[o].setIcon(tealMarker);
            }
            //80-82
            for(p = 80; p < 83; p++){
                allMarkers[p].setMap(map);
                allMarkers[p].setIcon(tealMarker);
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
            for(q = 50; q < 56; q++){
                allMarkers[q].setMap(null);
            }
            //57-61
            for(r = 57; r < 62; r++){
                allMarkers[r].setMap(null);
            }
            //67-74
            for(s = 67; s < 75; s++){
                allMarkers[s].setMap(null);
            }
            //80-82
            for(t = 80; t < 83; t++){
                allMarkers[t].setMap(null);
            }
        }
        
        
        
        // function for setting emergency phone markers
        function setEmergencyPhones(){
            //83-110 
            for(u = 83; u < 111; u++){
                allMarkers[u].setMap(map);
                allMarkers[u].setIcon(blueMarker);
            }
        }
        // function for removing emergency phone markers
        function removeEmergencyPhones(){
            //83-110 
            for(v = 83; v < 111; v++){
                allMarkers[v].setMap(null);
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

        // close all hover cards (infowindows)
        function closeAllHover(){
            //0 - 82 because only buildings and parking lots have infoWindows
            //goes through all of the infoWindows and closes them for all the markers they are attached to
            for(w = 0; w < 83; w++){
                infoWindowsAll[w].close(map, allMarkers[w]);
            }
        }
        //one function for all open/close
        //for the hover (infowindows) not the popups
        //set images to the thumbnails of the places
        function markerOpenClose(name, index){
           //if it is a building (0-44) check if it is being opened:
                if(!$("#" + name + "Hover").hasClass("hoverOpen")){
                    //close all infowindows from previously opened 
                    closeAllHover();
                    //open the infoWindow attached to the marker
                    infoWindowsAll[index].open(map, allMarkers[index]);
                    if(index < 45){
                       //set the thumbnail image for the infoWindow
                        $("#" + name + "Hover > img").attr("src", allMarkersInfo[index].thumbnail);
                    }
                    // add the open class
                    $("#" + name + "Hover").addClass("hoverOpen");
                } else {
                 //if marker is not clicked/clicked to close, then change src of image to empty, remove class and close all infowindows
                     if(index < 45){
                            $("#" + name + "Hover > img").attr("src", "");
                     }
                    $("#" + name + "Hover").removeClass("hoverOpen");
                    closeAllHover();
                }
        }
       
        allMarkers.forEach(function(thisOne){
            //thisOne will return the object itself, so we need to get the index of that object in the array
            //using the index, add an event listener for allMarkers
            thisOne.addListener('click', function(){
                var index = allMarkers.indexOf(thisOne);
               // console.log("foreach index: " + index);
                var shortHand = allMarkersInfo[index].shortHand;
                //console.log(shortHand);
                //if it is not an emergency phone->open infowindow etc.
                if(index < 83){
                    markerOpenClose(shortHand, index);
                }
            })
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
        //for each marker that is a building, there is a link for "more info", when clicked it should open an information popup
        //about the building; also each popup has a close button that should close each time it is clicked
        allMarkers.forEach(function(thisOne){
             var index = allMarkers.indexOf(thisOne);
            // console.log("Index: " + index);
            if (index < 45){
                var shortHand = allMarkersInfo[index].shortHand;
                //console.log("shorthand before click: " + shortHand)
                //event listener for clicks of the More Info link on the InfoWindows
                $("#" + shortHand + "Link").click(function(){
                    //debugger;
                    //console.log("clicked: " + shortHand);
                    popupOpen(shortHand);
                });
                //event listener for the x button on the popups (not the x on the infoWindows)
                $("#" + shortHand + "PopupClose").click(function(){
                    popupClose(shortHand);
                });
            }
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        // function tabs(name, tab, openClose){
        //     if(openClose === "open"){
        //         if (tab === "About"){
        //             $("#" + name + "AboutImage").css('display', "block");
        //             $("#" + name + "AboutText").css('display', "initial");
        //         }
        //     }
        //     else if (openClose === "close"){

        //     }
        // }
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
  //the following functions handle setting/removing markers and hover cards when checkboxes are checked or unchecked

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
            closeAllHover();
            // removes building markers
            removeBuilding();
        } 
        else if (name === "parking"){
            closeAllHover();
            removeParkingLots();
        }
        else if (name === "accEnt"){
           closeAllHover();
            removeAccEnt();
        }
        else if (name === "accPar"){
            closeAllHover();
            removeAccPar();
         }
         else if (name === "emergency"){
            removeEmergencyPhones();
            // emergency phones do not have any hovercards attached to their markers atm
         }
         else if (name === "sust"){
            closeAllHover();
            removeSust();
        }
        else if (name === "gender"){
            closeAllHover();
            removeGender();
        }
        else if (name === "accaF"){
            closeAllHover();
            removeAccaF();
        }
        else if (name === "ath"){
            closeAllHover();
            removeAth();
        }
        else if (name === "accS"){
            closeAllHover();
            removeAccaS();
        }
        else if (name === "campS"){
            closeAllHover();
            removeCampS();
        }
        else if (name === "resH"){
            closeAllHover();
            removeResH();
        }
        else if (name === "dining"){
            closeAllHover();
            removeDining();
        }
        else if (name === "stuR"){
            closeAllHover();
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

         //start of code for search that needs to interact with the infoWindows and Popups here in map.jsz
         $( "#searchInput" ).keyup(function() {
            //takes the length of the value of the string in
            // the search and returns a number
            // ex. "hello" = 5
            var characters = $(this).val().length;
            // console.log("# of characters in search:" + characters);

            //if someone types it opens the search but does not run a search until they've typed at least 3 characters
            if(characters < 3){
              $("#searchResults").css("visibility", "hidden");
                // web adjustment only
                $(".drawerContentsAdjust").css("top", "0px ");
        
            } else if (characters >= 3){
                  callAjax();
        
            }
         });
         //function for closing all of the popups (making them invisible)
        function closeAllPopup(){
          //debugger;
             for(cc = 0; cc < 45; cc++){
                 $("#"+ allMarkersInfo[cc].shortHand + "Popup").css('visibility', 'hidden');
             }
        }
            
          function callAjax(){
          $.ajax({
            type: "GET",
            url: "../php/search.php",
            data: ({search: $("#searchInput").val()}),
            success: function(results){
        
                // console.log("success!");
                // console.log(results);
            
                $("#searchResults").css("visibility","visible");
            
            
                var emptyResult = "<ul><li class='firstResults text'><h6>Search Results:</h6></li></ul>";
              if( emptyResult == results){
                    // note to self: if you want to add class/id to these make sure to use
                    // different quotations than you use to wrap the string~
                    // "" string, '' for classes and ids
                    $("#searchResults").html("<ul><li id='noResults' class='text'> No results</li></ul>");
            
              } else if (emptyResult !== results){
                    $("#searchResults").html(results);
                    //do while loop that selects all present list items and creates + assigns a unique id based on their value
                    // which is converted into a lowercase string without spaces (and has "Result" added onto it)
                    var n = 1;
                    // counting number of list items
                    var listItems = $("#searchResults > ul").children().length;
                    do {
                    n++
                    // gets value of element
                    // / /g <- selects all spaces in the string
                    var customId = $("#searchResults > ul > li:nth-child(" + n + ")").text().toLowerCase().replace(/ /g, "");
                    // sets the id of the element ^ to the string returned above
                    $("#searchResults > ul > li:nth-child(" + n + ")").prop("id", customId + "Result");
                    clickResults(customId);
                    // increase n until it matches the number of listItems that are present
                    } while (n <= listItems);
                    var possibleIds = [
                        //0 albee
                        "albeehall",
                        //1 baseball
                        "alumnibaseballstadium",
                        //2 
                        "alumniwelcomeandconferencecenter",
                        //3 ac
                        "artsandcommunicationscenter",
                        //4 athletic
                        "athleticservicebuilding",
                        //5 blackhawk
                        "blackhawkcommons",
                        //6 biodigester
                        "biodigester",
                        //7 buckstaff
                        "buckstaffplanetarium",
                        //8 equity 
                        "campuscenterforequityanddiversity",
                        //9 campus services
                        "campusservices",
                        //10 ceramics
                        "ceramicslaboratory",
                        //11 clow
                        "clowsocialsciencecenter",
                        //12 gardens
                        "communitygardens",
                        //13 dempsey
                        "dempseyhall",
                        //14 donner
                        "donnerhall",
                        //15 east
                        "easthall",
                        //16 environmental
                        "environmentalscienceandresearchcenter",
                        //17 evans
                        "evanshall",
                        //18 fletcher
                        "fletcherhall",
                        //19 fredric
                        "fredricmarchtheater",
                        //20 gruenhagen
                        "gruenhagenconferencecenter",
                        //21 halsey
                        "halseysciencecenter",
                        //22 harrington
                        "harringtonhall",
                        //23 heating 
                        "heatingplant",
                        //24 parking ramp
                        "highavenueparkingramp",
                        //25 horizon
                        "horizonvillage",
                        //26 kolf
                        "kolfsportscenter",
                        //27 lincoln
                        "lincolnhall",
                        //28 multicultural
                        "multiculturaleducationcenter",
                        //29 nursing
                        "nursingeducationbuilding",
                        //30 oviatt
                        "oviatthouse",
                        //31 pollock
                        "pollockhouse",
                        //32 polk
                        "polklibrary",
                        //33 radford
                        "radfordhallandstudenthealthcenter",
                        //34 reeve
                        "reevememorialunion",
                        //35 sage
                        "sagehall",
                        //36 scott
                        "scotthall",
                        //37 stewart
                        "stewarthall",
                        //38 recreation
                        "studentrecreationandwellnesscenter",
                        //39 success
                        "studentsuccesscenter",
                        //40 swart
                        "swarthall",
                        //41 taylor
                        "taylorhall",
                        //42 titan
                        "titanstadium",
                        //43 police
                        "universitypolicestation",
                        //44 webster
                        "websterhall"
                    ]
                    // console.log(n);
                    // console.log("number of list elements:" + listItems);
                    // $("#albeehallResult").click(function(){
                    //   $("#albeeLink").trigger("click");
                    // });
                     function clickResults(id){
                    // debugger;
                    // console.log(id);
                           $("#"+ id + "Result").click(function(){
                          closeAllPopup();
                          //checks id of clicked result and triggers a click for the "more info" link on the corresponding infoWindow
                          //debugger;
                         for(bb = 0; bb < 45; bb++){
                             if (id == possibleIds[bb]){
                                  markerOpenClose(allMarkersInfo[bb].shortHand, bb);
                                $("#" + allMarkersInfo[bb].shortHand  + "Link").trigger("click");
                            }
                          }
                     });
                }
              }
        
              var check = $("#drawerContents").hasClass("drawerContentsAdjust");
              if(check === true){
                // only for desktop
                // adjust position of menu drawer based on height of search results
                function getTotalHeight(){
                  var searchHeight = $("#searchResults").height();
                  // var mobileHeaderHeight = $("#mobileHeader").height();
                  // var webSearchHeight = $("#webSearch").height();
                  return(searchHeight - 3);
                }
                // console.log("Height of search div:" + getTotalHeight());
        
                // get element, apply css to the element(not to the class)
                // for mobile: top reset is forced with another .css
                $(".drawerContentsAdjust").css("top", getTotalHeight());
        
              }
        
        
            }
          })
        };
        //end search code
        //
    
}

 // // close all hovers attached to buildings
        // function closeAllBuildings(){
        //   albeeHoverCard.close(map, allMarkers[0]);
        //   baseballHoverCard.close(map, allMarkers[1]);
        //   alumniHoverCard.close(map, allMarkers[2]);
        //   acHoverCard.close(map, allMarkers[3]);
        //   athleticHoverCard.close(map, allMarkers[4]);
        //   blackhawkHoverCard.close(map, allMarkers[5]);
        //   biodigesterHoverCard.close(map, allMarkers[6]);
        //   buckstaffHoverCard.close(map,allMarkers[7]);
        //   equityHoverCard.close(map, allMarkers[8]);
        //   campusHoverCard.close(map, allMarkers[9]);
        //   ceramicsHoverCard.close(map, allMarkers[10]);
        //   clowHoverCard.close(map, allMarkers[11]);
        //   gardensHoverCard.close(map, allMarkers[12]);
        //   dempseyHoverCard.close(map, allMarkers[13]);
        //   donnerHoverCard.close(map, allMarkers[14]);
        //   eastHoverCard.close(map,allMarkers[15]);
        //   environmentalHoverCard.close(map, allMarkers[16]);
        //   evansHoverCard.close(map, allMarkers[17]);
        //   fletcherHoverCard.close(map, allMarkers[18]);
        //   fredricHoverCard.close(map,allMarkers[19]);
        //   gruenhagenHoverCard.close(map,allMarkers[20]);
        //   halseyHoverCard.close(map, allMarkers[21]);
        //   harringtonHoverCard.close(map, allMarkers[22]);
        //   heatingHoverCard.close(map,allMarkers[23]);
        //   parkingRampHoverCard.close(map, allMarkers[24]);
        //   horizonHoverCard.close(map, allMarkers[25]);
        //   kolfHoverCard.close(map, allMarkers[26]);
        //   lincolnHoverCard.close(map, allMarkers[27]);
        //   multiculturalHoverCard.close(map, allMarkers[28]);
        //   nursingHoverCard.close(map, allMarkers[29]);
        //   oviattHoverCard.close(map, allMarkers[30]);
        //   pollockHoverCard.close(map, allMarkers[31]);
        //   polkHoverCard.close(map, allMarkers[32]);
        //   radfordHoverCard.close(map, allMarkers[33]);
        //   reeveHoverCard.close(map, allMarkers[34]);
        //   sageHoverCard.close(map, allMarkers[35]);
        //   scottHoverCard.close(map, allMarkers[36]);
        //   stewartHoverCard.close(map, allMarkers[37]);
        //   recreationHoverCard.close(map, allMarkers[38]);
        //   successHoverCard.close(map, allMarkers[39]);
        //   swartHoverCard.close(map, allMarkers[40]);
        //   taylorHoverCard.close(map, allMarkers[41]);
        //   titanHoverCard.close(map, allMarkers[42]);
        //   policeHoverCard.close(map, allMarkers[43]);
        //   websterHoverCard.close(map, allMarkers[44]);
        // }
        // //close parking lots cards
        // function closeAllParking(){
        //   elevenHoverCard.close(map, elevenMarker);
        //   thirtyfiveHoverCard.close(map, thirtyfiveMarker);
        //   twentysevenHoverCard.close(map, twentysevenMarker);
        //   twentyoneHoverCard.close(map, twentyoneMarker);
        //   twentysixHoverCard.close(map, twentysixMarker);
        //   fourHoverCard.close(map, fourMarker);
        //   fouraHoverCard.close(map, fourMarker);
        //   sixteenHoverCard.close(map, sixteenMarker);
        //   seventeenHoverCard.close(map, seventeenMarker);
        //   twentynineHoverCard.close(map, twentynineMarker);
        //   twentyfiveHoverCard.close(map, twentyfiveMarker);
        //   eightHoverCard.close(map, eightMarker);
        //   thirtythreeHoverCard.close(map, thirtythreeMarker);
        //   thirtyfourHoverCard.close(map, thirtyfourMarker);
        //   twentyeightHoverCard.close(map, twentyeightMarker);
        //   twentythreeHoverCard.close(map, twentythreeMarker);
        //   fourteenaHoverCard.close(map, fourteenaMarker);
        //   fourteenbHoverCard.close(map, fourteenbMarker);
        //   fourteencHoverCard.close(map, fourteencMarker);
        //   sevenHoverCard.close(map, sevenMarker);
        //   fiveaHoverCard.close(map, fiveaMarker);
        //   fiveHoverCard.close(map, fiveMarker);
        //   sevenaHoverCard.close(map, sevenaMarker);
        //   fifteenHoverCard.close(map, fifteenMarker);
        //   thirtytwoHoverCard.close(map, thirtytwoMarker);
        //   thirteenHoverCard.close(map, thirteenMarker);
        //   twelveHoverCard.close(map, twelveMarker);
        //   sixaHoverCard.close(map, sixaMarker);
        //   sixHoverCard.close(map, sixMarker);
        //   tenHoverCard.close(map, tenMarker);
        //   nineaHoverCard.close(map, nineaMarker);
        //   nineHoverCard.close(map, nineMarker);
        //   eighteenHoverCard.close(map, eighteenMarker);
        //   thirtyHoverCard.close(map, thirtyMarker);
        //   thirtynineHoverCard.close(map, thirtynineMarker);
        //   womensCenterHoverCard.close(map, womensCenterMarker);
        //   titanOneHoverCard.close(map, titanOneMarker);
        //   titanTwoHoverCard.close(map, titanTwoMarker);
        // }
        // // close all accEnt cards
        // function closeAllAccEnt(){
        //   albeeHoverCard.close(map, allMarkers[0]);
        //   acHoverCard.close(map,acMarker);
        //   blackhawkHoverCard.close(map, blackhawkMarker);
        //   equityHoverCard.close(map, equityMarker);
        //   clowHoverCard.close(map, clowMarker);
        //   dempseyHoverCard.close(map, dempseyMarker);
        //   donnerHoverCard.close(map, donnerMarker);
        //   fletcherHoverCard.close(map, fletcherMarker);
        //   fredricHoverCard.close(map,fredricMarker);
        //   gruenhagenHoverCard.close(map,gruenhagenMarker);
        //   halseyHoverCard.close(map, halseyMarker);
        //   harringtonHoverCard.close(map, harringtonMarker);
        //   kolfHoverCard.close(map, kolfMarker);
        //   nursingHoverCard.close(map, nursingMarker);
        //   polkHoverCard.close(map, polkMarker);
        //   radfordHoverCard.close(map, radfordMarker);
        //   reeveHoverCard.close(map, reeveMarker);
        //   scottHoverCard.close(map, scottMarker);
        //   stewartHoverCard.close(map, stewartMarker);
        //   successHoverCard.close(map, successMarker);
        //   swartHoverCard.close(map, swartMarker);
        //   taylorHoverCard.close(map, taylorMarker);
        //   websterHoverCard.close(map, websterMarker);
        // }
        // //close all AccPark cards
        // function closeAllAccPark(){
        //   womensCenterHoverCard.close(map, womensCenterMarker);
        //   titanOneHoverCard.close(map, titanOneMarker);
        //   titanTwoHoverCard.close(map, titanTwoMarker);
        //   elevenHoverCard.close(map, elevenMarker);
        //   fourHoverCard.close(map, fourMarker);
        //   fouraHoverCard.close(map, fourMarker);
        //   sixteenHoverCard.close(map, sixteenMarker);
        //   seventeenHoverCard.close(map, seventeenMarker);
        //   twentynineHoverCard.close(map, twentynineMarker);
        //   twentyfiveHoverCard.close(map, twentyfiveMarker);
        //   thirtythreeHoverCard.close(map, thirtythreeMarker);
        //   fourteenaHoverCard.close(map, fourteenaMarker);
        //   sevenaHoverCard.close(map, sevenaMarker);
        //   thirteenHoverCard.close(map, thirteenMarker);
        //   thirtyfourHoverCard.close(map, thirtyfourMarker);
        //   twentyeightHoverCard.close(map, twentyeightMarker);
        //   twentythreeHoverCard.close(map, twentythreeMarker);
        //   fifteenHoverCard.close(map, fifteenMarker);
        //   thirtytwoHoverCard.close(map, thirtytwoMarker);
        //   tenHoverCard.close(map, tenMarker);
        //   twelveHoverCard.close(map, twelveMarker);
        //   sixaHoverCard.close(map, sixaMarker);
        //   sixHoverCard.close(map, sixMarker);
        //   eighteenHoverCard.close(map, eighteenMarker);
        // }
        // //close all sust cards
        // function closeAllSust(){
        //   albeeHoverCard.close(map, allMarkers[0]);
        //   alumniHoverCard.close(map, alumniMarker);
        //   blackhawkHoverCard.close(map, blackhawkMarker);
        //   biodigesterHoverCard.close(map, biodigesterMarker);
        //   heatingHoverCard.close(map,heatingMarker);
        //   horizonHoverCard.close(map, horizonMarker);
        //   reeveHoverCard.close(map, reeveMarker);
        //   sageHoverCard.close(map, sageMarker);
        //   recreationHoverCard.close(map, recreationMarker);
        //   successHoverCard.close(map, successMarker);
        //   taylorHoverCard.close(map, taylorMarker);
        //   titanHoverCard.close(map, titanMarker);
        // }
        // //close all gender cards
        // function closeAllGender(){
        //   acHoverCard.close(map,acMarker);
        //   blackhawkHoverCard.close(map, blackhawkMarker);
        //   campusHoverCard.close(map, campusMarker);
        //   dempseyHoverCard.close(map, dempseyMarker);
        //   halseyHoverCard.close(map, halseyMarker);
        //   harringtonHoverCard.close(map, harringtonMarker);
        //   kolfHoverCard.close(map, kolfMarker);
        //   nursingHoverCard.close(map, nursingMarker);
        //   reeveHoverCard.close(map, reeveMarker);
        //   sageHoverCard.close(map, sageMarker);
        //   recreationHoverCard.close(map, recreationMarker);
        //   successHoverCard.close(map, successMarker);
        //   swartHoverCard.close(map, swartMarker);
        //   policeHoverCard.close(map, policeMarker);
        // }
        // //close all AccaF cards
        // function closeAllAccaF(){
        //   albeeHoverCard.close(map, allMarkers[0]);
        //   acHoverCard.close(map,acMarker);
        //   ceramicsHoverCard.close(map, ceramicsMarker);
        //   clowHoverCard.close(map, clowMarker);
        //   environmentalHoverCard.close(map, environmentalMarker);
        //   fredricHoverCard.close(map,fredricMarker);
        //   halseyHoverCard.close(map, halseyMarker);
        //   harringtonHoverCard.close(map, harringtonMarker);
        //   kolfHoverCard.close(map, kolfMarker);
        //   nursingHoverCard.close(map, nursingMarker);
        //   polkHoverCard.close(map, polkMarker);
        //   radfordHoverCard.close(map, radfordMarker);
        //   sageHoverCard.close(map, sageMarker);
        //   swartHoverCard.close(map, swartMarker);
        // }
        // //close all athletics cards
        // function closeAllAth(){
        //   albeeHoverCard.close(map, allMarkers[0]);
        //   baseballHoverCard.close(map, baseballMarker);
        //   athleticHoverCard.close(map, athleticMarker);
        //   eastHoverCard.close(map,eastMarker);
        //   kolfHoverCard.close(map, kolfMarker);
        //   titanHoverCard.close(map, titanMarker);
        // }
        // //close all AccaS cards
        // function closeAllAccaS(){
        //   equityHoverCard.close(map, equityMarker);
        //   nursingHoverCard.close(map, nursingMarker);
        //   successHoverCard.close(map, successMarker);
        //   swartHoverCard.close(map, swartMarker);
        // }
        // //close all CampS cards
        // function closeAllCampS(){
        //   equityHoverCard.close(map, equityMarker);
        //   campusHoverCard.close(map, campusMarker);
        //   dempseyHoverCard.close(map, dempseyMarker);
        //   multiculturalHoverCard.close(map, multiculturalMarker);
        //   pollockHoverCard.close(map, pollockMarker);
        //   radfordHoverCard.close(map, radfordMarker);
        //   reeveHoverCard.close(map, reeveMarker);
        //   recreationHoverCard.close(map, recreationMarker);
        //   successHoverCard.close(map, successMarker);
        // }
        // //close all resH cards
        // function closeAllResH(){
        //   donnerHoverCard.close(map, donnerMarker);
        //   evansHoverCard.close(map, evansMarker);
        //   fletcherHoverCard.close(map, fletcherMarker);
        //   gruenhagenHoverCard.close(map,gruenhagenMarker);
        //   horizonHoverCard.close(map, horizonMarker);
        //   stewartHoverCard.close(map, stewartMarker);
        //   scottHoverCard.close(map, scottMarker);
        //   taylorHoverCard.close(map, taylorMarker);
        //   websterHoverCard.close(map, websterMarker);
        // }
        // //close all dining cards
        // function closeAllDining(){
        //   blackhawkHoverCard.close(map, blackhawkMarker);
        //   clowHoverCard.close(map, clowMarker);
        //   halseyHoverCard.close(map, halseyMarker);
        //   reeveHoverCard.close(map, reeveMarker);
        //   sageHoverCard.close(map, sageMarker);
        //   scottHoverCard.close(map, scottMarker);
        // }
        // //close all StuR cards
        // function closeAllStuR(){
        //   reeveHoverCard.close(map, reeveMarker);
        //   recreationHoverCard.close(map, recreationMarker);
        // }