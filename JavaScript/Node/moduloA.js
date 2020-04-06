/**
 * Em NODE um arquivo representa um módulo
 * O conteúdo fica visível apenas dentro do Módulo.
 * Para que fique visível pra fora precisa realizar o exports
 * por CommonsJS ou o import/export (ECMAScript 2015)
 */

this.ola = 'Fala Pessoal!'

exports.bemVindo = 'Bem vindo ao node!'

module.exports.ateLogo = 'Até o próximo exemplo.'

