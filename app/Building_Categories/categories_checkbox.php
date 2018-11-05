<?php
    include_once 'create_categories.php'; //where the BuildingCategory objects were created

    //create each list element for each BuildingCategory object and includes them in the HTML wherever this file was called
    foreach($category_list as $item){
        ?>
        <li>
        <?php
        $item->createListItem();
        ?>
        </li>
        <?php
    }
?>
