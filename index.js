let pisca = document.querySelector('.red');

function mudarEstado(){
   if (pisca.classList.contains("on")) {
    pisca.classList.remove("on");
    pisca.classList.add("off");
   }else{
    pisca.classList.add("on")
    pisca.classList.remove("off");
   }
}

function piscar(){
    setInterval(mudarEstado, 1000);
}

let piscando = piscar();

setTimeout(() => {
    clearInterval(piscando);
}, 10000)