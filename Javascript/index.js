// ------------- TODAYS MORTGAGE RATE CARD SLIDER -----------------
let intervalTime = 5000;

let SlideContainer = document.querySelector('.slider-container');
let SlideCards = document.querySelectorAll('.slide-card');

let currentIndex = 0;

function NextCard() {
    currentIndex++;

    if (currentIndex >= SlideCards.length) {
        currentIndex = 0;
    }

    SlideContainer.scrollTo({
        left: SlideCards[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
}

setInterval(NextCard, intervalTime);

// ------------- SLIDER -----------------
let menualslideIndex = 1;
menualShowSlides(menualslideIndex);

function plusSlides(n) {
    menualShowSlides(menualslideIndex += n);
}

function currentSlide(n) {
    menualShowSlides(menualslideIndex = n);
}

let automenualslideIndex = 0;
autoShowSlides();



function menualShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-box");
    let rounded_btns = document.getElementsByClassName("rounded_btn");
    if (n > slides.length) { menualslideIndex = 1 }
    if (n < 1) { menualslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < rounded_btns.length; i++) {
        rounded_btns[i].className = rounded_btns[i].className.replace(" active", "");
    }
    slides[menualslideIndex - 1].style.display = "block";
    rounded_btns[menualslideIndex - 1].className += " active";
}
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-box");
    let rounded_btns = document.getElementsByClassName("rounded_btn");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    automenualslideIndex++;
    if (automenualslideIndex > slides.length) { automenualslideIndex = 1 }
    for (i = 0; i < rounded_btns.length; i++) {
        rounded_btns[i].className = rounded_btns[i].className.replace(" active", "");
    }
    slides[automenualslideIndex - 1].style.display = "block";
    rounded_btns[automenualslideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 5000);
}

// Ratings & Years Of Experience

function countToFive() {
    const spanElement = document.getElementById('years-of-experience');
    let count = 0;
    const interval = setInterval(() => {
        spanElement.textContent = count + ' +';
        count++;
        if (count > 5) {
            clearInterval(interval);
        }
    }, 100);
}

function countToFourDotFive() {
    const spanElementss = document.getElementById('ratings');
    let count = 0;
    const interval = setInterval(() => {
        spanElementss.textContent = count.toFixed(1) + ' +/5';
        count += 0.5;
        if (count > 4.5) {
            clearInterval(interval);
        }
    }, 100);
}

window.addEventListener('scroll', () => {
    const elementPosition = document.querySelector('.closest-services').getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight) {
        countToFive();
        countToFourDotFive();
    }
});