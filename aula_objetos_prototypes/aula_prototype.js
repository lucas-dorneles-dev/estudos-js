function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = ()=> 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
}



// Criação e atribuição dos objetos
const pessoa1 = new Pessoa('Lucas', 'Albuquerque');
const pessoa2 = new Pessoa('Ana', 'Gauer');

console.dir(pessoa1);
console.dir(pessoa2);
//=======================================================
const p1 = new Produto('Camiseta', 50);
p1.desconto(50);
console.log(p1);

const p2 = {
  nome: 'Caneca',
  preco: 20
}

Object.setPrototypeOf(p2,Produto.prototype);
p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype,{
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 100
  },
});
p3.aumento(10);
console.log(p3);
