const express = require('express')
const app = express()
// const fs = require('fs')
const port = 3000

const produtos = [
    {id: 1, nome:"produto1", preco:11},
    {id: 2, nome:"produto2", preco:22},
    {id: 3, nome:"produto1", preco:33}
]

let idGerado = 4;

// const produtos2 = JSON.parse(fs.readFileSync("./bd.json", "utf8"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes busca
app.get('/produtos', (req, res) => {
  res.json(produtos)
})

//routes busca por id
app.get('/produtos/:id', (req, res) => {
    for (const produto of produtos) {
        if(req.params.id == produto.id){
            res.json(produto);
        }
    }
    res.status(404).json({erro: "Produto nao encontrado!"})
  })
  
//routes adicionar produto
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = idGerado++;
    produtos.push(novoProduto);
    res.status(201).send('Produto adicionado com sucesso!');
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