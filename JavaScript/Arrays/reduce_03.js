/**
 * O Reduce retorna um valor
 * Diferente do map e filter que retornam arrays
 */

Array.prototype.reduce1 = function (callback) {
    //O retorno é inicializado com o primeiro elemento do array
    let acumulador = this[0]

    //O primeiro elemento já está no acc, por isso o for inicia com 1
    for (let i = 1; i < this.length; i++) {
        acumulador += this[i]
    }
    return acumulador
}

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9]
const soma = (total, valor) => total + valor

console.log(valores.reduce1(soma))

Array.prototype.reduce2 = function (callback, valorInicial) {
    let indiceInicial = valorInicial ? 0 : 1
    //O retorno é inicializado com o primeiro elemento do array
    let acumulador = valorInicial || this[0]

    //O primeiro elemento já está no acc, por isso o for inicia com 1
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador += this[i]
    }
    return acumulador
}


console.log(valores.reduce2(soma, 72))