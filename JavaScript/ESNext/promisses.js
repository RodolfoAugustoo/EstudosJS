/**
 * É sim uma Promessa!
 * Utilizada quando é executado um processo assíncrono
 * Fazer uma requisição e esperar uma resposta que pode ser de errp ou de sucesso
 * Promessa cumprida = SUCESSO
 * Processa não !cumprida = ERRO
 */
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Teste da Promise')
    .then(frase => console.log(frase))

/**
 * o 'then' pode ser chamado quantas vezes necessário
 * Pode ser utilizado em um encadeamento para fazer algum processo
 * Já o 'catch' é chamado uma vez
 */

falarDepoisDe(2, 'Teste 2 da Promise')
    .then(frase => frase.concat(' novo'))
    .then(frase => console.log(frase))
    .catch(erro => console.log(erro))