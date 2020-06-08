// const hamburger = document.getElementById("bar");
// const nav = document.getElementById("nav-list");
// const hamclose = document.getElementById("hamclose");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-right");
const prevButton = document.querySelector(".carousel-left");
// const dotsNav = document.querySelector(".carousel-nav");
// const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

//functions
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
//funtion to remove and add current slide class on dots
// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove("current-slide");
//   targetDot.classList.add("current-slide");
// };
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
// hamburger.addEventListener("click", () => {
//   nav.classList.add("show");
//   nav.classList.remove("hide");
//   hamburger.style.display = "none";
//   hamclose.style.display = "block";
// });

// hamclose.addEventListener("click", () => {
//   nav.classList.remove("show");
//   nav.classList.add("hide");
//   hamclose.style.display = "none";
//   hamburger.style.display = "block";
// });
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  // const currentDot = dotsNav.querySelector(".current-slide");
  // const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  // updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  // const currentDot = dotsNav.querySelector(".current-slide");
  // const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  // updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// dotsNav.addEventListener("click", (e) => {
//   //this finds the closest button when you click in dotsNav div
//   const targetDot = e.target.closest("button");
//   //if you click anywhere that isn't buttton, end the function
//   if (!targetDot) return;
//   const currentSlide = track.querySelector(".current-slide");
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const targetIndex = dots.findIndex((dot) => dot === targetDot);
//   const targetSlide = slides[targetIndex];
//   moveToSlide(track, currentSlide, targetSlide);
//   updateDots(currentDot, targetDot);
//   hideShowArrows(slides, prevButton, nextButton, targetIndex);
// });
