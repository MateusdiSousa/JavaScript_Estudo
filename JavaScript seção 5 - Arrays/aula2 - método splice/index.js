const nomes = ['Maria','Mateus','Mariana','Mel','Julia'];

// nome.splice(índice que começa,numero de deletes, elem1, elem2, elem3)

//removendo o último elemento / pop()
//nomes.splice(-1,1)

//removendo o primeiro elemento / shift()
//nomes.splice(0,1)

//cria um array de removidos      Number.MAX_VALUE = Máximo que conseguir
const removidos = nomes.splice(-2,Number.MAX_VALUE)

//adicionando elementos no último índice / push
nomes.splice(nomes.length,0,'Otávio','José','Fernando')
console.log(nomes)
console.log(removidos)
