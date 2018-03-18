<?php
    
    $con = mysqli_connect('localhost','saunders','','testAJAX');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
    $sql="SELECT * FROM test_announcements";
    $result = mysqli_query($con,$sql);

    class AnnData {
        public $ann_date = "";
        public $ann_title = "";
        public $ann_content = "";
        public $tutor = "";
    }
    $announcements = array();

    while($row = mysqli_fetch_array($result)) {
        $annData = new AnnData();
        $annData->ann_date =  $row['ann_date'];
        $annData->ann_title  = $row['ann_title'];
        $annData->ann_content  = $ann_content = $row['ann_content'];
        $annData->tutor  = $row['tutor'];

        array_push($announcements, $annData);

    }
    $outJSON = json_encode(array('announcements' => $announcements));

    $fp = fopen('customjs/json/test.json', 'w');
    fwrite($fp, $outJSON);
    fclose($fp);
?>