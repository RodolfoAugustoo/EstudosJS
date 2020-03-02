const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

console.log(obj1, obj2)

const nomeAtrb = 'nota'
const valorAtrb = 9

const obj3 = {}
obj3[nomeAtrb] = valorAtrb
console.log(obj3)

const obj4 = { [nomeAtrb]: valorAtrb }
console.log(obj4)


/*
*/
const obj5 = {
    //    Forma antiga de declarar funcao dentor do objeto
    funcao1: function () {
    },

    //Novo formato
    funcao() {
    }
}

console.log(obj5)