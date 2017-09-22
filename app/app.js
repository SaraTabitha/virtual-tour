require.config({
    baseUrl: 'lib',
    paths: {
        scripts: '../scripts',
        VTScenes: '../scripts/virtual-tour-scenes',
        jQuery: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
        VRView: 'https://storage.googleapis.com/vrview/2.0/build/vrview.min',
        GMaps: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4zQ9m4LdUjtmEOJG4g05xf2oipMUDuU&callback=initMap',
        MDL: 'mdl/material'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['jQuery', 'VRView'], function(){
    require(['scripts/panorama', 'VTScenes/womens-center', 'MDL', 'scripts/main', 'scripts/map',], function(){
        require(['GMaps', 'scripts/ajax']);
    });
});