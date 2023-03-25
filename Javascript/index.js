// ------------- TODAYS MORTGAGE RATE CARD SLIDER -----------------
const slider = document.querySelector(".card-slider");
let isDown = false;
let startX;
let scrollLeft;

function autoScroll() {
  slider.scrollLeft += slider.offsetWidth;
  if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
    slider.scrollLeft = 0;
  }
}

setInterval(autoScroll, 5000);

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

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