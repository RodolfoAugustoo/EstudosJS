/*
    É uma função que não tem nome
    Pode receber ou não atributos
*/

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,3)
imprimirResultado(2,4,soma)
imprimirResultado(9.8, 7, function(x, y){
    return x - y
})

imprimirResultado(3,4,(x,y) => x * y)