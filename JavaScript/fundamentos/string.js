const escola = 'Udemy'

console.log(escola.charAt(2))
console.log(escola.charAt(4))
console.log(escola.charCodeAt(0))
console.log(escola.indexOf('U'))

console.log(escola.substr(1))
console.log(escola.substring(1, 4))
console.log(escola.substr(1,3))

/*
    Utilizando o método 
    Diretamente no literal
    Literal é o valor direto - sem armazenar numa variável
*/
console.log("Curso de JS na ".concat(escola).concat(' é ótimo!'))
console.log("Curso de JS na " + escola +  ' é ótimo!')

console.log(escola.replace('U', 'HU'))

console.log('Ana,Maria,João,José'.split(','))