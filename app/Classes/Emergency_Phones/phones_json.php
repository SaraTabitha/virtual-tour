<?php
    require_once(__DIR__ . "/create_emergencyphones.php"); //require_once links....

    $phones = $emergencyPhones->getMarkersArray();
    
    $icon = $emergencyPhones->getMarkerIcon();
    //$test = $phones[0]; 
    //$testObj->title = $test->getTitle();


    // $myObj = "hi";
   
    // // $testObj->lat = $test->getLatitude();
    // // $testObj->long = $test->getLongitude();
    // // $testObj->icon = $icon;

    $testObj->titles = array();
    $testObj->latitudes = array();
    $testObj->longitudes = array();
    $testObj->icon = $icon;

    foreach($phones as $item){
        $title = $item->getTitle();
        $lat = $item->getLatitude();
        $long = $item->getLongitude();
        
        array_push($testObj->titles, $title);
        array_push($testObj->latitudes, $lat);
        array_push($testObj->longitudes, $long);
    }
    
    //var_dump($testObj->titles);
    $json = json_encode($testObj);

    echo $json;

    //$myObj = array("hello", "goodbye");

    //$myObj->hello = "hello";
    //$myObj->goodbye = "goodbye";
    //$json = json_encode($myObj);
    //echo $json;
?>