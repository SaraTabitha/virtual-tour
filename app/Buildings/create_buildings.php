<?php
include_once "Building.php";
include_once "php/contactRestAPI.php";

$buildings = connectRestAPI("https://wwwtest.uwosh.edu/virtual-tour-cms/wp-json/wp/v2/buildings?per_page=100"); //per_page=100: this will return the first 100 results; if there are ever more than 100 buildings increase this number

foreach($buildings as $item){
    ?>
    <script type="text/javascript">
    console.log("<?php echo $item->title->rendered; ?>");
    </script>
    <?php
}

?>