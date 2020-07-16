/**
 * Não é recomendado nem boa prática alterar o escopo global
 * Exemplo somente para conhecimento
 */

require('./global')

console.log(MinhaApp.saudacao()) 

MinhaApp.nome = "Novo nome"

console.log(MinhaApp.nome)