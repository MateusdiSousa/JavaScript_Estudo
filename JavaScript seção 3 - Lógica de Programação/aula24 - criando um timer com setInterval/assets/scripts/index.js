const relogio = document.querySelector('.relogio');

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('iniciar')){ 
        relogio.classList.remove('pausado')
        start();
        }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado')
        }

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.classList.remove('pausado')
        segundos = 0;
        relogio.innerHTML = '00:00:00'
        }
    })

let segundos = 0

//transforma os segundos em tempo
function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

//inicia o relógio
function start() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos)
    }, 1000);
}


