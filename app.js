//Done by Netacci
const hamburger = document.getElementById("bar");
const nav = document.getElementById("inner-nav");
const hamclose = document.getElementById("hamclose");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-right");
const prevButton = document.querySelector(".carousel-left");
const slideWidth = slides[0].getBoundingClientRect().width;

//FUNCTIONS

//function to set slide position
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
//sets slide position for all slides and because there is overflow hidden, it hides the rest
slides.forEach(setSlidePosition);
//function to move to next slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//function to hide left arrow when on first slide and remove right arrow when on last slide
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hide");
    nextButton.classList.remove("hide");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("hide");
    nextButton.classList.add("hide");
  } else {
    prevButton.classList.remove("hide");
    nextButton.classList.remove("hide");
  }
};
//event listeners
hamburger.addEventListener("click", () => {
  nav.classList.add("show");
  nav.classList.remove("hide");
  hamburger.style.display = "none";
  hamclose.style.display = "block";
});

hamclose.addEventListener("click", () => {
  nav.classList.remove("show");
  nav.classList.add("hide");
  hamclose.style.display = "none";
  hamburger.style.display = "block";
});
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});
