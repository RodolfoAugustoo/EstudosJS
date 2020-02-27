const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + ' !'

/*
    No lugar das ASPAS é utilizado CRASE
*/
const template = `Olá ${nome} !`

console.log('Concatenação: ' + concatenacao)
console.log('Template: '+ template)

/*
    Utilizando expressões
*/
const raio = 14.34

console.log(`Área do círculo de raio ${raio} = ${Math.PI * Math.pow(raio,2).toPrecision(2)}`)
