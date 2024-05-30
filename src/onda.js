class ondaClasse {
    constructor() {
        
        this.cor = color(random(215, 222), random(120, 125), random(250, 255), random(0, 200));
        this.amp = random(50, 150);
        this.freq = random(0.01, 0.05);
        this.fase = random(TWO_PI);  
        this.velocidade = random(0.01, 0.03);
    }

    //  Método que faz a onda andar no eixo x 
    animacao() { this.fase += this.velocidade; }
    
    // Método que constrói o "corpo" da onda 
    gerar() {
      
        beginShape();
        noFill();

        for (let x = 0; x <= windowWidth; x++) {

            stroke(this.cor);
            strokeWeight(1);

            let y = windowHeight / 5 + this.amp * sin(this.freq * x + this.fase);
            vertex(x, y); 
        }

        endShape();
    }
    
    
  }
  
  