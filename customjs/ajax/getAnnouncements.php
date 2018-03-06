<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

    <?php
    $servername = "localhost";
    $username = "jwebbill_userben";
    $password = "bentest2018";
    $dbname = "jwebbill_benapp";

    $q = intval($_GET['q']);

    $con = mysqli_connect($servername,$username , $password, $dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    $sql="SELECT * FROM ann";
    $result = mysqli_query($con,$sql);
    while($row = mysqli_fetch_array($result)) {
            echo "<div class='col-md-12 announcements'>";
            echo "<p><span class='nd2-title'>" . $row['anndate'] . " - " . $row['anntitle'] . "</span><br>";
            echo "<span class=''>" . $row['anncontent'] . "</span></br>";
            echo "</br>";
            echo "<span class=''> Posted By: " . $row['tutor'] . "</span></p>";
            echo "</div>";
    }
    echo "</table>";
    mysqli_close($con);
    ?>
    </body>
</html>