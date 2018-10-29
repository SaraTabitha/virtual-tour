<?php
    include_once 'categories.php'; //where the BuildingCategory objects were created

    //create each list element for each BuildingCategory object and includes them in the HTML wherever this file was called
    foreach($category_list as $item){
        $item->createListItem();
    }
?>
