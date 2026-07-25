// DECLARAÇÃO DE FUNÇÕES
//----------------------------------------------------------------------------
// Hoisting function
function falaOi(){
  console.log('Olá');
};
//chamada da função
falaOi();
//---------------------------------------------------------------------------
//Fist-Class Object
//Expression Function
const souUmDado = function(){
  console.log('Sou um Dado');
};
// chamada da função
souUmDado();
// função que recebe uma função e retorna a execussão da função parametro
function execFunc(funcao){
  funcao();
}
//---------------------------------------------------------------------------
// Arrow Function
const arrowFunc = () =>{
  console.log('Função Arrow2');
}
// chamada da função
arrowFunc();
//---------------------------------------------------------------------------
//Dentro de um Objeto
const objeto = {
  // vira um método do objeto2
  fala: function(){
    console.log('Comunica');
  }
}
//chamada do método
objeto.fala();
// pode ser feita dessa forma também
const objeto_2 = {
  grita(){
    console.log('Gritando!!!!!');
  }
}
//chamada do método
objeto_2.grita();



