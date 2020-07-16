const pilotos = ['Massa', 'Schumy', 'Alonso', 'Hamilton']

console.log(pilotos)

/**
 * No callback do foreach o segundo elemento é o índice
 * Caso queira acessar o indice, tem que informar dois params
 * Na chamada do callback
 * Senão será acessado somente o elemento
 * O terceiro param é o próprio array
 * A estrutura é a seguinte
 * array.forEach(valor, indice, array)
 */
pilotos.forEach( function(element, index)  {
  console.log(`#${index + 1} ${element.toUpperCase()} `)
});