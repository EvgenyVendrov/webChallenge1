const up_btn = document.querySelector(".button-up");
const dwn_btn = document.querySelector(".button-down");
const text_box = document.querySelector(".boxed");

dwn_btn.addEventListener("click", () => {
  text_box.scrollBy(0, 50);
});

up_btn.addEventListener("click", () => {
  text_box.scrollBy(0, -50);
});
