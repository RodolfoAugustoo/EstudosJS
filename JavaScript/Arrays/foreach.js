const nomes = ['Ana', 'Raquel', 'Joao', 'Maria']

/**
 * O indice é passado como segundo parâmetro e nunca como primeiro
 * O terceiro parâmetro é o array 
 * Default do callback
 */
nomes.forEach(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)}
)

const nome = n => console.log(n)

nomes.forEach(nome)

