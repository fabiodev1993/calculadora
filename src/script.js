class Calculadora {
  constructor(display){
    this.display = document.getElementById(display);
  }

  inserir(num){
    let numero = this.display.innerText;
    this.display.innerText = numero + num;
  }

  apagar(){
    this.display.innerText = "";
  }

  voltar(){
    let numero = this.display.innerText;
    this.display.innerText = numero.substring(0,numero.length -1);
  }

  calcular(){
    let numero = this.display.innerText;
    if(numero === ""){
      this.display.innerText = "";
    }else{
      this.display.innerText = eval(numero);
    }
  }
  
}

const calculadora = new Calculadora('display');