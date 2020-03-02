const pai = {nome: 'Joao', idade: 45, corCabelo: 'preto'}

const filha01 = {pai}

const filha02 = {pai, nome: 'Ana'}

console.log(pai.nome)
console.log(filha01.corCabelo)


/**
 * Primeiro parâmetro é o protótipo
 * depois pode adicionar as propriedades que achar necessário
 */
const filha03 = Object.create(pai, {
    nome: {value: 'Carla', enumerable: true, writable: false}
})

console.log(filha03)

/**
 * Verificar se a propriedade pertence ou não aquele objeto
 */
for( let i in filha03){
    filha03.hasOwnProperty(i) ? console.log(i) : console.log(`Por herança: ${i}`)
}