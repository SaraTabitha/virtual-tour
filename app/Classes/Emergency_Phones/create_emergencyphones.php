<?php
require_once("EmergencyPhone.php");
require_once("php/contactRestAPI.php");

$emergencyPhones = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/emergency-phones?per_page=100");


foreach($emergencyPhones as $phone){

    $slug = $phone->slug;
    $title = $phone->title->rendered;

    $latitude = $phone->location->latitude;
    $longitude = $phone->location->longitude;

    ?>
    <script type="text/javascript">
        console.log("slug:<?php echo $slug ?>");
        console.log("title:<?php echo $title ?>");
        console.log("lat:<?php echo $latitude ?>");
        console.log("long:<?php echo $longitude ?>");
    </script>
    <?php

}
?>