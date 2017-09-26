// globally declaring the VRView object
var titanFieldVRView;

// declaring the scenes for this VRView
var titanFieldScenes = {
    x: {
        image: 'images/Panorama/titan-field/titanFieldPano.jpg',
        hotspots: {

        }
    }
};

// fires when a user clicks on a 360 tour link
function loadtitanFieldVR(){
    // initializing the VRView object
    titanFieldVRView = new VRView.Player('#titanFieldVR', {
        image: 'images/Panorama/blank.png',
        is_stereo: false,
    });

    // adding our styles to the VR window
    $("#titanFieldImage > iframe").addClass("vr");

    // assigning the functions to perform on ready and click
    titanFieldVRView.on('ready', ontitanFieldVRViewReady);
    titanFieldVRView.on('click', ontitanFieldVRClick);
}

// fires when the VRView objects is ready to do stuff
function ontitanFieldVRViewReady(e){
    console.log('ontitanFieldReady');
    loadScene('x');
}

// fires when a hotspot gets clicked
function ontitanFieldVRClick(e) {
    console.log('ontitanFieldVRClick', e.id);
    if (e.id) {
        loadScene(e.id);
    }
}

// loads the image and it's hotspots
function loadScene(id) {
    console.log('loadScene', id);

    // Set the image
    titanFieldVRView.setContent({
        image: titanFieldScenes[id].image,
        is_stereo: false,
        is_autopan_off: false
    });

    // Add all the hotspots for the scene
    var newScene = titanFieldScenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
    for (var i = 0; i < sceneHotspots.length; i++) {
        var hotspotKey = sceneHotspots[i];
        var hotspot = newScene.hotspots[hotspotKey];

        titanFieldVRView.addHotspot(hotspotKey, {
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            radius: hotspot.radius,
            distance: hotspot.distance
        });
    }
}

// fires on click of #titanField
document.getElementById("titanField").addEventListener('click', loadtitanFieldVR);