// return
// retorna um valor
// termina a função

/*function soma(a, b){
    return a + b;
}

console.log(soma(3, 8));*/

function criaPessoa(nome, sobrenome){
    return {nome,sobrenome};
}

const p1 = criaPessoa("Mateus", 'Sousa');
const p2 = {
    nome: 'Sergio',
    sobrenome: 'Sousa'
}

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));