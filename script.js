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
