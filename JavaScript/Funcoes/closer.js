/*
    É o escopo quando é definida uma função
    Permite que acesse as variáveis fora da função
    Nada mais é que o contexto léxico em ação
*/

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())