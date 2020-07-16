const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

/**
 * Sincrono
 * Deve ter cuidado ao usar dessa forma pois dependendo do tamanho do arquivo
 * O NODE vai ler todo arquivo e depois liberar o EventLoop
 * Resultado: nada mais acontece até a leitura finalizar
 */

 //SINCRONO
const conteudo = fs.readFileSync(caminho, "utf-8")

console.log(conteudo)


//ASSINCRONO
fs.readFile(caminho, "utf-8",(err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteudo da pasta")
  console.log(arquivos)
})