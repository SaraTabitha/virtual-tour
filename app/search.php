<?php

    // pdo object, connecting to SQL
    // from: w3schools php MySQL connect
    $servername = "localhost";
    $username = "virtualtourdev";
    $password = "Fuzk197#";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=virtualtourdev", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // could say "connected successfully" but we don't want it to
        echo "";
        }
    catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }

// table created + search query
// from but modified: w3schools php select data

        // echo "<div id='searchResults'>";
        echo "<ul>";
        echo "<li> Search Results </li>";

        class TableRows extends RecursiveIteratorIterator {
            function __construct($it) {
                parent::__construct($it, self::LEAVES_ONLY);
            }

            function current() {
                return "<p>" . parent::current(). "</p>";
            }

            function beginChildren() {
                echo "<li>";
            }

            function endChildren() {
                echo "</li>" . "\n";
            }
        }

        // variable made of searchInput element in html
        // (where search is typed)
        $search = $_GET["search"];
        // le query
        $stmt = $conn->prepare("SELECT DISTINCT Buildings.name FROM Buildings INNER JOIN BuildingJump on BuildingJump.BuildingId = Buildings.Id INNER JOIN BuildingTypes on BuildingTypes.Id= BuildingJump.TypeId WHERE Buildings.name LIKE '%' ? '%' OR BuildingTypes.Name LIKE '%' ? '%'");
        $stmt->execute(array($search, $search));


        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }

        $conn = null;
        echo "</ul>";
        // echo "</div>";

?>
