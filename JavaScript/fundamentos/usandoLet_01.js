var numero = 1
{
    let numero = 2
    console.log('Dentro: ' + numero)
}

console.log('Fora: ' + numero)

/*
    A diferença entre o LET e o VAR
    O VAR tem escopo de FUNÇÃO e GLOBAL

    O LET tem os seguintes escopos:
        BLOCO
        FUNÇÃO
        GLOBAL
*/