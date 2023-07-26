// Produto -> aumento, desconto
// Camiseta = cor , caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(desconto){
    this.preco -= desconto
};

Produto.prototype.aumento = function(aumento){
    this.preco += aumento 
};

function Camiseta (nome, preco , cor) {
    // Heranaça dos atributos do Produto para camiseta
    Produto.call(this, nome, preco);
    this.cor = cor
}
//Passando os métodos do prototype do Produto para o objeto Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca (nome, preco, material, estoque) {
    //Herdando atributos do Produto
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque
        },
        set: function (valor) {
            estoque = valor
        }
    })
}

//Passando as funções do prototype de Produto para o objeto Caneca
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

//Craiando uma função aumento do próprio prototype de caneca
Caneca.prototype.aumento = function(aumento) {
    this.preco = this.preco + (this.preco * (aumento/100))
}

const caneca = new Caneca ('Canecão', 10, 'Porcelana', 20)
const camiseta = new Camiseta('Regata', 30, 'Branca');

camiseta.aumento(20);
caneca.aumento(50);
caneca.estoque = 12

console.log(camiseta);
console.log(caneca);