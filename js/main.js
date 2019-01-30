function formatTime(i) {
	if(i < 10) {
		return "0" + i;
	} else {
		return i;
	};
};

var clock = document.getElementById("clock");
var myH1 = document.createElement("h1");
var myH3 = document.createElement("h3");
var tglBtn = document.createElement('button');
var alarm = document.createElement("button");

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


	// style the clock 
	$('#clock').css({'border': '5px solid #33D5E5', 'padding': '75px 30px', 'position' : 'fixed', "top" : '150px'})




	// display calendar date
	myH3.innerText = date.toDateString()
	myH3.style.color = "#33D5E5";
	myH3.style.fontFamily = "'Iceland', cursive";
	myH3.style.fontSize = "large";
	clock.appendChild(myH3); 

	// display the time
	myH1.innerText = hour + ": " + min + ": " + second + " " + meridiam;
	myH1.style.textAlign = "center";
	myH1.style.fontSize = "xx-large";
	myH1.style.color = "#33D5E5";
	myH1.style.fontFamily = "'Iceland', cursive";
	clock.appendChild(myH1);

	// add a button toggle dark/light theme

	tglBtn.className = "btn btn-sm btn-secondary btn-outline-dark";
	tglBtn.innerHTML = "<i class='fas fa-star-half-alt'></i>";
	tglBtn.onclick = function() {
							clock.classList.toggle('dark');
	};
	tglBtn.setAttribute("style", "position: absolute; top: 10px; right: 10px");

	// add a setalarm button 
	alarm.name = "alarm";
	alarm.className = "btn btn small btn-outline-dark";
	alarm.innerText = "Set Alarm";
	alarm.onclick = function() {


	}

	clock.appendChild(tglBtn);

	setTimeout(setTime, 1000)
}

setTime();