const whiteKeysRef = document.querySelectorAll("a");
const playNote = (element, idx) => {
  const audio = new Audio(`audio/key-${idx + 1}.mp3`);
  audio.play();
};

whiteKeysRef.forEach((element, idx) => {
  element.addEventListener("click", () => playNote(element, idx));
});
