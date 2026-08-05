function criaCalculadora() {
  return {
    //Atributos  
    display: document.querySelector('.display'), // esse eu não entendi muito bem
  //Métodos
  inicia: function (){ // o inicia precisa ser chamado para o programa existir, ele faz funcionar os clicks e keys
    this.clickButton();
    this.pessEnter();
  },
  //
  pessEnter(){ // para o enter do teclado funcionar na "borda de subida"
    this.display.addEventListener('keyup', k =>{
      if (k.key === 'Enter'){
        this.relizaConta();
      }
    });
  },

  clearDisplay(){ //limpo o display
  this.display.value = "";
},
  deleteOne(){ //aqui eu deleto o ultimo valor inserido na calculadora
      this.display.value = this.display.value.slice(0, -1);
      
    },
  relizaConta(){ //essa é para o = e o enter fazer a conta
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
    compraPremim(){ //essa aqui foi uma brincadeira para testar conceitos mesmo
      alert("Conta apagada, assine para ter a calculadora completa");
      this.clearDisplay();
    },
  // essa função precisa ocorrer para os clicks do mouse acontecerem
    // por exemplo: clicar no C limpa o display
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
