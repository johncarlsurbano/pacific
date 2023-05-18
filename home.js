const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
nav.classList.toggle("openSearch");
nav.classList.remove("openNav");
if (nav.classList.contains("openSearch")) {
  return searchIcon.classList.replace("uil-search", "uil-times");
}
searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
nav.classList.add("openNav");
nav.classList.remove("openSearch");
searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
nav.classList.remove("openNav");
});


const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const slideHeight = slides[0].clientHeight;
let currentSlide = 0;

window.addEventListener("wheel", event => {
  const delta = Math.sign(event.deltaY);
  const isScrollingDown = delta === 1;
  
  if (isScrollingDown && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (!isScrollingDown && currentSlide > 0) {
    currentSlide--;
  }
  
  carousel.style.transform = `translateY(-${currentSlide * slideHeight}px)`;
  event.preventDefault();
});