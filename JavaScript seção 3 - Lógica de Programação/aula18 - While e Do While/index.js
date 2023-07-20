let i = 0;

//declaramos o contador primeiro e depois utilizamos o while para condição


/*exemplo 1:
    while(i <= 10){
        console.log(i);
        //lembrar de sempre incrementar o contador no final do while para não fazer um loop infinito
        i++;
    }*/

//Exemplo 2

/*
        const nome = 'Mateus'
        while(i < nome.length){
            console.log(nome[i])
            i++;
        }
*/

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 20);

//checa a condição antes de executar o código
while ( rand !== 10){
    console.log(rand);
    rand = random(1,20);
}
console.log("=========================")
//Executa o código depois checa a função
do {
    console.log(rand);
    rand = random(1,20)
} while(rand !==5);