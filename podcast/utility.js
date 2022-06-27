/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-const */
/* eslint-disable radix */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
const checkbox = document.querySelectorAll('input[type="checkbox"]');
let currentState = "None";
let currentStateRef = null;
const loopThrough = (startPos, endPos, temp) => {
  for (let i = startPos; i < endPos - 1; i++) {
    checkbox[i].checked = checkbox[temp - 1].checked;
  }
};
const changeStatesOfKey = (event) => {
  let endPos = parseInt(currentStateRef.target.name.slice(8));
  let startPos = parseInt(event.target.name.slice(8));
  let temp = startPos;
  if (endPos < startPos) {
    temp = startPos;
    startPos = endPos;
    endPos = temp;
  }
  loopThrough(startPos, endPos, temp);
};
const changeWithoutShift = (event) => {
  currentStateRef = event;
  if (event.target.checked) {
    currentState = "checked";
  } else {
    currentState = "unchecked";
  }
};
const changeSettingsTillEnd = (event) => {
  let startPos = parseInt(event.target.name.slice(8));
  for (let i = startPos; i < 10; i++) {
    checkbox[i].checked = checkbox[startPos - 1].checked;
  }
};
const changeWithShift = (event) => {
  if (
    (currentState === "checked" && event.target.checked) ||
    (currentState === "unchecked" && !event.target.checked)
  ) {
    changeStatesOfKey(event);
  } else {
    changeSettingsTillEnd(event);
  }
};
const changeSettings = (event, element) => {
  if (event.shiftKey) {
    changeWithShift(event);
  } else {
    changeWithoutShift(event);
  }
};
export {
  loopThrough,
  changeStatesOfKey,
  changeWithoutShift,
  changeSettingsTillEnd,
  changeWithShift,
  changeSettings
};
