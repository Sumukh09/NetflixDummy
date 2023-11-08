const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1 ) % slides.length;
    updateSlider();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 5000); 
