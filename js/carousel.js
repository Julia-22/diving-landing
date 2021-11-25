const carouselItems = document.querySelectorAll(".carousel_item");
const prevArrow = document.querySelector(".prev_arrow");
const nextArrow = document.querySelector(".next_arrow");
let currentItem = 0;

nextArrow.addEventListener("click", () => {
  carouselItems[currentItem].classList.remove("_visible");
  if (currentItem !== 2) {
    currentItem += 1;
  } else if (currentItem === 2) {
    currentItem = 0;
  }
  carouselItems[currentItem].classList.add("_visible");
});

prevArrow.addEventListener("click", () => {
  carouselItems[currentItem].classList.remove("_visible");
  if (currentItem !== 0) {
    currentItem -= 1;
  } else if(currentItem === 0) {
    currentItem = 2;
  }
  carouselItems[currentItem].classList.add("_visible");
})