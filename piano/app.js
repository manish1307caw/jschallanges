const whiteKeysRef = document.querySelectorAll("a");
var playNote = (element, idx) => {
  let audio = new Audio("audio/key-" + (idx + 1) + ".mp3");
  console.log(idx);
  audio.play();
};

whiteKeysRef.forEach((element, idx) => {
  element.addEventListener("click", () => playNote(element, idx));
});
