const up_btn = document.querySelector(".facing-up button");
const dwn_btn = document.querySelector(".facing-down button");
const text_box = document.querySelector(".boxed");

dwn_btn.addEventListener("click", () => {
  text_box.scrollBy(0, 50);
});

up_btn.addEventListener("click", () => {
  text_box.scrollBy(0, -50);
});
