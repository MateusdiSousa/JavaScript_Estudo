//Dobre o numeros
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobrados = numeros.map(function(valor){
    return `${valor} * 2 = ${valor*2} `
})

//console.log(numerosDobrados)

//  Para cada elemento:
// Retorne apenasuma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione a chave id para cada objeto

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Letícia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
    {nome: 'Mateus', idade:19}
]

const nomePessoa = pessoas.map((pessoa) => pessoa.nome);
//console.log(nomePessoa)

const idades = pessoas.map((pessoa) => ({idade: pessoa.idade}));
//console.log(idades)

const pessoasId = pessoas.map((pessoa, ind) => {
    const newObj = {... pessoa}
    newObj.id = ind + 1;
    return newObj;
})
console.log(pessoasId)