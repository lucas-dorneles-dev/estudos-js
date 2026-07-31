//A principal característica de uma Factory Function é que ela é uma
//função normal que, ao ser executada, retorna um objeto literal 
//(usando a palavra return { ... }).
//Ela tembém não precisa usar o new para criar o objeto, no caso
//de um construtor seria necessario
//exemplo: const p1 = new Pessoa('Lucas', 'Albuquerque', 80, 1.83);
function criaPessoa(nome, sobrenome, peso, altura) {
  return{
    nome,
    sobrenome,
    altura: altura,
    peso: peso,
// Métodos escrito de forma verbosa
    fala: function(assunto) {
      return `teste ${this.nome} ${this.sobrenome}`;
    },
// Métodos de forma não verbosa
    imc(){
      const indice = this.peso / (this.altura **2);
      return indice.toFixed(2); 
    }
  };
}

const p1 = criaPessoa('Lucas', 'Albuquerque', 80, 1.83);
console.log(p1.peso);
console.log(p1.altura);

console.log(p1.fala());
console.log(p1.imc());
console.log(p1.nome);
console.log(p1.sobrenome);


function criaPessoa2(nome, sobrenome, peso, altura) {
  return{
    nome,
    sobrenome,
    altura: altura,
    peso: peso,
// Métodos SETTERS
    set nomeCompleto(nomeComp){
      nomeComp = nomeComp.split(' ');
      this.nome = nomeComp.shift();
      this.sobrenome = nomeComp.join(' ');
    },
// Métodos GETTERS - quando utilizado o get como tipo do método 
// ele vira um atributo quando for chamado então não utiliza mais parenteses
// exemplo: p2.imc() vira-> p2.imc
    get nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  },
// Métodos de forma não verbosa
    get imc(){
      const indice = this.peso / (this.altura **2);
      return indice.toFixed(2); 
    },
    // Métodos escrito de forma verbosa
    fala: function() {
        return `teste 2 ${this.nome} ${this.sobrenome}`;
      }
  };
}

const p2 = criaPessoa2('Vitório', 'Dorneles', 83, 1.83);
console.log(p2.peso);
console.log(p2.altura);
console.log(p2.nomeCompleto);
console.log(p2.fala());
console.log(p2.imc);
console.log(p2.nome);
console.log(p2.sobrenome);
