<?php

//function to contact the RestAPI and return the json feed from it
//Param: $rest_url needs to be a string url to the json page of the Rest API that you want to get the feed of
function connectRestAPI($rest_url){
    $url = $rest_url; //path to json
    $data = file_get_contents($url); //put contents into variable
    $feed = json_decode($data); //decode json feed

    return $feed;
}
?>