console.log(Object)
console.log(Array)
console.log(String)

/*
 * Posso adicionar novos métodos ao tipo 
 * A partir do protótipo
*/
String.prototype.reverse = function () {
    /**
     * Recebe o string e adiciona cada elemento em um array 'this.'
     * Reverte a ordem dos elementos 'split('')'
     * Junta todos novamente na ordem contrária 'join('')'
     */
    return this.split('').reverse().join('')
}

console.log('Rodolfo Augusto'.reverse())


Array.prototype.first = function () {
    return this[0]
}

console.log(['Rodolfo', 123, 'COD3R'].first())

/*
 * Uma orientação é não substituir ou sobrescrever
 * Métodos que já existem nos tipos primitivos
 */