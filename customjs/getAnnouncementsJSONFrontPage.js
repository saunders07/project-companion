var e = "";

	$.getJSON("customjs/json/announcements.json", function(data){
		var announcements = data.announcements;		
		for (q in announcements) {
			e += "<div class='col-md-12 announcements'>";
				document.getElementById("announcementsFrontPage").innerHTML = e;
		    e += "<p><span class='nd2-title'>" + announcements[q].ann_date + " - " + announcements[q].ann_title + "</span><br>";
				document.getElementById("announcementsFrontPage").innerHTML = e;
			e += "<span class=''>" + announcements[q].ann_content + "</span></br>";
				document.getElementById("announcementsFrontPage").innerHTML = e;
			e += "<span class=''> Posted By: " + announcements[q].tutor + "</span></p></div>";
				document.getElementById("announcementsFrontPage").innerHTML = e;
		}
        });