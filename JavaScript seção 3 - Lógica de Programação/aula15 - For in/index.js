//for in lê os indices da array ou chaves do obejtos

//exemplo1:
const frutas = ['maça', 'banana', 'pera', 'uva'];
for(let i in frutas){
    console.log(frutas[i])
}

//exemplo2:
const pessoa = {
    nome: 'Mateus',
    idade: 19,
    peso: 73,
    altura: 1.76
}

for(let key in pessoa){
            //acessando o valor de uma chave
    console.log(pessoa[key]);
}