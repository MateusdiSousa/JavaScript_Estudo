const nome = 'Mateus'; //String
const nome1 = "Mateus"; //String
const nome2 = `Mateus`; //String

const num1 = 10; //number
const num2 = 10.52; //number

let nomeALuno; //undefined = valor nulo -> Não aponta para local nenhum na memória;
const sobrenomeAluno = null; //Nulo -> Não aponta para local nenhum da memória;

const aprovado = true; //Boolean = true, false (lógico)


const a = [1, 2];
const b = a; //valor de referência na memória, então os dois pegam o mesmo local da memória;

console.log(a, b);