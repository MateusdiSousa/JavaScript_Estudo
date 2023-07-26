// defineProperty - defineProperties

/*function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
                    //   objeto, chave
    Object.defineProperty(this,'estoque', {

        //Propriedades do objeto
        
        enumerable: true, //mostra chave
        value: estoque,  // valor 
        writable: false, // pode alterar o valor
        configurable: false // reconfigurar as propriedades
})
}*/

function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },

        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 3000
console.log(p1)
