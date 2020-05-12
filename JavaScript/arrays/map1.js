const pilotos = ['Massa', 'Schumy', 'Alonso', 'Hamilton']

console.log(pilotos)

/**
 * Map é um forEach com algum propósito
 * Retorna um array transformado
 * Sem fazer qualquer alteração no array original
 * Se não colocar return o valor retornado como default é o undefined
 */
const algunsPilotosMinusculo = pilotos.map( function(element, index)  {
  console.log(`#${index + 1} ${element.toUpperCase()} `)
  return element.toLowerCase()
})

console.log(algunsPilotosMinusculo)

const algunsPilotosMaiusculo = pilotos.map( element =>  {
  return element.toUpperCase()
})

console.log(algunsPilotosMaiusculo)