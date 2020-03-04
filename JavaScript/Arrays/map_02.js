
 //criando um JSON
const carrinho  = [
    '{"nome": "tomate", "preco": 2.40}',
    '{"nome": "batata", "preco": 3.00}',
    '{"nome": "abacaxi", "preco": 6.00}'
]

//Necessário transformar esse JSON em um objeto
const paraObj = json => JSON.parse(json)

//Objetivo é retornar o preco de cada produto
const somentePreco = p => p.preco

console.log(carrinho.map(paraObj).map(somentePreco))
