/*
    Crie uma função que dado dois valores (passados como parâmetros) 
    mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
*/

function calc(x, y) {
    const soma = x + y
    const sub = x - y
    const mult = x * y
    const div = x / y

    return `soma = ${soma}\nsubtração = ${sub}\nmultiplicação = ${mult}\ndivisão = ${div}`
}

console.log(calc(3, 4))