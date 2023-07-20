function meuEscopo(elementos) {
    const container = document.querySelector('.container');
    const div = document.createElement("div");
    container.appendChild(div);

    for (let i = 0; i < elementos.length; i++) {
        let {tag, texto} = elementos[i];
        var tagHtml = criarTag(tag);
        tagHtml.innerText = texto;
        div.appendChild(tagHtml);
    }

}

function criarTag(text){
    return document.createElement(text);
}


const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

meuEscopo(elementos);

