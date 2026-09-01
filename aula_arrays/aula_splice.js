const nomes = ['Lucas', 'Ana', 'Maria', 'Lurdes'];

// sintax splice(indiceDoElemento, numeroDeElementosRemovidos, adicaoElemento1, adicaoElemento2, adicaoElemento3);
// ele retorna os valores removidos como o pop()
// remoção de elementos
// a partir do elemento de indice 1 (Ana), removo 2 elementos
const removidos = nomes.splice(1,2);

console.log(nomes, removidos);

// removendo e adicionando
// a partir do elemento 2 (Maria), remove ele e adiciona Vitório no lugar
// obs: para adicionar no final basta utilizar array.lenght e no começo é só passar o indice 0
const removAdd = nomes.splice(2,1,'Vitório');

console.log(nomes, removAdd);

