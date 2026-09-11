// soma todos os números

const numeros = [1,23,4,66,7,8,23];

const somador = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador
}, 0)
console.log("Soma dos valores do array: ");
console.log(somador);

// Retorne a pessoa mais velha
// Retorna a quantidade de livros na biblioteca
const pessoas = [
  {nome: 'Lucas', idade: 28},
  {nome: 'Maria', idade: 48},
  {nome: 'Ana', idade: 30},
  {nome: 'Lurdes', idade: 58},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade >= valor.idade) { return acumulador;}
  return valor;
},0)

console.log("Pessoa mais velha: ");
console.log(pessoaMaisVelha);

const bilbioteca = ['Biblia', 'Código limpo', 'Entendendo Algoritmos', 'Harry Potter e a pedra filosofal'];

const totalLivros = bilbioteca.reduce((acumulador, livros) => {
  return acumulador += 1;
},0);

console.log("Quantidade de livros na biblitoeca: ");
console.log(totalLivros);
