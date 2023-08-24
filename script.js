const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const langLink = document.querySelectorAll(".lang-link");
const langMobileLink = document.querySelectorAll(".lang-mobileLink");
const dispetch = document.querySelectorAll(".dispetch");
const dispetchMobile = document.querySelectorAll(".dispetchMobile");
const dispech = document.querySelector(".dispech");
const apdeyt = document.querySelector(".apdeyt");
const getYear = document.querySelector(".getYear");
const getYearMobile = document.querySelector(".getYearMobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Add "active" class in nav-link

navLink.forEach((links) => {
  links.addEventListener("click", function () {
    navLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// Add "active" class in lang-link

langLink.forEach((links) => {
  links.addEventListener("click", function () {
    langLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// Add "active" class in langMobile

langMobileLink.forEach((links) => {
  links.addEventListener("click", function () {
    langMobileLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// slider dispetch and apdeyt
dispetch.forEach((dispetchs) => {
  dispetchs.addEventListener("click", function () {
    dispetch.forEach((dispetchOne) => dispetchOne.classList.remove("active"));
    this.classList.add("active");
  });
});

function Show() {
  document.querySelector(".dispetchSlider").style.display = "block";
  document.querySelector(".apdeytSlider").style.display = "none";
}
function Hide() {
  document.querySelector(".dispetchSlider").style.display = "none";
  document.querySelector(".apdeytSlider").style.display = "block";
}
// visibility: visible;
// function Show() {
//   document.querySelector(".dispetchSlider").style.visibility = "visible";
//   document.querySelector(".apdeytSlider").style.visibility = "hidden";
// }
// function Hide() {
//   document.querySelector(".apdeytSlider").style.visibility = "visible";
//   document.querySelector(".dispetchSlider").style.visibility = "hidden";
// }

function ShowTablet() {
  document.querySelector(".dispetchSliderTablet").style.display = "block";
  document.querySelector(".apdeytSliderTablet").style.display = "none";
}

function HideTablet() {
  document.querySelector(".dispetchSliderTablet").style.display = "none";
  document.querySelector(".apdeytSliderTablet").style.display = "block";
}
// for Mobile

function ShowMobile() {
  document.querySelector(".dispetchSliderMobile").style.display = "block";
  document.querySelector(".apdeytSliderMobile").style.display = "none";
}
function HideMobile() {
  document.querySelector(".dispetchSliderMobile").style.display = "none";
  document.querySelector(".apdeytSliderMobile").style.display = "block";
}

// getYearDate
let year = new Date().getFullYear();
getYear.innerHTML = year;
getYearMobile.innerHTML = year;

// videoPlay

const playBtn = document.querySelector(".playBtn");
const videoPoup = document.querySelector(".videoPoup");
const closeBtn = document.querySelector(".closeBtn");
const videoCont = document.querySelector(".videoCont");

function PoupVideo() {
  videoPoup.classList.toggle("activeVideo");
  videoCont.pause();
  // videoCont.currentTime = 0;
}
