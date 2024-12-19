let listaBolas = document.querySelectorAll(".circle");

let piscando = false;

let pausar = () => {
  listaBolas.forEach((bola) => {
    bola.classList.add("off")
  });
};

let rodar = () => {
  listaBolas.forEach((bola) => {
      bola.classList.remove("off")
  });
}

function ligar() {
  piscando = true;

  if (piscando) {
    rodar();
  } else {
    pausar();
  }
}

function desligar(){
  piscando = false;
  pausar();
}

// let intervalo = Math.floor(Math.random() * 500) + 1000
