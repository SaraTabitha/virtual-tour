<?php
    /*
    * why this needs to be in it's own file: 
    *   because otherwise the embedded css styling messes up the ajax calls for map.js :) 
    */
    require_once(__DIR__ . '/../Emergency_Phones/create_emergencyphones.php');

    $emergencyPhones->style_checkboxes();
  

?>