//adding new places:
//1. add the scenes to the scenes array
//2. add the intital scene title to onVRViewReady() (first scene you want to load)
//3. add the id of the html element that is selected from the menu to the links array


// globally declaring the VRView object
var VRView;

// declaring the executiveRoom scenes
//each scene can have hotspots connected to it> when the hotspot is selected it loads the scene of the same name
var scenes = {
    //hotspot cheatsheet
    //pitch: degrees, up is positive
    //yaw: degrees, right is positive
    //radius: radius of circle in meters
    // distance: distance from camera in meters


    //start Kolf 
    careerFair:{
        image: 'images/Panorama/kolf/UWO360b_ - 1.jpg',
        hotspots :{

        }
    },
    //start Sage
    sageLounge:{
        image: 'images/Panorama/sage/study lounge/SageJournalismStudyLounge.jpg',
        hotspots :{

        }
    },
    //start clow
    clowStudy:{
        image: 'images/Panorama/clow/study/ClowStudy.jpg',
        hotspots :{

        }
    },
    //start titanField
    titanField: {
        image: 'images/Panorama/titan-field/titanFieldPano.jpg',
        hotspots: {

        }
    },
    //start sodexoBallroom
    sodexoBallroomA: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomA.jpg',
        hotspots: {
            sodexoBallroomB: {
                pitch: 30,
                yaw: -180,
                radius: 0.30,
                distance: 1.5
            }
        }
    },
    sodexoBallroomB: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomB.jpg',
        hotspots: {
            sodexoBallroomA: {
                pitch: -20,
                yaw: -305,
                radius: 0.30,
                distance: 3
            },
            sodexoBallroomC: {
                pitch: 0,
                yaw: -130,
                radius: 0.30,
                distance: 3
            }
        }
    },
    sodexoBallroomC: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomC.jpg',
        hotspots: {
            sodexoBallroomB: {
                pitch: 0,
                yaw: 5,
                radius: 0.30,
                distance: 3
            }
        }
    },
    //start executiveRoom
    executiveRoom: {
        image: 'images/Panorama/awcc/executive-board-room/executiveBoardRoom.jpg',
        hotspots: {

        }
    },
    //start busalacchi room
    busalacchiRoom: {
        image: 'images/Panorama/awcc/busalacchiRoom/busalacchi.jpg',
        hotspots: {

        }
    },
     //start breakroom1pt1
     breakroom1pt1: {
        image: 'images/Panorama/awcc/breakroom/room1pt1.jpg',
        hotspots: {
        }
    },
    
    //start breakroom2
    breakroom2: {
        image: 'images/Panorama/awcc/breakroom/room2.jpg',
        hotspots: {
           
        }
    },
    //start breakroom3
    breakroom3: {
        image: 'images/Panorama/awcc/breakroom/room3.jpg',
        hotspots: {
           
        }
    },
    //start breakroom4
    breakroom4: {
        image: 'images/Panorama/awcc/breakroom/room4.jpg',
        hotspots: {
           
        }
    },
    //start womensCenter
    womensCenterFront: {
        image: 'images/Panorama/womens-center/womensCenterFront.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 20,
                yaw: -125,
                radius: 0.30,
                distance: 1.5
            }
        }
    },
    womensCenterCouch: {
        image: 'images/Panorama/womens-center/womensCenter.jpg',
        hotspots: {
            womensCenterFront: {
                pitch: 5,
                yaw: 153,
                radius: 0.30,
                distance: 2
            },
            womensCenterBack: {
                pitch: 0,
                yaw: -5,
                radius: 0.30,
                distance: 2
            }
        }
    },
    womensCenterBack: {
        image: 'images/Panorama/womens-center/womensCenterBackroom.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 0,
                yaw: 17,
                radius: 0.30,
                distance: 1
            }
        }
    },
    //start sidewalk tour
    dempseyFront: {
        image: 'images/Panorama/sidewalk/UWO360b_-2.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: -10,
                yaw: 55,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyOne: {
        image: 'images/Panorama/sidewalk/UWO360_-17.jpg',
        hotspots: {
            dempseyFront: {
                pitch: 0,
                yaw: 163,
                radius: 0.10,
                distance: 2
            },
            acrossFromClow: {
                pitch: 0,
                yaw: 103.5,
                radius: 0.10,
                distance: 2
            },
            oviattDempseyTwo: {
                pitch: 0,
                yaw: -80,
                radius: 0.10,
                distance: 1
            }
        }
    },
    acrossFromClow: {
        image: 'images/Panorama/sidewalk/UWO360_-5.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: 0,
                yaw: -100,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-22.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: 0,
                yaw: 88,
                radius: 0.10,
                distance: 1
            },
            oviattDempseyTrees: {
                pitch: 0,
                yaw: -92,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyTrees: {
        image: 'images/Panorama/sidewalk/UWO360_-28.jpg',
        hotspots: {
            oviattDempseyTwo: {
                pitch: 0,
                yaw: 95,
                radius: 0.10,
                distance: .7
            },
            gardenOne: {
                pitch: 0,
                yaw: -80,
                radius: 0.10,
                distance: .5
            }
        }
    },
    gardenOne: {
        image: 'images/Panorama/sidewalk/UWO360_-32.jpg',
        hotspots: {
            oviattDempseyTrees: {
                pitch: -5,
                yaw: -95,
                radius: 0.10,
                distance: .7
            },
            gardenTwo: {
                pitch: -5,
                yaw: 85,
                radius: 0.10,
                distance: .7
            }
        }
    },
    gardenTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-35.jpg',
        hotspots: {
            gardenOne: {
                pitch: -5,
                yaw: -92,
                radius: 0.10,
                distance: .7
            },
            gardenThree: {
                pitch: 5,
                yaw: 160,
                radius: 0.10,
                distance: .7
            }
        }
    },
    gardenThree: {
        image: 'images/Panorama/sidewalk/UWO360_-39.jpg',
        hotspots: {
            gardenTwo: {
                pitch: 5,
                yaw: -150,
                radius: 0.10,
                distance: .5
            },
            gardenFour: {
                pitch: 5,
                yaw: 65,
                radius: 0.10,
                distance: .5
            }
        }
    },
    gardenFour: {
        image: 'images/Panorama/sidewalk/UWO360_-42.jpg',
        hotspots: {
            gardenThree: {
                pitch: 5,
                yaw: -70,
                radius: 0.10,
                distance: .5
            },
            swartHalseyOne: {
                pitch: 5,
                yaw: 80,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartHalseyOne: {
        image: 'images/Panorama/sidewalk/UWO360_-46.jpg',
        hotspots: {
            gardenFour: {
                pitch: 5,
                yaw: -90,
                radius: 0.10,
                distance: .5
            },
            swartHalseyTwo: {
                pitch: 5,
                yaw: 85,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartHalseyTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-53.jpg',
        hotspots: {
            swartHalseyOne: {
                pitch: 5,
                yaw: -94,
                radius: 0.10,
                distance: .5
            },
            swartCorner: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartCorner: {
        image: 'images/Panorama/sidewalk/UWO360_-58.jpg',
        hotspots: {
            swartHalseyTwo: {
                pitch: 5,
                yaw: -94,
                radius: 0.10,
                distance: .5
            },
            swartMiddle:{
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartMiddle: {
        image: 'images/Panorama/sidewalk/UWO360_-62.jpg',
        hotspots: {
            swartCorner: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            swartRear: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartRear: {
        image: 'images/Panorama/sidewalk/UWO360_-66.jpg',
        hotspots: {
            swartMiddle: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            swartBuckstaff: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartBuckstaff: {
        image: 'images/Panorama/sidewalk/UWO360_-69.jpg',
        hotspots: {
            swartRear: {
                pitch: 5,
                yaw: -86,
                radius: 0.10,
                distance: .5
            },
            swartBuckstaffHalsey: {
                pitch: 5,
                yaw: 95,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartBuckstaffHalsey: {
        image: 'images/Panorama/sidewalk/UWO360_-73.jpg',
        hotspots: {
            swartBuckstaff: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            halseyCorner: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    halseyCorner: {
        image: 'images/Panorama/sidewalk/UWO360_-75.jpg',
        hotspots: {
            swartBuckstaffHalsey: {
                pitch: 5,
                yaw: -88,
                radius: 0.10,
                distance: .5
            },
            halseyRear: {
                pitch: 5,
                yaw: 95,
                radius: 0.10,
                distance: .5
            }
        }
    },
    halseyRear: {
        image: 'images/Panorama/sidewalk/UWO360_-81.jpg',
        hotspots: {
            halseyCorner: {
                pitch: 5,
                yaw: -80,
                radius: 0.10,
                distance: .5
            },
            ACFront: {
                pitch: 5,
                yaw: 100,
                radius: 0.10,
                distance: .5
            }
        }
    },
    ACFront: {
        image: 'images/Panorama/sidewalk/UWO360_-84.jpg',
        hotspots: {
            halseyRear: {
                pitch: 5,
                yaw: -85,
                radius: 0.10,
                distance: .5
            }
        }
    }
};

//one vr view player to rule them all
VRView = new VRView.Player('#VR', {
    image: 'images/Panorama/blank.png',
    is_stereo: false,
});
$("#VR > iframe").addClass("vr");

// fires when a user clicks on a 360 tour link
function loadVR(name){
    // assigning the functions to perform on ready and click
    onVRViewReady(name);
    VRView.on('click', onVRClick);

}

// fires when the VRView objects is ready to do stuff
function onVRViewReady(name){
    console.log('onReady', name);
    switch(name){
        //put in parameter the name of the SCENE, not the name
        //case id is the id of the li from the menu that is clicked
        //(added to the Links array below)
        case "executiveRoom": loadScene('executiveRoom');
                              break;
        case "womensCenter": loadScene('womensCenterFront');
                             break;
        case "titanField": loadScene('titanField');
                            break;
        case "dempseyStart": loadScene('dempseyFront');
                             break;
        case "clowStudy": loadScene('clowStudy');
                            break;
        case "sageLounge": loadScene("sageLounge");
                            break;
        case "breakOne": loadScene("breakroom1pt1");
                            break;
        case "breakTwo": loadScene("breakroom2");
                            break;
        case "breakThree": loadScene("breakroom3");
                            break;
        case "breakFour": loadScene("breakroom4");
                            break;
        case "busalacchiRoom": loadScene("busalacchiRoom");
                            break;
        case "sodexoBallroom": loadScene("sodexoBallroomA");
                                break;
        case "careerFair": loadScene("careerFair");
                            break;
    }
    
}

// fires when a hotspot gets clicked
function onVRClick(e) {
    console.log('onVRClick', e.id);
    if (e.id) {
        loadScene(e.id);
    }
}

// loads the image and its hotspots
function loadScene(id) {
    //debugger;
    console.log('loadScene', id);

     // Set the image
      VRView.setContent({
         image: scenes[id].image,
         is_stereo: false,
         is_autopan_off: false
    });

    // Add all the hotspots for the scene
    var newScene = scenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
        for (var i = 0; i < sceneHotspots.length; i++) {
            var hotspotKey = sceneHotspots[i];
            var hotspot = newScene.hotspots[hotspotKey];

        VRView.addHotspot(hotspotKey, {
             pitch: hotspot.pitch,
             yaw: hotspot.yaw,
             radius: hotspot.radius,
             distance: hotspot.distance
        });
     }
}
//should be the id for the link in the menu that gets selected
var links = [
    "executiveRoom",
    "womensCenter",
    "titanField",
    "dempseyStart",
    "clowStudy",
    "sageLounge",
    "breakOne",
    "breakTwo",
    "breakThree",
    "breakFour",
    "busalacchiRoom",
    "careerFair",
    "sodexoBallroom"
]
// fires on click of #executiveRoom
//for each possible tour to be selected> add an event listener to hide/show the vr player and set the appropriate scene 
//based on which one is clicked
links.forEach(function(thisOne){
    var index = links.indexOf(thisOne);
    document.getElementById(links[index]).addEventListener('click', function(){
        //if it is invisible, make it visible (and load right scene)
            loadVR(links[index]);
        //manages the visibility/invisibility of the iframe and the overlay
        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");
        $("#VR > iframe").css('visibility', 'visible');
        $("#VR").css("display", "initial");
        $("#vrCloseButton").css("visibility", "visible");

        $("#notif").trigger("click");
    })

});
// VRclose button hides the vr player, close button and overlay
$("#vrCloseButton").click(function(){
      $("#VR").css("display", "none");
      $('#overlay').css('visibility', 'hidden');
      $('#overlay').animate({"opacity": "0"}, "slow");
      $("#vrCloseButton").css("visibility", "hidden");
});