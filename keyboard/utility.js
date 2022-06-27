/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-multi-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
const listOfAllKeysByClassName = document.getElementsByClassName('key');
function setJiggleToAnotherKey() {
  const keyToBeSelected = Math.floor(Math.random() * 52 + 0);
  listOfAllKeysByClassName[keyToBeSelected].classList.add('jiggle');
  listOfAllKeysByClassName[keyToBeSelected].id = 'Jiggling';
}

const keyCheck = (keyRef) => {
  const jigglingElement = document.getElementById('Jiggling');
  if (jigglingElement.getAttribute('data-key').toString() == keyRef) {
    jigglingElement.classList.remove('jiggle');
    jigglingElement.id = '';
    setJiggleToAnotherKey();
  }
};
const preventException = (event, keyVal) => {
  if (keyVal == 'TAB') {
    //tab pressed
    event.preventDefault(); // stops its action
  }
};
export { setJiggleToAnotherKey, keyCheck, preventException };
