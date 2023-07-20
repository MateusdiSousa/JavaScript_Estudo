function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12 : false
    });   
}

//setar um intervalo de tempo para ralizar uma função
const timer = setInterval(function() {
    console.log(mostrarHora())
}, /*milisegundos*/1000);

//setTimeout só realiza uma vez.
//um exemplo é usar para parar um timer
setTimeout(
    function(){
        clearInterval(timer);
    }, 1000 * 3
)

setTimeout(
    function(){
        console.log('Olá mundo!')
    }, 1000 * 6
)
