let vectorIndex = 1;
showvSlides(vectorIndex);

function plusvSlides(n) {
  showvSlides(vectorIndex += n);
}

function currentvSlide(n) {
  showvSlides(vectorIndex = n);
}

function showvSlides(n) {
    let i;
    let slides = document.getElementsByClassName("vectorSlide");
    if (n > slides.length) {vectorIndex = 1}
    if (n < 1) {vectorIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[vectorIndex-1].style.display = "block";
}