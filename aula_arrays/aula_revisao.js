// Declaração de array
const names = ['Lucas', 'Ana', 'Maria'];
const sobrenomes = new Array ('Albuquerque', 'Gauer', 'Dorneles');

// Remoção
delete names[1];
let removido = sobrenomes.pop(); // pop() salva o elemento removido
names.shift(); // shift() salva o elemento removido

console.log(names);
console.log(sobrenomes);
console.log(removido);

// Adição
names.push('Lurdes');
sobrenomes.unshift('Vitório');

console.log(names);
console.log(sobrenomes);

// remoção por slice();
const novo = names.slice(1,-1);

console.log(novo);

// String para Array
const name = "Maria Helena Dorneles";
const nameToArray = name.split(' ');

console.log(nameToArray);

// Array para String
const nameToString = ['Lurdes', 'Gauer'];
const newNameToString = nameToString.join(' ');

console.log(newNameToString);
