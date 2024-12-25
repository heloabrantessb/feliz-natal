let listaBolas = document.querySelectorAll(".circle");
let happy = document.querySelector(".happy");

let piscando = false;

let pausar = () => {
  listaBolas.forEach((bola) => {
    bola.classList.add("off");
  });
  happy.classList.add("off");
};

let rodar = () => {
  listaBolas.forEach((bola) => {
    bola.classList.remove("off");
  });
  happy.classList.remove("off");
};

function ligar() {
  piscando = true;
  if (piscando) {
    rodar();
  } else {
    pausar();
  }
}

function desligar() {
  piscando = false;
  pausar();
}


