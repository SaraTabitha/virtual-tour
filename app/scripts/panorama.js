// here lie the panorama images in an array
var panorama = [
    // 0 titan field
    "images/Panorama/titan field/titanFieldPano.jpg",

    // 4 executive board room
    "images/Panorama/executive board room/executiveBoardRoom.jpg",
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

  }