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
    /**
     * Recurso do ES8
     * Objetivo de exemplificar o uso de Promises
     * Quando uma promise estiver sendo utilizado há a possibilidade de usar o 'async await'
     * Dentro da função marcada com async é possível utilizar o await
     * Somente quando for finalizada a função dentro será executada
     */
let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
        /**
         * O retorno é uma asyncFunction
         */
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(alunos => console.log(alunos))