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
    else {
        echo "Connected";
    }
    $sql="SELECT * FROM test_announcements";
    $result = mysqli_query($con,$sql);

    echo "<table>
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Job</th>
        <th>Job</th>
        <th>Job</th>
    </tr>";
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
            echo "<td>" . $row['ann_date'] . "</td>";
            echo "<td>" . $row['ann_title'] . "</td>";
            echo "<td>" . $row['ann_content'] . "</td>";
            echo "<td>" . $row['tutor'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    mysqli_close($con);
    ?>
    </body>
</html>