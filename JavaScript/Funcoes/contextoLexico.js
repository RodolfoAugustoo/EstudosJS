const valor = 'valor'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao(valor)
}

exec()