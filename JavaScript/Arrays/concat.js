const notas1 = [1,2,3,4,5,6,7,8]

const filhas = ['Maria', 'Ana']
const filhos = ['Joao', 'Jose']

const todos = filhas.concat(filhos)
console.log(todos)

/**
 * O c'oncat'  não altera os arrays originais
 * Pode passar quantos elementos for necessário
 */

 const novo = todos.concat('Rodolfo', 'Luara', 'Alana')
 console.log(novo)