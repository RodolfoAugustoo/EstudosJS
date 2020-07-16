const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')


const chines = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (atual, proximo) => {
  return atual.salario < proximo.salario ? atual : proximo
}

/**
 * Chinesa que ganha o menor salário
 * Primeiro filtra todos chineses
 * Depois todas mulheres
 * Usa reduce não filter pois o que deve retornar é apenas um resultado, no caso o menor salário
 */
axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios.filter(chines).filter(mulheres).reduce(menorSalario)
  console.log(func)
})
