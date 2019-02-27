var clock = document.getElementById("clock");
var myH1 = document.createElement("h1");
var myH3 = document.createElement("h3");
var tglBtn = document.createElement('button');
var alarm = document.createElement("button");
var alarmOptions = document.getElementById("alarmOptions");

function formatTime(i) {
	if(i < 10) {
		return "0" + i;
	} else {
		return i;
	};
};


function showAlarm() {
	var alarmEl= document.getElementById("alarm");
	var showBtn = document.getElementById("showBtn");

	alarmEl.classList.toggle("show");

	if(alarmEl.classList.contains("show")){
		showBtn.innerText = "Hide Alarm";
		alarmEl.style = "display: block";
		alarmSet.style = "margin-top: 50px";
		clock.style.padding = "75px 30px 115px 30px"

	} else {
		showBtn.innerText = "Set Alarm";
		alarmEl.style = "display: none";
		clock.style.padding = "75px 30px"
		alarmOptions.style = "display: block"
	}

}

function setTime() {
	var date = new Date();
	var min = formatTime(date.getMinutes());
	var hour = formatTime(date.getHours());
	var second = formatTime(date.getSeconds());
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	var meridiam = "";
	if (hour > 12) {
		hour = hour - 12;
		meridiam = "PM"
	} else if (hour == 0){ 
		hour = 12;
		meridiam = "AM"
	} else {
		hour = hour;
		meridiam = "AM"
	}



	// display calendar date
	myH3.innerText = date.toDateString()
	myH3.style.color = "#33D5E5";
	myH3.style.fontFamily = "'Iceland', cursive";
	myH3.style.fontSize = "large";
	clock.appendChild(myH3); 

	// display the time
	myH1.innerText = hour + ": " + min + ": " + second + " " + meridiam;
	myH1.style.textAlign = "center";
	myH1.style.fontSize = "50px";
	myH1.style.color = "#33D5E5";
	myH1.style.fontFamily = "'Iceland', cursive";
	clock.appendChild(myH1);

	// add a button toggle dark/light theme

	tglBtn.className = "btn btn-sm btn-secondary btn-outline-dark";
	tglBtn.innerHTML = "<i class='fas fa-star-half-alt'></i>";
	tglBtn.onclick = function() {
							clock.classList.toggle('dark');
							document.body.classList.toggle('dark');
	};

	tglBtn.setAttribute("style", "float: right; position: relative; top: -120px");
	
	clock.appendChild(tglBtn);

	setTimeout(setTime, 1000);
}

// style the clock 
$('#clock').css({'border': '5px solid #33D5E5', 'padding': '75px 30px'})

setTime();
