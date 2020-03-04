const pilotos = ['Alonso', 'Vettel', 'Massa', 'Senna']
console.log(pilotos.pop())
console.log(pilotos)


pilotos.push('Verstapppen')
console.log(pilotos)

console.log(pilotos.length)

//Remove o primeiro
pilotos.shift()
console.log(pilotos)

//Adiciona no primeiro elemtno
pilotos.unshift('Hamilton', 'Atila')
console.log(pilotos)

/**
 * Primeiro elemento  = indice
 * Segundo, qtd de elementos p/ remover a partir do indice informado
 * Terceiro ou mais  = elementos para adicionar a partir do indice informado
 */
pilotos.splice(2, 0, 'Massa')
console.log(pilotos)
pilotos.splice(3, 1)
console.log(pilotos)

//Criar um novo array a partir do indice informado
const melhores = pilotos.slice(2)
console.log(melhores)

//Criar um novo no intervalo informado (inicio, ultimo -1)
const algunsPilotos = pilotos.slice(1, 3)
console.log(algunsPilotos)