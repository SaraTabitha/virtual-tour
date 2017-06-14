// google map!
// function for intitial map load (what appears when the page first loads)
function initMap() {
        // center of map (UWO coordinates)
        var uwo = {lat: 44.025319, lng: -88.551021};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uwo
        });
        // sets the image for the marker
        var image = 'images/marker_yellow.png';

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
          icon: image
        });
        var baseballMarker = new google.maps.Marker({
          position: buildings[1],
          icon: image
        });
        var alumniMarker = new google.maps.Marker({
          position: buildings[2],
          icon: image
        });
        var acMarker = new google.maps.Marker({
          position: buildings[3],
          icon: image
        });
        var athleticMarker = new google.maps.Marker({
          position: buildings[4],
          icon: image
        });
        var blackhawkMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });
        var biodigesterMarker = new google.maps.Marker({
          position: buildings[6],
          icon: image
        });
        var buckstaffMarker = new google.maps.Marker({
          position: buildings[7],
          icon: image
        });
        var equityMarker = new google.maps.Marker({
            position: buildings[8],
            icon: image
        });
        var campusMarker = new google.maps.Marker({
            position: buildings[9],
            icon: image
        });
        var ceramicsMarker = new google.maps.Marker({
            position: buildings[10],
            icon: image
          });
          var clowMarker = new google.maps.Marker({
            position: buildings[11],
            icon: image
          });
          var gardensMarker = new google.maps.Marker({
            position: buildings[12],
            icon: image
          });
          var dempseyMarker = new google.maps.Marker({
            position: buildings[13],
            icon: image
          });
          var donnerMarker = new google.maps.Marker({
            position: buildings[14],
            icon: image
          });
          var eastMarker = new google.maps.Marker({
            position: buildings[15],
            icon: image
          });
          var environmentalMarker = new google.maps.Marker({
            position: buildings[16],
            icon: image
          });
          var evansMarker = new google.maps.Marker({
            position: buildings[17],
            icon: image
          });
          var fletcherMarker = new google.maps.Marker({
            position: buildings[18],
            icon: image
          });
          var fredricMarker = new google.maps.Marker({
            position: buildings[19],
            icon: image
          });
          var gruenhagenMarker = new google.maps.Marker({
            position: buildings[20],
            icon: image
          });
          var halseyMarker = new google.maps.Marker({
            position: buildings[21],
            icon: image
          });
          var harringtonMarker = new google.maps.Marker({
            position: buildings[22],
            icon: image
          });
          var heatingMarker = new google.maps.Marker({
            position: buildings[23],
            icon: image
          });
          var parkingRampMarker = new google.maps.Marker({
            position: buildings[24],
            icon: image
          });
          var horizonMarker = new google.maps.Marker({
            position: buildings[25],
            icon: image
          });
          var kolfMarker = new google.maps.Marker({
            position: buildings[26],
            icon: image
          });
          var lincolnMarker = new google.maps.Marker({
            position: buildings[27],
            icon: image
          });
          var multiculturalMarker = new google.maps.Marker({
            position: buildings[28],
            icon: image
          });
          var nursingMarker = new google.maps.Marker({
            position: buildings[29],
            icon: image
          });
          var oviattMarker = new google.maps.Marker({
            position: buildings[30],
            icon: image
          });
          var pollockMarker = new google.maps.Marker({
              position: buildings[31],
              icon: image
          });
          var polkMarker = new google.maps.Marker({
              position: buildings[32],
              icon: image
            });
          var radfordMarker = new google.maps.Marker({
              position: buildings[33],
              icon: image
          });
          var reeveMarker = new google.maps.Marker({
              position: buildings[34],
              icon: image
          });
          var sageMarker = new google.maps.Marker({
              position: buildings[35],
              icon: image
          });
          var scottMarker = new google.maps.Marker({
              position: buildings[36],
              icon: image
          });
          var stewartMarker = new google.maps.Marker({
              position: buildings[37],
              icon: image
          });
          var recreationMarker = new google.maps.Marker({
            position: buildings[38],
              icon: image
          });
          var successMarker = new google.maps.Marker({
              position: buildings[39],
              icon: image
          });
          var swartMarker = new google.maps.Marker({
              position: buildings[40],
              icon: image
          });
          var taylorMarker = new google.maps.Marker({
            position: buildings[41],
            icon: image
          });
          var titanMarker = new google.maps.Marker({
            position: buildings[42],
            icon: image
          });
          var policeMarker = new google.maps.Marker({
            position: buildings[43],
            icon: image
          });
          var websterMarker = new google.maps.Marker({
            position: buildings[44],
            icon: image
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
        // adding hover cards for building markers
        var albeeHover = document.getElementById('albeeHover');
        var albeeHoverCard = new google.maps.InfoWindow({
          content: albeeHover,
        });


        // listener, allows user to open and close marker by clicking on it
        // also closes all other markers so that only the clicked marker is open
        // at one time
        // also is the click function for the marker opening any hover popup at all
        // so that's important
        albeeMarker.addListener('click', function(){
          var check = $("#albeeHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          albeeHoverCard.open(map, albeeMarker);
          $("#albeeHover").addClass("hoverOpen");
        } else if (check === true){
          $("#albeeHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#albeeLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");
          $('#albeeiframe').attr('src',"https://www.youtube.com/embed/AW5cpKVsXWA");

          $("#albeePopup").css('visibility', 'visible');
          $('#albeePopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#albeePopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#albeePopup').animate({"opacity": "0"}, "slow");
          $("#albeePopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#albeeAboutLi").click(function(){
          $("#albeeTourVideo").css('display', "none");
          $("#albeeTourText").css('display', "none");
          $("#albeeSustainability").css('display', "none");

          $("#albeeAboutImage").css('display', "initial");
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
          var check = $("#baseballHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          baseballHoverCard.open(map, baseballMarker);
          $("#baseballHover").addClass("hoverOpen");
        } else if (check === true){
          $("#baseballHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#baseballLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#baseballPopup").css('visibility', 'visible');
          $('#baseballPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#baseballPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#baseballPopup').animate({"opacity": "0"}, "slow");
          $("#baseballPopup").css('visibility', 'hidden');
        });

        var alumniHover = document.getElementById('alumniHover');
        var alumniHoverCard = new google.maps.InfoWindow({
          content: alumniHover,
        });
        alumniMarker.addListener('click', function(){
          var check = $("#alumniHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          alumniHoverCard.open(map, alumniMarker);
          $("#alumniHover").addClass("hoverOpen");
        } else if (check === true){
          $("#alumniHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#alumniLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#alumniPopup").css('visibility', 'visible');
          $('#alumniPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#alumniPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#alumniPopup').animate({"opacity": "0"}, "slow");
          $("#alumniPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#alumniAboutLi").click(function(){
          $("#alumniSustainability").css('display', "none");

          $("#alumniAboutImage").css('display', "initial");
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
          var check = $("#acHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          acHoverCard.open(map, acMarker);
          $("#acHover").addClass("hoverOpen");
        } else if (check === true){
          $("#acHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#acLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#acPopup").css('visibility', 'visible');
          $('#acPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#acPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#acPopup').animate({"opacity": "0"}, "slow");
          $("#acPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#acAboutLi").click(function(){
          $("#acBathrooms").css('display', "none");

          $("#acAboutImage").css('display', "initial");
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
          var check = $("#athleticHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          athleticHoverCard.open(map, athleticMarker);
          $("#athleticHover").addClass("hoverOpen");
        } else if (check === true){
          $("#athleticHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#athleticLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#athleticPopup").css('visibility', 'visible');
          $('#athleticPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#athleticPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#athleticPopup').animate({"opacity": "0"}, "slow");
          $("#athleticPopup").css('visibility', 'hidden');
        });

        var blackhawkHover = document.getElementById('blackhawkHover');
        var blackhawkHoverCard = new google.maps.InfoWindow({
          content: blackhawkHover,
        });
        blackhawkMarker.addListener('click', function(){
          var check = $("#blackhawkHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          blackhawkHoverCard.open(map, blackhawkMarker);
          $("#blackhawkHover").addClass("hoverOpen");
        } else if (check === true){
          $("#blackhawkHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#blackhawkLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#blackhawkPopup").css('visibility', 'visible');
          $('#blackhawkPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#blackhawkPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#blackhawkPopup').animate({"opacity": "0"}, "slow");
          $("#blackhawkPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#blackhawkAboutLi").click(function(){
          $("#blackhawkBathrooms").css('display', "none");
          $("#blackhawkSustainability").css('display', "none");

          $("#blackhawkAboutImage").css('display', "initial");
          $("#blackhawkAboutText").css('display', "initial");
        });
        $("#blackhawkSustainabilityLi").click(function(){
          $("#blackhawkAboutImage").css('display', "none");
          $("#blackhawkAboutText").css('display', "none");
          $("#blackhawkBathrooms").css('display', "none");

          $("#blackhawkSustainability ").css('display', "initial");
        });
        $("#blackhawkBathroomsLi").click(function(){
          $("#blackhawkAboutImage").css('display', "none");
          $("#blackhawkAboutText").css('display', "none");
          $("#blackhawkSustainability").css('display', "none");

          $("#blackhawkBathrooms").css('display', "initial");
        });

        var biodigesterHover = document.getElementById('biodigesterHover');
        var biodigesterHoverCard = new google.maps.InfoWindow({
          content: biodigesterHover,
        });

        biodigesterMarker.addListener('click', function(){
          var check = $("#biodigesterHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          biodigesterHoverCard.open(map, biodigesterMarker);
          $("#biodigesterHover").addClass("hoverOpen");
        } else if (check === true){
          $("#biodigesterHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#biodigesterLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#biodigesterPopup").css('visibility', 'visible');
          $('#biodigesterPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#biodigesterPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#biodigesterPopup').animate({"opacity": "0"}, "slow");
          $("#biodigesterPopup").css('visibility', 'hidden');
        });

        var buckstaffHover = document.getElementById('buckstaffHover');
        var buckstaffHoverCard = new google.maps.InfoWindow({
          content: buckstaffHover,
        });
        buckstaffMarker.addListener('click', function(){
          var check = $("#buckstaffHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          buckstaffHoverCard.open(map, buckstaffMarker);
          $("#buckstaffHover").addClass("hoverOpen");
        } else if (check === true){
          $("#buckstaffHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#buckstaffLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#buckstaffPopup").css('visibility', 'visible');
          $('#buckstaffPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#buckstaffPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#buckstaffPopup').animate({"opacity": "0"}, "slow");
          $("#buckstaffPopup").css('visibility', 'hidden');
        });

        var equityHover = document.getElementById('equityHover');
        var equityHoverCard = new google.maps.InfoWindow({
          content: equityHover,
        });

        equityMarker.addListener('click', function(){
          var check = $("#equityHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          equityHoverCard.open(map, equityMarker);
          $("#equityHover").addClass("hoverOpen");
        } else if (check === true){
          $("#equityHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#equityLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#equityPopup").css('visibility', 'visible');
          $('#equityPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#equityPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#equityPopup').animate({"opacity": "0"}, "slow");
          $("#equityPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#equityAboutLi").click(function(){
          $("#equityBathrooms").css('display', "none");

          $("#equityAboutImage").css('display', "initial");
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
          var check = $("#campusHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          campusHoverCard.open(map, campusMarker);
          $("#campusHover").addClass("hoverOpen");
        } else if (check === true){
          $("#campusHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#campusLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#campusPopup").css('visibility', 'visible');
          $('#campusPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#campusPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#campusPopup').animate({"opacity": "0"}, "slow");
          $("#campusPopup").css('visibility', 'hidden');
        });

        var ceramicsHover = document.getElementById('ceramicsHover');
        var ceramicsHoverCard = new google.maps.InfoWindow({
          content: ceramicsHover,
        });

        ceramicsMarker.addListener('click', function(){
          var check = $("#ceramicsHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
        ceramicsHoverCard.open(map, ceramicsMarker);
          $("#ceramicsHover").addClass("hoverOpen");
        } else if (check === true){
          $("#ceramicsHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#ceramicsLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#ceramicsPopup").css('visibility', 'visible');
          $('#ceramicsPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#ceramicsPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#ceramicsPopup').animate({"opacity": "0"}, "slow");
          $("#ceramicsPopup").css('visibility', 'hidden');
        });

        var clowHover = document.getElementById('clowHover');
        var clowHoverCard = new google.maps.InfoWindow({
          content: clowHover,
        });

        clowMarker.addListener('click', function(){
          var check = $("#clowHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          clowHoverCard.open(map, clowMarker);
          $("#clowHover").addClass("hoverOpen");
        } else if (check === true){
          $("#clowHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#clowLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#clowPopup").css('visibility', 'visible');
          $('#clowPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#clowPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#clowPopup').animate({"opacity": "0"}, "slow");
          $("#clowPopup").css('visibility', 'hidden');
        });


        var gardensHover = document.getElementById('gardensHover');
        var gardensHoverCard = new google.maps.InfoWindow({
          content: gardensHover,
        });

        gardensMarker.addListener('click', function(){
          var check = $("#gardensHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          gardensHoverCard.open(map, gardensMarker);
          $("#gardensHover").addClass("hoverOpen");
        } else if (check === true){
          $("gardensHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#gardensLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#gardensPopup").css('visibility', 'visible');
          $('#gardensPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#gardensPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#gardensPopup').animate({"opacity": "0"}, "slow");
          $("#gardensPopup").css('visibility', 'hidden');
        });


        var dempseyHover = document.getElementById('dempseyHover');
        var dempseyHoverCard = new google.maps.InfoWindow({
          content: dempseyHover,
        });

        dempseyMarker.addListener('click', function(){
          var check = $("#dempseyHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          dempseyHoverCard.open(map, dempseyMarker);
          $("#dempseyHover").addClass("hoverOpen");
        } else if (check === true){
          $("#dempseyHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#dempseyLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#dempseyPopup").css('visibility', 'visible');
          $('#dempseyPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#dempseyPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#dempseyPopup').animate({"opacity": "0"}, "slow");
          $("#dempseyPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#dempseyAboutLi").click(function(){
          $("#dempseyBathrooms").css('display', "none");

          $("#dempseyAboutImage").css('display', "initial");
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
          var check = $("#donnerHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          donnerHoverCard.open(map, donnerMarker);
          $("#donnerHover").addClass("hoverOpen");
        } else if (check === true){
          $("#donnerHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#donnerLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#donnerPopup").css('visibility', 'visible');
          $('#donnerPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#donnerPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#donnerPopup').animate({"opacity": "0"}, "slow");
          $("#donnerPopup").css('visibility', 'hidden');
        });


        var eastHover = document.getElementById('eastHover');
        var eastHoverCard = new google.maps.InfoWindow({
          content: eastHover,
        });
        eastMarker.addListener('click', function(){
          var check = $("#eastHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          eastHoverCard.open(map, eastMarker);
          $("#eastHover").addClass("hoverOpen");
        } else if (check === true){
          $("#eastHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#eastLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#eastPopup").css('visibility', 'visible');
          $('#eastPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#eastPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#eastPopup').animate({"opacity": "0"}, "slow");
          $("#eastPopup").css('visibility', 'hidden');
        });

        var environmentalHover = document.getElementById('environmentalHover');
        var environmentalHoverCard = new google.maps.InfoWindow({
          content: environmentalHover,
        });

        environmentalMarker.addListener('click', function(){
          var check = $("#environmentalHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          environmentalHoverCard.open(map, environmentalMarker);
          $("#environmentalHover").addClass("hoverOpen");
        } else if (check === true){
          $("#environmentalHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#environmentalLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#environmentalPopup").css('visibility', 'visible');
          $('#environmentalPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#environmentalPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#environmentalPopup').animate({"opacity": "0"}, "slow");
          $("#environmentalPopup").css('visibility', 'hidden');
        });

        var evansHover = document.getElementById('evansHover');
        var evansHoverCard = new google.maps.InfoWindow({
          content: evansHover,
        });

      evansMarker.addListener('click', function(){
        var check = $("#evansHover").hasClass("hoverOpen");
        if (check === false){
        closeAllHover();
        evansHoverCard.open(map, evansMarker);
        $("#evansHover").addClass("hoverOpen");
      } else if (check === true){
        $("#evansHover").removeClass("hoverOpen");
        closeAllHover();
        }
      });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#evansLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#evansPopup").css('visibility', 'visible');
          $('#evansPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#evansPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#evansPopup').animate({"opacity": "0"}, "slow");
          $("#evansPopup").css('visibility', 'hidden');
        });

        var fletcherHover = document.getElementById('fletcherHover');
        var fletcherHoverCard = new google.maps.InfoWindow({
          content: fletcherHover,
        });

        fletcherMarker.addListener('click', function(){
          var check = $("#fletcherHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fletcherHoverCard.open(map, fletcherMarker);
          $("#fletcherHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fletcherHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fletcherLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#fletcherPopup").css('visibility', 'visible');
          $('#fletcherPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#fletcherPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#fletcherPopup').animate({"opacity": "0"}, "slow");
          $("#fletcherPopup").css('visibility', 'hidden');
        });

        var fredricHover = document.getElementById('fredricHover');
        var fredricHoverCard = new google.maps.InfoWindow({
          content: fredricHover,
        });

        fredricMarker.addListener('click', function(){
          var check = $("#fredricHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fredricHoverCard.open(map, fredricMarker);
          $("#fredricHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fredricHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#fredricLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#fredricPopup").css('visibility', 'visible');
          $('#fredricPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#fredricPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#fredricPopup').animate({"opacity": "0"}, "slow");
          $("#fredricPopup").css('visibility', 'hidden');
        });

        // GRUENHAGEN
        // declare variable
        var gruenhagenHover = document.getElementById('gruenhagenHover');
        // create variable as content card
        var gruenhagenHoverCard = new google.maps.InfoWindow({
          content: gruenhagenHover,
        });
        // open ^this when Marker is clicked

        gruenhagenMarker.addListener('click', function(){
          var check = $("#gruenhagenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          gruenhagenHoverCard.open(map, gruenhagenMarker);
          $("#gruenhagenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#gruenhagenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#gruenhagenLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#gruenhagenPopup").css('visibility', 'visible');
          $('#gruenhagenPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#gruenhagenPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#gruenhagenPopup').animate({"opacity": "0"}, "slow");
          $("#gruenhagenPopup").css('visibility', 'hidden');
        });


        var halseyHover = document.getElementById('halseyHover');
        var halseyHoverCard = new google.maps.InfoWindow({
          content: halseyHover,
        });

        halseyMarker.addListener('click', function(){
          var check = $("#halseyHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          halseyHoverCard.open(map, halseyMarker);
          $("#halseyHover").addClass("hoverOpen");
        } else if (check === true){
          $("#halseyHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#halseyLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#halseyPopup").css('visibility', 'visible');
          $('#halseyPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#halseyPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#halseyPopup').animate({"opacity": "0"}, "slow");
          $("#halseyPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#halseyAboutLi").click(function(){
          $("#halseyBathrooms").css('display', "none");

          $("#halseyAboutImage").css('display', "initial");
          $("#halseyAboutText").css('display', "initial");
        });
        $("#halseyBathroomsLi").click(function(){
          $("#halseyAboutImage").css('display', "none");
          $("#halseyAboutText").css('display', "none");

          $("#halseyBathrooms").css('display', "initial");
        });


        var harringtonHover = document.getElementById('harringtonHover');
        var harringtonHoverCard = new google.maps.InfoWindow({
          content: harringtonHover,
        });

        harringtonMarker.addListener('click', function(){
          var check = $("#harringtonHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          harringtonHoverCard.open(map, harringtonMarker);
          $("#harringtonHover").addClass("hoverOpen");
        } else if (check === true){
          $("#harringtonHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#harringtonLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#harringtonPopup").css('visibility', 'visible');
          $('#harringtonPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#harringtonPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#harringtonPopup').animate({"opacity": "0"}, "slow");
          $("#harringtonPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#harringtonAboutLi").click(function(){
          $("#harringtonBathrooms").css('display', "none");

          $("#harringtonAboutImage").css('display', "initial");
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
          var check = $("#heatingHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          heatingHoverCard.open(map, heatingMarker);
          $("#heatingHover").addClass("hoverOpen");
        } else if (check === true){
          $("#heatingHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#heatingLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#heatingPopup").css('visibility', 'visible');
          $('#heatingPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#heatingPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#heatingPopup').animate({"opacity": "0"}, "slow");
          $("#heatingPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#heatingAboutLi").click(function(){
          $("#heatingSustainability").css('display', "none");

          $("#heatingAboutImage").css('display', "initial");
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
          var check = $("#parkingRampHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          parkingRampHoverCard.open(map, parkingRampMarker);
          $("#parkingRampHover").addClass("hoverOpen");
        } else if (check === true){
          $("#parkingRampHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#parkingRampLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#parkingRampPopup").css('visibility', 'visible');
          $('#parkingRampPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#parkingRampPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#parkingRampPopup').animate({"opacity": "0"}, "slow");
          $("#parkingRampPopup").css('visibility', 'hidden');
        });


        var horizonHover = document.getElementById('horizonHover');
        var horizonHoverCard = new google.maps.InfoWindow({
          content: horizonHover,
        });

        horizonMarker.addListener('click', function(){
          var check = $("#horizonHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          horizonHoverCard.open(map, horizonMarker);
          $("#horizonHover").addClass("hoverOpen");
        } else if (check === true){
          $("#horizonHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#horizonLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#horizonPopup").css('visibility', 'visible');
          $('#horizonPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#horizonPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#horizonPopup').animate({"opacity": "0"}, "slow");
          $("#horizonPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#horizonAboutLi").click(function(){
          $("#horizonSustainability").css('display', "none");

          $("#horizonAboutImage").css('display', "initial");
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
          var check = $("#kolfHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          kolfHoverCard.open(map, kolfMarker);
          $("#kolfHover").addClass("hoverOpen");
        } else if (check === true){
          $("#kolfHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#kolfLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#kolfPopup").css('visibility', 'visible');
          $('#kolfPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#kolfPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#kolfPopup').animate({"opacity": "0"}, "slow");
          $("#kolfPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#kolfAboutLi").click(function(){
          $("#kolfBathrooms").css('display', "none");

          $("#kolfAboutImage").css('display', "initial");
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
          var check = $("#lincolnHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          lincolnHoverCard.open(map, lincolnMarker);
          $("#lincolnHover").addClass("hoverOpen");
        } else if (check === true){
          $("#lincolnHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#lincolnLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#lincolnPopup").css('visibility', 'visible');
          $('#lincolnPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#lincolnPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#lincolnPopup').animate({"opacity": "0"}, "slow");
          $("#lincolnPopup").css('visibility', 'hidden');
        });

        var multiculturalHover = document.getElementById('multiculturalHover');
        var multiculturalHoverCard = new google.maps.InfoWindow({
          content: multiculturalHover,
        });
        multiculturalMarker.addListener('click', function(){
          var check = $("#multiculturalHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          multiculturalHoverCard.open(map, multiculturalMarker);
          $("#multiculturalHover").addClass("hoverOpen");
        } else if (check === true){
          $("#multiculturalHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#multiculturalLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#multiculturalPopup").css('visibility', 'visible');
          $('#multiculturalPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#multiculturalPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#multiculturalPopup').animate({"opacity": "0"}, "slow");
          $("#multiculturalPopup").css('visibility', 'hidden');
        });

        var nursingHover = document.getElementById('nursingHover');
        var nursingHoverCard = new google.maps.InfoWindow({
          content: nursingHover,
        });
        nursingMarker.addListener('click', function(){
          var check = $("#nursingHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          nursingHoverCard.open(map, nursingMarker);
          $("#nursingHover").addClass("hoverOpen");
        } else if (check === true){
          $("#nursingHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#nursingLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#nursingPopup").css('visibility', 'visible');
          $('#nursingPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#nursingPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#nursingPopup').animate({"opacity": "0"}, "slow");
          $("#nursingPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#nursingAboutLi").click(function(){
          $("#nursingBathrooms").css('display', "none");

          $("#nursingAboutImage").css('display', "initial");
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
          var check = $("#oviattHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          oviattHoverCard.open(map, oviattMarker);
          $("#oviattHover").addClass("hoverOpen");
        } else if (check === true){
          $("#oviattHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#oviattLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#oviattPopup").css('visibility', 'visible');
          $('#oviattPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#oviattPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#oviattPopup').animate({"opacity": "0"}, "slow");
          $("#oviattPopup").css('visibility', 'hidden');
        });

        var pollockHover = document.getElementById('pollockHover');
        var pollockHoverCard = new google.maps.InfoWindow({
          content: pollockHover,
        });
        pollockMarker.addListener('click', function(){
          var check = $("#pollockHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          pollockHoverCard.open(map, pollockMarker);
          $("#pollockHover").addClass("hoverOpen");
        } else if (check === true){
          $("#pollockHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#pollockLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#pollockPopup").css('visibility', 'visible');
          $('#pollockPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#pollockPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#pollockPopup').animate({"opacity": "0"}, "slow");
          $("#pollockPopup").css('visibility', 'hidden');
        });


        var polkHover = document.getElementById('polkHover');
        var polkHoverCard = new google.maps.InfoWindow({
          content: polkHover,
        });
        polkMarker.addListener('click', function(){
          var check = $("#polkHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          polkHoverCard.open(map, polkMarker);
          $("#polkHover").addClass("hoverOpen");
        } else if (check === true){
          $("#polkHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#polkLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");
          $('#polkiframe').attr('src',"https://www.youtube.com/embed/iHPdc89AD_c");

          $("#polkPopup").css('visibility', 'visible');
          $('#polkPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#polkPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#polkPopup').animate({"opacity": "0"}, "slow");
          $("#polkPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#polkAboutLi").click(function(){
          $("#polkTourVideo").css('display', "none");
          $("#polkTourText").css('display', "none");

          $("#polkAboutImage").css('display', "initial");
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
          var check = $("#radfordHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          radfordHoverCard.open(map, radfordMarker);
          $("#radfordHover").addClass("hoverOpen");
        } else if (check === true){
          $("#radfordHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#radfordLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#radfordPopup").css('visibility', 'visible');
          $('#radfordPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#radfordPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#radfordPopup').animate({"opacity": "0"}, "slow");
          $("#radfordPopup").css('visibility', 'hidden');
        });

        var reeveHover = document.getElementById('reeveHover');
        var reeveHoverCard = new google.maps.InfoWindow({
          content: reeveHover,
        });

        reeveMarker.addListener('click', function(){
          var check = $("#reeveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          reeveHoverCard.open(map, reeveMarker);
          $("#reeveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#reeveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#reeveLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");
          $('#reeveiframe').attr('src',"https://www.youtube.com/embed/QAtW972K3cQ");

          $("#reevePopup").css('visibility', 'visible');
          $('#reevePopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#reevePopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#reevePopup').animate({"opacity": "0"}, "slow");
          $("#reevePopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#reeveAboutLi").click(function(){
          $("#reeveTourVideo").css('display', "none");
          $("#reeveTourText").css('display', "none");
          $("#reeveSustainability").css('display', "none");
          $("#reeveBathrooms").css('display', "none");

          $("#reeveAboutImage").css('display', "initial");
          $("#reeveAboutText").css('display', "initial");
        });
        $("#reeveTourLi").click(function(){
          $("#reeveAboutImage").css('display', "none");
          $("#reeveAboutText").css('display', "none");
          $("#reeveSustainability").css('display', "none");
          $("#reeveBathrooms").css('display', "none");

          $("#reeveTourText").css('display', "initial");
          $("#reeveTourVideo").css('display', "initial");
        });
        $("#reeveSustainabilityLi").click(function(){
          $("#reeveAboutImage").css('display', "none");
          $("#reeveAboutText").css('display', "none");
          $("#reeveTourVideo").css('display', "none");
          $("#reeveTourText").css('display', "none");
          $("#reeveBathrooms").css('display', "none");

          $("#reeveSustainability").css('display', "initial");
        });
        $("#reeveBathroomsLi").click(function(){
          $("#reeveAboutImage").css('display', "none");
          $("#reeveAboutText").css('display', "none");
          $("#reeveTourVideo").css('display', "none");
          $("#reeveTourText").css('display', "none");
          $("#reeveSustainability").css('display', "none");

          $("#reeveBathrooms").css('display', "initial");
        });


        var sageHover = document.getElementById('sageHover');
        var sageHoverCard = new google.maps.InfoWindow({
          content: sageHover,
        });

        sageMarker.addListener('click', function(){
          var check = $("#sageHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sageHoverCard.open(map, sageMarker);
          $("#sageHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sageHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#sageLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");
          $('#sageiframe').attr('src',"https://www.youtube.com/embed/DVRbh2fCCZ0");

          $("#sagePopup").css('visibility', 'visible');
          $('#sagePopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#sagePopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#sagePopup').animate({"opacity": "0"}, "slow");
          $("#sagePopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#sageAboutLi").click(function(){
          $("#sageTourVideo").css('display', "none");
          $("#sageTourText").css('display', "none");
          $("#sageSustainability").css('display', "none");
          $("#sageBathrooms").css('display', "none");

          $("#sageAboutImage").css('display', "initial");
          $("#sageAboutText").css('display', "initial");
        });
        $("#sageTourLi").click(function(){
          $("#sageAboutImage").css('display', "none");
          $("#sageAboutText").css('display', "none");
          $("#sageSustainability").css('display', "none");
          $("#sageBathrooms").css('display', "none");

          $("#sageTourText").css('display', "initial");
          $("#sageTourVideo").css('display', "initial");
        });
        $("#sageSustainabilityLi").click(function(){
          $("#sageAboutImage").css('display', "none");
          $("#sageAboutText").css('display', "none");
          $("#sageTourVideo").css('display', "none");
          $("#sageTourText").css('display', "none");
          $("#sageBathrooms").css('display', "none");

          $("#sageSustainability").css('display', "initial");
        });
        $("#sageBathroomsLi").click(function(){
          $("#sageAboutImage").css('display', "none");
          $("#sageAboutText").css('display', "none");
          $("#sageTourVideo").css('display', "none");
          $("#sageTourText").css('display', "none");
          $("#sageSustainability").css('display', "none");

          $("#sageBathrooms").css('display', "initial");
        });

        var scottHover = document.getElementById('scottHover');
        var scottHoverCard = new google.maps.InfoWindow({
          content: scottHover,
        });

        scottMarker.addListener('click', function(){
          var check = $("#scottHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          scottHoverCard.open(map, scottMarker);
          $("#scottHover").addClass("hoverOpen");
        } else if (check === true){
          $("#scottHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#scottLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");


          $("#scottPopup").css('visibility', 'visible');
          $('#scottPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#scottPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#scottPopup').animate({"opacity": "0"}, "slow");
          $("#scottPopup").css('visibility', 'hidden');
        });

        var stewartHover = document.getElementById('stewartHover');
        var stewartHoverCard = new google.maps.InfoWindow({
          content: stewartHover,
        });

        stewartMarker.addListener('click', function(){
          var check = $("#stewartHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          stewartHoverCard.open(map, stewartMarker);
          $("#stewartHover").addClass("hoverOpen");
        } else if (check === true){
          $("#stewartHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#stewartLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#stewartPopup").css('visibility', 'visible');
          $('#stewartPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#stewartPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#stewartPopup').animate({"opacity": "0"}, "slow");
          $("#stewartPopup").css('visibility', 'hidden');
        });


        var recreationHover = document.getElementById('recreationHover');
        var recreationHoverCard = new google.maps.InfoWindow({
          content: recreationHover,
        });

        recreationMarker.addListener('click', function(){
          var check = $("#recreationHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          recreationHoverCard.open(map, recreationMarker);
          $("#recreationHover").addClass("hoverOpen");
        } else if (check === true){
          $("#recreationHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#recreationLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#recreationPopup").css('visibility', 'visible');
          $('#recreationPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#recreationPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#recreationPopup').animate({"opacity": "0"}, "slow");
          $("#recreationPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#recreationAboutLi").click(function(){
          $("#recreationSustainability").css('display', "none");
          $("#recreationBathrooms").css('display', "none");

          $("#recreationAboutImage").css('display', "initial");
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
          var check = $("#successHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          successHoverCard.open(map, successMarker);
          $("#successHover").addClass("hoverOpen");
        } else if (check === true){
          $("#successHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#successLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");
          $('#successiframe').attr('src',"https://www.youtube.com/embed/NjZjuqM7SBg");

          $("#successPopup").css('visibility', 'visible');
          $('#successPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#successPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#successPopup').animate({"opacity": "0"}, "slow");
          $("#successPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#successAboutLi").click(function(){
          $("#successSustainability").css('display', "none");
          $("#successBathrooms").css('display', "none");
          $("#successTourText").css('display', "none");
          $("#successTourVideo").css('display', "none");

          $("#successAboutImage").css('display', "initial");
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
          var check = $("#swartHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          swartHoverCard.open(map, swartMarker);
          $("#swartHover").addClass("hoverOpen");
        } else if (check === true){
          $("#swartHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#swartLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#swartPopup").css('visibility', 'visible');
          $('#swartPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#swartPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#swartPopup').animate({"opacity": "0"}, "slow");
          $("#swartPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#swartAboutLi").click(function(){
          $("#swartBathrooms").css('display', "none");

          $("#swartAboutImage").css('display', "initial");
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
          var check = $("#taylorHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          taylorHoverCard.open(map, taylorMarker);
          $("#taylorHover").addClass("hoverOpen");
        } else if (check === true){
          $("#taylorHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#taylorLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#taylorPopup").css('visibility', 'visible');
          $('#taylorPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#taylorPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#taylorPopup').animate({"opacity": "0"}, "slow");
          $("#taylorPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#taylorAboutLi").click(function(){
          $("#taylorSustainability").css('display', "none");

          $("#taylorAboutImage").css('display', "initial");
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
          var check = $("#titanHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          titanHoverCard.open(map, titanMarker);
          $("#titanHover").addClass("hoverOpen");
        } else if (check === true){
          $("#titanHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#titanLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#titanPopup").css('visibility', 'visible');
          $('#titanPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#titanPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#titanPopup').animate({"opacity": "0"}, "slow");
          $("#titanPopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#titanAboutLi").click(function(){
          $("#titanSustainability").css('display', "none");

          $("#titanAboutImage").css('display', "initial");
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
          var check = $("#policeHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          policeHoverCard.open(map, policeMarker);
          $("#policeHover").addClass("hoverOpen");
        } else if (check === true){
          $("#policeHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#policeLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#policePopup").css('visibility', 'visible');
          $('#policePopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#policePopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#policePopup').animate({"opacity": "0"}, "slow");
          $("#policePopup").css('visibility', 'hidden');
        });
        // behavior for when tabs are clicked on the popups
        // show content for tab, hide content for other tabs
        $("#policeAboutLi").click(function(){
          $("#policeBathrooms").css('display', "none");

          $("#policeAboutImage").css('display', "initial");
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
          var check = $("#websterHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          websterHoverCard.open(map, websterMarker);
          $("#websterHover").addClass("hoverOpen");
        } else if (check === true){
          $("#websterHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // when "click for more info" is selected,
        // make corresponding overlay and popup visible
        // +animate to fade in
        $("#websterLink").click(function(){
          $('#overlay').css('visibility', 'visible');
          $('#overlay').animate({"opacity": "0.3"}, "slow");

          $("#websterPopup").css('visibility', 'visible');
          $('#websterPopup').animate({"opacity": "1"}, "slow");
        });
        // when x on popup is clicked, close popup
        $("#websterPopupClose").click(function(){
          $('#overlay').animate({"opacity": "0"}, "slow");
          $('#overlay').css('visibility', 'hidden');

          $('#websterPopup').animate({"opacity": "0"}, "slow");
          $("#websterPopup").css('visibility', 'hidden');
        });


        // on click function for selecting the Building checkbox
        // sets and removes all of the building markers on the map
        $("#buildLabel").click(function(){
        var checkBuilding = !$("#buildings").prop("checked");
        if (checkBuilding === false){
          setBuilding();
        } else if (checkBuilding === true ){
          removeBuilding();
        }
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
          icon: image
        });
        var thirtyfiveMarker = new google.maps.Marker({
          position: parkingLots[1],
          icon: image
        });
        var twentysevenMarker = new google.maps.Marker({
          position: parkingLots[2],
          icon: image
        });
        var twentyoneMarker = new google.maps.Marker({
          position: parkingLots[3],
          icon: image
        });
        var twentysixMarker = new google.maps.Marker({
          position: parkingLots[4],
          icon: image
        });
        var fourMarker = new google.maps.Marker({
          position: parkingLots[5],
          icon: image
        });
        var fouraMarker = new google.maps.Marker({
          position: parkingLots[6],
          icon: image
        });
        var sixteenMarker = new google.maps.Marker({
          position: parkingLots[7],
          icon: image
        });
        var seventeenMarker = new google.maps.Marker({
          position: parkingLots[8],
          icon: image
        });
        var twentynineMarker = new google.maps.Marker({
          position: parkingLots[9],
          icon: image
        });
        var twentyfiveMarker = new google.maps.Marker({
          position: parkingLots[10],
          icon: image
        });
        var eightMarker = new google.maps.Marker({
          position: parkingLots[11],
          icon: image
        });
        var thirtythreeMarker = new google.maps.Marker({
          position: parkingLots[12],
          icon: image
        });
        var thirtyfourMarker = new google.maps.Marker({
          position: parkingLots[13],
          icon: image
        });
        var twentyeightMarker = new google.maps.Marker({
          position: parkingLots[14],
          icon: image
        });
        var twentythreeMarker = new google.maps.Marker({
          position: parkingLots[15],
          icon: image
        });
        var fourteenaMarker = new google.maps.Marker({
          position: parkingLots[16],
          icon: image
        });
        var fourteenbMarker = new google.maps.Marker({
          position: parkingLots[17],
          icon: image
        });
        var fourteencMarker = new google.maps.Marker({
          position: parkingLots[18],
          icon: image
        });
        var sevenMarker = new google.maps.Marker({
          position: parkingLots[19],
          icon: image
        });
        var fiveaMarker = new google.maps.Marker({
          position: parkingLots[20],
          icon: image
        });
        var fiveMarker = new google.maps.Marker({
          position: parkingLots[21],
          icon: image
        });
        var sevenaMarker = new google.maps.Marker({
          position: parkingLots[22],
          icon: image
        });
        var fifteenMarker = new google.maps.Marker({
          position: parkingLots[23],
          icon: image
        });
        var thirtytwoMarker = new google.maps.Marker({
          position: parkingLots[24],
          icon: image
        });
        var thirteenMarker = new google.maps.Marker({
          position: parkingLots[25],
          icon: image
        });
        var twelveMarker = new google.maps.Marker({
          position: parkingLots[26],
          icon: image
        });
        var sixaMarker = new google.maps.Marker({
          position: parkingLots[27],
          icon: image
        });
        var sixMarker = new google.maps.Marker({
          position: parkingLots[28],
          icon: image
        });
        var tenMarker = new google.maps.Marker({
          position: parkingLots[29],
          icon: image
        });
        var nineaMarker = new google.maps.Marker({
          position: parkingLots[30],
          icon: image
        });
        var nineMarker = new google.maps.Marker({
          position: parkingLots[31],
          icon: image
        });
        var eighteenMarker = new google.maps.Marker({
          position: parkingLots[32],
          icon: image
        });
        var thirtyMarker = new google.maps.Marker({
          position: parkingLots[33],
          icon: image
        });
        var thirtynineMarker = new google.maps.Marker({
          position: parkingLots[34],
          icon: image
        });
        // set parking lot markers
        function setParkingLots(){
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
        // lot 11 hover
        var elevenHover = document.getElementById('elevenHover');
        var elevenHoverCard = new google.maps.InfoWindow({
          content: elevenHover,
        });
        elevenMarker.addListener('click', function(){
          var check = $("#elevenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          elevenHoverCard.open(map, elevenMarker);
          $("#elevenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#elevenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });
        // lot 35 hover
        var thirtyfiveHover = document.getElementById('thirtyfiveHover');
        var thirtyfiveHoverCard = new google.maps.InfoWindow({
          content: thirtyfiveHover,
        });
        thirtyfiveMarker.addListener('click', function(){
          var check = $("#thirtyfiveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtyfiveHoverCard.open(map, thirtyfiveMarker);
          $("#thirtyfiveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtyfiveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 27 hover
        var twentysevenHover = document.getElementById('twentysevenHover');
        var twentysevenHoverCard = new google.maps.InfoWindow({
          content: twentysevenHover,
        });
        twentysevenMarker.addListener('click', function(){
          var check = $("#twentysevenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentysevenHoverCard.open(map, twentysevenMarker);
          $("#twentysevenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentysevenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 21 hover
        var twentyoneHover = document.getElementById('twentyoneHover');
        var twentyoneHoverCard = new google.maps.InfoWindow({
          content: twentyoneHover,
        });
        twentyoneMarker.addListener('click', function(){
          var check = $("#twentyoneHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentyoneHoverCard.open(map, twentyoneMarker);
          $("#twentyoneHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentyoneHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 26 hover
        var twentysixHover = document.getElementById('twentysixHover');
        var twentysixHoverCard = new google.maps.InfoWindow({
          content: twentysixHover,
        });
        twentysixMarker.addListener('click', function(){
          var check = $("#twentysixHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentysixHoverCard.open(map, twentysixMarker);
          $("#twentysixHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentysixHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 4 hover
        var fourHover = document.getElementById('fourHover');
        var fourHoverCard = new google.maps.InfoWindow({
          content: fourHover,
        });
        fourMarker.addListener('click', function(){
          var check = $("#fourHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fourHoverCard.open(map, fourMarker);
          $("#fourHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fourHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 4a hover
        var fouraHover = document.getElementById('fouraHover');
        var fouraHoverCard = new google.maps.InfoWindow({
          content: fouraHover,
        });
        fouraMarker.addListener('click', function(){
          var check = $("#fouraHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fouraHoverCard.open(map, fouraMarker);
          $("#fouraHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fouraHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 16 hover
        var sixteenHover = document.getElementById('sixteenHover');
        var sixteenHoverCard = new google.maps.InfoWindow({
          content: sixteenHover,
        });
        sixteenMarker.addListener('click', function(){
          var check = $("#sixteenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sixteenHoverCard.open(map, sixteenMarker);
          $("#sixteenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sixteenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 17 hover
        var seventeenHover = document.getElementById('seventeenHover');
        var seventeenHoverCard = new google.maps.InfoWindow({
          content: seventeenHover,
        });
        seventeenMarker.addListener('click', function(){
          var check = $("#seventeenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          seventeenHoverCard.open(map, seventeenMarker);
          $("#seventeenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#seventeenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 29 hover
        var twentynineHover = document.getElementById('twentynineHover');
        var twentynineHoverCard = new google.maps.InfoWindow({
          content: twentynineHover,
        });
        twentynineMarker.addListener('click', function(){
          var check = $("#twentynineHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentynineHoverCard.open(map, twentynineMarker);
          $("#twentynineHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentynineHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 25 hover
        var twentyfiveHover = document.getElementById('twentyfiveHover');
        var twentyfiveHoverCard = new google.maps.InfoWindow({
          content: twentyfiveHover,
        });
        twentyfiveMarker.addListener('click', function(){
          var check = $("#twentyfiveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentyfiveHoverCard.open(map, twentyfiveMarker);
          $("#twentyfiveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentyfiveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 8 hover
        var eightHover = document.getElementById('eightHover');
        var eightHoverCard = new google.maps.InfoWindow({
          content: eightHover,
        });
        eightMarker.addListener('click', function(){
          var check = $("#eightHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          eightHoverCard.open(map, eightMarker);
          $("#eightHover").addClass("hoverOpen");
        } else if (check === true){
          $("#eightHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 33 hover
        var thirtythreeHover = document.getElementById('thirtythreeHover');
        var thirtythreeHoverCard = new google.maps.InfoWindow({
          content: thirtythreeHover,
        });
        thirtythreeMarker.addListener('click', function(){
          var check = $("#thirtythreeHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtythreeHoverCard.open(map, thirtythreeMarker);
          $("#thirtythreeHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtythreeHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 34 hover
        var thirtyfourHover = document.getElementById('thirtyfourHover');
        var thirtyfourHoverCard = new google.maps.InfoWindow({
          content: thirtyfourHover,
        });
        thirtyfourMarker.addListener('click', function(){
          var check = $("#thirtyfourHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtyfourHoverCard.open(map, thirtyfourMarker);
          $("#thirtyfourHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtyfourHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 28 hover
        var twentyeightHover = document.getElementById('twentyeightHover');
        var twentyeightHoverCard = new google.maps.InfoWindow({
          content: twentyeightHover,
        });
        twentyeightMarker.addListener('click', function(){
          var check = $("#twentyeightHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentyeightHoverCard.open(map, twentyeightMarker);
          $("#twentyeightHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentyeightHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 23 hover
        var twentythreeHover = document.getElementById('twentythreeHover');
        var twentythreeHoverCard = new google.maps.InfoWindow({
          content: twentythreeHover,
        });
        twentythreeMarker.addListener('click', function(){
          var check = $("#twentythreeHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twentythreeHoverCard.open(map, twentythreeMarker);
          $("#twentythreeHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twentythreeHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 14a hover
        var fourteenaHover = document.getElementById('fourteenaHover');
        var fourteenaHoverCard = new google.maps.InfoWindow({
          content: fourteenaHover,
        });
        fourteenaMarker.addListener('click', function(){
          var check = $("#fourteenaHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fourteenaHoverCard.open(map, fourteenaMarker);
          $("#fourteenaHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fourteenaHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 14b hover
        var fourteenbHover = document.getElementById('fourteenbHover');
        var fourteenbHoverCard = new google.maps.InfoWindow({
          content: fourteenbHover,
        });
        fourteenbMarker.addListener('click', function(){
          var check = $("#fourteenbHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fourteenbHoverCard.open(map, fourteenbMarker);
          $("#fourteenbHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fourteenbHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 14c hover
        var fourteencHover = document.getElementById('fourteencHover');
        var fourteencHoverCard = new google.maps.InfoWindow({
          content: fourteencHover,
        });
        fourteencMarker.addListener('click', function(){
          var check = $("#fourteencHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fourteencHoverCard.open(map, fourteencMarker);
          $("#fourteencHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fourteencHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 7 hover
        var sevenHover = document.getElementById('sevenHover');
        var sevenHoverCard = new google.maps.InfoWindow({
          content: sevenHover,
        });
        sevenMarker.addListener('click', function(){
          var check = $("#sevenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sevenHoverCard.open(map, sevenMarker);
          $("#sevenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sevenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 5a hover
        var fiveaHover = document.getElementById('fiveaHover');
        var fiveaHoverCard = new google.maps.InfoWindow({
          content: fiveaHover,
        });
        fiveaMarker.addListener('click', function(){
          var check = $("#fiveaHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fiveaHoverCard.open(map, fiveaMarker);
          $("#fiveaHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fiveaHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 5 hover
        var fiveHover = document.getElementById('fiveHover');
        var fiveHoverCard = new google.maps.InfoWindow({
          content: fiveHover,
        });
        fiveMarker.addListener('click', function(){
          var check = $("#fiveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fiveHoverCard.open(map, fiveMarker);
          $("#fiveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fiveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 7a hover
        var sevenaHover = document.getElementById('sevenaHover');
        var sevenaHoverCard = new google.maps.InfoWindow({
          content: sevenaHover,
        });
        sevenaMarker.addListener('click', function(){
          var check = $("#sevenaHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sevenaHoverCard.open(map, sevenaMarker);
          $("#sevenaHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sevenaHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 15 hover
        var fifteenHover = document.getElementById('fifteenHover');
        var fifteenHoverCard = new google.maps.InfoWindow({
          content: fifteenHover,
        });
        fifteenMarker.addListener('click', function(){
          var check = $("#fifteenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fifteenHoverCard.open(map, fifteenMarker);
          $("#fifteenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fifteenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 32 hover
        var thirtytwoHover = document.getElementById('thirtytwoHover');
        var thirtytwoHoverCard = new google.maps.InfoWindow({
          content: thirtytwoHover,
        });
        thirtytwoMarker.addListener('click', function(){
          var check = $("#thirtytwoHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtytwoHoverCard.open(map, thirtytwoMarker);
          $("#thirtytwoHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtytwoHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 13 hover
        var thirteenHover = document.getElementById('thirteenHover');
        var thirteenHoverCard = new google.maps.InfoWindow({
          content: thirteenHover,
        });
        thirteenMarker.addListener('click', function(){
          var check = $("#thirteenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirteenHoverCard.open(map, thirteenMarker);
          $("#thirteenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirteenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 12 hover
        var twelveHover = document.getElementById('twelveHover');
        var twelveHoverCard = new google.maps.InfoWindow({
          content: twelveHover,
        });
        twelveMarker.addListener('click', function(){
          var check = $("#twelveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          twelveHoverCard.open(map, twelveMarker);
          $("#twelveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#twelveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 6a hover
        var sixaHover = document.getElementById('sixaHover');
        var sixaHoverCard = new google.maps.InfoWindow({
          content: sixaHover,
        });
        sixaMarker.addListener('click', function(){
          var check = $("#sixaHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sixaHoverCard.open(map, sixaMarker);
          $("#sixaHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sixaHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 6 hover
        var sixHover = document.getElementById('sixHover');
        var sixHoverCard = new google.maps.InfoWindow({
          content: sixHover,
        });
        sixMarker.addListener('click', function(){
          var check = $("#sixHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          sixHoverCard.open(map, sixMarker);
          $("#sixHover").addClass("hoverOpen");
        } else if (check === true){
          $("#sixHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 10 hover
        var tenHover = document.getElementById('tenHover');
        var tenHoverCard = new google.maps.InfoWindow({
          content: tenHover,
        });
        tenMarker.addListener('click', function(){
          var check = $("#tenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          tenHoverCard.open(map, tenMarker);
          $("#tenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#tenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 9a hover
        var nineaHover = document.getElementById('nineaHover');
        var nineaHoverCard = new google.maps.InfoWindow({
          content: nineaHover,
        });
        nineaMarker.addListener('click', function(){
          var check = $("#nineaHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          nineaHoverCard.open(map, nineaMarker);
          $("#nineaHover").addClass("hoverOpen");
        } else if (check === true){
          $("#nineaHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 9 hover
        var nineHover = document.getElementById('nineHover');
        var nineHoverCard = new google.maps.InfoWindow({
          content: nineHover,
        });
        nineMarker.addListener('click', function(){
          var check = $("#nineHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          nineHoverCard.open(map, nineMarker);
          $("#nineHover").addClass("hoverOpen");
        } else if (check === true){
          $("#nineHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 18 hover
        var eighteenHover = document.getElementById('eighteenHover');
        var eighteenHoverCard = new google.maps.InfoWindow({
          content: eighteenHover,
        });
        eighteenMarker.addListener('click', function(){
          var check = $("#eighteenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          eighteenHoverCard.open(map, eighteenMarker);
          $("#eighteenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#eighteenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 30 hover
        var thirtyHover = document.getElementById('thirtyHover');
        var thirtyHoverCard = new google.maps.InfoWindow({
          content: thirtyHover,
        });
        thirtyMarker.addListener('click', function(){
          var check = $("#thirtyHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtyHoverCard.open(map, thirtyMarker);
          $("#thirtyHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtyHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        // lot 39 hover
        var thirtynineHover = document.getElementById('thirtynineHover');
        var thirtynineHoverCard = new google.maps.InfoWindow({
          content: thirtynineHover,
        });
        thirtynineMarker.addListener('click', function(){
          var check = $("#thirtynineHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          thirtynineHoverCard.open(map, thirtynineMarker);
          $("#thirtynineHover").addClass("hoverOpen");
        } else if (check === true){
          $("#thirtynineHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });




        // on click function for setting and removing markers
        $("#parkingLabel").click(function(){
          var checkParking = !$("#parkingLots").prop("checked");
          if (checkParking === false){
            setParkingLots();
          } else if (checkParking === true){
            removeParkingLots();
          }
        });

        // accEnt markers
        var albeeAccEntMarker = new google.maps.Marker({
                  position: buildings[0],
                  icon: image
          });
        var acAccEntMarker = new google.maps.Marker({
          position: buildings[3],
          icon: image
        });
        var blackhawkAccEntMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });
        var equityAccEntMarker = new google.maps.Marker({
          position: buildings[8],
          icon: image
        });
        var clowAccEntMarker = new google.maps.Marker({
          position: buildings[11],
          icon: image
        });
        var dempseyAccEntMarker = new google.maps.Marker({
          position: buildings[13],
          icon: image
        });
        var donnerAccEntMarker = new google.maps.Marker({
          position: buildings[14],
          icon: image
        });
        var fletcherAccEntMarker = new google.maps.Marker({
          position: buildings[18],
          icon: image
        });
        var fredricAccEntMarker = new google.maps.Marker({
          position: buildings[19],
          icon: image
        });
        var gruenhagenAccEntMarker = new google.maps.Marker({
          position: buildings[20],
          icon: image
        });
        var halseyAccEntMarker = new google.maps.Marker({
          position: buildings[21],
          icon: image
        });
        var harringtonAccEntMarker = new google.maps.Marker({
          position: buildings[22],
          icon: image
        });
        var kolfAccEntMarker = new google.maps.Marker({
          position: buildings[26],
          icon: image
        });
        var nursingAccEntMarker = new google.maps.Marker({
          position: buildings[29],
          icon: image
        });
        var polkAccEntMarker = new google.maps.Marker({
          position: buildings[32],
          icon: image
        });
        var radfordAccEntMarker = new google.maps.Marker({
          position: buildings[33],
          icon: image
        });
        var reeveAccEntMarker = new google.maps.Marker({
          position: buildings[34],
          icon: image
        });
        var scottAccEntMarker = new google.maps.Marker({
          position: buildings[36],
          icon: image
        });
        var stewartAccEntMarker = new google.maps.Marker({
          position: buildings[37],
          icon: image
        });
        var successAccEntMarker = new google.maps.Marker({
          position: buildings[39],
          icon: image
        });
        var swartAccEntMarker = new google.maps.Marker({
          position: buildings[40],
          icon: image
        });
        var taylorAccEntMarker = new google.maps.Marker({
          position: buildings[41],
          icon: image
        });
        var websterAccEntMarker = new google.maps.Marker({
          position: buildings[44],
          icon: image
        });

        // accEnt hover cards for markers
        albeeAccEntMarker.addListener('click', function(){
          var check = $("#albeeHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          albeeHoverCard.open(map, albeeAccEntMarker);
          $("#albeeHover").addClass("hoverOpen");
        } else if (check === true){
          $("#albeeHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        acAccEntMarker.addListener('click', function(){
          var check = $("#acHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          acHoverCard.open(map,acAccEntMarker);
          $("#acHover").addClass("hoverOpen");
        } else if (check === true){
          $("#acHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        blackhawkAccEntMarker.addListener('click', function(){
          var check = $("#blackhawkHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
            blackhawkHoverCard.open(map, blackhawkAccEntMarker);
          $("#blackhawkHover").addClass("hoverOpen");
        } else if (check === true){
          $("#blackhawkHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        equityAccEntMarker.addListener('click', function(){
          var check = $("#equityHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          equityHoverCard.open(map, equityAccEntMarker);
          $("#equityHover").addClass("hoverOpen");
        } else if (check === true){
          $("#equityHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        clowAccEntMarker.addListener('click', function(){
          var check = $("#clowHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          clowHoverCard.open(map, clowAccEntMarker);
          $("#clowHover").addClass("hoverOpen");
        } else if (check === true){
          $("#clowHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        dempseyAccEntMarker.addListener('click', function(){
          var check = $("#dempseyHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          dempseyHoverCard.open(map, dempseyAccEntMarker);
          $("#dempseyHover").addClass("hoverOpen");
        } else if (check === true){
          $("#dempseyHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        donnerAccEntMarker.addListener('click', function(){
          var check = $("#donnerHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          donnerHoverCard.open(map, donnerAccEntMarker);
          $("#donnerHover").addClass("hoverOpen");
        } else if (check === true){
          $("#donnerHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        fletcherAccEntMarker.addListener('click', function(){
          var check = $("#fletcherHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fletcherHoverCard.open(map, fletcherAccEntMarker);
          $("#fletcherHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fletcherHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        fredricAccEntMarker.addListener('click', function(){
          var check = $("#fredricHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          fredricHoverCard.open(map,fredricAccEntMarker);
          $("#fredricHover").addClass("hoverOpen");
        } else if (check === true){
          $("#fredricHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        gruenhagenAccEntMarker.addListener('click', function(){
          var check = $("#gruenhagenHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          gruenhagenHoverCard.open(map,gruenhagenAccEntMarker);
          $("#gruenhagenHover").addClass("hoverOpen");
        } else if (check === true){
          $("#gruenhagenHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        halseyAccEntMarker.addListener('click', function(){
          var check = $("#halseyHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          halseyHoverCard.open(map, halseyAccEntMarker);
          $("#halseyHover").addClass("hoverOpen");
        } else if (check === true){
          $("#halseyHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        harringtonAccEntMarker.addListener('click', function(){
          var check = $("#harringtonHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          harringtonHoverCard.open(map, harringtonAccEntMarker);
          $("#harringtonHover").addClass("hoverOpen");
        } else if (check === true){
          $("#harringtonHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        kolfAccEntMarker.addListener('click', function(){
          var check = $("#kolfHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          kolfHoverCard.open(map, kolfAccEntMarker);
          $("#kolfHover").addClass("hoverOpen");
        } else if (check === true){
          $("#kolfHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        nursingAccEntMarker.addListener('click', function(){
          var check = $("#nursingHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          nursingHoverCard.open(map, nursingAccEntMarker);
          $("#nursingHover").addClass("hoverOpen");
        } else if (check === true){
          $("#nursingHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        polkAccEntMarker.addListener('click', function(){
          var check = $("#polkHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          polkHoverCard.open(map, polkAccEntMarker);
          $("#polkHover").addClass("hoverOpen");
        } else if (check === true){
          $("#polkHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        radfordAccEntMarker.addListener('click', function(){
          var check = $("#radfordHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          radfordHoverCard.open(map, radfordAccEntMarker);
          $("#radfordHover").addClass("hoverOpen");
        } else if (check === true){
          $("#radfordHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        reeveAccEntMarker.addListener('click', function(){
          var check = $("#reeveHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          reeveHoverCard.open(map, reeveAccEntMarker);
          $("#reeveHover").addClass("hoverOpen");
        } else if (check === true){
          $("#reeveHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        scottAccEntMarker.addListener('click', function(){
          var check = $("#scottHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          scottHoverCard.open(map, scottAccEntMarker);
          $("#scottHover").addClass("hoverOpen");
        } else if (check === true){
          $("#scottHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        stewartAccEntMarker.addListener('click', function(){
          var check = $("#stewartHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          stewartHoverCard.open(map, stewartAccEntMarker);
          $("#stewartHover").addClass("hoverOpen");
        } else if (check === true){
          $("#stewartHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        successAccEntMarker.addListener('click', function(){
          var check = $("#successHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          successHoverCard.open(map, successAccEntMarker);
          $("#successHover").addClass("hoverOpen");
        } else if (check === true){
          $("#successHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        swartAccEntMarker.addListener('click', function(){
          var check = $("#swartHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          swartHoverCard.open(map, swartAccEntMarker);
          $("#swartHover").addClass("hoverOpen");
        } else if (check === true){
          $("#swartHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        taylorAccEntMarker.addListener('click', function(){
          var check = $("#taylorHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          taylorHoverCard.open(map, taylorAccEntMarker);
          $("#taylorHover").addClass("hoverOpen");
        } else if (check === true){
          $("#taylorHover").removeClass("hoverOpen");
          closeAllHover();
          }
        });

        websterAccEntMarker.addListener('click', function(){
          var check = $("#websterHover").hasClass("hoverOpen");
          if (check === false){
          closeAllHover();
          websterHoverCard.open(map, websterAccEntMarker);
          $("#websterHover").addClass("hoverOpen");
        } else if (check === true){
          $("#websterHover").removeClass("hoverOpen");
          closeAllHover();
          }
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
        // on click function for accessible entries
        $("#accEntLabel").click(function(){
          var checkAccEnt = !$("#accEnt").prop("checked");
          if (checkAccEnt === false){
            setAccEnt();
          } else if (checkAccEnt === true){
            removeAccEnt();
          }
        });
// markers for accessible parking locations
var womensCenter = {lat: 44.024816, lng: -88.546638};
var womensCenterMarker = new google.maps.Marker({
  position: womensCenter,
  icon: image
});

var titanOne = {lat: 44.024401, lng: -88.564253};
var titanOneMarker = new google.maps.Marker({
  position: titanOne,
  icon: image
});

var titanTwo = {lat: 44.023007, lng:  -88.564339};
var titanTwoMarker = new google.maps.Marker({
  position: titanTwo,
  icon: image
});
var elevenAccParMarker = new google.maps.Marker({
  position: parkingLots[0],
  icon: image
});
var fourAccParMarker = new google.maps.Marker({
  position: parkingLots[5],
  icon: image
});
var fouraAccParMarker = new google.maps.Marker({
  position: parkingLots[6],
  icon: image
});
var sixteenAccParMarker = new google.maps.Marker({
  position: parkingLots[7],
  icon: image
});
var seventeenAccParMarker = new google.maps.Marker({
  position: parkingLots[8],
  icon: image
});
var twentynineAccParMarker = new google.maps.Marker({
  position: parkingLots[9],
  icon: image
});
var twentyfiveAccParMarker = new google.maps.Marker({
  position: parkingLots[10],
  icon: image
});
var thirtythreeAccParMarker = new google.maps.Marker({
  position: parkingLots[12],
  icon: image
});
var fourteenaAccParMarker = new google.maps.Marker({
  position: parkingLots[16],
  icon: image
});
var sevenaAccParMarker = new google.maps.Marker({
  position: parkingLots[22],
  icon: image
});
var thirteenAccParMarker = new google.maps.Marker({
  position: parkingLots[25],
  icon: image
});
var thirtyfourAccParMarker = new google.maps.Marker({
  position: parkingLots[13],
  icon: image
});
var twentyeightAccParMarker = new google.maps.Marker({
  position: parkingLots[14],
  icon: image
});
var twentythreeAccParMarker = new google.maps.Marker({
  position: parkingLots[15],
  icon: image
});
var fifteenAccParMarker = new google.maps.Marker({
  position: parkingLots[23],
  icon: image
});
var thirtytwoAccParMarker = new google.maps.Marker({
  position: parkingLots[24],
  icon: image
});
var tenAccParMarker = new google.maps.Marker({
  position: parkingLots[29],
  icon: image
});
var twelveAccParMarker = new google.maps.Marker({
  position: parkingLots[26],
  icon: image
});
var sixaAccParMarker = new google.maps.Marker({
  position: parkingLots[27],
  icon: image
});
var sixAccParMarker = new google.maps.Marker({
  position: parkingLots[28],
  icon: image
});
var eighteenAccParMarker = new google.maps.Marker({
  position: parkingLots[32],
  icon: image
});
//  hover event listeners for accessible parking here
elevenAccParMarker.addListener('click', function(){
  var check = $("#elevenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  elevenHoverCard.open(map, elevenAccParMarker);
  $("#elevenHover").addClass("hoverOpen");
} else if (check === true){
  $("#elevenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
fourAccParMarker.addListener('click', function(){
  var check = $("#fourHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  fourHoverCard.open(map, fourAccParMarker);
  $("#fourHover").addClass("hoverOpen");
} else if (check === true){
  $("#fourHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
fouraAccParMarker.addListener('click', function(){
  var check = $("#fouraHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  fouraHoverCard.open(map, fouraAccParMarker);
  $("#fouraHover").addClass("hoverOpen");
} else if (check === true){
  $("#fouraHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
sixteenAccParMarker.addListener('click', function(){
  var check = $("#sixteenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  sixteenHoverCard.open(map, sixteenAccParMarker);
  $("#sixteenHover").addClass("hoverOpen");
} else if (check === true){
  $("#sixteenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
seventeenAccParMarker.addListener('click', function(){
  var check = $("#seventeenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  seventeenHoverCard.open(map, seventeenAccParMarker);
  $("#seventeenHover").addClass("hoverOpen");
} else if (check === true){
  $("#seventeenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
twentynineAccParMarker.addListener('click', function(){
  var check = $("#twentynineHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  twentynineHoverCard.open(map, twentynineAccParMarker);
  $("#twentynineHover").addClass("hoverOpen");
} else if (check === true){
  $("#twentynineHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
twentyfiveAccParMarker.addListener('click', function(){
  var check = $("#twentyfiveHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  twentyfiveHoverCard.open(map, twentyfiveAccParMarker);
  $("#twentyfiveHover").addClass("hoverOpen");
} else if (check === true){
  $("#twentyfiveHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
thirtythreeAccParMarker.addListener('click', function(){
  var check = $("#thirtythreeHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  thirtythreeHoverCard.open(map, thirtythreeAccParMarker);
  $("#thirtythreeHover").addClass("hoverOpen");
} else if (check === true){
  $("#thirtythreeHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
fourteenaAccParMarker.addListener('click', function(){
  var check = $("#fourteenaHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  fourteenaHoverCard.open(map, fourteenaAccParMarker);
  $("#fourteenaHover").addClass("hoverOpen");
} else if (check === true){
  $("#fourteenaHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
sevenaAccParMarker.addListener('click', function(){
  var check = $("#sevenaHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  sevenaHoverCard.open(map, sevenaAccParMarker);
  $("#sevenaHover").addClass("hoverOpen");
} else if (check === true){
  $("#sevenaHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
thirteenAccParMarker.addListener('click', function(){
  var check = $("#thirteenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  thirteenHoverCard.open(map, thirteenAccParMarker);
  $("#thirteenHover").addClass("hoverOpen");
} else if (check === true){
  $("#thirteenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
thirtyfourAccParMarker.addListener('click', function(){
  var check = $("#thirtyfourHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  thirtyfourHoverCard.open(map, thirtyfourAccParMarker);
  $("#thirtyfourHover").addClass("hoverOpen");
} else if (check === true){
  $("#thirtyfourHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
twentyeightAccParMarker.addListener('click', function(){
  var check = $("#twentyeightHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  twentyeightHoverCard.open(map, twentyeightAccParMarker);
  $("#twentyeightHover").addClass("hoverOpen");
} else if (check === true){
  $("#twentyeightHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
twentythreeAccParMarker.addListener('click', function(){
  var check = $("#twentythreeHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  twentythreeHoverCard.open(map, twentythreeAccParMarker);
  $("#twentythreeHover").addClass("hoverOpen");
} else if (check === true){
  $("#twentythreeHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
// womens center
var womensCenterHover = document.getElementById('womensCenterHover');
var womensCenterHoverCard = new google.maps.InfoWindow({
  content: womensCenterHover,
});
womensCenterMarker.addListener('click', function(){
  var check = $("#womensCenterHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  womensCenterHoverCard.open(map, womensCenterMarker);
  $("#womensCenterHover").addClass("hoverOpen");
} else if (check === true){
  $("#womensCenterHover").removeClass("hoverOpen");
  closeAllHover();
  }
});

fifteenAccParMarker.addListener('click', function(){
  var check = $("#fifteenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  fifteenHoverCard.open(map, fifteenAccParMarker);
  $("#fifteenHover").addClass("hoverOpen");
} else if (check === true){
  $("#fifteenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
thirtytwoAccParMarker.addListener('click', function(){
  var check = $("#thirtytwoHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  thirtytwoHoverCard.open(map, thirtytwoAccParMarker);
  $("#thirtytwoHover").addClass("hoverOpen");
} else if (check === true){
  $("#thirtytwoHover").removeClass("hoverOpen");
  closeAllHover();
  }
});

// parking ramp

tenAccParMarker.addListener('click', function(){
  var check = $("#tenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  tenHoverCard.open(map, tenAccParMarker);
  $("#tenHover").addClass("hoverOpen");
} else if (check === true){
  $("#tenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
twelveAccParMarker.addListener('click', function(){
  var check = $("#twelveHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  twelveHoverCard.open(map, twelveAccParMarker);
  $("#twelveHover").addClass("hoverOpen");
} else if (check === true){
  $("#twelveHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
sixaAccParMarker.addListener('click', function(){
  var check = $("#sixaHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  sixaHoverCard.open(map, sixaAccParMarker);
  $("#sixaHover").addClass("hoverOpen");
} else if (check === true){
  $("#sixaHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
sixAccParMarker.addListener('click', function(){
  var check = $("#sixHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  sixHoverCard.open(map, sixAccParMarker);
  $("#sixHover").addClass("hoverOpen");
} else if (check === true){
  $("#sixHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
eighteenAccParMarker.addListener('click', function(){
  var check = $("#eighteenHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  eighteenHoverCard.open(map, eighteenAccParMarker);
  $("#eighteenHover").addClass("hoverOpen");
} else if (check === true){
  $("#eighteenHover").removeClass("hoverOpen");
  closeAllHover();
  }
});

// titan one
var titanOneHover = document.getElementById('titanOneHover');
var titanOneHoverCard = new google.maps.InfoWindow({
  content: titanOneHover,
});
titanOneMarker.addListener('click', function(){
  var check = $("#titanOneHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  titanOneHoverCard.open(map, titanOneMarker);
  $("#titanOneHover").addClass("hoverOpen");
} else if (check === true){
  $("#titanOneHover").removeClass("hoverOpen");
  closeAllHover();
  }
});
// titan two
var titanTwoHover = document.getElementById('titanTwoHover');
var titanTwoHoverCard = new google.maps.InfoWindow({
  content: titanTwoHover,
});
titanTwoMarker.addListener('click', function(){
  var check = $("#titanTwoHover").hasClass("hoverOpen");
  if (check === false){
  closeAllHover();
  titanTwoHoverCard.open(map, titanTwoMarker);
  $("#titanTwoHover").addClass("hoverOpen");
} else if (check === true){
  $("#titanTwoHover").removeClass("hoverOpen");
  closeAllHover();
  }
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
        // on click function for accessible parking markers
        $("#accParLabel").click(function(){
          var checkAccPar = !$("#accPar").prop("checked");
          if (checkAccPar  === false){
            setAccPar();
          } else if (checkAccPar  === true){
            removeAccPar();
          }
        });
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
            icon: image
          });
          var phoneOne = new google.maps.Marker({
            position: emergencyPhones[1],
            icon: image
          });
          var phoneTwo = new google.maps.Marker({
            position: emergencyPhones[2],
            icon: image
          });
          var phoneThree = new google.maps.Marker({
            position: emergencyPhones[3],
            icon: image
          });
          var phoneFour = new google.maps.Marker({
            position: emergencyPhones[4],
            icon: image
          });
          var phoneFive= new google.maps.Marker({
            position: emergencyPhones[5],
            icon: image
          });
          var phoneSix = new google.maps.Marker({
            position: emergencyPhones[6],
            icon: image
          });
          var phoneSeven = new google.maps.Marker({
            position: emergencyPhones[7],
            icon: image
          });
          var phoneEight = new google.maps.Marker({
            position: emergencyPhones[8],
            icon: image
          });
          var phoneNine = new google.maps.Marker({
            position: emergencyPhones[9],
            icon: image
          });
          var phoneTen = new google.maps.Marker({
            position: emergencyPhones[10],
            icon: image
          });
          var phoneEleven = new google.maps.Marker({
            position: emergencyPhones[11],
            icon: image
          });
          var phoneTwelve = new google.maps.Marker({
            position: emergencyPhones[12],
            icon: image
          });
          var phoneThirteen = new google.maps.Marker({
            position: emergencyPhones[13],
            icon: image
          });
          var phoneFourteen = new google.maps.Marker({
            position: emergencyPhones[14],
            icon: image
          });
          var phoneFifteen = new google.maps.Marker({
            position: emergencyPhones[15],
            icon: image
          });
          var phoneSixteen = new google.maps.Marker({
            position: emergencyPhones[16],
            icon: image
          });
          var phoneSeventeen = new google.maps.Marker({
            position: emergencyPhones[17],
            icon: image
          });
          var phoneEighteen = new google.maps.Marker({
            position: emergencyPhones[18],
            icon: image
          });
          var phoneNineteen = new google.maps.Marker({
            position: emergencyPhones[19],
            icon: image
          });
          var phoneTwenty = new google.maps.Marker({
            position: emergencyPhones[20],
            icon: image
          });
          var phoneTwentyOne = new google.maps.Marker({
            position: emergencyPhones[21],
            icon: image
          });
          var phoneTwentyTwo = new google.maps.Marker({
            position: emergencyPhones[22],
            icon: image
          });
          var phoneTwentyThree = new google.maps.Marker({
            position: emergencyPhones[23],
            icon: image
          });
          var phoneTwentyFour = new google.maps.Marker({
            position: emergencyPhones[24],
            icon: image
          });
          var phoneTwentyFive = new google.maps.Marker({
            position: emergencyPhones[25],
            icon: image
          });
          var phoneTwentySix = new google.maps.Marker({
            position: emergencyPhones[26],
            icon: image
          });
          var phoneTwentySeven = new google.maps.Marker({
            position: emergencyPhones[27],
            icon: image
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
          // on click function for setting emergency phone markers
          $("#emergencyLabel").click(function(){
            var checkEmergency = !$("#emergency").prop("checked");
            if (checkEmergency === false){
              setEmergencyPhones();
            } else if (checkEmergency === true){
              removeEmergencyPhones();
            }
          });

  // creating sust markers
  var albeeSustMarker = new google.maps.Marker({
    position: buildings[0],
    icon: image
  });
  var alumniSustMarker = new google.maps.Marker({
      position: buildings[2],
      icon: image
    });
  var blackhawkSustMarker = new google.maps.Marker({
    position: buildings[5],
    icon: image
  });
  var biodigesterSustMarker = new google.maps.Marker({
    position: buildings[6],
    icon: image
  });
  var heatingSustMarker = new google.maps.Marker({
    position: buildings[23],
    icon: image
  });
  var horizonSustMarker = new google.maps.Marker({
    position: buildings[25],
    icon: image
  });
  var reeveSustMarker = new google.maps.Marker({
    position: buildings[34],
    icon: image
  });
  var sageSustMarker = new google.maps.Marker({
    position: buildings[35],
    icon: image
  });
  var recreationSustMarker = new google.maps.Marker({
    position: buildings[38],
    icon: image
  });
  var successSustMarker = new google.maps.Marker({
    position: buildings[39],
    icon: image
  });
  var taylorSustMarker = new google.maps.Marker({
    position: buildings[41],
    icon: image
  });
  var titanSustMarker = new google.maps.Marker({
    position: buildings[42],
    icon: image
  });

  // sust hovers
  albeeSustMarker.addListener('click', function(){
    closeAllHover();
    albeeHoverCard.open(map, albeeSustMarker);
  });

  alumniSustMarker.addListener('click', function(){
    closeAllHover();
    alumniHoverCard.open(map, alumniSustMarker);
  });

  blackhawkSustMarker.addListener('click', function(){
    closeAllHover();
    blackhawkHoverCard.open(map, blackhawkSustMarker);
  });

  biodigesterSustMarker.addListener('click', function(){
    closeAllHover();
    biodigesterHoverCard.open(map, biodigesterSustMarker);
  });

  heatingSustMarker.addListener('click', function(){
    closeAllHover();
    heatingHoverCard.open(map,heatingSustMarker);
  });

  horizonSustMarker.addListener('click', function(){
    closeAllHover();
    horizonHoverCard.open(map, horizonSustMarker);
  });

  reeveSustMarker.addListener('click', function(){
    closeAllHover();
  reeveHoverCard.open(map, reeveSustMarker);
  });

  sageSustMarker.addListener('click', function(){
    closeAllHover();
    sageHoverCard.open(map, sageSustMarker);
  });

  recreationSustMarker.addListener('click', function(){
    closeAllHover();
    recreationHoverCard.open(map, recreationSustMarker);
  });

  successSustMarker.addListener('click', function(){
    closeAllHover();
  successHoverCard.open(map, successSustMarker);
  });

  taylorSustMarker.addListener('click', function(){
    closeAllHover();
    taylorHoverCard.open(map, taylorSustMarker);
  });

  titanSustMarker.addListener('click', function(){
    closeAllHover();
    titanHoverCard.open(map, titanSustMarker);
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
        // on click function for sustainability
        $("#sustLabel").click(function(){
          var checkSust = !$("#sust").prop("checked");
          if (checkSust === false){
            setSust();
          } else if (checkSust === true){
            removeSust();
          }
        });
        // create gender markers
        var acGenderMarker = new google.maps.Marker({
          position: buildings[3],
          icon: image
        });
        var blackhawkGenderMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });
        var campusGenderMarker = new google.maps.Marker({
          position: buildings[9],
          icon: image
        });
        var dempseyGenderMarker = new google.maps.Marker({
          position: buildings[13],
          icon: image
        });
        var halseyGenderMarker = new google.maps.Marker({
          position: buildings[21],
          icon: image
        });
        var harringtonGenderMarker = new google.maps.Marker({
          position: buildings[22],
          icon: image
        });
        var kolfGenderMarker = new google.maps.Marker({
          position: buildings[26],
          icon: image
        });
        var nursingGenderMarker = new google.maps.Marker({
          position: buildings[29],
          icon: image
        });
        var reeveGenderMarker = new google.maps.Marker({
          position: buildings[34],
          icon: image
        });
        var sageGenderMarker = new google.maps.Marker({
          position: buildings[35],
          icon: image
        });
        var recreationGenderMarker = new google.maps.Marker({
          position: buildings[38],
          icon: image
        });
        var successGenderMarker = new google.maps.Marker({
          position: buildings[39],
          icon: image
        });
        var swartGenderMarker = new google.maps.Marker({
          position: buildings[40],
          icon: image
        });
        var policeGenderMarker = new google.maps.Marker({
          position: buildings[43],
          icon: image
        });


        // gender hover
        acGenderMarker.addListener('click', function(){
          closeAllHover();
          acHoverCard.open(map,acGenderMarker);
        });

        blackhawkGenderMarker.addListener('click', function(){
          closeAllHover();
          blackhawkHoverCard.open(map, blackhawkGenderMarker);
        });

        campusGenderMarker.addListener('click', function(){
          closeAllHover();
        campusHoverCard.open(map, campusGenderMarker);
        });

        dempseyGenderMarker.addListener('click', function(){
          closeAllHover();
          dempseyHoverCard.open(map, dempseyGenderMarker);
        });

        halseyGenderMarker.addListener('click', function(){
          closeAllHover();
          halseyHoverCard.open(map, halseyGenderMarker);
        });

        harringtonGenderMarker.addListener('click', function(){
          closeAllHover();
          harringtonHoverCard.open(map, harringtonGenderMarker);
        });

        kolfGenderMarker.addListener('click', function(){
          closeAllHover();
          kolfHoverCard.open(map, kolfGenderMarker);
        });

        nursingGenderMarker.addListener('click', function(){
          closeAllHover();
          nursingHoverCard.open(map, nursingGenderMarker);
        });

        reeveGenderMarker.addListener('click', function(){
          closeAllHover();
        reeveHoverCard.open(map, reeveGenderMarker);
        });

        sageGenderMarker.addListener('click', function(){
          closeAllHover();
          sageHoverCard.open(map, sageGenderMarker);
        });

        recreationGenderMarker.addListener('click', function(){
          closeAllHover();
          recreationHoverCard.open(map, recreationGenderMarker);
        });

        successGenderMarker.addListener('click', function(){
          closeAllHover();
        successHoverCard.open(map, successGenderMarker);
        });

        swartGenderMarker.addListener('click', function(){
          closeAllHover();
          swartHoverCard.open(map, swartGenderMarker);
        });

        policeGenderMarker.addListener('click', function(){
          closeAllHover();
          policeHoverCard.open(map, policeGenderMarker);
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

        // on click function for gender markers
        $("#genderLabel").click(function(){
          var checkGender = !$("#gender").prop("checked");
          if (checkGender === false){
            setGender();
          } else if (checkGender === true){
            removeGender();
          }
        });

        // on click function for selecting the first select all checkbox
        // and setting/removing all markers
        $("#selectallcheck").click(function(){
          var checkSelect = !$("#selectallcheck").prop("checked");
          if (checkSelect === false){
            setBuilding();
            setParkingLots();
            setAccEnt();
            setAccPar();
            setEmergencyPhones();
            setSust();
            setGender();
          } else if (checkSelect === true){
            removeBuilding();
            removeParkingLots();
            removeAccEnt();
            removeAccPar();
            removeEmergencyPhones();
            removeSust();
            removeGender();
          }
        });
      // AccaF markers
      var albeeAccaFMarker = new google.maps.Marker({
        position: buildings[0],
        icon: image
      });
      var acAccaFMarker = new google.maps.Marker({
        position: buildings[3],
        icon: image
      });
      var ceramicsAccaFMarker = new google.maps.Marker({
          position: buildings[10],
          icon: image
      });
      var clowAccaFMarker = new google.maps.Marker({
        position: buildings[11],
        icon: image
      });
      var environmentalAccaFMarker = new google.maps.Marker({
        position: buildings[16],
        icon: image
      });
      var fredricAccaFMarker = new google.maps.Marker({
        position: buildings[19],
        icon: image
      });
      var halseyAccaFMarker = new google.maps.Marker({
        position: buildings[21],
        icon: image
      });
      var harringtonAccaFMarker = new google.maps.Marker({
        position: buildings[22],
        icon: image
      });
      var kolfAccaFMarker = new google.maps.Marker({
        position: buildings[26],
        icon: image
      });
      var nursingAccaFMarker = new google.maps.Marker({
        position: buildings[29],
        icon: image
      });
      var polkAccaFMarker = new google.maps.Marker({
        position: buildings[32],
        icon: image
      });
      var radfordAccaFMarker = new google.maps.Marker({
        position: buildings[33],
        icon: image
      });
      var sageAccaFMarker = new google.maps.Marker({
        position: buildings[35],
        icon: image
      });
      var swartAccaFMarker = new google.maps.Marker({
        position: buildings[40],
        icon: image
      });

      // hover for AccaF
      albeeAccaFMarker.addListener('click', function(){
        closeAllHover();
        albeeHoverCard.open(map, albeeAccaFMarker);
      });

      acAccaFMarker.addListener('click', function(){
        closeAllHover();
        acHoverCard.open(map,acAccaFMarker);
      });

      ceramicsAccaFMarker.addListener('click', function(){
        closeAllHover();
        ceramicsHoverCard.open(map, ceramicsAccaFMarker);
      });

      clowAccaFMarker.addListener('click', function(){
        closeAllHover();
        clowHoverCard.open(map, clowAccaFMarker);
      });

      environmentalAccaFMarker.addListener('click', function(){
        closeAllHover();
        environmentalHoverCard.open(map, environmentalAccaFMarker);
      });

      fredricAccaFMarker.addListener('click', function(){
        closeAllHover();
        fredricHoverCard.open(map,fredricAccaFMarker);
      });

      halseyAccaFMarker.addListener('click', function(){
        closeAllHover();
        halseyHoverCard.open(map, halseyAccaFMarker);
      });

      harringtonAccaFMarker.addListener('click', function(){
        closeAllHover();
        harringtonHoverCard.open(map, harringtonAccaFMarker);
      });

      kolfAccaFMarker.addListener('click', function(){
        closeAllHover();
        kolfHoverCard.open(map, kolfAccaFMarker);
      });

      swartAccaFMarker.addListener('click', function(){
        closeAllHover();
        swartHoverCard.open(map, swartAccaFMarker);
      });

      nursingAccaFMarker.addListener('click', function(){
        closeAllHover();
        nursingHoverCard.open(map, nursingAccaFMarker);
      });

      polkAccaFMarker.addListener('click', function(){
        closeAllHover();
        polkHoverCard.open(map, polkAccaFMarker);
      });
      radfordAccaFMarker.addListener('click', function(){
        closeAllHover();
        radfordHoverCard.open(map, radfordAccaFMarker);
      });
      sageAccaFMarker.addListener('click', function(){
        closeAllHover();
        sageHoverCard.open(map, sageAccaFMarker);
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
        $("#accaFLabel").click(function(){
          var checkAccF = !$("#accaF").prop("checked");
          if (checkAccF === false){
            setAccaF();
          } else if (checkAccF === true){
            removeAccaF();
          }
        });
      // create markers for athletics
      var albeeAthMarker = new google.maps.Marker({
        position: buildings[0],
        icon: image
      });
      var baseballAthMarker = new google.maps.Marker({
        position: buildings[1],
        icon: image
      });
      var athleticAthMarker = new google.maps.Marker({
        position: buildings[4],
        icon: image
      });
      var eastAthMarker = new google.maps.Marker({
        position: buildings[15],
        icon: image
      });
      var kolfAthMarker = new google.maps.Marker({
        position: buildings[26],
        icon: image
      });

      var titanAthMarker = new google.maps.Marker({
        position: buildings[42],
        icon: image
      });
      // athletics marker hover
      albeeAthMarker.addListener('click', function(){
        closeAllHover();
        albeeHoverCard.open(map, albeeAthMarker);
      });

      athleticAthMarker.addListener('click', function(){
        closeAllHover();
          athleticHoverCard.open(map, athleticAthMarker);
      });

      baseballAthMarker.addListener('click', function(){
        closeAllHover();
          baseballHoverCard.open(map, baseballAthMarker);
      });

      eastAthMarker.addListener('click', function(){
        closeAllHover();
        eastHoverCard.open(map,eastAthMarker);
      });


      kolfAthMarker.addListener('click', function(){
        closeAllHover();
        kolfHoverCard.open(map, kolfAthMarker);
      });

      titanAthMarker.addListener('click', function(){
        closeAllHover();
          titanHoverCard.open(map, titanAthMarker);
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
        $("#athLabel").click(function(){
          var checkAth = !$("#ath").prop("checked");
          if (checkAth === false){
            setAth();
          } else if (checkAth === true){
            removeAth();
          }
        });
      // AccaS markers
      var equityAccaSMarker = new google.maps.Marker({
        position: buildings[8],
        icon: image
      });
      var nursingAccaSMarker = new google.maps.Marker({
        position: buildings[29],
        icon: image
      });
      var successAccaSMarker = new google.maps.Marker({
        position: buildings[39],
        icon: image
      });
      var swartAccaSMarker = new google.maps.Marker({
        position: buildings[40],
        icon: image
      });

      // AccaS hover
      equityAccaSMarker.addListener('click', function(){
        closeAllHover();
        equityHoverCard.open(map, equityAccaSMarker);
      });

      nursingAccaSMarker.addListener('click', function(){
        closeAllHover();
        nursingHoverCard.open(map, nursingAccaSMarker);
      });

      successAccaSMarker.addListener('click', function(){
        closeAllHover();
        successHoverCard.open(map, successAccaSMarker);
      });

      swartAccaSMarker.addListener('click', function(){
        closeAllHover();
        swartHoverCard.open(map, swartAccaSMarker);
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
        $("#accSLabel").click(function(){
          var checkAccS = !$("#accS").prop("checked");
          if (checkAccS === false){
            setAccaS();
          } else if (checkAccS === true){
            removeAccaS();
          }
        });
      // CampS markers
      var equityCampSMarker = new google.maps.Marker({
        position: buildings[8],
        icon: image
      });
      var campusCampSMarker = new google.maps.Marker({
        position: buildings[9],
        icon: image
      });
      var dempseyCampSMarker = new google.maps.Marker({
        position: buildings[13],
        icon: image
      });
      var multiculturalCampSMarker = new google.maps.Marker({
        position: buildings[28],
        icon: image
      });
      var pollockCampSMarker = new google.maps.Marker({
          position: buildings[31],
          icon: image
      });
      var radfordCampSMarker = new google.maps.Marker({
        position: buildings[33],
        icon: image
      });
      var reeveCampSMarker = new google.maps.Marker({
        position: buildings[34],
        icon: image
      });
      var recreationCampSMarker = new google.maps.Marker({
        position: buildings[38],
        icon: image
      });
      var successCampSMarker = new google.maps.Marker({
        position: buildings[39],
        icon: image
      });


      // CampS hover
      equityCampSMarker.addListener('click', function(){
        closeAllHover();
        equityHoverCard.open(map, equityCampSMarker);
      });

      campusCampSMarker.addListener('click', function(){
        closeAllHover();
          campusHoverCard.open(map, campusCampSMarker);
      });

      dempseyCampSMarker.addListener('click', function(){
        closeAllHover();
        dempseyHoverCard.open(map, dempseyCampSMarker);
      });

      multiculturalCampSMarker.addListener('click', function(){
        closeAllHover();
        multiculturalHoverCard.open(map, multiculturalCampSMarker);
      });

      pollockCampSMarker.addListener('click', function(){
        closeAllHover();
          pollockHoverCard.open(map, pollockCampSMarker);
      });

      radfordCampSMarker.addListener('click', function(){
        closeAllHover();
        radfordHoverCard.open(map, radfordCampSMarker);
      });

      reeveCampSMarker.addListener('click', function(){
        closeAllHover();
        reeveHoverCard.open(map, reeveCampSMarker);
      });

      recreationCampSMarker.addListener('click', function(){
        closeAllHover();
        recreationHoverCard.open(map, recreationCampSMarker);
      });

      successCampSMarker.addListener('click', function(){
        closeAllHover();
        successHoverCard.open(map, successCampSMarker);
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
        $("#campSLabel").click(function(){
          var checkCampS = !$("#campS").prop("checked");
          if (checkCampS === false){
            setCampS();
          } else if (checkCampS === true){
            removeCampS();
          }
        });
      // ResH markers
      var donnerResHMarker = new google.maps.Marker({
        position: buildings[14],
        icon: image
      });
      var evansResHMarker = new google.maps.Marker({
          position: buildings[17],
          icon: image
      });
      var fletcherResHMarker = new google.maps.Marker({
              position: buildings[18],
              icon: image
      });
      var gruenhagenResHMarker = new google.maps.Marker({
        position: buildings[20],
        icon: image
      });
      var horizonResHMarker = new google.maps.Marker({
              position: buildings[25],
              icon: image
      });
      var stewartResHMarker = new google.maps.Marker({
              position: buildings[37],
              icon: image
      });
      var scottResHMarker = new google.maps.Marker({
              position: buildings[36],
              icon: image
      });
      var taylorResHMarker = new google.maps.Marker({
              position: buildings[41],
              icon: image
      });
      var websterResHMarker = new google.maps.Marker({
              position: buildings[44],
              icon: image
      });

      // ResH hover
      donnerResHMarker.addListener('click', function(){
        closeAllHover();
        donnerHoverCard.open(map, donnerResHMarker);
      });

      evansResHMarker.addListener('click', function(){
        closeAllHover();
        evansHoverCard.open(map, evansResHMarker);
      });

      fletcherResHMarker.addListener('click', function(){
        closeAllHover();
          fletcherHoverCard.open(map, fletcherResHMarker);
      });

      gruenhagenResHMarker.addListener('click', function(){
        closeAllHover();
        gruenhagenHoverCard.open(map,gruenhagenResHMarker);
      });

      horizonResHMarker.addListener('click', function(){
        closeAllHover();
          horizonHoverCard.open(map, horizonResHMarker);
      });

      stewartResHMarker.addListener('click', function(){
        closeAllHover();
        stewartHoverCard.open(map, stewartResHMarker);
      });

      scottResHMarker.addListener('click', function(){
        closeAllHover();
          scottHoverCard.open(map, scottResHMarker);
      });

      taylorResHMarker.addListener('click', function(){
        closeAllHover();
        taylorHoverCard.open(map, taylorResHMarker);
      });

      websterResHMarker.addListener('click', function(){
        closeAllHover();
        websterHoverCard.open(map, websterResHMarker);
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
        $("#resHLabel").click(function(){
          var checkResH = !$("#resH").prop("checked");
          if (checkResH === false){
            setResH();
          } else if (checkResH === true){
            removeResH();
          }
        });
      // dining markers
      var blackhawkDiningMarker = new google.maps.Marker({
        position: buildings[5],
        icon: image
      });
      var clowDiningMarker = new google.maps.Marker({
        position: buildings[11],
        icon: image
      });
      var halseyDiningMarker = new google.maps.Marker({
        position: buildings[21],
        icon: image
      });
      var reeveDiningMarker = new google.maps.Marker({
        position: buildings[34],
        icon: image
      });
      var sageDiningMarker = new google.maps.Marker({
        position: buildings[35],
        icon: image
      });
      var scottDiningMarker = new google.maps.Marker({
        position: buildings[36],
        icon: image
      });

      // dining hover
      blackhawkDiningMarker.addListener('click', function(){
        closeAllHover();
        blackhawkHoverCard.open(map, blackhawkDiningMarker);
      });

      clowDiningMarker.addListener('click', function(){
        closeAllHover();
        clowHoverCard.open(map, clowDiningMarker);
      });

      halseyDiningMarker.addListener('click', function(){
        closeAllHover();
        halseyHoverCard.open(map, halseyDiningMarker);
      });

      reeveDiningMarker.addListener('click', function(){
        closeAllHover();
        reeveHoverCard.open(map, reeveDiningMarker);
      });

      sageDiningMarker.addListener('click', function(){
        closeAllHover();
        sageHoverCard.open(map, sageDiningMarker);
      });

      scottDiningMarker.addListener('click', function(){
        closeAllHover();
          scottHoverCard.open(map, scottDiningMarker);
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
        $("#diningLabel").click(function(){
          var checkDining = !$("#dining").prop("checked");
          if (checkDining === false){
            setDining();
          } else if (checkDining === true){
            removeDining();
          }
        });
    // StuR markers
    var reeveStuRMarker = new google.maps.Marker({
      position: buildings[34],
      icon: image
    });
    var recreationStuRMarker = new google.maps.Marker({
      position: buildings[38],
      icon: image
    });

    // StuR hover
    recreationStuRMarker.addListener('click', function(){
      closeAllHover();
      recreationHoverCard.open(map, recreationStuRMarker);
    });

    reeveStuRMarker.addListener('click', function(){
      closeAllHover();
      reeveHoverCard.open(map, reeveStuRMarker);
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
        $("#stuRLabel").click(function(){
          var checkStuR = !$("#stuR").prop("checked");
          if (checkStuR === false){
            setStuR();
          } else if (checkStuR === true){
            removeStuR();
          }
        });

        // categories select all, setting all/removing all markers
        $("#selectallcheck2").click(function(){
          var checkSelect = !$("#selectallcheck2").prop("checked");
          if (checkSelect === false){
            setAccaF();
            setAth();
            setAccaS();
            setCampS();
            setResH();
            setDining();
            setStuR();
          } else if (checkSelect === true){
            removeAccaF();
            removeAth();
            removeAccaS();
            removeCampS();
            removeResH();
            removeDining();
            removeStuR();
          }
        });

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


  }
