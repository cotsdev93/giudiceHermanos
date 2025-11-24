console.log("funca");

function intro() {
  const mainIntro = document.getElementById("intro");
  const titulo1 = document.querySelector(".titulo1");
  const titulo2 = document.querySelector(".titulo2");
  const titulo3 = document.querySelector(".titulo3");

  setTimeout(() => {
    titulo1.style.opacity = "1";
  }, 400);
  setTimeout(() => {
    titulo2.style.opacity = "1";
  }, 1200);
  setTimeout(() => {
    titulo3.style.opacity = "1";
  }, 1900);

  setTimeout(() => {
    mainIntro.style.transform = "translateY(-100%)";
  }, 2300);
}

intro();

///////////////////////////////////// nav

const logo = document.querySelector(".logo");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const li4 = document.querySelector(".li4");

function nav() {
  setTimeout(() => {
    logo.style.transform = "translateX(0%)";
  }, 3400);

  setTimeout(() => {
    li1.classList.add("nav-in");
  }, 4000);
  setTimeout(() => {
    li2.classList.add("nav-in");
  }, 4200);
  setTimeout(() => {
    li3.classList.add("nav-in");
  }, 4400);
  setTimeout(() => {
    li4.classList.add("nav-in");
  }, 4600);
}

nav();

////////////////////////////////////
