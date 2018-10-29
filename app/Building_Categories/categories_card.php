<?php
    include_once 'categories.php';

    // $stuRec->createCategoryCard();

    foreach($category_list as $item){
        $item->createCategoryCard();
    }
?>