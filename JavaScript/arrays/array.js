/**
 * Em JS Array é um objeto
 */

 console.log(typeof Array, typeof new Array)

 let aprovados = new Array('Bia', 'Carlos', 'Ana')
 console.log(aprovados)

 aprovados1 =['Bia', 'Carlos', 'Ana']
 console.log(aprovados1)
 console.log(aprovados1[0])

 aprovados[5] = 'Rodolfo'
 console.log(aprovados)

 aprovados.push('Michele')
 console.log(aprovados)

 /**
  * O método sort altera o array
  */
 aprovados.sort()
 console.log(aprovados)

 /**
  * Formas de deletar
  * O delete não excluí o campo, deixa o indice como vazio
  */
delete aprovados[1]
console.log(aprovados)

/**
 * O metodo slice serve para deletar, inserir etc
 * A seguir mostra uma deleção
 * Passo o índice que quer trabalhar e a seguir a quantidade
 */

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1,1)
console.log(aprovados)

/**
 * Adicionando elementos com splice
 */

 aprovados.splice(1, 0, 'Rodolfo', 'Michele', 'Alana')
 console.log(aprovados)