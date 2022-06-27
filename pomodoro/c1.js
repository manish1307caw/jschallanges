import {
  alterSettings,
  switcher
  // eslint-disable-next-line import/extensions
} from './utility.js';

const settingsButtonRef = document.getElementById('settingsTBR');
const startButton = document.getElementById('timerTrigger');
startButton.addEventListener('click', switcher);
settingsButtonRef.addEventListener('click', alterSettings);
