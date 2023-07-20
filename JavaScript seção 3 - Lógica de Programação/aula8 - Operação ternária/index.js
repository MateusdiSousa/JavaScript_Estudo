// condição ? 'valor para verdadeiro' : 'Valor para falso' :

const pontuacaoUsuario = 1099;
const nivelUsuario = pontuacaoUsuario >=1000 ?'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario);


const corUser = null;
const corPadrao = corUser || 'Preta';

console.log(corPadrao);