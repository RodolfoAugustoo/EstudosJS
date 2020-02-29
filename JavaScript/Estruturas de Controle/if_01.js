function boaNoticia(nota) {
    if (nota >= 7)
        console.log('Aprovado!')
}

boaNoticia(9)

function verdadeiro(valor){
    if(valor)
        console.log(valor + ' é verdadeiro')
}

verdadeiro(undefined)
verdadeiro('')
verdadeiro(0)
verdadeiro(-1)
verdadeiro(' ')
verdadeiro({})
verdadeiro([])
verdadeiro([1, 5])