//Acessando  módulos internos
moduloA = require('../../moduloA')

/**
 * No caso do Linux o arquivo deve ser importado com o nome identico ao arquivo original
 * No MAC e no Windows mesmo que não seja respeitado maiusculas e minusculas vai funcionar
 * Além do que é uma boa prática seguir os padrões de nomenclatura
 */

 //Importando módulos core (interno do Node)
 /* const http = require('http')
 http.createServer((req, res) => {
   res.write(moduloA.bemVindo)
   res.end()
 }).listen(8080) */

/* 
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo) */

/**
 * Não é necessário especificar o arquivo que será importado pois o arquivo desejado é o index
 * Por padrão o Node busca esse arquivo
 */
const c = require('./PastaC')
console.log(c.olaC)
