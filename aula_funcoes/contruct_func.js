function Pessoa(nome, sobrenome){
  //Atributos e métodos privados (const/let)
  let ID = 123;
  const fala = function () {
    console.log('Oi');
  };
  //Getter
  this.getID = function() {
    console.log(ID);
  };
  //Setter
  this.setID = function(novoID){
    ID = novoID;
  };
  //Atributos e métodos publicos (this)
  this.nome = nome;
  this.sobrenome = sobrenome;
  
  this.falaAlgo = () => {
    console.log('Algo');
  };
  
  this.falaLucas = function () {
    console.log('Lucas');
  };
}

const p1 = new Pessoa('Vitório', 'Dorneles');
const p2 = new Pessoa('Ana', 'Gauer');
p1.getID();
p1.setID(321);
p1.getID();
p1.falaLucas();
p1.falaAlgo();
