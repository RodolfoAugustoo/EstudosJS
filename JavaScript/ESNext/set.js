/**
 * Tipo de estrutura que não aceita repetição
 * Não é indexado
 */
const times = new Set()
times.add('Corinthians')
times.add('São Paulo').add('Palmeiras').add('Flamengo')
times.add('Santos')
times.add('Flamengo')

console.log(times)
console.log(times.has('Palmeiras'))
console.log(times.has('palmeiras'))
console.log(times.size)

times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Rodolfo', 'Michele', 'Alana', 'Alana', 'Edna', 'Luara', 'Edna']

console.log(nomes, 'Tamanho: ', nomes.length)

const nomesSet = new Set(nomes)
console.log(nomesSet, 'Tamanho: ', nomesSet.size)