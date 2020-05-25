const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function() {}, 'funcção'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.size)

chavesVariadas.set('new', ['Novo', 'Teste'])
console.log(chavesVariadas.size)
console.log(chavesVariadas)
chavesVariadas.delete('new')
console.log(chavesVariadas.size)

chavesVariadas.forEach((valor, chave) => { console.log(valor, chave) })