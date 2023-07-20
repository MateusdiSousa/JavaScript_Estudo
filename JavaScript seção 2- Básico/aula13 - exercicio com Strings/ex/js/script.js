const nome = window.prompt("Digite seu nome completo: ")

 //document.body.innerHTML = 'Mateus de Sousa';
 document.body.innerHTML += `O seu nome é: ${nome}<br />`
 document.body.innerHTML += `Seu nome tem ${nome.length} letras<br />`
 document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`
 document.body.innerHTML += `Qual é o primeiro índice da letra a no seu nome?  ${nome.indexOf("a")}<br />`
 document.body.innerHTML += `Qual é o último índice da letra a no seu nome?: ${nome.lastIndexOf("a")}<br />`
 document.body.innerHTML += `As ultimas 3 letras do seu nome são "${nome.slice(nome.length - 3 , nome.length)}"<br />`
 document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br />`
 document.body.innerHTML += `O seu nome com letras maiúculas: ${nome.toUpperCase()}<br />`
 document.body.innerHTML += `O seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`
 