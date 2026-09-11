// Dobrar os valores

const numeros = [1,4,5,9,12,44,25,6];

const numerosDobrados = numeros.map(valor => valor * 2);
console.log("Valos dobrados: ");
console.log(numerosDobrados);

// Para cada elemento:
// Retornar apenas uma string com o nome da pessoa
// Remover apenas a chave "nome" do objeto
// Adicionar uma chave id em cada objeto

const pessoas = [
{nome: 'Lucas', idade: 28},
{nome: 'Ana', idade: 30},
{nome: 'Maria', idade: 61},
{nome: 'Lurdes', idade: 12},
{nome: 'Henrique', idade: 52},
{nome: 'Victor', idade: 38},
{nome: 'Brenda', idade: 18}
];

const apenasNome = pessoas.map(obj => obj.nome);
console.log("Nome das pessoas do array:");
console.log(apenasNome);

const removeNome = pessoas.map(obj => ({idade: obj.idade}));
console.log("Removendo nomes: ");
console.log(removeNome);

const addID = pessoas.map(function(obj, indice){
  const newPessoa = {...obj};
  newPessoa.id = indice + 1;
  return newPessoa;
});
console.log("Adicionando id a pessoas sem alterar o array original: ");
console.log(addID);

