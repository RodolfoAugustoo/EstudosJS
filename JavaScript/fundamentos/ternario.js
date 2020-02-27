/*
    Operadores ternários
    No exemplo a seguir temos as partes desse operador

    Uma função condicional = note >= 7
    Segundo operando = 'Aprovado'
    Terceiro operando = 'Reprovado'
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(9))

/*
    Um operador ternário também pode ser armazenado em uma constante
*/

nota  = 2
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(status)