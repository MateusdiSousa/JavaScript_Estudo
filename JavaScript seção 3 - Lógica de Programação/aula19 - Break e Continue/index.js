const numeros = [1,2,3,4,5,6,7,8,9];

for( let numero of numeros){
    if(numero === 3){
        //sempre que quiser pular uma interação usa-se o continue
        continue;
    }

    if(numero === 7){
        //parar a execução do laço
        console.log('7 encontrado, Laço quebrado')
        break;
    }
    console.log(numero);
}