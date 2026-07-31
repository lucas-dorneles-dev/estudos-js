// IIFE Immediately Invoked Function Expression (Expressão de Função Imediatamente Invocada)
//  É uma função em JavaScript que roda no mesmo segundo em que é criada, sem precisar
//  de uma chamada separada pelo nome.

// sem parametros
(function(){
  const sobrenome = 'Albuquerque';
  function criaNome(nome){
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('Lucas'));
  }
  falaNome();
})();

// com parametros
(function (idade){
  const sobrenome = 'Dorneles';
  function criaNome(nome){
    return nome + ' ' + sobrenome;
  }
  function falaNome(){
    console.log(criaNome('Vitório'));
  }
  falaNome();
  console.log('Idade: ' + idade);
})(26);
