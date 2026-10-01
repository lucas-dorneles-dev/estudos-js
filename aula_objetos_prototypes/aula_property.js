function Produto(nome, preco, estoque, id, custo) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque',{
    enumerable: true, // mostra chave
    value: estoque, // atribui valor
    writable: true, // pode alterar 
    configurable: true // configuravel
  });

  Object.defineProperties(this,{
    id: {
      enumerable: false, // mostra chave
      value: id, // atribui valor
      writable: true, // pode alterar 
      configurable: true // configuravel
    },
    custo: {
      enumerable: true, // mostra chave
      value: custo, // atribui valor
      writable: false, // pode alterar 
      configurable: true // configuravel
    }
  });
  
}

function Funcionario(nome, quantidadeVendas, salario){
  this.nome = nome;
  
  let salarioAtual = salario;

  Object.defineProperty(this, 'salario',{
    enumerable: true,
    configurable: true,

    get: function(){
      return salarioAtual;
    },
    set: function(value){
      if(typeof value !== 'number'){
        throw new TypeError('Uma mensagem de erro');
      }
      salarioAtual = value;
    }
  }),

  Object.defineProperty(this,'quantidadeVendas',{
    enumerable: true,
    configurable: true,
  
    get: function(){
      return quantidadeVendas;
    },
    set: function(valor){
      this.quantidadeVendas;
    }
  });
}

const func = new Funcionario('Lucas', 14, 200);
console.log(func);
console.log(func.quantidadeVendas);
func.nome = 'Ana';
console.log(func.nome);
console.log(func.salario);
func.salario = 250;
console.log(func.salario);

console.log("==============================================");
const p1 = new Produto('Camiseta', 20, 3, 001, 10);
p1.custo = 40; // custo vai manter 10
// o id não aparece
console.log(p1);
