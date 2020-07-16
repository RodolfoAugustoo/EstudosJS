/**
 * O objetivo desse exemplo é refatorar o exemplo 'usandoCallback.js'
 * Será refatorado usando 'Promises'
 */
const http = require('http')

const getTurma = letra => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    console.log(e)
                }
            })
        })
    })
}

let nomes = []

/**
 * Ainda usando callback
 */
/*
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/
/**
 * Usando somente a Promise
 * Passando um array de chamadas e quando todas finalizadas o processo continua
 */
Promise.all([getTurma('A'), getTurma('B'), getTurma('C'), getTurma('D')])
    /**
     * Retornou uma matriz com 3 arrays
     * Um array de cada turma
     */
    //.then(x => console.log(x))
    /**
     * O passo a seguir espalha todos os objetos dentro de um array usando o 'SPREAD'
     */
    .then(turmas => [].concat(...turmas))
    /**
     * Agora filtrando apenas os nomes
     */
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    /**
     * No caso somente o erro será impresso porque a turma D não existe
     * Para que o erro não ocorra remover o 'getTurma('D')
     */
    .catch(e => console.log(e.message))