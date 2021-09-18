const express = require('express')
const app = express()
const port = 3000

//routes busca
app.get('/produtos', (req, res) => {
  res.send('Listar Produtos')
})

//routes busca por id
app.get('/produtos/:id', (req, res) => {
    res.send('Buscar pelo id => ' + req.params.id)
  })
  
//routes adicionar produto
app.post('/produtos', (req, res) => {
    res.status(201).send('Produto '+req.params+ ' adicionado')
  })

//routes alterar produto
app.put('/produtos/:id', (req, res) => {
    res.send('Alterar Produto => '+ req.params.id)
  })

//routes deletar produto
app.delete('/produtos/:id', (req, res) => {
    res.send('Deletar Produto => '+ req.params.id)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log("server called listen - server is on...");