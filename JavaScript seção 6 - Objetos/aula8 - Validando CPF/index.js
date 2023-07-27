// 705.484.450-52 070.987.720-03

/*
7X  0X  5X  4X  8X  4X  4X  5X  0X
10   9   8   7   6   5   4   3   2
==================================
70   0  40  28  48  20  16  15   0 = 237

11 - (237 % 11) = 5 (PRIMEIRO DIGITO)
Se o digito for maior que 9, consideramos 0.

7X  0X  5X   4X  8X  4X  4X  5X  0X  5X
11  10  9    8   7   6   5   4   3   2
=======================================
77  0   45   32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Segundo digito)
*/
let myFunc = num => Number(num);

const validarCPF = (cpf) => {
    const comparador = []
    const arrayCpf = Array.from(String(cpf), myFunc);
    let cont = 0
    let mult = 10
    let i = 10
    for(let x of arrayCpf){
        cont = cont + (i * x)
        i -= 1
        comparador.push(x)
        if(i == 1) break
    }
    comparador.push(primeiroDigito(cont));

    cont = 0;
    i = 11
    for(let x of arrayCpf){
        cont = cont + (i * x)
        i -= 1
        if(i == 1) break
    }
    comparador.push(primeiroDigito(cont))
    return JSON.stringify(comparador) == JSON.stringify(arrayCpf)
}

const primeiroDigito = (cont) =>{
    const dig = 11 - (cont % 11)
    if (dig > 9) return 0
    return dig
}

console.log(validarCPF(51274771811))