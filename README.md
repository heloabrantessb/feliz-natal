//HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Feliz Natal!!</title>
</head>
<body>
    <div class="lights"> 
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle blue"></div>
        <div class="circle green"></div>
        <div class="circle pink"></div>
    </div>
    <div class="button">
        <button onclick="ligar()">Ligar</button>
        <button onclick="desligar()">Desligar</button>
    </div>


    <!-- ESTILIZAR OS CRÉDITOS -->
    <!-- <div class="credit">
        <p>Desenvolvido por <a href="https://github.com/heloabrantessb">Heloisa Abrantes</a></p>
    </div> -->
    <script src="./index.js"></script>
</body>
</html>


//CSS
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 62.5%;
  --cor: #fff;
}

body {
  font-size: 1.6rem;
  height: 100vh;
  background-color: #131330;
  justify-items: center;
}
.lights {
  display: flex;
  margin-top: 6rem;
  gap: 5rem;
}

.circle {
  width: 10rem;
  height: 10rem;
  border: 1px solid;
  border-radius: 50%;
}

/* cores */
.red {
  --cor: rgba(255, 0, 0, 0.658);
  background-color: #ff0000d7;
  border-color: red;
  animation: brilha 0.4s infinite;
}
.yellow {
  --cor: rgba(255, 255, 0, 0.523);
  background-color: #fdfd0d;
  border-color: yellow;
  animation: brilha 0.5s infinite;
}
.blue {
  --cor: rgba(0, 0, 255, 0.696);
  background-color: rgba(0, 0, 255, 0.872);
  border-color: rgba(0, 0, 255, 0.872);
  animation: brilha 0.6s infinite;
}
.green {
  --cor: rgba(0, 128, 0, 0.551);
  background-color: rgba(0, 128, 0, 0.888);
  border-color: rgba(0, 128, 0, 0.888);
  animation: brilha 0.7s infinite;
}
.pink {
  --cor: rgba(243, 36, 202, 0.619);
  background-color: rgba(243, 36, 202, 0.909);
  border-color: rgba(243, 36, 202, 0.909);
  animation: brilha 0.8s infinite;
}
/*botão*/
button {
  background-color: green;
  width: 8rem;
  height: 2rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 8rem;
}
button:hover {
  color: red;
  background-color: transparent;
  border: 2px solid red;
}

/* Animação */
@keyframes brilha{
  from {
    box-shadow: inset 18px 0px 29px 22px var(--cor);
  } to{
    box-shadow: 0px 0px 85px 20px var(--cor);
  }
}

//javascript

let listaBolas = document.querySelectorAll(".circle");

let piscando = false;

let pausar = () => {
  listaBolas.forEach((bola) => {
    bola.removeAttribute('animation')
    bola.style.boxShadow = "none"
    bola.style.animationPlayState = "paused";
  });
};

let rodar = () => {
  listaBolas.forEach((bola) => {
    bola.style.animationPlayState = "running";
  });
}

function ligar() {
  piscando = !piscando;

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
