/**
 * Arrow Function 
 */
const soma = (a, b) => {
    return (a + b)
}

console.log(soma(1, 2))

/**
 * Arrow Function (this)
 */
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind()

lexico1()
lexico2()

/**
 * Parametros default
 */
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(`Deno JS`)

/**
 * Operador Rest (spread)
 * No seguinite contexto o nome correto é Rest
 */
function total(...numeros) {
    let total = 0

    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))