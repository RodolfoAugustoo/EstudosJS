const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }
    else{
        console.log('Reprovado. ')
    }
}

imprimirResultado(9)
imprimirResultado(6.99)

/*
    Cuidados ao passar os valores caso a função não tenha tratamento / filtro
    Erros que são permitidos por ser fracamente tipada
*/

imprimirResultado('Epa')
imprimirResultado({})
imprimirResultado([])