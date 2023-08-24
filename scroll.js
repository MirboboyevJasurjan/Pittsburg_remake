let linksWeb = document.querySelectorAll(".linkWeb");
let linksWebAbout = document.querySelectorAll(".linkWebAbout");
let linksTablet = document.querySelectorAll(".linkTablet");
let linksMobile = document.querySelectorAll(".linkMobile");

linksWeb.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

linksTablet.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-linkTablet"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

linksMobile.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-linkMobile"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Important
linksWebAbout.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
