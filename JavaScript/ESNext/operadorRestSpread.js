/**
 * Operadpr REST(juntar)
 * Operador Spread(espalhar)
 * 
 * Rest com parametro de função
 * 
 * Usando o SPREAD com objeto
 */
const funcionario = { nome: 'Rodolfo', salario: 1000.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

/** 
 * Usando Spread com array
 */
const grupoA = ['Rodolfo', 'Alana', 'Michele']
const grupoB = ['Edna', 'Luara', ...grupoA]
console.log(grupoB)