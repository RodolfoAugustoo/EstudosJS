/**
 * Fazendo uma requisição usando 'CallBack' 
 * Exemplo sem 'Promises'
 */
const http = require('http')

const getTurma = (letra, callback) => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => resultado += dados)

        res.on('end', () => callback(JSON.parse(resultado)))
    })
}

let nomes = []
    /**
     * Pode ser chamada de forma independente 
     */

/*
getTurma('A', alunos => {
    nomes = alunos.map(a => `Turma A: ${a.nome}`)
    console.log(nomes)
})

getTurma('B', alunos => {
    nomes = alunos.map(b => `Turma B: ${b.nome}`)
    console.log(nomes)
})*/

/**
 * Pode ser usado de forma encadeada
 */
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
})