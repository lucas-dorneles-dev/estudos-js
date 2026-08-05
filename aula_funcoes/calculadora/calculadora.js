function criaCalculadora() {
  return {
    //Atributos  
    display: document.querySelector('.display'),
  //Métodos
  inicia: function (){
    this.clickButton();
    this.pessEnter();
  },
  //
  pessEnter(){
    this.display.addEventListener('keyup', k =>{
      if (k.keyCode == 13){
        this.relizaConta();
      }
    });
  },

  clearDisplay(){
  this.display.value = "";
},
  deleteOne(){
      this.display.value = this.display.value.slice(0, -1);
      
    },
  relizaConta(){
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("conta invalida do catch");
        return;
      }
    },
    compraPremim(){
      alert("Conta apagada, assine para ter a calculadora completa");
      this.clearDisplay();
    },
  //
  clickButton(){
    document.addEventListener('click', (e) => {
      const el = e.target;

      if(el.classList.contains('btn-num')){
        this.btnToDisplay(el.innerText);
      }
      if (el.classList.contains('btn-clear')) {
        this.clearDisplay();
      }
      if (el.classList.contains('btn-deleta')) {
        this.deleteOne();
      }
      if (el.classList.contains('btn-equal')) {
        this.compraPremim();
      }
    });
  },
    btnToDisplay(valor){
  this.display.value += valor;
}
  };
  }


const calculadora = criaCalculadora();
calculadora.inicia();
