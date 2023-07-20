const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Sousa',
    idade : 19,
    endereco: {
        rua: 'Dr Domingos',
        numero: 420
    }
}

//Atribuição via desestruturação

const {nome , sobrenome, endereco: {rua, numero}} = pessoa;
console.log(nome)