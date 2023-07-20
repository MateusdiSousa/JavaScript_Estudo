//A função construtora -> objetos;
//A função frabrica -> objetos;
        // função construtora começa com a letra maiuscula e tem a palavra new
//Construtora -> Pessoa (new);

function Pessoa(nome, sobrenome){
    //Atributos privados
    const id = 123456;

    const metodoInterno = () =>{
        
    };

    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.apresentação = () =>{
        console.log(`Olá meu nome é ${this.nome+' '+this.sobrenome}`)
    }
};

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Mateus', 'Sousa');
p2.apresentação();