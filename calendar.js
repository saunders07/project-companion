var d = new Date();
var n = d.getDay();
var j = "";
var l = "";

// GET DATA FOR HNDY2
switch (n) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        console.log(day);
        $.getJSON("HNDY2calendar.json", function(data){
            var calendar = data.calendar.monday;
            for (q in calendar) {
                l += "<div class='calendar' id =" + [q] + "><p class ='nd2-title assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
            }
        });
        break;
    case 2:
        var day = "Tuesday";
        $.getJSON("HNDY2calendar.json", function(data){
            var calendar = data.calendar.tuesday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                l += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
            }
        });
        break;
    case 3:
        day = "Wednesday";
        $.getJSON("HNDY2calendar.json", function(data){
            var calendar = data.calendar.wednesday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                l += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
            }
        });
        break;
    case 4:
        day = "Thursday";
        $.getJSON("HNDY2calendar.json", function(data){
            var calendar = data.calendar.thursday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                l += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
            }
        });
        break;
    case 5:
        day = "Friday";
        $.getJSON("HNDY2calendar.json", function(data){
            var calendar = data.calendar.friday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                l += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
                l += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarHNDY2").innerHTML = l;
            }
        });
        break;
    case 6:
        day = "Saturday";
}

// GET DATA FOR BSC HONS
switch (n) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        console.log(day);
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar.monday;
            for (q in calendar) {
                j += "<div class='calendar' id =" + [q] + "><p class ='nd2-title assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
            }
        });
        break;
    case 2:
        var day = "Tuesday";
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar.tuesday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                j += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
            }
        });
        break;
    case 3:
        day = "Wednesday";
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar.wednesday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                j += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
            }
        });
        break;
    case 4:
        day = "Thursday";
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar.thursday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                j += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
            }
        });
        break;
    case 5:
        day = "Friday";
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar.fridday;
            console.log(document.getElementById("dayTitle"));
            for (q in calendar) {
                j += "<div class='calendar' id =" + [q] + "><p class ='nd2-subhead assignmentNameAndNumber'>" + calendar[q].timeframe + "</p>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Name: " + calendar[q].unit_number + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Unit Number: " + calendar[q].unit_name + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Lecturer: " + calendar[q].lecturer + "</span><br>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
                j += "<span class='calendarInfo'> Room: " + calendar[q].room + "</span></div>";
                    document.getElementById("calendarBSCHONS").innerHTML = j;
            }
        });
        break;
    case 6:
        day = "Saturday";
}