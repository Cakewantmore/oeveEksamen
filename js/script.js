var timer = 5;
var slideSpeed = 8000;

var slider = document.querySelector("slider");

var allImages = document.querySelectorAll(".slider img");
var allParagraph = document.querySelectorAll(".sliderText p");

var counter = 0;

allImages.forEach((img) => {
  img.classList.add("hidden");
  img.style.transition = timer + "s all";
});
allParagraph.forEach((p) => {
  p.classList.add("hidden");
  p.style.transition = timer + "100ms all";
});

allImages[0].classList.remove("hidden");
allParagraph[0].classList.remove("hidden");

function slide() {
  allParagraph[counter].classList.add("hidden");
  allImages[counter].classList.add("hidden");
  if (counter == 4) {
    counter = 0;
    allImages[counter].classList.remove("hidden");
    allParagraph[counter].classList.remove("hidden");
  } else {
    counter++;
    allImages[counter].classList.remove("hidden");
    allParagraph[counter].classList.remove("hidden");
  }

  setTimeout(slide, slideSpeed);
}
slide();
