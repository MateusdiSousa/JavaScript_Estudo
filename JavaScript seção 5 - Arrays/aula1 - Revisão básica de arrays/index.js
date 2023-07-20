//                0         1       2
//const nomes = ['Mateus','Sousa','Raimundo', 'Rosana','João']
//const novo = nomes
//novo.pop()   //tira o ultimo item da array
//funciona do mesmo jeito
//const nomes = new Array('Mateus','Sousa','Raimundo')
//const novo = [...nomes] //Agora o que eu fao na variavel novo não afeta o nomes
//const removido = novo.pop() //o itemm removido tá salvo na variável pop
//const removido = novo.shift() // remove o index 0
//nomes.push('Alita')//adiciona o item na array
//console.log(novo, removido)
//console.log(nomes.length)


//const novo = nomes.slice(1,-1) //fatia a array de acordo com o index
//console.log(novo)

//transformar uma string em array
/*const nome = 'Claúdia de Carlos Braga Secco';
const nomes = nome.split(' ')
console.log(nomes)*/


//transformar uma array em uma string
const nomes = ['Claúdia', 'Carlos','Braga','Secco']
//junta a strings da lista e o parÂmetro é a forma de separação 
const nome = nomes.join(' ');
console.log(nome);
