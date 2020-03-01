//Gerando valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(12, 3, 5), soma1(), soma1(4))

//Outras estratégias
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(12, 3, 5), soma2(), soma2(4))

//Definição padrão de valores default do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(12, 3, 5), soma3(), soma3(4))