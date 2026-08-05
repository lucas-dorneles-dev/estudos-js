function criaCalculadora() {
  return {
    //Atributos  
    display: document.querySelector('.display'),
    //Métodos
    inicia: function (){
    this.clickButton();
    },
    
    clickButton(){
    document.addEventListener('click', (e) => {
      const el = e.target;

      if(el.classList.contains('btn-num')){
        this.btnToDisplay(el.innerText);
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
