// google map!
// function for intitial map load (what appears when the page first loads)
var gruenhagenMarker;
var map;
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

        var gruenhagen = {lat: 44.022405, lng:  -88.548824};
        var gruenhagenMarker = new google.maps.Marker({
          position: gruenhagen,
          icon: image

        });

        // function buildingsClicked(){
        //   gruenhagenMarker.setMap(map);
        //   }
        //   function buildingsEmpty(){
        //     gruenhagenMarker.setMap(null);
        // }

        $("#buildLabel").click(function(){
        var check = $("#buildLabel").hasClass("is-checked");
        if (check === false){
          gruenhagenMarker.setMap(map);

        } else if (check === true){
          gruenhagenMarker.setMap(null);
        }
        });

  }
