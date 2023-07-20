//Reduce -> REDUZIR O ARRAY A UM ELEMENTO

//Some todos os números (reduce)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce((acumulador, valor) => acumulador + valor, 0)

console.log(total)

//Retorne um array com os valores pares (Reduce)

const pares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 == 0 ) acumulador.push(valor)
    return acumulador
},[] )

console.log(pares)

//retorne a pessoa mais velha 
const pessoas = [
    {nome: 'Luiz', idade:22},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:15},
    {nome: 'Letícia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
    {nome: 'Mateus', idade:19}
]

const velho = pessoas.reduce(function(acumulador, valor){
    if(valor.idade > acumulador.idade) acumulador = valor
    return acumulador
}, {nome:'', idade: 0})

console.log(velho)