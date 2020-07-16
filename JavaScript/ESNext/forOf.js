/**
 * Itera em cima de valores e não das chaves
 * Diferente do 'for in'
 */
for (let letra of 'Rodolfo') {
    console.log(letra)
}

for (let letra in 'Rodolfo') {
    console.log(letra)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}