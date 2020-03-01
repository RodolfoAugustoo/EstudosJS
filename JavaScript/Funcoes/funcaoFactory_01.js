const prod1 = {
    nome: 'Sabao',
    preco: 2.99
}

const prod2 = {
    nome: 'Carne',
    preco: 29
}

/*
    Factory é uma função que retorna um objeto
*/

function criarPessoa() {
    return {
        nome: 'Rodolfo',
        idade: 28
    }
}

const p1 = criarPessoa()
console.log(p1)
