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
        // gruenhagen [0]
        {lat: 44.022405, lng:  -88.548824},
        // A&C [1]
        {lat: 44.029640, lng: -88.552137},
        // East Hall [2]
        {lat: 44.031217, lng: -88.543806},
        // Fredric March Theater [3]
        {lat:  44.029000, lng:-88.552919},
        // Heating Plant [4]
        {lat: 44.028235, lng: -88.554312},
        // Buckstaff Planetarium [5]
        {lat: 44.028428, lng: -88.551581},
        // Halsey Science Center [6]
        {lat:  44.028497, lng: -88.551027},
        // Swart Hall [7]
        {lat:  44.027872, lng:  -88.551962},
        // Harrington Hall [8]
        {lat:  44.027736, lng: -88.550172},
        // Oviatt House [9]
        {lat:  44.027156, lng: -88.551466},
        // Nursing and Education Building [10]
        {lat: 44.027051, lng: -88.552813},
        //  clow [11]
         {lat: 44.026306, lng: -88.552268},
        // Dempsey hall [12]
         {lat: 44.026603, lng: -88.550707},
        // polk library [13]
        {lat: 44.026379, lng: -88.549602},
        // albee hall [14]
        {lat: 44.025729, lng: -88.550248},
        // sage hall [15]
        {lat: 44.025720, lng: -88.553770},
        // ceramics laboratory [16]
        {lat: 44.025559, lng: -88.555515},
        // environmental science and research center [17]
        {lat: 44.023518, lng: -88.553851},
        // radford hall & student health center [18]
        {lat: 44.025671, lng: -88.551561},
        // donner hall [19]
        {lat: 44.025420, lng: -88.552287},
        // kolf sports center [20]
        {lat: 44.024323, lng: -88.552214},
        // webster hall [21]
        {lat: 44.025002, lng: -88.551681},
        //  taylor hall [22]
        {lat: 44.024577, lng: -88.551215},
        // multicultural education center [23]
        {lat: 44.024842, lng: -88.550613},
        // university police [24]
        {lat: 44.023763, lng: -88.549972},
        // high avenue parking ramp [25]
        {lat: 44.022960, lng: -88.549791},
        // blackhawk commons [26]
        {lat: 44.023591, lng: -88.549157},
        // student recreation and wellness center [27]
        {lat: 44.021752, lng: -88.551694},
        // reeve memorial union [28]
        {lat: 44.024934, lng: -88.549448},
        // student success center [29]
        {lat: 44.026205, lng: -88.548163},
        // evans hall [30]
        {lat: 44.026168, lng: -88.547397},
        // stewart hall [31]
        {lat: 44.026060, lng: -88.546952},
        // fletcher hall [32]
        {lat: 44.025332, lng: -88.547240},
        // campus center for equity and diversity [33]
        {lat: 44.024655, lng: -88.547217},
        // horizon village [34]
        {lat: 44.024363, lng: -88.547972},
        // scott hall [35]
        {lat: 44.022556, lng: -88.547344},
        // lincoln hall [36]
        {lat: 44.023204, lng: -88.546359},
        // alumni welcome and conference center [37]
        {lat: 44.020528, lng: -88.550432},
        // community gardens [38]
        {lat: 44.015573, lng: -88.555929},
        // campus services [39]
        {lat: 44.017782, lng: -88.556446},
        // biodigester [40]
        {lat: 44.018897, lng: -88.558015},
        // athletic service building [41]
        {lat: 44.023077, lng: -88.561081},
        // alumni baseball stadium [42]
        {lat: 44.023042, lng: -88.561892},
        // titan stadium [43]
        {lat: 44.023671, lng: -88.562917},
        // pollock house [44]
        {lat: 44.025227, lng:  -88.551292}

        ];
        // create markers for buildings

        var gruenhagenMarker = new google.maps.Marker({
          position: buildings[0],
          icon: image
        });
        var acMarker = new google.maps.Marker({
          position: buildings[1],
          icon: image
        });
        var eastMarker = new google.maps.Marker({
          position: buildings[2],
          icon: image
        });
        var fredricMarker = new google.maps.Marker({
          position: buildings[3],
          icon: image
        });
        var heatingMarker = new google.maps.Marker({
          position: buildings[4],
          icon: image
        });
        var buckstaffMarker = new google.maps.Marker({
          position: buildings[5],
          icon: image
        });
        var halseyMarker = new google.maps.Marker({
          position: buildings[6],
          icon: image
        });
        var swartMarker = new google.maps.Marker({
          position: buildings[7],
          icon: image
        });
        var harringtonMarker = new google.maps.Marker({
          position: buildings[8],
          icon: image
        });
        var oviattMarker = new google.maps.Marker({
          position: buildings[9],
          icon: image
        });
        var nursingMarker = new google.maps.Marker({
          position: buildings[10],
          icon: image
        });
        var clowMarker = new google.maps.Marker({
          position: buildings[11],
          icon: image
        });
        var dempseyMarker = new google.maps.Marker({
          position: buildings[12],
          icon: image
        });
        var polkMarker = new google.maps.Marker({
          position: buildings[13],
          icon: image
        });
        var albeeMarker = new google.maps.Marker({
          position: buildings[14],
          icon: image
        });
        var sageMarker = new google.maps.Marker({
          position: buildings[15],
          icon: image
        });
        var ceramicsMarker = new google.maps.Marker({
          position: buildings[16],
          icon: image
        });
        var environmentalMarker = new google.maps.Marker({
          position: buildings[17],
          icon: image
        });
        var radfordMarker = new google.maps.Marker({
          position: buildings[18],
          icon: image
        });
        var donnerMarker = new google.maps.Marker({
          position: buildings[19],
          icon: image
        });
        var kolfMarker = new google.maps.Marker({
          position: buildings[20],
          icon: image
        });
        var websterMarker = new google.maps.Marker({
          position: buildings[21],
          icon: image
        });
        var taylorMarker = new google.maps.Marker({
          position: buildings[22],
          icon: image
        });
        var multiculturalMarker = new google.maps.Marker({
          position: buildings[23],
          icon: image
        });
        var policeMarker = new google.maps.Marker({
          position: buildings[24],
          icon: image
        });
        var parkingRampMarker = new google.maps.Marker({
          position: buildings[25],
          icon: image
        });
        var blackhawkMarker = new google.maps.Marker({
          position: buildings[26],
          icon: image
        });
        var recreationMarker = new google.maps.Marker({
          position: buildings[27],
          icon: image
        });
        var reeveMarker = new google.maps.Marker({
          position: buildings[28],
          icon: image
        });
        var successMarker = new google.maps.Marker({
          position: buildings[29],
          icon: image
        });
        var evansMarker = new google.maps.Marker({
          position: buildings[30],
          icon: image
        });
        var stewartMarker = new google.maps.Marker({
          position: buildings[31],
          icon: image
        });
        var fletcherMarker = new google.maps.Marker({
          position: buildings[32],
          icon: image
        });
        var equityMarker = new google.maps.Marker({
          position: buildings[33],
          icon: image
        });
        var horizonMarker = new google.maps.Marker({
          position: buildings[34],
          icon: image
        });
        var scottMarker = new google.maps.Marker({
          position: buildings[35],
          icon: image
        });
        var lincolnMarker = new google.maps.Marker({
          position: buildings[36],
          icon: image
        });
        var alumniMarker = new google.maps.Marker({
          position: buildings[37],
          icon: image
        });
        var gardensMarker = new google.maps.Marker({
          position: buildings[38],
          icon: image
        });
        var campusMarker = new google.maps.Marker({
          position: buildings[39],
          icon: image
        });
        var biodigesterMarker = new google.maps.Marker({
          position: buildings[40],
          icon: image
        });
        var athleticMarker = new google.maps.Marker({
          position: buildings[41],
          icon: image
        });
        var baseballMarker = new google.maps.Marker({
          position: buildings[42],
          icon: image
        });
        var titanMarker = new google.maps.Marker({
          position: buildings[43],
          icon: image
        });
        var pollockMarker = new google.maps.Marker({
          position: buildings[44],
          icon: image
        });

        // declaring set and remove functions for buildings
        function setBuilding(){
          gruenhagenMarker.setMap(map);
          acMarker.setMap(map);
          eastMarker.setMap(map);
          fredricMarker.setMap(map);
          heatingMarker.setMap(map);
          buckstaffMarker.setMap(map);
          halseyMarker.setMap(map);
          swartMarker.setMap(map);
          harringtonMarker.setMap(map);
          oviattMarker.setMap(map);
          nursingMarker.setMap(map);
          clowMarker.setMap(map);
          dempseyMarker.setMap(map);
          polkMarker.setMap(map);
          albeeMarker.setMap(map);
          sageMarker.setMap(map);
          ceramicsMarker.setMap(map);
          environmentalMarker.setMap(map);
          radfordMarker.setMap(map);
          donnerMarker.setMap(map);
          kolfMarker.setMap(map);
          websterMarker.setMap(map);
          taylorMarker.setMap(map);
          multiculturalMarker.setMap(map);
          policeMarker.setMap(map);
          parkingRampMarker.setMap(map);
          blackhawkMarker.setMap(map);
          recreationMarker.setMap(map);
          reeveMarker.setMap(map);
          successMarker.setMap(map);
          evansMarker.setMap(map);
          stewartMarker.setMap(map);
          fletcherMarker.setMap(map);
          equityMarker.setMap(map);
          horizonMarker.setMap(map);
          scottMarker.setMap(map);
          lincolnMarker.setMap(map);
          alumniMarker.setMap(map);
          gardensMarker.setMap(map);
          campusMarker.setMap(map);
          biodigesterMarker.setMap(map);
          athleticMarker.setMap(map);
          baseballMarker.setMap(map);
          titanMarker.setMap(map);
          pollockMarker.setMap(map);
        }
        // remove all buildings
        function removeBuilding(){
          gruenhagenMarker.setMap(null);
          acMarker.setMap(null);
          eastMarker.setMap(null);
          fredricMarker.setMap(null);
          heatingMarker.setMap(null);
          buckstaffMarker.setMap(null);
          halseyMarker.setMap(null);
          swartMarker.setMap(null);
          harringtonMarker.setMap(null);
          oviattMarker.setMap(null);
          nursingMarker.setMap(null);
          clowMarker.setMap(null);
          dempseyMarker.setMap(null);
          polkMarker.setMap(null);
          albeeMarker.setMap(null);
          sageMarker.setMap(null);
          ceramicsMarker.setMap(null);
          environmentalMarker.setMap(null);
          radfordMarker.setMap(null);
          donnerMarker.setMap(null);
          kolfMarker.setMap(null);
          websterMarker.setMap(null);
          taylorMarker.setMap(null);
          multiculturalMarker.setMap(null);
          policeMarker.setMap(null);
          parkingRampMarker.setMap(null);
          blackhawkMarker.setMap(null);
          recreationMarker.setMap(null);
          reeveMarker.setMap(null);
          successMarker.setMap(null);
          evansMarker.setMap(null);
          stewartMarker.setMap(null);
          fletcherMarker.setMap(null);
          equityMarker.setMap(null);
          horizonMarker.setMap(null);
          scottMarker.setMap(null);
          lincolnMarker.setMap(null);
          alumniMarker.setMap(null);
          gardensMarker.setMap(null);
          campusMarker.setMap(null);
          biodigesterMarker.setMap(null);
          athleticMarker.setMap(null);
          baseballMarker.setMap(null);
          titanMarker.setMap(null);
          pollockMarker.setMap(null);
        }
        // on click function for selecting the Building checkbox
        $("#buildLabel").click(function(){
        var check = !$("#buildings").prop("checked");
        if (check === false){
          setBuilding();
        } else if (check === true){
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


        // accessible entries (buildings)
        function setAccEnt(){
          acMarker.setMap(map);
          fredricMarker.setMap(map);
          halseyMarker.setMap(map);
          swartMarker.setMap(map);
          harringtonMarker.setMap(map);
          nursingMarker.setMap(map);
          clowMarker.setMap(map);
          dempseyMarker.setMap(map);
          polkMarker.setMap(map);
          albeeMarker.setMap(map);
          reeveMarker.setMap(map);
          successMarker.setMap(map);
          stewartMarker.setMap(map);
          fletcherMarker.setMap(map);
          equityMarker.setMap(map);
          radfordMarker.setMap(map);
          donnerMarker.setMap(map);
          websterMarker.setMap(map);
          taylorMarker.setMap(map);
          blackhawkMarker.setMap(map);
          gruenhagenMarker.setMap(map);
          scottMarker.setMap(map);
          kolfMarker.setMap(map);
        }
        function removeAccEnt(){
          acMarker.setMap(null);
          fredricMarker.setMap(null);
          halseyMarker.setMap(null);
          swartMarker.setMap(null);
          harringtonMarker.setMap(null);
          nursingMarker.setMap(null);
          clowMarker.setMap(null);
          dempseyMarker.setMap(null);
          polkMarker.setMap(null);
          albeeMarker.setMap(null);
          reeveMarker.setMap(null);
          successMarker.setMap(null);
          stewartMarker.setMap(null);
          fletcherMarker.setMap(null);
          equityMarker.setMap(null);
          radfordMarker.setMap(null);
          donnerMarker.setMap(null);
          websterMarker.setMap(null);
          taylorMarker.setMap(null);
          blackhawkMarker.setMap(null);
          gruenhagenMarker.setMap(null);
          scottMarker.setMap(null);
          kolfMarker.setMap(null);
        }
        // on click function for accessible entries
        $("#accEntLabel").click(function(){
          var checkParking = !$("#accEnt").prop("checked");
          if (checkParking === false){
            setAccEnt();
          } else if (checkParking === true){
            removeAccEnt();
          }
        });
// creating extra markers for accessible parking locations
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
// accessible parking set markers
        function setAccPar(){
          elevenMarker.setMap(map);
          fourMarker.setMap(map);
          fouraMarker.setMap(map);
          sixteenMarker.setMap(map);
          seventeenMarker.setMap(map);
          twentynineMarker.setMap(map);
          twentyfiveMarker.setMap(map);
          thirtythreeMarker.setMap(map);
          fourteenaMarker.setMap(map);
          sevenaMarker.setMap(map);
          thirteenMarker.setMap(map);
          thirtyfourMarker.setMap(map);
          twentyeightMarker.setMap(map);
          twentythreeMarker.setMap(map);
          womensCenterMarker.setMap(map);
          fifteenMarker.setMap(map);
          thirtytwoMarker.setMap(map);
          parkingRampMarker.setMap(map);
          tenMarker.setMap(map);
          twelveMarker.setMap(map);
          sixaMarker.setMap(map);
          sixMarker.setMap(map);
          eighteenMarker.setMap(map);
          titanOneMarker.setMap(map);
          titanTwoMarker.setMap(map);

        }
        // remove accessible parking markers
        function removeAccPar(){
          elevenMarker.setMap(null);
          fourMarker.setMap(null);
          fouraMarker.setMap(null);
          sixteenMarker.setMap(null);
          seventeenMarker.setMap(null);
          twentynineMarker.setMap(null);
          twentyfiveMarker.setMap(null);
          thirtythreeMarker.setMap(null);
          fourteenaMarker.setMap(null);
          sevenaMarker.setMap(null);
          thirteenMarker.setMap(null);
          thirtyfourMarker.setMap(null);
          twentyeightMarker.setMap(null);
          twentythreeMarker.setMap(null);
          womensCenterMarker.setMap(null);
          fifteenMarker.setMap(null);
          thirtytwoMarker.setMap(null);
          parkingRampMarker.setMap(null);
          tenMarker.setMap(null);
          twelveMarker.setMap(null);
          sixaMarker.setMap(null);
          sixMarker.setMap(null);
          eighteenMarker.setMap(null);
          titanOneMarker.setMap(null);
          titanTwoMarker.setMap(null);
        }
        // on click function for accessible parking markers
        $("#accParLabel").click(function(){
          var checkParking = !$("#accPar").prop("checked");
          if (checkParking === false){
            setAccPar();
          } else if (checkParking === true){
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
            var checkParking = !$("#emergency").prop("checked");
            if (checkParking === false){
              setEmergencyPhones();
            } else if (checkParking === true){
              removeEmergencyPhones();
            }
          });
          // setting sustainability markers
        function setSust(){
          heatingMarker.setMap(map);
          sageMarker.setMap(map);
          albeeMarker.setMap(map);
          successMarker.setMap(map);
          reeveMarker.setMap(map);
          blackhawkMarker.setMap(map);
          taylorMarker.setMap(map);
          horizonMarker.setMap(map);
          alumniMarker.setMap(map);
          recreationMarker.setMap(map);
          titanMarker.setMap(map);
          biodigesterMarker.setMap(map);
        }
        // remove sustainability markers
        function removeSust(){
          heatingMarker.setMap(null);
          sageMarker.setMap(null);
          albeeMarker.setMap(null);
          successMarker.setMap(null);
          reeveMarker.setMap(null);
          blackhawkMarker.setMap(null);
          taylorMarker.setMap(null);
          horizonMarker.setMap(null);
          alumniMarker.setMap(null);
          recreationMarker.setMap(null);
          titanMarker.setMap(null);
          biodigesterMarker.setMap(null);
        }
        // on click function for sustainability
        $("#sustLabel").click(function(){
          var checkParking = !$("#sust").prop("checked");
          if (checkParking === false){
            setSust();
          } else if (checkParking === true){
            removeSust();
          }
        });
        // setting gender markers
        function setGender(){
          acMarker.setMap(map);
          halseyMarker.setMap(map);
          swartMarker.setMap(map);
          harringtonMarker.setMap(map);
          nursingMarker.setMap(map);
          sageMarker.setMap(map);
          dempseyMarker.setMap(map);
          successMarker.setMap(map);
          reeveMarker.setMap(map);
          campusMarker.setMap(map);
          kolfMarker.setMap(map);
          policeMarker.setMap(map);
          blackhawkMarker.setMap(map);
          recreationMarker.setMap(map);
        }
        // removing gender markers
        function removeGender(){
          acMarker.setMap(null);
          halseyMarker.setMap(null);
          swartMarker.setMap(null);
          harringtonMarker.setMap(null);
          nursingMarker.setMap(null);
          sageMarker.setMap(null);
          dempseyMarker.setMap(null);
          successMarker.setMap(null);
          reeveMarker.setMap(null);
          campusMarker.setMap(null);
          kolfMarker.setMap(null);
          policeMarker.setMap(null);
          blackhawkMarker.setMap(null);
          recreationMarker.setMap(null);
        }
        // on click function for gender markers
        $("#genderLabel").click(function(){
          var checkParking = !$("#gender").prop("checked");
          if (checkParking === false){
            setGender();
          } else if (checkParking === true){
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

        // functions for categories select/remove markers
        function setAccaF(){
          acMarker.setMap(map);
          fredricMarker.setMap(map);
          halseyMarker.setMap(map);
          harringtonMarker.setMap(map);
          swartMarker.setMap(map);
          nursingMarker.setMap(map);
          clowMarker.setMap(map);
          polkMarker.setMap(map);
          albeeMarker.setMap(map);
          radfordMarker.setMap(map);
          sageMarker.setMap(map);
          kolfMarker.setMap(map);
          environmentalMarker.setMap(map);
          ceramicsMarker.setMap(map);
        }
        function removeAccaF(){
          acMarker.setMap(null);
          fredricMarker.setMap(null);
          halseyMarker.setMap(null);
          harringtonMarker.setMap(null);
          swartMarker.setMap(null);
          nursingMarker.setMap(null);
          clowMarker.setMap(null);
          polkMarker.setMap(null);
          albeeMarker.setMap(null);
          radfordMarker.setMap(null);
          sageMarker.setMap(null);
          kolfMarker.setMap(null);
          environmentalMarker.setMap(null);
          ceramicsMarker.setMap(null);
        }
        $("#accaFLabel").click(function(){
          var checkParking = !$("#accaF").prop("checked");
          if (checkParking === false){
            setAccaF();
          } else if (checkParking === true){
            removeAccaF();
          }
        });

        function setAth(){
          eastMarker.setMap(map);
          albeeMarker.setMap(map);
          kolfMarker.setMap(map);
          athleticMarker.setMap(map);
          baseballMarker.setMap(map);
          titanMarker.setMap(map);
        }
        function removeAth(){
          eastMarker.setMap(null);
          albeeMarker.setMap(null);
          kolfMarker.setMap(null);
          athleticMarker.setMap(null);
          baseballMarker.setMap(null);
          titanMarker.setMap(null);
        }
        $("#athLabel").click(function(){
          var checkParking = !$("#ath").prop("checked");
          if (checkParking === false){
            setAth();
          } else if (checkParking === true){
            removeAth();
          }
        });

        function setAccaS(){
          equityMarker.setMap(map);
          successMarker.setMap(map);
          swartMarker.setMap(map);
          nursingMarker.setMap(map);
        }
        function removeAccaS(){
          equityMarker.setMap(null);
          successMarker.setMap(null);
          swartMarker.setMap(null);
          nursingMarker.setMap(null);
        }
        $("#accSLabel").click(function(){
          var checkParking = !$("#accS").prop("checked");
          if (checkParking === false){
            setAccaS();
          } else if (checkParking === true){
            removeAccaS();
          }
        });

        function setCampS(){
          campusMarker.setMap(map);
          recreationMarker.setMap(map);
          equityMarker.setMap(map);
          successMarker.setMap(map);
          reeveMarker.setMap(map);
          multiculturalMarker.setMap(map);
          pollockMarker.setMap(map);
          radfordMarker.setMap(map);
          dempseyMarker.setMap(map);
        }
        function removeCampS(){
          campusMarker.setMap(null);
          recreationMarker.setMap(null);
          equityMarker.setMap(null);
          successMarker.setMap(null);
          reeveMarker.setMap(null);
          multiculturalMarker.setMap(null);
          pollockMarker.setMap(null);
          radfordMarker.setMap(null);
          dempseyMarker.setMap(null);
        }
        $("#campSLabel").click(function(){
          var checkParking = !$("#campS").prop("checked");
          if (checkParking === false){
            setCampS();
          } else if (checkParking === true){
            removeCampS();
          }
        });

        function setResH(){
          gruenhagenMarker.setMap(map);
          donnerMarker.setMap(map);
          websterMarker.setMap(map);
          taylorMarker.setMap(map);
          evansMarker.setMap(map);
          stewartMarker.setMap(map);
          fletcherMarker.setMap(map);
          horizonMarker.setMap(map);
          scottMarker.setMap(map);
        }
        function removeResH(){
          gruenhagenMarker.setMap(null);
          donnerMarker.setMap(null);
          websterMarker.setMap(null);
          taylorMarker.setMap(null);
          evansMarker.setMap(null);
          stewartMarker.setMap(null);
          fletcherMarker.setMap(null);
          horizonMarker.setMap(null);
          scottMarker.setMap(null);
        }
        $("#resHLabel").click(function(){
          var checkParking = !$("#resH").prop("checked");
          if (checkParking === false){
            setResH();
          } else if (checkParking === true){
            removeResH();
          }
        });

        function setDining(){
          reeveMarker.setMap(map);
          blackhawkMarker.setMap(map);
          scottMarker.setMap(map);
          sageMarker.setMap(map);
          clowMarker.setMap(map);
          halseyMarker.setMap(map);
        }
        function removeDining(){
          reeveMarker.setMap(null);
          blackhawkMarker.setMap(null);
          scottMarker.setMap(null);
          sageMarker.setMap(null);
          clowMarker.setMap(null);
          halseyMarker.setMap(null);
        }
        $("#diningLabel").click(function(){
          var checkParking = !$("#dining").prop("checked");
          if (checkParking === false){
            setDining();
          } else if (checkParking === true){
            removeDining();
          }
        });

        function setStuR(){
          recreationMarker.setMap(map);
          reeveMarker.setMap(map);
        }
        function removeStuR(){
          recreationMarker.setMap(null);
          reeveMarker.setMap(null);
        }
        $("#stuRLabel").click(function(){
          var checkParking = !$("#stuR").prop("checked");
          if (checkParking === false){
            setStuR();
          } else if (checkParking === true){
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

        // adding gruenhagen hover for gruenhagen marker
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
        // if this is put inside of the setBuildings function it creates a bug
        // where if you spam click "buildings" it creates a bunch
        // of gruenhagen hover popups
        gruenhagenMarker.addListener('click', function(){
          gruenhagenHoverCard.open(map,gruenhagenMarker);
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

        var eastHover = '<div class="generalHover">' +
        '<img src="images/campuspictures/easthall.jpg">' +
        '<div class="hoverDiv">' +
        '<h1 class="headHover text">East Hall</h1>' +
        '<p class="paraHover text"> New York Ave. & Jackson St.</p>' +
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
  }
