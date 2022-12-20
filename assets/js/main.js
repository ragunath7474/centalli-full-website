const popup = document.querySelector(".popup");
const input = document.querySelector("#inputbox1");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const error1 = document.querySelector(".error1");
const submission = document.querySelector(".submission");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
function validate() {
  if (input.value == "" || email.value == "") {
    error.style.display = "block";
    error1.style.display = "block";
    submission.style.display = "inline-block";
  } else if (input.value.length > 5) {
    error.style.display = "none";
    error1.style.display = "none";
    submission.style.display = "none";
  }
}



const prevEl = document.querySelector(".prev");
console.log(prevEl);

const nextEl =document.querySelector(".next");
console.log(nextEl);

const allSide = document .querySelectorAll(".slick-slide");
console.log(allSide);

const boxEl = document. querySelectorAll(".box-size");
console.log(boxEl);

//  



let currentImg = 1;

let timeout;

 nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > boxEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = boxEl.length;
   }
  allSide.forEach(element => element.style.transform = `translateX(-${(currentImg - 1)*10}%)`);
// -150, -100, -50 , 0, 50, 100, 150
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 1000);
}


const prevS = document.querySelector(".prevs");
console.log(prevS);

const nextS =document.querySelector(".nexts");
console.log(nextS);

const allSideS = document .querySelectorAll(".slick-slides");
console.log(allSideS);

const boxS = document. querySelectorAll(".box-sizes");
console.log(boxS);

//  



let logoImg = 1;

let outtime;

 nextS.addEventListener("click", () => {
  logoImg++;
  clearTimeout(outtime);
  updatelogo();
});

prevS.addEventListener("click", () => {
  logoImg--;
  clearTimeout(outtime);
  updatelogo();
});

updatelogo();

function updatelogo() {
  if (logoImg > boxS.length) {
    logoImg = 1;
  } else if (logoImg < 1) {
    logoImg = boxS.length;
   }
  allSideS.forEach(element => element.style.transform = `translateX(-${(logoImg - 1)*10}%)`);
// -150, -100, -50 , 0, 50, 100, 150
outtime = setTimeout(() => {
    logoImg++;
    updatelogo();
  }, 1000);
}

// section  10

let slideIndex = 0;
showSlides();

function showSlides() {
    let mql = window.matchMedia('(min-width: 768px)');
    let i;
    let slides = document.getElementsByClassName("sub-container");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    let auto = setTimeout(showSlides, 2000); // Change image every 2 seconds

    if (mql.matches) {
        let slidesAll = document.querySelectorAll(".sub-container");

        clearTimeout(auto);
        slidesAll.forEach((slide, index) => {
            slide.style.display = 'block'

        })
    }
}


// csroll
// buttonm
let mql = window.matchMedia('(min-width: 768px)');