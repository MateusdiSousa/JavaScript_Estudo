//const tresHoras = 60 * 60 * 3 * 1000;
/*const data = new Date('2004-06-09 20:08:52' );
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()+1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay()); // 0 - domingo, 6 - Sábado
console.log(data.toString());

*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)