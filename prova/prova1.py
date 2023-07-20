def Desafio(frase):
    palavras = frase.split()
    palavraMaiorRepeticao = ""
    maximoRepticoes = 0

    for palavra in palavras:
        repeticoes = 0
        for letra in set(palavra):
            if palavra.count(letra)>1:
                repeticoes = repeticoes+1

        if repeticoes > maximoRepticoes:
            maximoRepticoes = repeticoes
            palavraMaiorRepeticao = palavra
    
    if maximoRepticoes == 0:
        return -1
    return palavraMaiorRepeticao

                

print(Desafio("eu desgoti the leavi"))

