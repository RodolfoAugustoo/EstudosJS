function Aula(nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}

const aula01 = new Aula('Aula 01', 123)
const aula02 = new Aula('Aula 02', 456)

console.log(aula01, aula02)