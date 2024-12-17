let listaBolas = document.querySelectorAll(".circle");

console.log(listaBolas);
let piscando;

function mudarEstado(bola) {
    
    console.log(bola)
      if (bola.classList.contains("on")) {
        bola.classList.remove("on");
        bola.classList.add("off");
      } else {
        bola.classList.add("on");
        bola.classList.remove("off");
      }
    }

function piscar() {
  listaBolas.forEach((bola) => {
    console.log(bola)
    let intervalo = Math.floor(Math.random() * 500) + 1000
    mudarEstado(bola, intervalo)
  });
}

function desligar(){
  clearInterval(piscando)
}
