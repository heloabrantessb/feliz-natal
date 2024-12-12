let listaBolas = document.querySelectorAll(".circle");

console.log(listaBolas);

function mudarEstado(bola, intervalo) {
    
    console.log(bola)
    setTimeout(() => {
      if (bola.classList.contains("on")) {
        bola.classList.remove("on");
        bola.classList.add("off");
      } else {
        bola.classList.add("on");
        bola.classList.remove("off");
      }

      setTimeout(mudarEstado(bola, intervalo), intervalo)
    }, intervalo);
}

function Ola(){
    console.log("Hello");
    
}
// function piscar(){

//         let piscando = setInterval(mudarEstado(), 1000);

//     }

//     setTimeout(() => {
//         clearInterval(piscando);
//     }, 10000)

function piscar() {
  listaBolas.forEach((bola) => {
    console.log(bola)
    let intervalo = Math.floor(Math.random() * 200) + 200
    mudarEstado(bola, intervalo)
  });
}

// let piscando = piscar();

