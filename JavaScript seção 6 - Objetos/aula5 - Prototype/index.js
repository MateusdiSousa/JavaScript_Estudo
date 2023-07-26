//Prototypes ou Protótipos

/* 
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para o protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro
*/

//Construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Cria um novo método para cada objeto novo criado, log diminui o desempenho
    //this.nomeCompleto = () => ` ORIGINAL: ${this.nome} ${this.sobrenome}`
}

//Um unico método para todos os objetos, maior desempenho
Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const p1 = new Pessoa('Mateus','Sousa')
const p2 = new Pessoa('Claudia','Braga')

console.dir(p1)
console.dir(p2)