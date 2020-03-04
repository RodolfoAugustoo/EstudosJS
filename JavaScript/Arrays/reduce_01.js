const alunos = [
    { nome: "Rodolfo", nota: 10, bolsista: true },
    { nome: "Luara", nota: 8, bolsista: false },
    { nome: "Felipe", nota: 5, bolsista: false }
]


console.log(alunos.map(a => a.nota).reduce(function (acumulador, atual){
    return acumulador + atual
}))
