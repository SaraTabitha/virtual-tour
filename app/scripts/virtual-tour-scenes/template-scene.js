// globally declaring the VRView object
var templateVRView;

// declaring the scenes for this VRView
var templateScenes = {
    // in order for hotspots to properly load the scene you are trying to link,
    // you must name a scene the same as you name the hotspot.
    // see examples below...
    x: {
        image: 'path/to/image-x.jpg',
        hotspots: {
            y: {
                pitch: 0,
                yaw: 0,
                radius: 0,
                distance: 0
            }
        }
    },
    y: {
        image: 'path/to/image-y.jpg',
        hotspots: {
            x: {
                pitch: 0,
                yaw: 0,
                radius: 0,
                distance: 0
            },
            z: {
                pitch: 0,
                yaw: 0,
                radius: 0,
                distance: 0
            }
        }
    },
    z: {
        image: 'path/to/image-z.jpg',
        hotspots: {
            y: {
                pitch: 0,
                yaw: 0,
                radius: 0,
                distance: 0
            }
        }
    }
};

// fires when a user clicks on a 360 tour link
function loadtemplateVR(){
    // initializing the VRView object
    templateVRView = new VRView.Player('#templateVR', {
        image: 'images/Panorama/blank.png',
        is_stereo: false,
    });

    // adding our styles to the VR window
    $("#templateVR > iframe").addClass("vr");

    // assigning the functions to perform on ready and click
    templateVRView.on('ready', ontemplateVRViewReady);
    templateVRView.on('click', ontemplateVRClick);
}

// fires when the VRView objects is ready to do stuff
function ontemplateVRViewReady(e){
    console.log('ontemplateReady');
    loadTemplateScene('x');
}

// fires when a hotspot gets clicked
function ontemplateVRClick(e) {
    console.log('ontemplateVRClick', e.id);
    if (e.id) {
        loadScene(e.id);
    }
}

// loads the image and it's hotspots
function loadTemplateScene(id) {
    console.log('loadScene', id);

    // Set the image
    templateVRView.setContent({
        image: templateScenes[id].image,
        is_stereo: false,
        is_autopan_off: false
    });

    // Add all the hotspots for the scene
    var newScene = templateScenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
    for (var i = 0; i < sceneHotspots.length; i++) {
        var hotspotKey = sceneHotspots[i];
        var hotspot = newScene.hotspots[hotspotKey];

        templateVRView.addHotspot(hotspotKey, {
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            radius: hotspot.radius,
            distance: hotspot.distance
        });
    }
}

// fires on click of #template
document.getElementById("template").addEventListener('click', loadtemplateVR);