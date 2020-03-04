const alunos = [
    { nome: "Rodolfo", nota: 10, bolsista: false },
    { nome: "Luara", nota: 8, bolsista: false },
    { nome: "Felipe", nota: 5, bolsista: true }
]

const bolsistas = (resultado, bolsista) => resultado && bolsista

//Todos bolsistas?
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))

//Algum bolsista?
const algunBolsista = (resulta, bolsista) =>  resulta || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunBolsista))