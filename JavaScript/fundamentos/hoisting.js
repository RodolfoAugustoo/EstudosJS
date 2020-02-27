console.log('a = ' + a)
var a = 2
console.log('a = ' + a)

function teste() {
    console.log('a = ' + a)
    var a = 2
    console.log('a = ' + a)
}

teste()

/*
    O HOISTING não funciona com o LET
    No var ele imprime UNDEFINED mas não interrompe a execução
    Já no LET ele imprime um erro
*/
console.log('b = ' + b)
let b = 2
console.log('b = ' + b)