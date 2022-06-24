import {setJiggleToAnotherKey,
    keyCheck,
    preventException} from './utility.js';
let listOfAllKeysByClassName = document.getElementsByClassName("key");

window.addEventListener("keydown", (event)=>{
    
    let keyVal = event.key.toString().toUpperCase();
    preventException(event, keyVal); 
    keyCheck(keyVal);
});