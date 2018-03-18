<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

    <?php
    $q = intval($_GET['q']);

    $con = mysqli_connect('localhost','saunders','','testAJAX');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    $sql="SELECT * FROM test_updates";
    $result = mysqli_query($con,$sql);
    while($row = mysqli_fetch_array($result)) {
            echo "<div class='col-md-12 announcements'>";
            echo "<p><span class='nd2-title'>". $row['upd_title']. "</span></br>";
            echo "<span class=''>" . $row['upd_content'] . "</span></br>";
            echo "</br>";
            echo "<span class=''> Added By: " . $row['tutor'] . "</span></p>";
            echo "</div>";
    }
    echo "</table>";
    mysqli_close($con);
    ?>
    </body>
</html>