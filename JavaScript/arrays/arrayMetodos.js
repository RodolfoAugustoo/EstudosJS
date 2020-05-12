const pilotos = ['Massa', 'Barrichello', 'Sena', 'Prost']

/**
 * Removendo o último elemento
 */
pilotos.pop()
console.log(pilotos)

/**
 * Adicionando á última posição 
 */
pilotos.push('Vettel')
console.log(pilotos)

/**
 * Remove o primeiro elemento da lista
 */
pilotos.shift()
console.log(pilotos)

/**
 * Inserindo no começo da lista
 */
pilotos.unshift('Alonso')
console.log(pilotos)

/**
 * Adicionar e remover elementos com o splice
 */
pilotos.splice(2,0,'Michele','Alana')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

/**
 * Atribui um novo array a partir do indice informado
 */
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)