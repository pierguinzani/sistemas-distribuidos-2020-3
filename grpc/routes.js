const client = require('./client');
const express = require("express");
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/listaCardapio",(req,res) => {
  client.PegaCardapio(null, (err, data) => {
    if (!err) {
      console.log(data)
      res.send(JSON.stringify(data));
    }
  });
})

app.get("/listaCarrinho",(req,res)=>{
    client.PegaCarrinho(null, (err, data) => {
        if (!err) {
          console.log(data)
          res.send(JSON.stringify(data))
        }
      });
})

app.get('/itemById/:id',(req,res)=>{
    item = { id: `${req.params.id}` }

    client.PegaItem(item, (err, data) => {
      if (err) throw err;
      console.log("Item encontrado -> ", data);
      res.send(JSON.stringify(data))
    });
})

app.post("/inserirItem",(req,res)=>{
  let novoItem = {
    item: "Rafael's Podrão Burguer",
    preco: "15.90"
  };
  novoItem = req.body;
  client.InsereItem(novoItem, (err, data) => {
    if (err) throw err;
    console.log("Item inserido no cardápio com sucesso. -> ", data);
   res.send("Item inserido no cardápio com sucesso. -> "+ JSON.stringify(data))
  });
})

app.delete("/deleteItem/:id",(req,res)=>{
    item = { id: `${req.params.id}` }
    client.RemoveItem(item, (err, data) => {
      if (err) throw err;

      console.log("Item removido do cardápio com sucesso. -> ", data);
        res.send("Item removido do cardápio com sucesso. -> "+ JSON.stringify(item))
    });
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
