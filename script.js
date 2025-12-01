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

//////////////////////////////////// main

const sloganTarget = document.querySelectorAll(
  ".sloganHover, .sloganContainer"
);

const slogan01 = document.querySelector(".slogan01");
const slogan02 = document.querySelector(".slogan02");

sloganTarget.forEach((sloganTarget) => {
  sloganTarget.addEventListener("mouseenter", () => {
    slogan01.style.transform = "translateY(0%)";
    setTimeout(() => {
      slogan01.style.textShadow = "-2px 2px 2px rgb(0, 0, 0, 2)";
    }, 1001);
    setTimeout(() => {
      slogan02.style.transform = "translateY(0%)";
      setTimeout(() => {
        slogan02.style.textShadow = "-2px 2px 2px rgb(0, 0, 0, 2)";
      }, 1001);
    }, 500);
  });
});

sloganTarget.forEach((sloganTarget) => {
  sloganTarget.addEventListener("mouseleave", () => {
    slogan01.style.textShadow = "none";

    setTimeout(() => {
      slogan01.style.transform = "translateY(100%)";
    }, 300);

    setTimeout(() => {
      slogan02.style.textShadow = "none";

      setTimeout(() => {
        slogan02.style.transform = "translateY(100%)";
      }, 500);
    }, 300);
  });
});

/////////////////////////////////////////// contact

const botonForm = document.querySelector(".botonForm");
const contacto02 = document.querySelector(".contacto02");
const contactoTitulo2 = document.querySelector(".contactoTitulo2");
const contacto02Container = document.querySelector(".contacto02Container");
const btnEnviarForm = document.querySelector(".btnEnviarForm");
const customSelects = document.querySelectorAll(".selectApple");
const upload = document.querySelector("#imagenes");
const estado = document.querySelector(".estadoArchivo");

botonForm.addEventListener("click", () => {
  contacto02.style.transform = "translateX(0%)";
  contactoTitulo2.style.color = "rgb(230, 194, 73)";
  setTimeout(() => {
    contacto02Container.classList.add("after");
  }, 500);
  setTimeout(() => {
    contacto02.style.boxShadow = "0px 0px 6px 1px #00000070";
  }, 1001);
});

btnEnviarForm.addEventListener("click", () => {
  btnEnviarForm.style.backgroundColor = "green";
  contacto02.style.boxShadow = "none";
  contactoTitulo2.style.color = "rgb(70, 205, 49)";
  setTimeout(() => {
    contacto02.style.transform = "translateX(+150%)";
  }, 500);
  setTimeout(() => {
    contacto02Container.classList.remove("after");
  }, 200);
});

customSelects.forEach((select) => {
  const trigger = select.querySelector(".selectApple__trigger");
  const list = select.querySelector(".selectApple__list");
  const labelSpan = select.querySelector(".selectApple__label");
  const hiddenInput = select.querySelector('input[type="hidden"]');

  trigger.addEventListener("click", () => {
    select.classList.toggle("open");
  });

  list.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.dataset.value;
      const text = option.textContent;

      hiddenInput.value = value;
      labelSpan.textContent = text;
      select.classList.remove("open");
    });
  });
});

document.addEventListener("click", (e) => {
  customSelects.forEach((select) => {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });
});

const input = document.querySelector("#imagenes");
const estadoArchivo = document.querySelector(".estadoArchivo");

input.addEventListener("change", () => {
  if (input.files.length > 0) {
    estadoArchivo.textContent = `${input.files.length} archivo(s) cargado(s)`;
  } else {
    estadoArchivo.textContent = "Ningún archivo seleccionado";
  }
});