
//querySelectorAll consegue pegar todos o elementos, sendo ele uma tag ou uma classe
const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll("p");

//pegando todo o css computado no body
const estiloBody = getComputedStyle(document.body);
//pegando a cor do background do body
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for( let i of ps){
    //alterando o style das tags 'p'
    i.style.backgroundColor = backgroundColorBody; 
    i.style.color = '#ffff'
    i.style.padding = '10px'
    i.style.borderRadius = '10px'
}