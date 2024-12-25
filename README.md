<!-- HTML -->
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Feliz Natal!!</title>
  </head>
  <body>
    <main>
      <div class="lights">
        <div class="circle red off"></div>
        <div class="circle yellow off"></div>
        <div class="circle blue off"></div>
        <div class="circle green off"></div>
        <div class="circle pink off"></div>
      </div>

      <h1>Feliz Natal!</h1>

      <div class="button">
        <button onclick="ligar()">Ligar</button>
        <button onclick="desligar()">Desligar</button>
      </div>
      <div class="credit">
        <p>
          Desenvolvido por
          <a href="https://github.com/heloabrantessb" target="_blank"
            >Heloisa Abrantes</a
          >
        </p>
      </div>
    </main>

    <footer class="credit"></footer>
    <script src="./index.js"></script>
  </body>
</html>
<!-- CSS -->
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
  background-color: #19151a;
  font-family: "Cinzel", sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10rem;
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
  --cor: #f82410;
  background-color: var(--cor);
  border-color: var(--cor);
  animation: brilha 0.4s infinite;
}
.yellow {
  --cor: #ccd600;
  background-color: var(--cor);
  border-color: var(--cor);
  animation: brilha 0.5s infinite;
}
.blue {
  --cor: #1e0bf7;
  background-color: var(--cor);
  border-color: var(--cor);
  animation: brilha 0.6s infinite;
}
.green {
  --cor: #2e7d54;
  background-color: var(--cor);
  border-color: var(--cor);
  animation: brilha 0.7s infinite;
}
.pink {
  --cor: #fb85fb;
  background-color: var(--cor);
  border-color: var(--cor);
  animation: brilha 0.8s infinite;
}

h1 {
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 0px 25px white, 2px 7px 25px white, 0px -7px 18px white;
}

.happy-glow {
}

/*botão*/
.button {
  display: flex;
  gap: 3rem;
}

button {
  background-color: #48555c;
  width: 12rem;
  height: 4rem;
  border-radius: 4px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  outline: none;
}
button:hover {
  color: white;
  background-color: transparent;
  border: 2px solid white;
}
.credit {
  color: white;
}

.credit p a {
  text-decoration: none;
}

/* Animação */
@keyframes brilha {
  from {
    box-shadow: inset 18px 0px 29px 22px var(--cor);
  }
  to {
    box-shadow: 0px 0px 85px 20px var(--cor);
  }
}
<!-- JS -->
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
