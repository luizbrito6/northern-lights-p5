

const larguraTela = window.innerWidth;
const alturaTela = window.innerHeight;

var x = 0;
var ondasVetor = []; 

function setup() {

  createCanvas(larguraTela, alturaTela);

  // Gera as ondas baseadas na classe
  for (x = 0; x < 4; x++) {
    ondasVetor.push(new ondaClasse())
  }
  
}

function draw() {

  background(2);

  for (let onda of ondasVetor) {
    onda.animacao()
    onda.gerar()
  }
  fill(255, 0, 0)
}



