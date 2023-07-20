const input = document.querySelector('.input-nova-tarefa');
const button = document.querySelector('.btn-add-tarefa');
let lista = document.querySelector('.lista-tarefas')

button.addEventListener('click',function(e){
    const tarefa = input.value;
    AdicionarTarefa(tarefa);
});

input.addEventListener('keypress', function(e){
    if(e.keyCode ===13){
        AdicionarTarefa(input.value);
        input.value = '';
    }
})

document.addEventListener('click', function(e){
    const evento = e.target;
    if(evento.classList.contains('apagar')){
        evento.parentElement.remove();
        salvarTarefas();
    }
})



function AdicionarTarefa(tarefa){
    let li = criarLi(tarefa);
    let button = criarButtonApagar(tarefa);

    li.appendChild(button)
    lista.appendChild(li);
    salvarTarefas();
}

function criarLi(tarefa){
    const li = document.createElement('li');
    li.innerText = tarefa
    li.style.marginTop = '5px';
    li.innerText += " "

    return li;
}

function criarButtonApagar(tarefa){
    const btnDelete = document.createElement('button');
    btnDelete.style.marginLeft = '5px'
    btnDelete.innerText = 'Apagar';
    btnDelete.setAttribute('class',`apagar`);
    btnDelete.setAttribute('title', 'Apagar esta tarefa');

    return btnDelete;
}

function salvarTarefas(){
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function AdicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaTarefas){
        AdicionarTarefa(tarefa);
    }
}
AdicionarTarefasSalvas();