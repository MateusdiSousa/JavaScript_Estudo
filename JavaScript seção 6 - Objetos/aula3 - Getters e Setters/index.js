function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
           if(typeof valor === 'number'){
                estoquePrivado = valor
           }
        }
    });
}

//const p1 = new Produto('Camisa', 20, 3);
//p1.estoque = 9;
//console.log(p1.estoque)

function criarProduto(nome){
    return{
        get nome(){
            return nome;
        },

        set nome(valor){
            if(typeof valor === 'string') nome = valor
        }
    }
}

const p2 = criarProduto('Camisa')
p2.nome = 'Relógio'
console.log(p2)