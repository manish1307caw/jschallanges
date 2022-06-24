import{

    alterSettings, switcher 
} from './utility.js';
let settingsButtonRef = document.getElementById("settingsTBR");
let startButton = document.getElementById("timerTrigger");
startButton.addEventListener("click", switcher);
settingsButtonRef.addEventListener("click", alterSettings);