# Rafael's gRPC API

## Disponível em https://rafaels-grpc-api.herokuapp.com

### Consultar cardápio 

- Consulte o menu utilizando o método GET 
```http
GET https://rafaels-grpc-api.herokuapp.com/listaCardapio
```
Deve retornar uma resposta semelhante a essa:

```json
{
    "cardapio": [
        {
            "id": "1",
            "item": "Rafael's Cheddar Burguer",
            "preco": "30.90"
        },
        {
            "id": "2",
            "item": "Rafael's Bacon Burguer",
            "preco": "28.90"
        },
        {
            "id": "3",
            "item": "Rafael's Classic Burguer",
            "preco": "25.90"
        },
        {
            "id": "4",
            "item": "Macarronada Grande",
            "preco": "25.90"
        },
        {
            "id": "5",
            "item": "Macarronada Média",
            "preco": "20.90"
        },
        {
            "id": "6",
            "item": "Macarronada Pequena",
            "preco": "15.90"
        }
    ]
}

```

### Faça seu pedido

- Adicione um item no carrinho através do método POST
```http
GET https://rafaels-grpc-api.herokuapp.com/itemById/idPedido
```
| Parâmetro | Tipo | 
| :--- | :--- | 
| `idPedido` | `int` |

Deve retornar uma resposta semelhante a essa:

```json
{
    "id": "3",
    "item": "Rafael's Classic Burguer",
    "preco": "25.90"
}
```

### Consultar carrinho para solicitar entrega 

- Consulte o carrinho utilizando o método GET 
```http
GET https://rafaels-grpc-api.herokuapp.com/listaCarrinho
```
Deve retornar uma resposta semelhante a essa:

```json
{
    "total": "51.8",
    "carrinho": [
        {
            "id": 4,
            "item": "Macarronada Grande",
            "preco": "25.90"
        },
        {
            "id": 3,
            "item": "Rafael's Classic Burguer",
            "preco": 25.90
        }]
}

```

 ## Ferramentas ADMINISTRATIVAS
### Adicione um novo Item ao Cardápio

- Insira um item no cardápio através do metodo POST
```http
POST https://rafaels-grpc-api.herokuapp.com/inserirItem
```
Passando como parâmetro no body o item e o preço no formato JSON


```json
{
    "item": "Rafael's Podrão Burguer",
    "preco": "15.90"
}
```

Deve retornar uma mensagem semelhante a essa:

```json
Item inserido no cardápio com sucesso. -> {"id":"8","item":"Rafael's Podrão Burguer","preco":"15.90"}
```

### Remover Item do Cardápio

- Remova um Item através do método DELETE
```http
DELETE https://rafaels-grpc-api.herokuapp.com//deleteItem/idItem
```
| Parâmetro | Tipo | 
| :--- | :--- | 
| `idItem` | `int` |

Deve retornar uma resposta semelhante a essa:

```json
Item removido do cardápio com sucesso. -> {"id":"8","item":"Rafael's Podrão Burguer","preco":"15.90"}
```


#### Faça os testes utilizando o POSTMAN ou outro app de Rquisições HTTP, ou o client.js com axios
