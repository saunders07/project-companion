// GET JSON FOR HNDY1 ASSIGNMENTS
var e = "";

	$.getJSON("customjs/json/HNDY1Assignments.json", function(data){
	    var assignments = data.assignments;
		for (q in assignments) {
			e += "<div class='assignments' id =" + [q] + "><p class ='nd2-title assignmentNameAndNumber'>" + assignments[q].unit_number + " " + assignments[q].unit_name + "</p>";
				document.getElementById("assignmentsListHNDY1").innerHTML = e;
		    e += "<span class='assignmentInfo'> Unit Name: " + assignments[q].unit_name + "</span></br>";
				document.getElementById("assignmentsListHNDY1").innerHTML = e;
			e += "<span class='assignmentInfo'>Assignment Description: " + assignments[q].assign_desc + "</span></br>";
				document.getElementById("assignmentsListHNDY1").innerHTML = e;
			e += "<span class='assignmentInfo'>Hand Out:<span class='handOut'> " + assignments[q].handoutdate + "</span></span><br>";
				document.getElementById("assignmentsListHNDY1").innerHTML = e;
			e += "<span class='assignmentInfo'>Hand In:<span class='handIn'> " + assignments[q].handindate + "</span></span></div>";
				document.getElementById("assignmentsListHNDY1").innerHTML = e;
		}
        });

// GET JSON FOR HNDY2 ASSIGNMENTS
var j = "";

    $.getJSON("customjs/json/HNDY2Assignments.json", function(data){
        var assignments = data.assignments;
        for (q in assignments) {
            j += "<div class='assignments' id =" + [q] + "><p class ='nd2-title assignmentNameAndNumber'>" + assignments[q].unit_number + " " + assignments[q].unit_name + "</p>";
                document.getElementById("assignmentsListHNDY2").innerHTML = j;
            j += "<span class='assignmentInfo'> Unit Name: " + assignments[q].unit_name + "</span><br>";
                document.getElementById("assignmentsListHNDY2").innerHTML = j;
            j += "<span class='assignmentInfo'>Assignment Description: " + assignments[q].assign_desc + "</span><br>";
                document.getElementById("assignmentsListHNDY2").innerHTML = j;
            j += "<span class='assignmentInfo'>Hand Out:<span class='handOut'> " + assignments[q].handoutdate + "</span></span><br>";
                document.getElementById("assignmentsListHNDY2").innerHTML = j;
            j += "<span class='assignmentInfo'>Hand In:<span class='handIn'> " + assignments[q].handindate + "</span></span></div>";
                document.getElementById("assignmentsListHNDY2").innerHTML = j;
        }
        });

// GET JSON FOR BSCHONS ASSIGNMENTS
var h = "";

    $.getJSON("customjs/json/BSCHONSAssignments.json", function(data){
        var assignments = data.assignments;
        for (q in assignments) {
            h += "<div class='assignments' id =" + [q] + "><p class ='nd2-title assignmentNameAndNumber'>" + assignments[q].unit_number + " " + assignments[q].unit_name + "</p>";
                document.getElementById("assignmentsListBSCHONS").innerHTML = h;
            h += "<span class='assignmentInfo'> Unit Name: " + assignments[q].unit_name + "</span><br>";
                document.getElementById("assignmentsListBSCHONS").innerHTML = h;
            h += "<span class='assignmentInfo'>Assignment Description: " + assignments[q].assign_desc + "</span><br>";
                document.getElementById("assignmentsListBSCHONS").innerHTML = h;
            h += "<span class='assignmentInfo'>Hand Out:<span class='handOut'> " + assignments[q].handoutdate + "</span></span><br>";
                document.getElementById("assignmentsListBSCHONS").innerHTML = h;
            h += "<span class='assignmentInfo'>Hand In:<span class='handIn'> " + assignments[q].handindate + "</span></span></div>";
                document.getElementById("assignmentsListBSCHONS").innerHTML = h;
        }
        });