/*const pessoa1 = {
    nome: 'Mateus',
    idade: 19,
    peso: 73,
    altura: 1.76
};*/

//função que cria objetos
function criarPessoa(nome, idade, peso, altura){
    pessoa = {
        nome,
        idade,
        peso,
        altura,

        //criando método fala
        fala(){
            return `Meu nome é ${this.nome} e tenho ${this.idade}`
        }
    }
    return pessoa;
}

const mateus = criarPessoa('Mateus', 19, 74, 1.76);
const claudia = criarPessoa('Claudia', 40, 56,1.56)
          //chamando o método fala
console.log(mateus.fala());
console.log(claudia.fala())