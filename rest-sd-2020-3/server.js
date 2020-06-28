//Mudança de netJS para Express
const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let carrinho = {
  pedidos: [],
  total: 0

}
let cardapio = {
  burgers: [
    { id: 1, item: "Rafael's Cheddar Burguer", preco: "30.90" },
    { id: 2, item: "Rafael's Bacon Burguer", preco: "28.90" },
    { id: 3, item: "Rafael's Classic Burguer", preco: "25.90" }
  ]
  ,
  macarronadas: [
    { id: 1, item: "Macarronada Grande", preco: "25.90" },
    { id: 2, item: "Macarronada Média", preco: "20.90" },
    { id: 3, item: "Macarronada Pequena", preco: "15.90" }
  ]
}

app.post("/novoItem", (req, res) => {
  const { categoria, item, preco } = req.body;
  let posicao = cardapio[`${categoria}`].length + 1
  let novoItem = {
    id: posicao, item: item, preco: preco
  }
  cardapio[`${categoria}`].push(novoItem)
  console.log(cardapio);
  console.log(req.body);
  res.send(`O seguinte pedido foi adicionado com sucesso: Categoria: ${categoria}, Item: ${item}, Preço: ${preco}`);

});

app.post("/novoItemCarrinho", (req, res) => {
  const { categoria, id } = req.body;
  
  for (var i = 0, tamanho = cardapio[`${categoria}`].length; i < tamanho; i++) {

    if (cardapio[`${categoria}`][i].id == id) {
      var item = (cardapio[`${categoria}`][i])
      console.log(item)
    }
  }
  carrinho.pedidos.push(item)
  let valor = parseFloat(item.preco) 
  //console.log(valor)
  carrinho.total = carrinho.total + valor
  res.send(JSON.stringify(carrinho));
})

app.get("/cardapio/:categoria", (req, res) => {
  const categoria = req.params.categoria;
  res.send(JSON.stringify(cardapio[`${categoria}`]));
});

app.get("/cardapio", (req, res) => {
  res.send(JSON.stringify(cardapio));
});

app.delete("/deleteItem", (req, res) => {
  const { categoria, id } = req.body;
  //delete cardapio[`${categoria}`][`${id}`]
  cardapio[`${categoria}`].splice(cardapio[`${categoria}`].indexOf(`id: ${id}`), 1);
  console.log(cardapio);
  res.send(JSON.stringify(cardapio));
})

app.listen(porta, () => {
  console.log("Servidor inicializado!");
});