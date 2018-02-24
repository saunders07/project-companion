<!DOCTYPE html>
<html>
    <head>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }

            table, td, th {
                border: 1px solid black;
                padding: 5px;
            }

            th {
                text-align: left;
            }
        </style>
    </head>
    <body>

    <?php
    $q = intval($_GET['q']);

    $con = mysqli_connect('localhost','saunders','','testAJAX');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    $sql="SELECT * FROM test_announcements";
    $result = mysqli_query($con,$sql);
    echo "<div class='row'>";
    while($row = mysqli_fetch_array($result)) {
            echo "<div class='col-md-10 announcements'>";
            echo "<p><span class='nd2-title'>" . $row['ann_date'] . " - " . $row['ann_title'] . "</span><br>";
            echo "<span class=''>" . $row['ann_content'] . "</span></br>";
            echo "<span class=''> Posted By: " . $row['tutor'] . "</span></p>";
            echo "</div>";
    }
    echo "</div>";
    echo "</table>";
    mysqli_close($con);
    ?>
    </body>
</html>