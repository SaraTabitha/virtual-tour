<?php
    require_once("create_emergencyphones.php"); //require_once links....

    $phones = $emergencyPhones->getMarkersArray();
    $test = $phones[0];
    $icon = $emergencyPhones->getMarkerIcon();

    // $myObj = "hi";
    $testObj->title = $test->getTitle();
    // // $testObj->lat = $test->getLatitude();
    // // $testObj->long = $test->getLongitude();
    // // $testObj->icon = $icon;


    $json = json_encode($testObj);

    echo $json;

    //$myObj = array("hello", "goodbye");

    //$myObj->hello = "hello";
    //$myObj->goodbye = "goodbye";
    //$json = json_encode($myObj);
    //echo $json;
?>