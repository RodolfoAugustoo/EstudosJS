function Aula(nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}

/**
 * Relembrando o 'NEW'
 * Além de instanciar um novo objeto que será criado a partir de uma função construtora
 * O protótipo desse novo objeto vai apontar para a função.prototype
 */
const aula01 = new Aula('Aula 01', 123)
const aula02 = new Aula('Aula 02', 456)

console.log(aula01, aula02)

function novo(f, ...params){
    
}