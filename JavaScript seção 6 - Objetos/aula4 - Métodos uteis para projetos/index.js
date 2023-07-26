/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

//Já vimos
Object.keys
Object.freeze
Object.defineProperty
Object.defineProperties
*/ 
const produto = {nome:'Caneca', preco: 1.8};

//copiando produto
const outracoisa = {... produto, tecido:'lã'};
outracoisa.nome = 'Camisa'
outracoisa.preco = 2.5

console.log(produto, outracoisa)