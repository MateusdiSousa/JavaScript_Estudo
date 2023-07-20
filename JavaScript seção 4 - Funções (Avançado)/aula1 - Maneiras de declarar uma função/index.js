// Declaração de função (Function hoisting), não faz diferença vc chamar a função antes ou depois de declarar ela no código

falaOi();

function falaOi(){
    console.log('Oie');
}

//First-class objects (Objetos de primeira classe)
//Function expression

const souUmdado = function(){
    console.log('Sou um dado')
}

//função que consegue receber uma função como um parâmetro
function executarFuncao(funcao){
    funcao();
}

executarFuncao(souUmdado)

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma função arrow')
}

funcaoArrow();

/*const time = setInterval(function(){
    funcaoArrow();
}, 1000);

setTimeout(function(){
    clearInterval(time);
}, 1000*5);*/

//Dentro de um objeto

const obj = {
    nome: 'Mateus',
    falar(){
        console.log(`Oie eu sou ${obj.nome}`);
    }
}

obj.falar();