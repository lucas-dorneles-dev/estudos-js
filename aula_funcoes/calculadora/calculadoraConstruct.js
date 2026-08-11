function Calculadora(calculadora) {
  //Atributos
  this.display = document.querySelector('.display');
  //métodos
  //Inicia a calculadora
  this.initCalculator = function (){
    this.clickButton();
    this.pressEnter();
  };
  
  //implementação do Enter para finalização da soma
  this.pressEnter = function(){
  this.display.addEventListener('keyup', (k) =>{
      if (k.key === 'Enter') {
        this.doTheMath();
      }
    });
};
  //Limpar a tela
  this.clearBtn = function(){
    this.display.value = "";
};
  //limpar o ultimo valor inserido
  this.clearLast = function(){
    this.display.value = this.display.value.slice(0, -1);

};
  //realizar a conta
  this.doTheMath = function(){
    let conta = this.display.value;

    try {
      conta = eval(conta);
      if (conta === '' || Number.isNaN(conta)) {
        alert("Conta invalida");
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert("conta invalida do catch");
      return;
    }
};
//recebo um valor e imprimo no display
  this.btnToDisplay = function(valor){
  this.display.value += valor;
};

  //implementação dos evetos de click
  this.clickButton = function(){
    document.addEventListener('click', (e)=>{
      const el = e.target;

      if(el.classList.contains('btn-num')) {
      this.btnToDisplay(el.innerText);
      }

      if(el.classList.contains('btn-clear')) {
        this.clearBtn();
      }

      if (el.classList.contains('btn-deleta')) {
        this.deleteOne();
      }
      if (el.classList.contains('btn-equal')) {
        this.doTheMath();
      }
    });
  };
}

const calculadora = new Calculadora;
calculadora.initCalculator();
