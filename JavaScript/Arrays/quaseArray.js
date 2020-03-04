/**
 * Simulnaod um array com um objeto
 */

const obj = {0: 'Ana', 1: 'Joao', 2: 'Maria'}

//Definir propriedades do obj e criando atributo 'tostring'
Object.defineProperty(obj, 'tostring', {
    value: function(){
        //retorna cada atributo do obj
        return Object.values(this)
    }
},
enumerable = false
)

console.log(obj[0])

const array = ['Jose', 'Rodolfo', 'Ana']
console.log(array)
console.log(obj.tostring())