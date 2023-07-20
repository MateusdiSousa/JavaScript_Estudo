const verdadeira = true;

//Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = 'Luiz'
var nome2 = 'Luiz'

var nome2 = 'Otávio' // redeclarada

if (verdadeira) {
    let nome = 'Ótavio' // criada uma nova variável
    console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Outra coisa';
        console.log(nome, nome2);
    }
}