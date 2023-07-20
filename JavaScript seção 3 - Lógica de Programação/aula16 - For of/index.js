const nome = ['Mateus','Cláudia','Sérgio','Henrique'];

//For clássico - Geralmente com interáveis (array ou strings)

//For in - Retorna o índice ou chave (strings, arrays ou objetos)

//For of - Retorna o valor em si (interáveis, arrays ou strings)

//For clássico
/*for(let i = 0; i<nome.length; i++){
    console.log(nome[i]);
}*/


//For in
/*for(let i in nome){
    console.log(nome[i]);
}*/

//No for of ao invés de pegar o index, pegamos o valor
for(let i of nome){
    console.log(i);
}