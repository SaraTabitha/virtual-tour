<?php


// pdo object, connecting to SQL
// from: w3schools php MySQL connect
$servername = "localhost";
$username = "virtualtourdev";
$password = "8c2U9z^u";
try {
    $conn = new PDO("mysql:host=$servername;dbname=virtualtourdev", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // can be set to say "connected successfully" but atm I don't want it to
    // parce que il va ecrire la expression dans le recherche
    // beacuse it will write the phrase in the search
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


        $search = $_GET["search"];
        $stmt = $conn->prepare("SELECT DISTINCT Buildings.name FROM Buildings INNER JOIN BuildingJump on BuildingJump.BuildingId = Buildings.Id INNER JOIN BuildingTypes on BuildingTypes.Id= BuildingJump.TypeId WHERE Buildings.name LIKE '%$search%' OR BuildingTypes.Name LIKE '%$search%'");
        $stmt->execute();


        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }

        $conn = null;
        echo "</ul>";
        // echo "</div>";

?>
