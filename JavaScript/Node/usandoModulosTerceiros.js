const _ = require('lodash')
setInterval( ()=> console.log(_.random(1,1000)), 150)

/**
 * Nessa aula foi adicionado o nodemon para executar os arquivos
 * nodemon <nome_do_arquivo.js>
 * Quando o código é alterado, ele atualiza e reinicia o processo
 * Caso queira foiçar um reinÍcio manual só digitar 'rs' no terminal e ENTER
 * Em outras palavras o nodemon fica monitorando pra ver se houve alguma alteração no arquivo
 */