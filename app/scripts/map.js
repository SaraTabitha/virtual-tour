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
        // sets initial marker at UWO coordinates
        var marker = new google.maps.Marker({
          position: uwo,
          // important: map is set to variable "map" (our map)
          map: map,
          // sets it to the image variable defined above
          icon: image
        });
        // defining gruenhagen's location and creating a marker for it
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
      	// community gardens [39]
      	{lat: 44.015573, lng: -88.555929},
      	// campus services [40]
      	{lat: 44.017782, lng: -88.556446},
      	// biodigester [41]
      	{lat: 44.018897, lng: -88.558015},
      	// athletic service building [42]
      	{lat: 44.023077, lng: -88.561081},
      	// alumni baseball stadium [43]
      	{lat: 44.023042, lng: -88.561892},
      	// titan stadium [44]
      	{lat: 44.023671, lng: -88.562917},
      	// pollock house [45]
      	{lat: 44.025227, lng:  -88.551292}

        ];
        var gruenhagenMarker = new google.maps.Marker({
          position: buildings[0],
          icon: image
        });
        // declaring set and remove functions for BUILDING
        function setBuilding(){
          gruenhagenMarker.setMap(map);
        }
        function removeBuilding(){
          gruenhagenMarker.setMap(null);
        }
        // on click function for selecting the first select all checkbox
        $("#selectallcheck").click(function(){
          var checkSelect = !$("#selectallcheck").prop("checked");
          if (checkSelect === false){
            setBuilding();
          } else if (checkSelect === true){
            removeBuilding();
          }
        })
        // on click function for selecting the Building checkbox
        $("#buildLabel").click(function(){
        var check = $("#buildLabel").hasClass("is-checked");
        if (check === false){
          setBuilding();

        } else if (check === true){
          removeBuilding();
        }
        });




  }
