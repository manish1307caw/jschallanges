/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import * as utilityJs from './utility.js';

const listOfAllKeysByClassName = document.getElementsByClassName('key');

window.addEventListener('keydown', (event) => {
  const keyVal = event.key.toString().toUpperCase();
  utilityJs.preventException(event, keyVal);
  utilityJs.keyCheck(keyVal);
});
