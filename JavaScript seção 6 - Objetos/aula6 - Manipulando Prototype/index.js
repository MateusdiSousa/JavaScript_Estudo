/* new Object -> Object.prototype 
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveB) */
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100))
}

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
}
const p1 = new Produto('Camisa', 100);
console.log(p1.preco);
p1.desconto(19)
p1.aumento(42)
console.log(p1.preco)

const p2 = {
    nome: 'Caneca',
    preco: 15
};

//Setando o prototype de p1 para p2, assim p2 herdará as funções de p1
Object.setPrototypeOf(p2,p1)

p2.desconto(10)
console.log(p2.preco)