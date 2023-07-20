/*
Primitivos (imutáveis) - string, number, boolean, undefined, null  (bugint, symbol)

Referencia - array, object, function (aponta para o mesmo lugar na memória)
*/

//a letra b receberá o valor de a
let a = 2;
let b = a;

console.log(a, b)

a = 3;

console.log(a, b)

// a letra d receberá o local que o valor de c está na memória, ou seja, se o valor de c mudar, o valor de d também mudará e vice-versa
let c = [4,8,6,3]
let d = c;

console.log(c, d)