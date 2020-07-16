/**
 * Implementando um forEach para conhecimento
 */

Array.prototype.forEach2 = function(callback) {
  for( let i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}


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
pilotos.forEach2( function(element, index)  {
  console.log(`#${index + 1} ${element.toUpperCase()} `)
});