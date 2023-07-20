//Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de .......

const nome = 'Mateus';
const idade = 18;
const peso = 72;
const alturaMetro = 1.76;
let imc;
imc = peso/(alturaMetro * alturaMetro);
let anoNascimento;
anoNascimento = 2023 - idade;
// use a ` String com ${nome da variavel} variavél`
console.log(`${nome} nasceu em ${anoNascimento} e tem ${idade} anos e pesa ${peso} kg e tem ${alturaMetro} e seu IMC é de ${imc}`);