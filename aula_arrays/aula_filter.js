// retornar números maiores que 10

const numeros = [2,3,5,67,34,12,55,8,9,7];

function valoresMaioresQueDez(valor) {
  if (valor > 10) {
    return true;
  }else {
    return false;
  }
}

const numerosMaioresQueDez = numeros.filter(valoresMaioresQueDez);
console.log("Numeros maiores que Dez: ");
console.log(numerosMaioresQueDez);

// retornar as pessoas que tem o nome mais 5 letras ou mais
// retornar as pessoas com mais de 50 anos 
// retornar as pessoas com nome final 'a'

const pessoas = [
  {nome: 'Lucas', idade: 28},
  {nome: 'Ana', idade: 30},
  {nome: 'Maria', idade: 48},
  {nome: 'Lurdes', idade: 58},
  {nome: 'Guilherme', idade: 18},
  {nome: 'Brenda', idade: 15},
  {nome: 'Josiclenes', idade: 60},
];

const pessoasComMaioresNomes = pessoas.filter(function(obj){
  return obj.nome.length >= 5;
});
console.log("Maiores nomes: ");
console.log(pessoasComMaioresNomes);

const pessoasComMaiorIdade = pessoas.filter(obj => obj.idade > 50);
console.log("Idades acima de 50: "); 
console.log(pessoasComMaiorIdade);

const pessoasComFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log("Pessoas com final em A:");
console.log(pessoasComFinalA);
