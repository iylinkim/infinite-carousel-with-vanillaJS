const btns = document.querySelectorAll(".btns");
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
let last = slider.lastElementChild;
let first = slider.firstElementChild;
let count = -150;
let margin = 0;

function moveSlide(event) {
  const {
    target: { name },
  } = event;
  last = slider.lastElementChild;
  first = slider.firstElementChild;

  if (name === "prev") {
    count += 150;
    margin -= 150;
    slider.style.transform = `translateX(${count}px)`;
    slider.prepend(last);
    slider.style.marginLeft = `${margin}px`;
  } else if (name === "next") {
    count -= 150;
    margin += 150;
    slider.style.transform = `translateX(${count}px)`;
    slider.appendChild(first);
    slider.style.marginLeft = `${margin}px`;
  }
}

function handleSlide() {
  slider.prepend(last);
}

function init() {
  handleSlide();
  btns.forEach((btn) => {
    btn.addEventListener("click", moveSlide);
  });
}

init();
