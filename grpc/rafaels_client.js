const client = require('./client');

// Lista Cardapio de Lanches
const listaCardapio = () => {
  client.PegaCardapio(null, (err, data) => {
    if (!err) {
      console.log(data)
    }
  });

},


// Insere novo Item ao Cardápio
inserirItem = () => {
    let novoItem = {
      item: "Rafael's Podrão Burguer",
      preco: "15.90"
    };
    client.InsereItem(novoItem, (err, data) => {
      if (err) throw err;
      console.log("Item inserido no cardápio com sucesso. -> ", data);
     
    });
  }, 
  

  // Remove Item do Cardápio 
  deleteItem = () => {
    item = { id: '9' }
    client.RemoveItem(item, (err, data) => {
      if (err) throw err;

      console.log("Item removido do cardápio com sucesso. -> ", data);

    });
  }, 
  
  
  // Escolhe um Item do Cardapio e adiciona no Carrinho
  itemById = (id) => {
    item = { id: `${id}` }

    client.PegaItem(item, (err, data) => {
      if (err) throw err;

      console.log("Item encontrado -> ", data);
      //()

    });
  }, 
  
  // Finaliza Pedido e retorna Valor Total
  listaCarrinho = () => {
    client.PegaCarrinho(null, (err, data) => {
      if (!err) {
        console.log(data)
  
      }
    });
  }

//listaCardapio()
//inserirItem()
//deleteItem()
//itemById()
// listaCarrinho()
// itemById(4)
// itemById(5)
// itemById(6)
// listaCarrinho()
// itemById(1)
// itemById(2)
// itemById(3)


//listaCardapio()
// setTimeout(listaCarrinho,10000)
// listaCarrinho()