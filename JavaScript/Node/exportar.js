console.log(this === module.exports)

this.a = 1

exports.b=2

module.exports.c = 3

exports = null

console.log(typeof module.exports)

exports = {
  nome: 'Exportar'
}

console.log(module.exports)