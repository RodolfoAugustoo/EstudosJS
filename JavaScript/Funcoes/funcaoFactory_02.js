/*
    Passando parâmetros
*/

function criarProduto(nome, preco) {
    return {
        nome,
        preco
    }
}

const p1 = criarProduto('sabao', 2.99)
const p2 = criarProduto('creme', 15)
const p3 = criarProduto('Ipad', 3999)

console.log(p1)
console.log(p2)
console.log(p3)