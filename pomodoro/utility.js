let startButton = document.getElementById("timerTrigger");
let secondsRef = document.getElementById("secondsTBR");
let minutesRef = document.getElementById("minutesTBR");
let checker = document.getElementsByClassName("time")[0];
let settingsButtonRef = document.getElementById("settingsTBR");
let ring = document.getElementsByClassName("ring")[0];
let zero = "0";
let interval = null
let setEnabled = () => {
	minutesRef.disabled = true;
	secondsRef.disabled = true;
	if(checker.id === "true") {
		checker.id = "false";
		startButton.innerHTML = "STOP";
	} else {
		checker.id = "true";
		startButton.innerHTML = "START";
	}
}


let isValid = () => {
	minutesRef.value = minutesRef.value.trim();
	if(minutesRef.value == 0) {
		minutesRef.value = minutesRef.value[minutesRef.value.length-1];
	}
	if(secondsRef.value == 0) {
		secondsRef.value = secondsRef.value[secondsRef.value.length-1];
	}
	if(!(minutesRef.value >= 0 && minutesRef.value < 60) || !(secondsRef.value >= 0 && secondsRef.value < 60)
		|| minutesRef.value.length === 0 || secondsRef.value.length === 0) {
		return false;
	} else {
		return true;
	}
}

let invertState = (messageToBeDisplayed) => {
	alert(messageToBeDisplayed);
	setEnabled();
	minutesRef.value = "00";
	secondsRef.value = "00";
	minutesRef.disabled = !minutesRef.disabled;
	secondsRef.disabled = !secondsRef.disabled;
}

let changeTiming = (interval) => {
	if(secondsRef.value <= 0) {
		if(minutesRef.value <= 0) {
			ring.style.stroke = "red";
			clearInterval(interval);
			invertState("Time's UP, Enter Value to Start Again And Press Enter");

		} else {
			secondsRef.value = "59";
			minutesRef.value--;
		}
	} else {
		secondsRef.value--;
	}
	let txt = "".concat(minutesRef.value);
	if(txt.length === 1) {
		minutesRef.value = zero.concat(minutesRef.value);
	}
	txt = "".concat(secondsRef.value); 
	if(txt.length === 1) {
		secondsRef.value = zero.concat(secondsRef.value);
	}
}

let alterSettings = () => {
	if(checker.id === "true") {
		ring.style.stroke = "blue";
		startButton.innerHTML = "START";
		minutesRef.disabled = false;
		secondsRef.disabled = false;
	}
}

let switcher = () => {
	setEnabled();
	if(checker.id === "false" ){
		ring.style.stroke = "green";
		interval = setInterval(function () {
			if(checker.id === "true"){
				clearInterval(interval);
			} else {
				if(isValid()){
					changeTiming(interval);
				} else {
					ring.style.stroke = "red";
					clearInterval(interval);
					invertState("Please Enter a Valid Entry");	
				}
			}
		}, 1000);
	} else {
		ring.style.stroke = "blue";

	}
}

export { 
    setEnabled, isValid, invertState, changeTiming, alterSettings, switcher
};