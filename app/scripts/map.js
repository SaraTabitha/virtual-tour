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
        var albeeHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/albeehall.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Albee Hall</h1>' +
        '<p class="paraHover text"> 776 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var albeeHoverCard = new google.maps.InfoWindow({
          content: albeeHover,
        });
        // if this is put inside of the setBuildings function it creates a bug
        // where if you spam click "buildings" it creates a bunch
        // of  hover popups
        albeeMarker.addListener('click', function(){
          albeeHoverCard.open(map, albeeMarker);
        });
        var baseballHover = '<div class="generalHover">' +
        '<img src="#">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Alumni Baseball Stadium</h1>' +
        '<p class="paraHover text"> 450 Josslyn Street</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var baseballHoverCard = new google.maps.InfoWindow({
          content: baseballHover,
        });
          baseballMarker.addListener('click', function(){
            baseballHoverCard.open(map, baseballMarker);
        });
        var alumniHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/awcc-building.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Alumni Welcome and Conference Center</h1>' +
        '<p class="paraHover text"> 625 Pearl Ave.</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var alumniHoverCard = new google.maps.InfoWindow({
          content: alumniHover,
        });
          alumniMarker.addListener('click', function(){
            alumniHoverCard.open(map, alumniMarker);
        });
        // a&c hover
        var acHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/artscommunications.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Arts &amp; Communications Center</h1>' +
        '<p class="paraHover text"> 1001 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var acHoverCard = new google.maps.InfoWindow({
          content: acHover,
        });
        acMarker.addListener('click', function(){
          acHoverCard.open(map,acMarker);
        });
        var athleticHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/athleticservice.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Athletic Service Building</h1>' +
        '<p class="paraHover text"> 450 Josslyn Street</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var athleticHoverCard = new google.maps.InfoWindow({
          content: athleticHover,
        });
          athleticMarker.addListener('click', function(){
            athleticHoverCard.open(map, athleticMarker);
        });
        var blackhawkHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/blackhawk.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Blackhawk Commons</h1>' +
        '<p class="paraHover text"> 725 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var blackhawkHoverCard = new google.maps.InfoWindow({
          content: blackhawkHover,
        });
        blackhawkMarker.addListener('click', function(){
          blackhawkHoverCard.open(map, blackhawkMarker);
        });
        var biodigesterHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/biodigester.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Biodigester</h1>' +
        '<p class="paraHover text"> 755 Dempsey Trail</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var biodigesterHoverCard = new google.maps.InfoWindow({
          content: biodigesterHover,
        });
          biodigesterMarker.addListener('click', function(){
            biodigesterHoverCard.open(map, biodigesterMarker);
        });
        var buckstaffHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/buckstaff.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Buckstaff Planetarium</h1>' +
        '<p class="paraHover text"> 921 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var buckstaffHoverCard = new google.maps.InfoWindow({
          content: buckstaffHover,
        });
        buckstaffMarker.addListener('click', function(){
          buckstaffHoverCard.open(map,buckstaffMarker);
        });
        var equityHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/centerforequity.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Campus Center for Equity &amp; Diversity</h1>' +
        '<p class="paraHover text"> 717 W. Irving Street</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var equityHoverCard = new google.maps.InfoWindow({
          content: equityHover,
        });
          equityMarker.addListener('click', function(){
          equityHoverCard.open(map, equityMarker);
        });
        var campusHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/campus-services.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Campus Services</h1>' +
        '<p class="paraHover text"> 650 Witzel Ave.</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var campusHoverCard = new google.maps.InfoWindow({
          content: campusHover,
        });
          campusMarker.addListener('click', function(){
            campusHoverCard.open(map, campusMarker);
        });
        var ceramicsHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/ceramicslab.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Ceramics Laboratory</h1>' +
        '<p class="paraHover text"> 1165 Rockwell Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var ceramicsHoverCard = new google.maps.InfoWindow({
          content: ceramicsHover,
        });
        ceramicsMarker.addListener('click', function(){
          ceramicsHoverCard.open(map, ceramicsMarker);
        });
        var clowHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/clow.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Clow Social Science Center</h1>' +
        '<p class="paraHover text"> 805 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var clowHoverCard = new google.maps.InfoWindow({
          content: clowHover,
        });
        clowMarker.addListener('click', function(){
          clowHoverCard.open(map, clowMarker);
        });
        var gardensHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/community-gardens.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Community Gardens</h1>' +
        '<p class="paraHover text"> 663 W. 3rd Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var gardensHoverCard = new google.maps.InfoWindow({
          content: gardensHover,
        });
          gardensMarker.addListener('click', function(){
            gardensHoverCard.open(map, gardensMarker);
        });
        var dempseyHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/dempsey.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Dempsey Hall</h1>' +
        '<p class="paraHover text"> 800 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var dempseyHoverCard = new google.maps.InfoWindow({
          content: dempseyHover,
        });
        dempseyMarker.addListener('click', function(){
          dempseyHoverCard.open(map, dempseyMarker);
        });
        var donnerHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/donner.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Donner Hall</h1>' +
        '<p class="paraHover text"> 820 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var donnerHoverCard = new google.maps.InfoWindow({
          content: donnerHover,
        });
        donnerMarker.addListener('click', function(){
          donnerHoverCard.open(map, donnerMarker);
        });
        var eastHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/easthall.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">East Hall</h1>' +
        '<p class="paraHover text"> New York Ave. &amp; Jackson St.</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var eastHoverCard = new google.maps.InfoWindow({
          content: eastHover,
        });
        eastMarker.addListener('click', function(){
          eastHoverCard.open(map,eastMarker);
        });
        var environmentalHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/aquaticstudiescenter.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Environmental Research and Innovation Center</h1>' +
        '<p class="paraHover text"> 83 Pearl Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var environmentalHoverCard = new google.maps.InfoWindow({
          content: environmentalHover,
        });
        environmentalMarker.addListener('click', function(){
          environmentalHoverCard.open(map, environmentalMarker);
        });
        var evansHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/evans.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Evans Hall</h1>' +
        '<p class="paraHover text"> 727 W. Lincoln Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var evansHoverCard = new google.maps.InfoWindow({
          content: evansHover,
        });
          evansMarker.addListener('click', function(){
          evansHoverCard.open(map, evansMarker);
        });
        var fletcherHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/fletcher.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Fletcher Hall</h1>' +
        '<p class="paraHover text"> 712 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var fletcherHoverCard = new google.maps.InfoWindow({
          content: fletcherHover,
        });
          fletcherMarker.addListener('click', function(){
            fletcherHoverCard.open(map, fletcherMarker);
        });
        var fredricHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/fredricmarch.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Fredric March Theatre</h1>' +
        '<p class="paraHover text"> 926 Woodland Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var fredricHoverCard = new google.maps.InfoWindow({
          content: fredricHover,
        });
        fredricMarker.addListener('click', function(){
          fredricHoverCard.open(map,fredricMarker);
        });
        var gruenhagenHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/gruenhagen.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Gruenhagen Conference Center</h1>' +
        '<p class="paraHover text"> 208 Osceola Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var gruenhagenHoverCard = new google.maps.InfoWindow({
          content: gruenhagenHover,
        });
        gruenhagenMarker.addListener('click', function(){
          gruenhagenHoverCard.open(map,gruenhagenMarker);
        });
        var halseyHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/halsey.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Halsey Science Center</h1>' +
        '<p class="paraHover text"> 921 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var halseyHoverCard = new google.maps.InfoWindow({
          content: halseyHover,
        });
        halseyMarker.addListener('click', function(){
          halseyHoverCard.open(map, halseyMarker);
        });
        var harringtonHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/harrington.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Harrington Hall</h1>' +
        '<p class="paraHover text"> 845 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var harringtonHoverCard = new google.maps.InfoWindow({
          content: harringtonHover,
        });
        harringtonMarker.addListener('click', function(){
          harringtonHoverCard.open(map, harringtonMarker);
        });
        var heatingHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/heatingplant.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Heating Plant</h1>' +
        '<p class="paraHover text"> 1010 Woodland Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var heatingHoverCard = new google.maps.InfoWindow({
          content: heatingHover,
        });
        heatingMarker.addListener('click', function(){
          heatingHoverCard.open(map,heatingMarker);
        });
        var parkingRampHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/parkingramp.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">High Avenue Parking Ramp</h1>' +
        '<p class="paraHover text"> 725 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var parkingRampHoverCard = new google.maps.InfoWindow({
          content: parkingRampHover,
        });
        parkingRampMarker.addListener('click', function(){
          parkingRampHoverCard.open(map, parkingRampMarker);
        });
        var horizonHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/horizon.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Horizon Village</h1>' +
        '<p class="paraHover text"> 700 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var horizonHoverCard = new google.maps.InfoWindow({
          content: horizonHover,
        });
          horizonMarker.addListener('click', function(){
            horizonHoverCard.open(map, horizonMarker);
        });
        var kolfHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/kolf.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Kolf Sports Center</h1>' +
        '<p class="paraHover text"> 785 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var kolfHoverCard = new google.maps.InfoWindow({
          content: kolfHover,
        });
        kolfMarker.addListener('click', function(){
          kolfHoverCard.open(map, kolfMarker);
        });
        var lincolnHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/lincoln-hall.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Lincoln Hall</h1>' +
        '<p class="paraHover text"> 608 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var lincolnHoverCard = new google.maps.InfoWindow({
          content: lincolnHover,
        });
          lincolnMarker.addListener('click', function(){
            lincolnHoverCard.open(map, lincolnMarker);
        });
        var multiculturalHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/multiculturaleducation.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Multicultural Education Center</h1>' +
        '<p class="paraHover text"> 751 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var multiculturalHoverCard = new google.maps.InfoWindow({
          content: multiculturalHover,
        });
        multiculturalMarker.addListener('click', function(){
          multiculturalHoverCard.open(map, multiculturalMarker);
        });
        var nursingHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/nursingeducation.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Nursing &amp; Education Building</h1>' +
        '<p class="paraHover text"> 845 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var nursingHoverCard = new google.maps.InfoWindow({
          content: nursingHover,
        });
        nursingMarker.addListener('click', function(){
          nursingHoverCard.open(map, nursingMarker);
        });
        var oviattHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/oviatt.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Oviatt House</h1>' +
        '<p class="paraHover text"> 842 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var oviattHoverCard = new google.maps.InfoWindow({
          content: oviattHover,
        });
        oviattMarker.addListener('click', function(){
          oviattHoverCard.open(map, oviattMarker);
        });
        var pollockHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/pollock.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Pollock Alumni House</h1>' +
        '<p class="paraHover text"> 765 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var pollockHoverCard = new google.maps.InfoWindow({
          content: pollockHover,
        });
          pollockMarker.addListener('click', function(){
            pollockHoverCard.open(map, pollockMarker);
        });
        var polkHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/polk.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Polk Library</h1>' +
        '<p class="paraHover text"> 801 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var polkHoverCard = new google.maps.InfoWindow({
          content: polkHover,
        });
        polkMarker.addListener('click', function(){
          polkHoverCard.open(map, polkMarker);
        });
        var radfordHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/radford.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Radford Hall</h1>' +
        '<p class="paraHover text"> 777 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var radfordHoverCard = new google.maps.InfoWindow({
          content: radfordHover,
        });
        radfordMarker.addListener('click', function(){
          radfordHoverCard.open(map, radfordMarker);
        });
        var reeveHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/reeve.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Reeve Memorial Union</h1>' +
        '<p class="paraHover text"> 748 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var reeveHoverCard = new google.maps.InfoWindow({
          content: reeveHover,
        });
          reeveMarker.addListener('click', function(){
          reeveHoverCard.open(map, reeveMarker);
        });
        var sageHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/sage.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Sage Hall</h1>' +
        '<p class="paraHover text"> 845 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var sageHoverCard = new google.maps.InfoWindow({
          content: sageHover,
        });
        sageMarker.addListener('click', function(){
          sageHoverCard.open(map, sageMarker);
        });
        var scottHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/scott.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Scott Hall</h1>' +
        '<p class="paraHover text"> 625 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var scottHoverCard = new google.maps.InfoWindow({
          content: scottHover,
        });
          scottMarker.addListener('click', function(){
            scottHoverCard.open(map, scottMarker);
        });
        var stewartHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/stewart.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Stewart Hall</h1>' +
        '<p class="paraHover text"> 723 W. Lincoln Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var stewartHoverCard = new google.maps.InfoWindow({
          content: stewartHover,
        });
          stewartMarker.addListener('click', function(){
          stewartHoverCard.open(map, stewartMarker);
        });
        var recreationHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/srwc.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Student Recreation &amp; Wellness Center</h1>' +
        '<p class="paraHover text"> 735 Pearl Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var recreationHoverCard = new google.maps.InfoWindow({
          content: recreationHover,
        });
        recreationMarker.addListener('click', function(){
          recreationHoverCard.open(map, recreationMarker);
        });
        var successHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/studentsuccess.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Student Success Center</h1>' +
        '<p class="paraHover text"> 750 Elmwood Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var successHoverCard = new google.maps.InfoWindow({
          content: successHover,
        });
          successMarker.addListener('click', function(){
          successHoverCard.open(map, successMarker);
        });
        var swartHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/swart.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Swart Hall</h1>' +
        '<p class="paraHover text"> 912 Algoma Boulevard</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var swartHoverCard = new google.maps.InfoWindow({
          content: swartHover,
        });
        swartMarker.addListener('click', function(){
          swartHoverCard.open(map, swartMarker);
        });
        var taylorHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/taylor.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Taylor Hall</h1>' +
        '<p class="paraHover text"> 780 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var taylorHoverCard = new google.maps.InfoWindow({
          content: taylorHover,
        });
        taylorMarker.addListener('click', function(){
          taylorHoverCard.open(map, taylorMarker);
        });
        var titanHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/titanstadium.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Titan Stadium</h1>' +
        '<p class="paraHover text"> 450 Josslyn Street</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var titanHoverCard = new google.maps.InfoWindow({
          content: titanHover,
        });
          titanMarker.addListener('click', function(){
            titanHoverCard.open(map, titanMarker);
        });
        var policeHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/universitypolice.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">University Police</h1>' +
        '<p class="paraHover text"> 738 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>' +
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var policeHoverCard = new google.maps.InfoWindow({
          content: policeHover,
        });
        policeMarker.addListener('click', function(){
          policeHoverCard.open(map, policeMarker);
        });
        var websterHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/webster.jpeg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">Webster Hall</h1>' +
        '<p class="paraHover text"> 810 High Avenue</p>' +
        '<p class="paraHover text"> Oshkosh, WI 54901</p>' +
        '<br>'+
        '<a href="#" class="text link">Click for more info</a>'+
        '</div>'+
        '</div>';
        var websterHoverCard = new google.maps.InfoWindow({
          content: websterHover,
        });
        websterMarker.addListener('click', function(){
          websterHoverCard.open(map, websterMarker);
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
        var acAccEntMarker = new google.maps.Marker({
          position: buildings[3],
          icon: image
        });
        var fredricAccEntMarker = new google.maps.Marker({
          position: buildings[19],
          icon: image
        });
        var halseyAccEntMarker = new google.maps.Marker({
          position: buildings[21],
          icon: image
        });var swartAccEntMarker = new google.maps.Marker({
          position: buildings[40],
          icon: image
        });
        var harringtonAccEntMarker = new google.maps.Marker({
          position: buildings[22],
          icon: image
        });var nursingAccEntMarker = new google.maps.Marker({
          position: buildings[29],
          icon: image
        });
        var clowAccEntMarker = new google.maps.Marker({
          position: buildings[11],
          icon: image
        });var dempseyAccEntMarker = new google.maps.Marker({
          position: buildings[13],
          icon: image
        });var polkAccEntMarker = new google.maps.Marker({
          position: buildings[32],
          icon: image
        });var albeeAccEntMarker = new google.maps.Marker({
          position: buildings[0],
          icon: image
        });var reeveAccEntMarker = new google.maps.Marker({
          position: buildings[34],
          icon: image
        });var successAccEntMarker = new google.maps.Marker({
          position: buildings[39],
          icon: image
        });var stewartAccEntMarker = new google.maps.Marker({
          position: buildings[37],
          icon: image
        });var fletcherAccEntMarker = new google.maps.Marker({
          position: buildings[18],
          icon: image
        });var equityAccEntMarker = new google.maps.Marker({
          position: buildings[8],
          icon: image
        });var radfordAccEntMarker = new google.maps.Marker({
          position: buildings[33],
          icon: image
        });var donnerAccEntMarker = new google.maps.Marker({
          position: buildings[14],
          icon: image
        });var websterAccEntMarker = new google.maps.Marker({
          position: buildings[44],
          icon: image
        });var taylorAccEntMarker = new google.maps.Marker({
          position: buildings[41],
          icon: image
        });var blackhawkAccEntMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });var gruenhagenAccEntMarker = new google.maps.Marker({
          position: buildings[20],
          icon: image
        });var scottAccEntMarker = new google.maps.Marker({
          position: buildings[36],
          icon: image
        });var kolfAccEntMarker = new google.maps.Marker({
          position: buildings[26],
          icon: image
        });
        // accEnt hover cards for markers
        acAccEntMarker.addListener('click', function(){
          acHoverCard.open(map,acAccEntMarker);
        });
        fredricAccEntMarker.addListener('click', function(){
          fredricHoverCard.open(map,fredricAccEntMarker);
        });
        halseyAccEntMarker.addListener('click', function(){
          halseyHoverCard.open(map, halseyAccEntMarker);
        });
        swartAccEntMarker.addListener('click', function(){
          swartHoverCard.open(map, swartAccEntMarker);
        });
        harringtonAccEntMarker.addListener('click', function(){
          harringtonHoverCard.open(map, harringtonAccEntMarker);
        });
        nursingAccEntMarker.addListener('click', function(){
          nursingHoverCard.open(map, nursingAccEntMarker);
        });
        clowAccEntMarker.addListener('click', function(){
          clowHoverCard.open(map, clowAccEntMarker);
        });
        dempseyAccEntMarker.addListener('click', function(){
          dempseyHoverCard.open(map, dempseyAccEntMarker);
        });
        polkAccEntMarker.addListener('click', function(){
          polkHoverCard.open(map, polkAccEntMarker);
        });
        albeeAccEntMarker.addListener('click', function(){
          albeeHoverCard.open(map, albeeAccEntMarker);
        });
        reeveAccEntMarker.addListener('click', function(){
        reeveHoverCard.open(map, reeveAccEntMarker);
        });
        successAccEntMarker.addListener('click', function(){
        successHoverCard.open(map, successAccEntMarker);
        });
        stewartAccEntMarker.addListener('click', function(){
        stewartHoverCard.open(map, stewartAccEntMarker);
        });
        fletcherAccEntMarker.addListener('click', function(){
        fletcherHoverCard.open(map, fletcherAccEntMarker);
        });
        equityAccEntMarker.addListener('click', function(){
        equityHoverCard.open(map, equityAccEntMarker);
        });
        radfordAccEntMarker.addListener('click', function(){
        radfordHoverCard.open(map, radfordAccEntMarker);
        });
        donnerAccEntMarker.addListener('click', function(){
        donnerHoverCard.open(map, donnerAccEntMarker);
        });
        websterAccEntMarker.addListener('click', function(){
        websterHoverCard.open(map, websterAccEntMarker);
        });
        taylorAccEntMarker.addListener('click', function(){
        taylorHoverCard.open(map, taylorAccEntMarker);
        });
        blackhawkAccEntMarker.addListener('click', function(){
          blackhawkHoverCard.open(map, blackhawkAccEntMarker);
        });
        gruenhagenAccEntMarker.addListener('click', function(){
          gruenhagenHoverCard.open(map,gruenhagenAccEntMarker);
        });
        scottAccEntMarker.addListener('click', function(){
          scottHoverCard.open(map, scottAccEntMarker);
        });
        kolfAccEntMarker.addListener('click', function(){
          kolfHoverCard.open(map, kolfAccEntMarker);
        });
        // accessible entries (buildings)
        function setAccEnt(){
          acAccEntMarker.setMap(map);
          fredricAccEntMarker.setMap(map);
          halseyAccEntMarker.setMap(map);
          swartAccEntMarker.setMap(map);
          harringtonAccEntMarker.setMap(map);
          nursingAccEntMarker.setMap(map);
          clowAccEntMarker.setMap(map);
          dempseyAccEntMarker.setMap(map);
          polkAccEntMarker.setMap(map);
          albeeAccEntMarker.setMap(map);
          reeveAccEntMarker.setMap(map);
          successAccEntMarker.setMap(map);
          stewartAccEntMarker.setMap(map);
          fletcherAccEntMarker.setMap(map);
          equityAccEntMarker.setMap(map);
          radfordAccEntMarker.setMap(map);
          donnerAccEntMarker.setMap(map);
          websterAccEntMarker.setMap(map);
          taylorAccEntMarker.setMap(map);
          blackhawkAccEntMarker.setMap(map);
          gruenhagenAccEntMarker.setMap(map);
          scottAccEntMarker.setMap(map);
          kolfAccEntMarker.setMap(map);
        }
        function removeAccEnt(){
          acAccEntMarker.setMap(null);
          fredricAccEntMarker.setMap(null);
          halseyAccEntMarker.setMap(null);
          swartAccEntMarker.setMap(null);
          harringtonAccEntMarker.setMap(null);
          nursingAccEntMarker.setMap(null);
          clowAccEntMarker.setMap(null);
          dempseyAccEntMarker.setMap(null);
          polkAccEntMarker.setMap(null);
          albeeAccEntMarker.setMap(null);
          reeveAccEntMarker.setMap(null);
          successAccEntMarker.setMap(null);
          stewartAccEntMarker.setMap(null);
          fletcherAccEntMarker.setMap(null);
          equityAccEntMarker.setMap(null);
          radfordAccEntMarker.setMap(null);
          donnerAccEntMarker.setMap(null);
          websterAccEntMarker.setMap(null);
          taylorAccEntMarker.setMap(null);
          blackhawkAccEntMarker.setMap(null);
          gruenhagenAccEntMarker.setMap(null);
          scottAccEntMarker.setMap(null);
          kolfAccEntMarker.setMap(null);
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
// will need to put hover for parking here

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
  var heatingSustMarker = new google.maps.Marker({
    position: buildings[23],
    icon: image
  });
  var sageSustMarker = new google.maps.Marker({
    position: buildings[35],
    icon: image
  });
  var albeeSustMarker = new google.maps.Marker({
    position: buildings[0],
    icon: image
  });
  var successSustMarker = new google.maps.Marker({
    position: buildings[39],
    icon: image
  });
  var reeveSustMarker = new google.maps.Marker({
    position: buildings[34],
    icon: image
  });
  var blackhawkSustMarker = new google.maps.Marker({
    position: buildings[5],
    icon: image
  });
  var taylorSustMarker = new google.maps.Marker({
    position: buildings[41],
    icon: image
  });
  var horizonSustMarker = new google.maps.Marker({
    position: buildings[25],
    icon: image
  });
  var alumniSustMarker = new google.maps.Marker({
    position: buildings[2],
    icon: image
  });
  var recreationSustMarker = new google.maps.Marker({
    position: buildings[38],
    icon: image
  });
  var titanSustMarker = new google.maps.Marker({
    position: buildings[42],
    icon: image
  });
  var biodigesterSustMarker = new google.maps.Marker({
    position: buildings[6],
    icon: image
  });
  // sust hovers
  heatingSustMarker.addListener('click', function(){
    heatingHoverCard.open(map,heatingSustMarker);
  });
  sageSustMarker.addListener('click', function(){
    sageHoverCard.open(map, sageSustMarker);
  });
  albeeSustMarker.addListener('click', function(){
    albeeHoverCard.open(map, albeeSustMarker);
  });
  successSustMarker.addListener('click', function(){
  successHoverCard.open(map, successSustMarker);
  });
  reeveSustMarker.addListener('click', function(){
  reeveHoverCard.open(map, reeveSustMarker);
  });
  blackhawkSustMarker.addListener('click', function(){
    blackhawkHoverCard.open(map, blackhawkSustMarker);
  });
  taylorSustMarker.addListener('click', function(){
    taylorHoverCard.open(map, taylorSustMarker);
  });
  horizonSustMarker.addListener('click', function(){
    horizonHoverCard.open(map, horizonSustMarker);
  });
  alumniSustMarker.addListener('click', function(){
    alumniHoverCard.open(map, alumniSustMarker);
  });
  recreationSustMarker.addListener('click', function(){
    recreationHoverCard.open(map, recreationSustMarker);
  });
  titanSustMarker.addListener('click', function(){
    titanHoverCard.open(map, titanSustMarker);
  });
  biodigesterSustMarker.addListener('click', function(){
    biodigesterHoverCard.open(map, biodigesterSustMarker);
  });
        // setting sustainability markers
        function setSust(){
          heatingSustMarker.setMap(map);
          sageSustMarker.setMap(map);
          albeeSustMarker.setMap(map);
          successSustMarker.setMap(map);
          reeveSustMarker.setMap(map);
          blackhawkSustMarker.setMap(map);
          taylorSustMarker.setMap(map);
          horizonSustMarker.setMap(map);
          alumniSustMarker.setMap(map);
          recreationSustMarker.setMap(map);
          titanSustMarker.setMap(map);
          biodigesterSustMarker.setMap(map);
        }
        // remove sustainability markers
        function removeSust(){
          heatingSustMarker.setMap(null);
          sageSustMarker.setMap(null);
          albeeSustMarker.setMap(null);
          successSustMarker.setMap(null);
          reeveSustMarker.setMap(null);
          blackhawkSustMarker.setMap(null);
          taylorSustMarker.setMap(null);
          horizonSustMarker.setMap(null);
          alumniSustMarker.setMap(null);
          recreationSustMarker.setMap(null);
          titanSustMarker.setMap(null);
          biodigesterSustMarker.setMap(null);
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
        var halseyGenderMarker = new google.maps.Marker({
          position: buildings[21],
          icon: image
        });
        var swartGenderMarker = new google.maps.Marker({
          position: buildings[40],
          icon: image
        });
        var harringtonGenderMarker = new google.maps.Marker({
          position: buildings[22],
          icon: image
        });
        var nursingGenderMarker = new google.maps.Marker({
          position: buildings[29],
          icon: image
        });
        var sageGenderMarker = new google.maps.Marker({
          position: buildings[35],
          icon: image
        });
        var dempseyGenderMarker = new google.maps.Marker({
          position: buildings[13],
          icon: image
        });
        var successGenderMarker = new google.maps.Marker({
          position: buildings[39],
          icon: image
        });
        var reeveGenderMarker = new google.maps.Marker({
          position: buildings[34],
          icon: image
        });
        var campusGenderMarker = new google.maps.Marker({
          position: buildings[9],
          icon: image
        });
        var kolfGenderMarker = new google.maps.Marker({
          position: buildings[26],
          icon: image
        });
        var policeGenderMarker = new google.maps.Marker({
          position: buildings[43],
          icon: image
        });
        var blackhawkGenderMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });
        var recreationGenderMarker = new google.maps.Marker({
          position: buildings[38],
          icon: image
        });
        // gender hover
        acGenderMarker.addListener('click', function(){
          acHoverCard.open(map,acGenderMarker);
        });
        halseyGenderMarker.addListener('click', function(){
          halseyHoverCard.open(map, halseyGenderMarker);
        });
        swartGenderMarker.addListener('click', function(){
          swartHoverCard.open(map, swartGenderMarker);
        });
        harringtonGenderMarker.addListener('click', function(){
          harringtonHoverCard.open(map, harringtonGenderMarker);
        });
        nursingGenderMarker.addListener('click', function(){
          nursingHoverCard.open(map, nursingGenderMarker);
        });
        sageGenderMarker.addListener('click', function(){
          sageHoverCard.open(map, sageGenderMarker);
        });
        dempseyGenderMarker.addListener('click', function(){
          dempseyHoverCard.open(map, dempseyGenderMarker);
        });
        successGenderMarker.addListener('click', function(){
        successHoverCard.open(map, successGenderMarker);
        });
        reeveGenderMarker.addListener('click', function(){
        reeveHoverCard.open(map, reeveGenderMarker);
        });
        campusGenderMarker.addListener('click', function(){
        campusHoverCard.open(map, campusGenderMarker);
        });
        kolfGenderMarker.addListener('click', function(){
          kolfHoverCard.open(map, kolfGenderMarker);
        });
        policeGenderMarker.addListener('click', function(){
          policeHoverCard.open(map, policeGenderMarker);
        });
        blackhawkGenderMarker.addListener('click', function(){
          blackhawkHoverCard.open(map, blackhawkGenderMarker);
        });
        recreationGenderMarker.addListener('click', function(){
          recreationHoverCard.open(map, recreationGenderMarker);
        });
        // setting gender markers
        function setGender(){
          acGenderMarker.setMap(map);
          halseyGenderMarker.setMap(map);
          swartGenderMarker.setMap(map);
          harringtonGenderMarker.setMap(map);
          nursingGenderMarker.setMap(map);
          sageGenderMarker.setMap(map);
          dempseyGenderMarker.setMap(map);
          successGenderMarker.setMap(map);
          reeveGenderMarker.setMap(map);
          campusGenderMarker.setMap(map);
          kolfGenderMarker.setMap(map);
          policeGenderMarker.setMap(map);
          blackhawkGenderMarker.setMap(map);
          recreationGenderMarker.setMap(map);
        }
        // removing gender markers
        function removeGender(){
          acGenderMarker.setMap(null);
          halseyGenderMarker.setMap(null);
          swartGenderMarker.setMap(null);
          harringtonGenderMarker.setMap(null);
          nursingGenderMarker.setMap(null);
          sageGenderMarker.setMap(null);
          dempseyGenderMarker.setMap(null);
          successGenderMarker.setMap(null);
          reeveGenderMarker.setMap(null);
          campusGenderMarker.setMap(null);
          kolfGenderMarker.setMap(null);
          policeGenderMarker.setMap(null);
          blackhawkGenderMarker.setMap(null);
          recreationGenderMarker.setMap(null);
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
      var acAccaFMarker = new google.maps.Marker({
        position: buildings[3],
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
      var swartAccaFMarker = new google.maps.Marker({
        position: buildings[40],
        icon: image
      });
      var nursingAccaFMarker = new google.maps.Marker({
        position: buildings[29],
        icon: image
      });
      var clowAccaFMarker = new google.maps.Marker({
        position: buildings[11],
        icon: image
      });
      var polkAccaFMarker = new google.maps.Marker({
        position: buildings[32],
        icon: image
      });
      var albeeAccaFMarker = new google.maps.Marker({
        position: buildings[0],
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
      var kolfAccaFMarker = new google.maps.Marker({
        position: buildings[26],
        icon: image
      });
      var environmentalAccaFMarker = new google.maps.Marker({
        position: buildings[16],
        icon: image
      });
      var ceramicsAccaFMarker = new google.maps.Marker({
        position: buildings[10],
        icon: image
      });
      // hover for AccaF
      acAccaFMarker.addListener('click', function(){
        acHoverCard.open(map,acAccaFMarker);
      });
      fredricAccaFMarker.addListener('click', function(){
        fredricHoverCard.open(map,fredricAccaFMarker);
      });
      halseyAccaFMarker.addListener('click', function(){
        halseyHoverCard.open(map, halseyAccaFMarker);
      });
      harringtonAccaFMarker.addListener('click', function(){
        harringtonHoverCard.open(map, harringtonAccaFMarker);
      });
      swartAccaFMarker.addListener('click', function(){
        swartHoverCard.open(map, swartAccaFMarker);
      });
      nursingAccaFMarker.addListener('click', function(){
        nursingHoverCard.open(map, nursingAccaFMarker);
      });
      clowAccaFMarker.addListener('click', function(){
        clowHoverCard.open(map, clowAccaFMarker);
      });
      polkAccaFMarker.addListener('click', function(){
        polkHoverCard.open(map, polkAccaFMarker);
      });
      albeeAccaFMarker.addListener('click', function(){
        albeeHoverCard.open(map, albeeAccaFMarker);
      });
      radfordAccaFMarker.addListener('click', function(){
        radfordHoverCard.open(map, radfordAccaFMarker);
      });
      sageAccaFMarker.addListener('click', function(){
        sageHoverCard.open(map, sageAccaFMarker);
      });
      kolfAccaFMarker.addListener('click', function(){
        kolfHoverCard.open(map, kolfAccaFMarker);
      });
      environmentalAccaFMarker.addListener('click', function(){
        environmentalHoverCard.open(map, environmentalAccaFMarker);
      });
      ceramicsAccaFMarker.addListener('click', function(){
        ceramicsHoverCard.open(map, ceramicsAccaFMarker);
      });
        // functions for categories select/remove markers
        function setAccaF(){
          acAccaFMarker.setMap(map);
          fredricAccaFMarker.setMap(map);
          halseyAccaFMarker.setMap(map);
          harringtonAccaFMarker.setMap(map);
          swartAccaFMarker.setMap(map);
          nursingAccaFMarker.setMap(map);
          clowAccaFMarker.setMap(map);
          polkAccaFMarker.setMap(map);
          albeeAccaFMarker.setMap(map);
          radfordAccaFMarker.setMap(map);
          sageAccaFMarker.setMap(map);
          kolfAccaFMarker.setMap(map);
          environmentalAccaFMarker.setMap(map);
          ceramicsAccaFMarker.setMap(map);
        }
        function removeAccaF(){
          acAccaFMarker.setMap(null);
          fredricAccaFMarker.setMap(null);
          halseyAccaFMarker.setMap(null);
          harringtonAccaFMarker.setMap(null);
          swartAccaFMarker.setMap(null);
          nursingAccaFMarker.setMap(null);
          clowAccaFMarker.setMap(null);
          polkAccaFMarker.setMap(null);
          albeeAccaFMarker.setMap(null);
          radfordAccaFMarker.setMap(null);
          sageAccaFMarker.setMap(null);
          kolfAccaFMarker.setMap(null);
          environmentalAccaFMarker.setMap(null);
          ceramicsAccaFMarker.setMap(null);
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
      var eastAthMarker = new google.maps.Marker({
        position: buildings[15],
        icon: image
      });
      var albeeAthMarker = new google.maps.Marker({
        position: buildings[0],
        icon: image
      });
      var kolfAthMarker = new google.maps.Marker({
        position: buildings[26],
        icon: image
      });
      var athleticAthMarker = new google.maps.Marker({
        position: buildings[4],
        icon: image
      });
      var baseballAthMarker = new google.maps.Marker({
        position: buildings[1],
        icon: image
      });
      var titanAthMarker = new google.maps.Marker({
        position: buildings[42],
        icon: image
      });
      // athletics marker hover
      eastAthMarker.addListener('click', function(){
        eastHoverCard.open(map,eastAthMarker);
      });
      albeeAthMarker.addListener('click', function(){
        albeeHoverCard.open(map, albeeAthMarker);
      });
      kolfAthMarker.addListener('click', function(){
        kolfHoverCard.open(map, kolfAthMarker);
      });
      athleticAthMarker.addListener('click', function(){
          athleticHoverCard.open(map, athleticAthMarker);
      });
      baseballAthMarker.addListener('click', function(){
          baseballHoverCard.open(map, baseballAthMarker);
      });
      titanAthMarker.addListener('click', function(){
          titanHoverCard.open(map, titanAthMarker);
      });
        function setAth(){
          eastAthMarker.setMap(map);
          albeeAthMarker.setMap(map);
          kolfAthMarker.setMap(map);
          athleticAthMarker.setMap(map);
          baseballAthMarker.setMap(map);
          titanAthMarker.setMap(map);
        }
        function removeAth(){
          eastAthMarker.setMap(null);
          albeeAthMarker.setMap(null);
          kolfAthMarker.setMap(null);
          athleticAthMarker.setMap(null);
          baseballAthMarker.setMap(null);
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
      var swartAccaSMarker = new google.maps.Marker({
        position: buildings[40],
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
      var equityAccaSMarker = new google.maps.Marker({
        position: buildings[8],
        icon: image
      });
      // AccaS hover
      swartAccaSMarker.addListener('click', function(){
        swartHoverCard.open(map, swartAccaSMarker);
      });
      nursingAccaSMarker.addListener('click', function(){
        nursingHoverCard.open(map, nursingAccaSMarker);
      });
      successAccaSMarker.addListener('click', function(){
        successHoverCard.open(map, successAccaSMarker);
      });
      equityAccaSMarker.addListener('click', function(){
        equityHoverCard.open(map, equityAccaSMarker);
      });
      // set/remove AccaS
        function setAccaS(){
          equityAccaSMarker.setMap(map);
          successAccaSMarker.setMap(map);
          swartAccaSMarker.setMap(map);
          nursingAccaSMarker.setMap(map);
        }
        function removeAccaS(){
          equityAccaSMarker.setMap(null);
          successAccaSMarker.setMap(null);
          swartAccaSMarker.setMap(null);
          nursingAccaSMarker.setMap(null);
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
      var dempseyCampSMarker = new google.maps.Marker({
        position: buildings[13],
        icon: image
      });
      var radfordCampSMarker = new google.maps.Marker({
        position: buildings[33],
        icon: image
      });
      var multiculturalCampSMarker = new google.maps.Marker({
        position: buildings[28],
        icon: image
      });
      var recreationCampSMarker = new google.maps.Marker({
        position: buildings[38],
        icon: image
      });
      var reeveCampSMarker = new google.maps.Marker({
        position: buildings[34],
        icon: image
      });
      var successCampSMarker = new google.maps.Marker({
        position: buildings[39],
        icon: image
      });
      var equityCampSMarker = new google.maps.Marker({
        position: buildings[8],
        icon: image
      });
      var campusCampSMarker = new google.maps.Marker({
        position: buildings[9],
        icon: image
      });
      var pollockCampSMarker = new google.maps.Marker({
        position: buildings[31],
        icon: image
      });
      // CampS hover
      dempseyCampSMarker.addListener('click', function(){
        dempseyHoverCard.open(map, dempseyCampSMarker);
      });
      radfordCampSMarker.addListener('click', function(){
        radfordHoverCard.open(map, radfordCampSMarker);
      });
      multiculturalCampSMarker.addListener('click', function(){
        multiculturalHoverCard.open(map, multiculturalCampSMarker);
      });
      recreationCampSMarker.addListener('click', function(){
        recreationHoverCard.open(map, recreationCampSMarker);
      });
      reeveCampSMarker.addListener('click', function(){
        reeveHoverCard.open(map, reeveCampSMarker);
      });
      successCampSMarker.addListener('click', function(){
        successHoverCard.open(map, successCampSMarker);
      });
      equityCampSMarker.addListener('click', function(){
        equityHoverCard.open(map, equityCampSMarker);
      });
      campusCampSMarker.addListener('click', function(){
          campusHoverCard.open(map, campusCampSMarker);
      });
      pollockCampSMarker.addListener('click', function(){
          pollockHoverCard.open(map, pollockCampSMarker);
      });
      // set/remove CampS

        function setCampS(){
          campusCampSMarker.setMap(map);
          recreationCampSMarker.setMap(map);
          equityCampSMarker.setMap(map);
          successCampSMarker.setMap(map);
          reeveCampSMarker.setMap(map);
          multiculturalCampSMarker.setMap(map);
          pollockCampSMarker.setMap(map);
          radfordCampSMarker.setMap(map);
          dempseyCampSMarker.setMap(map);
        }
        function removeCampS(){
          campusCampSMarker.setMap(null);
          recreationCampSMarker.setMap(null);
          equityCampSMarker.setMap(null);
          successCampSMarker.setMap(null);
          reeveCampSMarker.setMap(null);
          multiculturalCampSMarker.setMap(null);
          pollockCampSMarker.setMap(null);
          radfordCampSMarker.setMap(null);
          dempseyCampSMarker.setMap(null);
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
      var gruenhagenResHMarker = new google.maps.Marker({
        position: buildings[20],
        icon: image
      });
      var donnerResHMarker = new google.maps.Marker({
              position: buildings[14],
              icon: image
            });
      var websterResHMarker = new google.maps.Marker({
              position: buildings[44],
              icon: image
            });
      var taylorResHMarker = new google.maps.Marker({
              position: buildings[41],
              icon: image
            });
      var evansResHMarker = new google.maps.Marker({
              position: buildings[17],
              icon: image
            });
      var stewartResHMarker = new google.maps.Marker({
              position: buildings[37],
              icon: image
            });
      var fletcherResHMarker = new google.maps.Marker({
              position: buildings[18],
              icon: image
            });
      var horizonResHMarker = new google.maps.Marker({
              position: buildings[25],
              icon: image
            });
      var scottResHMarker = new google.maps.Marker({
              position: buildings[36],
              icon: image
            });
      // ResH hover
      gruenhagenResHMarker.addListener('click', function(){
        gruenhagenHoverCard.open(map,gruenhagenResHMarker);
      });
      donnerResHMarker.addListener('click', function(){
        donnerHoverCard.open(map, donnerResHMarker);
      });
      websterResHMarker.addListener('click', function(){
        websterHoverCard.open(map, websterResHMarker);
      });
      taylorResHMarker.addListener('click', function(){
        taylorHoverCard.open(map, taylorResHMarker);
      });
      evansResHMarker.addListener('click', function(){
        evansHoverCard.open(map, evansResHMarker);
      });
      stewartResHMarker.addListener('click', function(){
        stewartHoverCard.open(map, stewartResHMarker);
      });
      fletcherResHMarker.addListener('click', function(){
          fletcherHoverCard.open(map, fletcherResHMarker);
      });
      horizonResHMarker.addListener('click', function(){
          horizonHoverCard.open(map, horizonResHMarker);
      });
      scottResHMarker.addListener('click', function(){
          scottHoverCard.open(map, scottResHMarker);
      });
      // ResH set/remove
        function setResH(){
          gruenhagenResHMarker.setMap(map);
          donnerResHMarker.setMap(map);
          websterResHMarker.setMap(map);
          taylorResHMarker.setMap(map);
          evansResHMarker.setMap(map);
          stewartResHMarker.setMap(map);
          fletcherResHMarker.setMap(map);
          horizonResHMarker.setMap(map);
          scottResHMarker.setMap(map);
        }
        function removeResH(){
          gruenhagenResHMarker.setMap(null);
          donnerResHMarker.setMap(null);
          websterResHMarker.setMap(null);
          taylorResHMarker.setMap(null);
          evansResHMarker.setMap(null);
          stewartResHMarker.setMap(null);
          fletcherResHMarker.setMap(null);
          horizonResHMarker.setMap(null);
          scottResHMarker.setMap(null);
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
      var halseyDiningMarker = new google.maps.Marker({
        position: buildings[21],
        icon: image
      });
      var clowDiningMarker = new google.maps.Marker({
        position: buildings[11],
        icon: image
      });
      var sageDiningMarker = new google.maps.Marker({
        position: buildings[35],
        icon: image
      });
      var blackhawkDiningMarker = new google.maps.Marker({
        position: buildings[5],
        icon: image
      });
      var reeveDiningMarker = new google.maps.Marker({
        position: buildings[34],
        icon: image
      });
      var scottDiningMarker = new google.maps.Marker({
        position: buildings[36],
        icon: image
      });
      var halseyDiningMarker = new google.maps.Marker({
        position: buildings[21],
        icon: image
      });
      var clowDiningMarker = new google.maps.Marker({
        position: buildings[11],
        icon: image
      });
      var sageDiningMarker = new google.maps.Marker({
        position: buildings[35],
        icon: image
      });
      var blackhawkDiningMarker = new google.maps.Marker({
        position: buildings[5],
        icon: image
      });
      var reeveDiningMarker = new google.maps.Marker({
        position: buildings[34],
        icon: image
      });
      var scottDiningMarker = new google.maps.Marker({
        position: buildings[36],
        icon: image
      });
      // dining hover
      halseyDiningMarker.addListener('click', function(){
        halseyHoverCard.open(map, halseyDiningMarker);
      });
      clowDiningMarker.addListener('click', function(){
        clowHoverCard.open(map, clowDiningMarker);
      });
      sageDiningMarker.addListener('click', function(){
        sageHoverCard.open(map, sageDiningMarker);
      });
      blackhawkDiningMarker.addListener('click', function(){
        blackhawkHoverCard.open(map, blackhawkDiningMarker);
      });
      reeveDiningMarker.addListener('click', function(){
        reeveHoverCard.open(map, reeveDiningMarker);
      });
      scottDiningMarker.addListener('click', function(){
          scottHoverCard.open(map, scottDiningMarker);
      });
      // set/remove dining
        function setDining(){
          reeveDiningMarker.setMap(map);
          blackhawkDiningMarker.setMap(map);
          scottDiningMarker.setMap(map);
          sageDiningMarker.setMap(map);
          clowDiningMarker.setMap(map);
          halseyDiningMarker.setMap(map);
        }
        function removeDining(){
          reeveDiningMarker.setMap(null);
          blackhawkDiningMarker.setMap(null);
          scottDiningMarker.setMap(null);
          sageDiningMarker.setMap(null);
          clowDiningMarker.setMap(null);
          halseyDiningMarker.setMap(null);
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
    var recreationStuRMarker = new google.maps.Marker({
      position: buildings[38],
      icon: image
    });
    var reeveStuRMarker = new google.maps.Marker({
      position: buildings[34],
      icon: image
    });
    // StuR hover
    recreationStuRMarker.addListener('click', function(){
      recreationHoverCard.open(map, recreationStuRMarker);
    });
    reeveStuRMarker.addListener('click', function(){
      reeveHoverCard.open(map, reeveStuRMarker);
    });
    // StuR set/remove
        function setStuR(){
          recreationStuRMarker.setMap(map);
          reeveStuRMarker.setMap(map);
        }
        function removeStuR(){
          recreationStuRMarker.setMap(null);
          reeveStuRMarker.setMap(null);
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


  }
