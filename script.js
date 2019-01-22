var slideIndex = 1;
showSlides(n);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pc");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

//second slideshow
var slideIndex = 1;
showSlides2(n);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("pc2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

//contact form
function show() {
  var i;
  var test = document.getElementsByClassName("test");
  for (i = 0; i < test.length; i++) {
    test[i].style.display = "block";
  }
}

function hide() {
  var i;
  var test = document.getElementsByClassName("test");
  for (i = 0; i < test.length; i++) {
    test[i].style.display = "none";
  }
}
