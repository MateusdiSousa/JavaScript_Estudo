function meuEscopo(){
    const form = document.querySelector('.form');
    const pessoas = [];
    /*form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1)
        */
        function recebeEventoForm(evento){
            evento.preventDefault();
            const nome = form.querySelector('.nome').value;
            const sobrenome = form.querySelector('.sobrenome').value;
            const peso = form.querySelector('.peso').value;
            const altura = form.querySelector('.altura').value;

            const pessoa = criarPessoa(nome, sobrenome, peso, altura);

            pessoas.push(pessoa);

            console.log(pessoas)
            document.getElementById('texto').innerHTML +=  `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
        }

        form.addEventListener('submit', recebeEventoForm)
    };


meuEscopo();



function criarPessoa(nome, sobrenome, peso, altura){
    return pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura:altura
    }
}        

