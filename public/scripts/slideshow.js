let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function updateSlidesClose() {
  slideIndex = mslideIndex
  showSlides(slideIndex)
}

function updateSlidesOpen() {
  mslideIndex = slideIndex
  mshowSlides(mslideIndex)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("photoSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var mslideIndex = slideIndex;
mshowSlides(mslideIndex);

function mplusSlides(n) {
  mshowSlides(mslideIndex += n);
}

function mshowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mphotoSlide");
    if (n > slides.length) {mslideIndex = 1}
    if (n < 1) {mslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[mslideIndex-1].style.display = "block";
}