
//a palavra function possui uma variável especial que sustenta todos os argumentos chamada de arguments
function func(a,b,c,d,e,f) {
    let total = 0.
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(a,b,c,d,e,f)
}

function funcao(a, b = 6, c = 4) {
    console.log(a + b + c);
}

//funcao(2, undefined , 10);

const conta = (operador , acumulador, ...numeros) => {
    for( let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('+', 3, 6, 21, 5)