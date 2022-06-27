/* eslint-disable import/extensions */
import { changeSettings } from './utility.js';

const checkbox = document.querySelectorAll('input[type="checkbox"]');

checkbox.forEach((element) => {
  element.addEventListener('click', (event) => {
    changeSettings(event, element);
  });
});
