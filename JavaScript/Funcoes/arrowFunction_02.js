/*
    No caso da arrow function o this é do 'espaço'
    Em que ela foi definida
*/

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa