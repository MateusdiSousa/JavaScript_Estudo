/*try{
    console.log(naoExisto)
} catch(erro){
    console.log('naoExiste não existe');
    console.log(erro)
}*/

function soma (y, x){
    if(typeof x !== 'number' || typeof y !== 'number'){
        //lança um novo erro
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}
try{
    console.log(7,9)
    console.log(soma('10', 7))
} catch(erro){
    console.log(erro)
}
