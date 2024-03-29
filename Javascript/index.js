// ------------- TODAYS MORTGAGE RATE CARD SLIDER -----------------
const intervalTime = 5000;
const slideContainer = document.querySelector('.slider-container');
const slideCards = document.querySelectorAll('.slide-card');

let currentIndex = 0;

function nextCard() {
    currentIndex = (currentIndex + 1) % slideCards.length;

    slideContainer.scrollTo({
        left: slideCards[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
}

setInterval(nextCard, intervalTime);


// ------------- SLIDER -----------------

const sliders = document.querySelector('.sliders .slider');
const slideBoxes = sliders.querySelectorAll('.slide-box');
const roundedBtns = sliders.querySelectorAll('.rounded_btn');
let manualSlideIndex = 0;

function showSlide(index) {
    if (index >= slideBoxes.length) {
        manualSlideIndex = 0;
    } else if (index < 0) {
        manualSlideIndex = slideBoxes.length - 1;
    }

    slideBoxes.forEach((box, i) => {
        box.style.display = i === manualSlideIndex ? 'block' : 'none';
    });

    roundedBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === manualSlideIndex);
    });
}

function plusSlides(n) {
    manualSlideIndex += n;
    showSlide(manualSlideIndex);
}

function currentSlide(n) {
    manualSlideIndex = n - 1;
    showSlide(manualSlideIndex);
}

document.getElementById('prevBtn').addEventListener('click', () => plusSlides(-1));
document.getElementById('nextBtn').addEventListener('click', () => plusSlides(1));

roundedBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => currentSlide(i + 1));
});

function autoShowSlides() {
    plusSlides(1);
    setTimeout(autoShowSlides, 5000);
}

autoShowSlides();

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

// Feedback Section
let feedbackSlideIndex = 1;
feedbackShowSlides();

function feedbackPlusSlides(n) {
    feedbackShowSlides(feedbackSlideIndex += n);
}

function currentSlide(n) {
    feedbackShowSlides(feedbackSlideIndex = n);
}

function feedbackShowSlides() {
    let i;
    let feedbackSlides = document.getElementsByClassName("feedback-slides");
    if (feedbackSlideIndex > feedbackSlides.length) {
        feedbackSlideIndex = 1
    }
    if (feedbackSlideIndex < 1) {
        feedbackSlideIndex = feedbackSlides.length
    }
    for (i = 0; i < feedbackSlides.length; i++) {
        feedbackSlides[i].style.display = "none";
    }
    feedbackSlides[feedbackSlideIndex - 1].style.display = "block";
    feedbackSlideIndex++;
    setTimeout(feedbackShowSlides, 5000);
}