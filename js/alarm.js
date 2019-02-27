var hrSelect = document.getElementById("alarmHrs");
var minSelect = document.getElementById("alarmMins");
var pdSelect = document.getElementById("alarmPeriod");
var alarmSet = document.getElementById("alarmSet");

function addZero(i) {
	if(i < 10) {
		return "0" + i;
	} else {
		return i;
	}
}

function addOptions() {

	//ADDING HOURS/////////////////////////////////////
	var hrs = 12;
	for(i = 1; i <= hrs; i++) {
		var hrOption = document.createElement("option");
		hrOption.innerText = (i < 10) ? "0" + i : i;
		hrSelect.appendChild(hrOption);
	}

	//ADDING MINUTES//////////////////////////////////
	var mins = 59;
	for(i = 0; i <= mins; i++) {
		var minOption = document.createElement("option");
		minOption.innerText = (i < 10) ? "0" + i : i;
		minSelect.appendChild(minOption);
	}
}
addOptions();


function setAlarm() {

	var selectedHr = hrSelect.options[hrSelect.selectedIndex].value;
	var selectedMin = minSelect.options[minSelect.selectedIndex].value;
	var selectedPd = pdSelect.options[pdSelect.selectedIndex].value;

	//SELECTED ALARM SET////////////////////////////////
	var alarmTime = selectedHr + ":" + selectedMin + " " + selectedPd;
	console.log("Alarm time: ", alarmTime);

	alarmSet.style = "color: #777575; margin-top: 150px;"
	alarmSet.innerText = "alarm is set for " + alarmTime;

	// hide options and change clock to normal
	alarmOptions.style.display = "none";
	clock.style.padding = "75px 30px";


	//GENERATE CURRENT TIME/////////////////////////////
	setInterval(function() {
	var now = new Date();
	var hours = (now.getHours() > 12) ? now.getHours() - 12 : now.getHours();
	var minutes = now.getMinutes();
	var period = (now.getHours() < 12) ? "AM" : "PM";

	var currentTime = addZero(hours) + ":" + addZero(minutes) + " " + period ;

	//COMPARE ALARM AND CURRENT TIME////////////////////
	if(alarmTime == currentTime) {
		console.log("BEEEEEP");
		alert("BEEEEEP BOOOOP BEEEEEP");
		
	}

	},1000)

}