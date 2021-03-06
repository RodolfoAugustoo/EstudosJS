/**
 * Configurando o servidor Express
 * A porta é processo que o computado vai usar para fazer a comunicação com um determinado processo
 */
const porta = 3003;
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

//Retorna produto específico
app.get('/produtos/:id', (req, res, next) => {
 res.send(bancoDeDados.getProduto(req.params.id))
})

//Retornar todos produtos
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) //Será convertido para JSOn pelo próprio método SEND
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvaProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })

  res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvaProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})