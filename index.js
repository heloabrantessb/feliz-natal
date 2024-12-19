let listaBolas = document.querySelectorAll(".circle");

let piscando = false;

let pausar = () => {
  listaBolas.forEach((bola) => {
    // bola.style.backgroundColor = "gray";
    bola.style.animation = "none"
    bola.style.boxShadow = "none"
  });
};

let rodar = () => {
  listaBolas.forEach((bola) => {
    bola.style.animation = "";
  });
}

function ligar() {
  piscando = true;

  if (piscando) {
    rodar();
  } else {
    pausar()
  }
}

function desligar(){
  piscando = false;
  pausar();
}

// let intervalo = Math.floor(Math.random() * 500) + 1000
