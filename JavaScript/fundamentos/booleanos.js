let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 0
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('******* Atribuições verdadeiras *******')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('******* Atribuições falsas *******')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("******* Finalizando *******")
console.log(!!('' || null || 0 || " "))
console.log(!!( 0 || 123 || 'teste'))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Rodolfo'
console.log(nome || 'Desconhecido')