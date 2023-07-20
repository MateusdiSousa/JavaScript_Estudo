//Cloasures

function retornaFuncao(nome){
    //escopo léxico
    return function () {
        //cloasures
        return nome;
    };
}

const funcao = retornaFuncao('Sergio'); //ela irá fechar o cloasure com o nome igual 'Sergio'
const funcao2 = retornaFuncao('Mateus') //já aqui irá fechar o cloasure com o nome igual a Mateus
console.log(funcao());
console.log(funcao2());


//escopo global