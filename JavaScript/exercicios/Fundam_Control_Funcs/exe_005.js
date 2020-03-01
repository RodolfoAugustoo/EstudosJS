function imprimeReal(valor) {
 
    real = String(valor.toFixed(2))

    real =  real.replace('.', ',')
    return `R$ ${real}`
}

console.log(imprimeReal(0.1 + 0.2))
console.log(imprimeReal(90))