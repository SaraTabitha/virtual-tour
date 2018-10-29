<?php
    include_once 'categories.php';

    // $stuRec->createListItem();

    foreach($category_list as $item){
        $item->createListItem();
    }
?>
