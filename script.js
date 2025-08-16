// slider

let img = document.querySelector('.img-slider')
let nextElem = document.querySelector('.next')
let prevElem = document.querySelector('.prev')
let arraySlider = ["images/dentice/1.jpg",
   "images/dentice/2.jpg", "images/dentice/3.jpg",
    "images/dentice/4.jpg", "images/dentice/5.jpg"]
let index = 0;
function next() {
    index--;
    if (index < 0) {
        index = arraySlider.length - 1;
    }
    img.setAttribute('src', arraySlider[index])
}

function prev() {
    index++;
    if (index > arraySlider.length - 1) {
        index = 0;
    }
    img.setAttribute('src', arraySlider[index])
}
nextElem.addEventListener('click', next)
prevElem.addEventListener('click', prev)
setInterval(next, 3000)


document.querySelectorAll(".dropBtn").forEach((btn) => {
  const content = btn.nextElementSibling;

  btn.addEventListener("click", (e) => {
    //    close all menu
    document.querySelectorAll(".dropContent").forEach((c) => {
      if (c !== content) c.style.display = "none";
    });

    // close/open menu
    content.style.display = content.style.display === "block" ? "none" : "block";

    e.stopPropagation();
  });
});

// close menu click out
document.addEventListener("click", () => {
  document.querySelectorAll(".dropContent").forEach((c) => (c.style.display = "none"));
});

const btn = document.getElementById("menubtn");
const menu = document.getElementById("dropdown");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});


document.querySelectorAll(".section-five p").forEach((p) => {
  p.addEventListener("click", () => {
    p.classList.toggle("expanded");
  });
});
