var d = new Date();
var n = d.getDay();
var j = "";

switch (n) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        console.log(day);
        $.getJSON("BSCHONScalendar.json", function(data){
            var calendar = data.calendar;
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
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}