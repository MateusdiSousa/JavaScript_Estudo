let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const coringa = "";

/*coringa = varA;
varA = varB;
varB = varC;
varC = coringa;*/

//ou 

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB,varC);