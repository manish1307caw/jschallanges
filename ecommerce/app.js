import { updateBill, addItemToCart } from "./utility.js";

let button = document.querySelectorAll(".add");

button.forEach((buttonRef, buttonIndex) => {
  buttonRef.addEventListener("click", () => {
    addItemToCart(buttonRef, buttonIndex);
    updateBill();
  });
});
