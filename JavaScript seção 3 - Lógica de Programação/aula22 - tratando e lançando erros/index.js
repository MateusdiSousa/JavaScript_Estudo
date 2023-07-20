/*try{
    // É executado quando não há erros
    console.log(A)
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo');
    console.log('Fechei um arquivo');
} catch(erro){
    // É executado quando há erros
    console.log('Tratando um erro')
} finally {
    // Sempre é executado
    console.log('FINALLY: Eu sempre sou executado')
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de date');
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

try{
    const hora = new Date('09-06-2004 04:04:56')
    const data = retornaHora(22);
    console.log(data)
} catch(e){
    console.log(e)
} finally {
    console.log('tenha um bom dia!')
}
