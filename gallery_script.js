// Image changing Code

var thumbnails = document.getElementById("thumbnails");
var imgs = thumbnails.getElementsByTagName("img");
var main = document.getElementById("main");
var counter = 0;

for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    img.addEventListener("click", function() {     
        main.src = this.src;
    });
}

// Image text changing Code

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.onload = function() {
    plusSlides(1);
};

// Background Color changing Code

function getRadioValue1() {
    var app = document.getElementsByTagName("BODY")[0];
    app.setAttribute("light-mode", "light");
}

function getRadioValue2() {
    var app = document.getElementsByTagName("BODY")[0];
    app.setAttribute("light-mode", "dark");
}

function changedBackgroundColor() {
	var selectTag = document.getElementById("colorMode").value;
	if (selectTag==1){
		getRadioValue1();
	}else if(selectTag==2){
		getRadioValue2();
	}
}