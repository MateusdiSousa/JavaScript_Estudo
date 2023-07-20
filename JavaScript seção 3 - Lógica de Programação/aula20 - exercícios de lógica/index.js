//Escreva uma função que recebe 2 números e retorne o maior deles

const maiorNumero = (num1 , num2) => num1 > num2 ? num1 : num2;


console.log(maiorNumero(9, 60));

//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (altura, largura) => largura > altura;

console.log(ePaisagem(9,12));

//Escreva uma função que recebe um numero e
//retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = retorna o próprio numero
//checar se o número é realmente um número
//use a função com número de 0 a 100

function FizzBuzz(num){
    if (isNaN(num)){ return 'Não é um número' }
    if (num % 3 === 0 || num % 5 === 0){
        let palavra = '';
        if (num % 3 === 0){ palavra += 'Fizz'; }
        if (num % 5 === 0){ palavra +='Buzz'; }
        return palavra;
    }
    return num
}

for( let i = 0; i <= 100; i++){
    console.log(FizzBuzz(i));
}