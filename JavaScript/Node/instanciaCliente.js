/**
 * Exemplos para cache do NODE
 */

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log("A: ", contadorA)
console.log("B: ",contadorB)

contadorC.inc()
contadorC.inc()

console.log("C: ",contadorC)
console.log("D: ",contadorD)