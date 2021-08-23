let hambuger = document.querySelector(".hambuger");

let lines = document.querySelectorAll(".line");
let middleNav = document.querySelector(".middleNav");
let rightNav = document.querySelector(".rightNav");
let navSec = document.querySelector(".navSec");

hambuger.addEventListener("click", () => {
  if (navSec.style.display === "") {
    hideHamburgerMenu();
  }

  if (navSec.style.display == "none") {
    showHamburgerMenu();
  } else {
    hideHamburgerMenu();
  }
});

function hideHamburgerMenu() {
  navSec.style.display = "none";
  navSec.style.opacity = "0";
  navSec.style.height = "0";

  rightNav.style.height = "0";
  rightNav.style.opacity = "0";
  middleNav.style.height = "0";
}

function showHamburgerMenu() {
  navSec.style.display = "block";
  setTimeout(() => {
    navSec.style.opacity = "1";
    navSec.style.height = "189px";
  }, 100);
  setTimeout(() => {
    rightNav.style.height = "76px";
    middleNav.style.height = "84px";
    rightNav.style.opacity = "1";
  }, 300);
}

hambuger.addEventListener("mouseover", () => {
  Array.from(lines).forEach((btn) => {
    btn.style.backgroundColor = "hsl(257, 27%, 26%)";
  });
});

hambuger.addEventListener("mouseout", () => {
  Array.from(lines).forEach((btn) => {
    btn.style.backgroundColor = "hsl(0, 0%, 75%)";
  });
});
