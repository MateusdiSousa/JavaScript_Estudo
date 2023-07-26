/*const pessoa = {
nome: 'Mateus',
sobrenome:'Sousa',
idade: 19
};
const chave = 'nome'
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);
console.log(pessoa.idade)*/

//construtor

/*const p1 = new Object();
p1.nome = 'Mateus';
p1.sobrenome = 'Sousa';
*/
//literal

const p2 = {
    nome:'Mateus',
    sobrenome:'Sousa',
    idade: 19,
    //método
    falarNome: function(){
        return `Meu nome é ${this.nome} ${this.sobrenome}`;
    },

    getNascimento: function(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
}
//deletar chave
//delete p2.sobrenome

//console.log(p2.falarNome())
//console.log(p2.getNascimento())

/*for(let chave in p2){
    console.log(chave)
}*/

// FACTORY functions / Constructor functions / Classes

//Factory
function criarPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        //método que finge ser um atributo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p3 = criarPessoa('Mateus', 'Sousa')
//console.log(p3.nomeCompleto)

//Constructor
function Pessoa(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome, 
    this.idade = idade,
    this.falar = () => `Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`

    //Trava mudanças no objeto
    Object.freeze(this)
}

const p4 = new Pessoa('Cláudia', 'Carlos', 40)
const p5 = new Pessoa('Mateus', 'Sousa', 19)
p4.idade = 30
console.log(p4.falar())
console.log(p5.falar())