/*
    Function declaration
    Pode ser chamada antes mesmo da declaração
*/
function soma(x, y) {
    return x + y
}

/*
    Function expression
    Somente pode ser chamada após a declaração
*/
const sub = function (x, y) {
    return x - y
}

/*
    named function expression
    Somente pode ser chamada após a declaração
*/
const mult = function mult(x, y) {
    return x * y
}
