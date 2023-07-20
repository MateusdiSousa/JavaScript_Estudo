/*
Aritméticos 
+ adição / Concatenação

-  = subtração
/  = divisão 
*  = multiplicação 
** = potenciação
%  = resto da divisão
// = divisão inteira

*/ 

const n1 = 5;
const n2 = 10;
console.log(n2*(n1 + n2) + n1)

//incremento = ++
//decremento = --

let contador = 0;
contador++;
contador--;
//Operadores de atribuição
const passo = 2;
contador += passo; //contador = contador + passo;
contador += passo;
contador *= passo;

console.log(contador);

//Conversão de String para number

let num1 = 10;
let num2 = parseInt('5');
console.log(num1 + num2);
num2 = parseFloat('5.24');
console.log(num1 + num2);
num2 = Number("55");
console.log(num1 + num2);