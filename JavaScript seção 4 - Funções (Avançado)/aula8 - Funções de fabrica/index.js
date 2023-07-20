//factory function (Função de fábrica)
//Constructor Function (função construtora)
function criarPessoa(nome, sobrenome, peso, altura){
    return {
        nome, 
        sobrenome,
        peso,
        altura,

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(text){
           text = text.split(' ');
           console.log(text)
           this.nome = text.shift();
           this.sobrenome = text.join(' ');
          
        },

        //método
        fala(assunto){
            return `${nome} está falando sobre ${this.peso}.`
        },

        imc(){
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2)
        }
    }
}

const p1 = criarPessoa('Mateus', 'Sousa', 74, 1.76);
const p2 = criarPessoa('Cláudia', 'Braga', 55, 1.56);
const p3 = criarPessoa('Alicea', 'Amano', 60, 1.65);

p3.nomeCompleto = 'Carlos Eduardo';

console.log(p1.imc());
console.log(p2.imc());
console.log(p3.imc());