//Filter, map, reduce

//Filter -> Sempre vai retornar um array, com a mesma quantidde de elementos ou menos.

//retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//método tradicional
/*let maiores10 = []
for (let i of numeros) {
    if (i > 10) {
        maiores10.splice(maiores10.length, 0, i)
    }
}*/

// método com filter
/*
const num2 = numeros.filter((valor) => valor > 10);
console.log(num2)
*/

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:53},
    {nome: 'Wallace', idade:47},
]

const pessoasFiltradas = pessoas.filter((pessoa) =>{
    return pessoa.nome.length >= 5 && pessoa.idade >50 && pessoa.nome.endsWith('a')
})

console.log(pessoasFiltradas)