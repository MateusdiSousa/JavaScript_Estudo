//IIFE -> Immediately invoked function expression

//protegendo o escopo do globaldas variáveis das funções
(function(idade, peso, altura){

    const sobrenome = 'Sousa';
    function criaNome(nome){
        return nome + " "+ sobrenome; 
    }

    function falaNome(){
        console.log(criaNome('Mateus'));
    }

    falaNome();
    console.log(idade, peso, altura)

})(19, 74, 1.76);
