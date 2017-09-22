// here lie the panorama images in an array
var panorama = [
    // 0 titan field
    "images/Panorama/titan field/titanFieldPano.jpg",
    // 1 womens-center front entrance
    "images/Panorama/womens-center/womensCenterFront.jpg",
    // 2 womens-center main room
    "images/Panorama/womens-center/womensCenter.jpg",
    // 3 womens-center backroom
    "images/Panorama/womens-center/womensCenterBackroom.jpg",
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
    // 22 behind halsey, front of A&C
    // behindHaAr
    "images/Panorama/sidewalk/UWO360_-81.jpg",
    // 23 mid halsey and A&C road
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


  }


  // // womens-center panorama
  // document.getElementById("womensCenter").addEventListener('click', onLoad)
  //   // open 1
  //   // creates vr view player
  //     function onLoad(){
  //               // open 2
  //               womensCenter = new VRView.Player('#womensCenterImage', {
  //                 image: panorama[1],
  //                 is_stereo: false,
  //     // close 2
  //     });
  //     //makes sure no duplicate players can be created
  //     document.getElementById("womensCenter").removeEventListener('click', onLoad);
  //     // styling for iframe
  //     $("#womensCenterImage > iframe").addClass("vr");

  //     //adding hotspot
  //     womensCenter.on('ready', function(event){

  //       // open 7
  //       // hotspot id is VERY important, ids cannot be reused
  //       womensCenter.addHotspot('intitialId', {
  //         pitch: 20, // In degrees. Up is positive.
  //         yaw: -125, // In degrees. To the left is positive.
  //         radius: 0.30, // Radius of the circular target in meters.
  //         distance: 1.5 // Distance of target from camera in meters.

  //         // close addHotspot (close 7)
  //       });


  //       // open 5
  //       womensCenter.on('click', function(event) {
  //         // open 6

  //           if (event.id == 'intitialId') {
  //             // Handle hotspot click.
  //             // sends to function that creates the backroom scene
  //                   womensCenterChange();
  //           }

  //       // close 5
  //       });

  //     // close 3
  //     });

  // // close 1
  // }

  // // function that changes the image that the player loads
  // // takes user to the womens-center backroom
  // function womensCenterChange(){
  //   womensCenter.setContent({
  //     image: panorama[2],
  //     is_stereo: false
  //   });

  //     womensCenter.addHotspot('womensCenter-backroom', {
  //       pitch: 0, // In degrees. Up is positive.
  //       yaw: -5, // In degrees. To the left is positive.
  //       radius: 0.30, // Radius of the circular target in meters.
  //       distance: 2 // Distance of target from camera in meters.
  //     });
  //     womensCenter.addHotspot('womensCenter-Entrance', {
  //       pitch: 5, // In degrees. Up is positive.
  //       yaw: 153, // In degrees. To the left is positive.
  //       radius: 0.30, // Radius of the circular target in meters.
  //       distance: 2 // Distance of target from camera in meters.
  //     });
  //     // open 5
  //     womensCenter.on('click', function(event) {
  //       // open 6

  //          if (event.id == 'womensCenter-backroom'){
  //                 womensCenterBackroom();
  //         // close 6
  //       } else if (event.id == 'womensCenter-Entrance'){
  //                 womensCenterEntrance();

  //       }
  //     // close 5
  //     });
  // }

  // // basically now they are just looping back and forth
  // // between the womensCenterBackroom function and this function
  // // so the panorama image is changed and the two hotspots are used
  // // *does not work if the womensCenterBackroom function is looped
  // // *back to the load function
  // function womensCenterBackroom(){
  //   womensCenter.setContent({
  //     image: panorama[3],
  //     is_stereo: false
  //   });
  //   // create new hotspot to return to womens-center
  //     womensCenter.addHotspot('womensCenter', {
  //       pitch: 0, // In degrees. Up is positive.
  //       yaw: 17, // In degrees. To the left is positive.
  //       radius: 0.30, // Radius of the circular target in meters.
  //       distance: 1 // Distance of target from camera in meters.

  //     });
  //     // open 5
  //     // when the hotspot is clicked the user will be taken back to the
  //     // womens-center main room using the womens-center function
  //     womensCenter.on('click', function(event) {
  //       // open 6
  //         if (event.id == 'womensCenter') {
  //           // Handle hotspot click.
  //                 womensCenterChange();
  //         }

  //     // close 5
  //     });

  // }

  // function womensCenterEntrance(){
  //   womensCenter.setContent({
  //     image: panorama[1],
  //     is_stereo: false
  //   });

  //     womensCenter.addHotspot('womensCenterMain', {
  //       pitch: 20, // In degrees. Up is positive.
  //       yaw: -125, // In degrees. To the left is positive.
  //       radius: 0.30, // Radius of the circular target in meters.
  //       distance: 1.5 // Distance of target from camera in meters.

  //     });
  //     // open 5
  //     womensCenter.on('click', function(event) {
  //       // open 6

  //          if (event.id == 'womensCenterMain'){
  //                 womensCenterChange()
  //         // close 6
  //       }
  //     // close 5
  //     });
  // }


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


      //adding hotspot
      sidewalkTour.on('ready', function(event){
        // hotspot id is VERY important, ids cannot be reused
        sidewalkTour.addHotspot('sidewalkId', {
          pitch: -10, // In degrees. Up is positive.
          yaw: 55, // In degrees. To the left is positive.
          radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: 1 // Distance of target from camera in meters.
      });
      sidewalkTour.addHotspot('dempsey', {
        pitch: 0, // In degrees. Up is positive.
        yaw: 163, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
        distance: 2 // Distance of target from camera in meters.
      });
      sidewalkTour.addHotspot('roadOvDe', {
        pitch: 0, // In degrees. Up is positive.
        yaw: 103.5, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
                radius: 0.10, // Radius of the circular target in meters.
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
                radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: 1 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('treesDeOv', {
        pitch: 0, // In degrees. Up is positive.
        yaw: -92, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .7 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midGarden', {
        pitch: 0, // In degrees. Up is positive.
        yaw: -80, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .7 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midGardenTwo', {
        pitch: -5, // In degrees. Up is positive.
        yaw: 85, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .7 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midGardenThree', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 160, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .5 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midGardenFour', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 65, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .5 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midSwHa', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 80, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .5 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midSwHaTwo', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 85, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .5 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('cornerSw', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 90, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
        radius: 0.10, // Radius of the circular target in meters.
        distance: .5 // Distance of target from camera in meters.

      });
      sidewalkTour.addHotspot('midSw', {
        pitch: 5, // In degrees. Up is positive.
        yaw: 90, // In degrees. To the left is positive.
        radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('behindSw', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 90, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('swBu', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 90, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('swBuHa', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 95, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('cornerHa', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 90, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('behindHaAr', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 95, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
      distance: .5 // Distance of target from camera in meters.

    });
    sidewalkTour.addHotspot('midHaAr', {
      pitch: 5, // In degrees. Up is positive.
      yaw: 100, // In degrees. To the left is positive.
      radius: 0.10, // Radius of the circular target in meters.
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
      radius: 0.10, // Radius of the circular target in meters.
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