/**
 * Let e const
 */
{
    var a = 1
    let b = 2

    console.log(b)
}
console.log(a)

/**
 * Template String
 */
const produto = 'Ipad'
console.log(`${produto} é caro!`)

/**
 * Destructuring
 */
const [l, e, ...tras] = 'Cod3r WebModerno'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome: n } = { nome: 'Ana', idade: 19 }
console.log(i, n)