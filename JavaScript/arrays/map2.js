const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "caderno", "preco": 13.90 }',
  '{ "nome": "Lapis", "preco": 22.00 }',
  '{ "nome": "Estojo", "preco": 12.00 }'
]

console.log(carrinho)

/**
 * Primeiro precisa transformar esse JSON em um objeto
 */
const paraObj = json => JSON.parse(json)

/**
 * Apenas o preço ou o atributo que for necessário
 */
const apenasPreco = produto => produto.preco

const precos = carrinho.map(paraObj).map(apenasPreco)

console.log(precos)