const vo = {
    atrib01: 'Avô'
}

const pai = {
    __proto__: vo,
    atributo02: 'B'
}

const filho = {
    __proto__: pai,
    atributo03: 'Filho'
}

console.log(filho.atrib01)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.VelMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    VelMax: 320
}

const Honda = {
    modelo: 'Civic',
    VelMax: 220,
    status() {
        return `${this.modelo} ${super.status()}`
    }
}

/**
 * Forma de definir qual o protótipo de um objeto após ser criado
 */

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(Honda, carro)

Honda.acelerar(100)

console.log(ferrari)
console.log(Honda)

console.log(ferrari.status())
console.log(Honda.status())

ferrari.acelerar(212)
console.log(ferrari.status())

console.log('')
for(let chave in ferrari){
    ferrari.hasOwnProperty(chave) ? 
        console.log(chave) : console.log(`Por herança ${chave}`)
}