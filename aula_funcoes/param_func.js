//Funções com arguments pode ser
//ATENÇÃO: arguments não podem ser utilizados em arrow function, as demais cisas pode
//chamada assim -> console.log(arguments);
function funcao() {
  let total = 0;
  for(let argumento of arguments){
    total += argumento;
  }
  console.log(total);
}
funcao(1,2,3);

//Atribuição de valores para argumentos não recebidos
//Aqui os valores b, c quando não recebidos são atribuidos os valores 2 e 3 respectivamente
function soma(a,b = 2, c = 3){
  console.log(a,b,c);
}
// se for pular um parametro utilizar undefined
soma(3,undefined,4);

//Atribuição via desestruturação
function info({nome, sobrenome, idade}){
  console.log(nome, sobrenome,idade);
}
//também pode ser atribuido como objeto
let obj_pessoa = {nome: 'Ana', sobrenome: 'Gauer', idade: 30};
info({nome:'Lucas', sobrenome:'Albuquerque', idade: 26});
info(obj_pessoa);

//também pode ser atribuido como array
function info2([valor1,valor2,valor3]){
  console.log(valor1, valor2, valor3);
}

info2(['Maria','Helena', 46]);

//utilizando rest operator, lembrando que ele deve sempre ser colocado como último no final
function calculadora(operador, acumulador,...numeros){
  for(let numero of numeros){
    if (operador === '+') {
      acumulador += numero;
    }
    if (operador === '-') {
      acumulador -= numero;
    }
    if (operador === '/') {
      acumulador /= numero;
    }
    if (operador === '*') {
      acumulador *= numero;
    }
  }
  console.log(acumulador);
}

calculadora('+', 0, 1,2,3,4);

//teste de calculadora com arrow function

let arrow_calculadora = (operador, acumulador, ...numeros)=>{
  for (let numero of numeros){
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

calculadora('-', 5, 1,2,3,4);
