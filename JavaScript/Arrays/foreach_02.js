const nomes = ['Ana', 'Raquel', 'Joao', 'Maria']

/**
 * O indice é passado como segundo parâmetro e nunca como primeiro
 * O terceiro parâmetro é o array 
 * Default do callback
 */

/**
 * criando um foreach para entender melhor o funcionamento
 * Por defaul ele retorna o elemento, o indice e o prṕprio array
*/
Array.prototype.forEach2 = function (callback) {
    /**
     * A função FOREACH recebe como parâmetro uma função 'callback'
     * Percorrendo até o tamanho deste elemento usando this
     * Ordena o retorno associando ao prṕrio objeto(array) informado
     * Por isso utiliza o this
     */
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

nomes.forEach2(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})