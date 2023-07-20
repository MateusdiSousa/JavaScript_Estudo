/*const numeros = [115, 2876, 653, 479, 5, 6, 7, 8, 9];

-... valor para pegar o restante do array

const [primeiroNum, segundoNum, ...resto] = numeros;
console.log(primeiroNum, segundoNum);
console.log(resto);*/

const numeros = [115, 2876, 3000, 479, 500, 600, 700, 800, 900];
//pular índices de um array
const[um, , tres, ,cinco, , sete, , nove] = numeros;
console.log(um, tres, cinco, sete,);