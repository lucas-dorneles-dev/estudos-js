// Retorno de função utilizando objeto
function criaPessoa(nome, sobrenome) {
  //return {nome: nome, sobrenome: sobrenome};
  return {nome, sobrenome};
}
// utilizando a função criaPessoa
const p1 = criaPessoa('Lucas', 'Albuquerque');
// atribuindo de fomra normal
const p2 = {nome:'Ana', sobrenome:'Gauer'};

const p3 = criaPessoa('Maria', 'Dorneles');

console.log(p1);
console.log(p2);
console.log(p3.sobrenome, p3.nome);

// Retorno de função utilizando uma função dentro da outra
function criaMultiuplicador(multiplicador){
  //aqui acontece a multiplicação
  function multiplicacao(numero){
    return numero * multiplicador;
  }
  return multiplicacao;
}

// Utilizando a função direto no return
function criaMultiuplicador2(multiplicador){
  return function(numero){
    return numero * multiplicador;
  }
}
// atribui o multiplicador
const duplica = criaMultiuplicador(2);
const triplica = criaMultiuplicador(3);
const quadriplica = criaMultiuplicador(4);

// atribui valor a ser multiplicado
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//uitilizando a segunda função

const duplica2 = criaMultiuplicador(2);
const triplica2 = criaMultiuplicador(3);
const quadriplica2 = criaMultiuplicador(4);
console.log(duplica2(3));
console.log(triplica2(3));
console.log(quadriplica2(3));
