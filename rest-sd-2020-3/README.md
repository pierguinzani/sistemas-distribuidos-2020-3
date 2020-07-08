# Rafael's API REST

## Disponível em https://rafaelsapi.herokuapp.com/

### Consultar cardápio 

- Consulte o menu utilizando o método GET 

> GET https://rafaelsapi.herokuapp.com/cardapio

Deve retornar uma resposta semelhante a essa:

```json
{
    "burgers": [
        {
            "id": 1,
            "item": "Rafael's Cheddar Burguer",
            "preco": "30.90"
        },
        {
            "id": 2,
            "item": "Rafael's Bacon Burguer",
            "preco": "28.90"
        },
        {
            "id": 3,
            "item": "Rafael's Classic Burguer",
            "preco": "25.90"
        }
    ],
    "macarronadas": [
        {
            "id": 1,
            "item": "Macarronada Grande",
            "preco": "25.90"
        },
        {
            "id": 2,
            "item": "Macarronada Média",
            "preco": "20.90"
        },
        {
            "id": 3,
            "item": "Macarronada Pequena",
            "preco": "15.90"
        }
    ]
}
```

### Faça seu pedido

- Faça um pedido e obtenha a soma total do carrinho através do método POST

> POST https://rafaelsapi.herokuapp/novoItemCarrinho

O POST deve enviar um JSON no mesmo formato do cardápio: 

```json
{
    "categoria":"macarronadas",
    "id": "2"
}
```
Deve retornar uma resposta semelhante a essa:

```json
{
    "pedidos": [
        {
            "id": 2,
            "item": "Rafael's Bacon Burguer",
            "preco": "28.90"
        },
        {
            "id": 1,
            "item": "Rafael's Cheddar Burguer",
            "preco": "30.90"
        }
    ],
    "total": 59.8
}
```

### Consultar carrinho para solicitar entrega 

- Consulte o carrinho utilizando o método GET 

> GET https://rafaelsapi.herokuapp.com/carrinho

Deve retornar uma resposta semelhante a essa:

```json
{
    "pedidos": [
        {
            "id": 2,
            "item": "Rafael's Bacon Burguer",
            "preco": "28.90"
        },
        {
            "id": 1,
            "item": "Rafael's Cheddar Burguer",
            "preco": "30.90"
        }
    ],
    "total": 59.8
}
```

 ## Ferramentas ADMINISTRATIVAS
### Adicione um novo Item ao Cardápio

- Ferramenta administrativa através do metodo POST

> POST https://rafaelsapi.herokuapp.com/novoItem

POST no mesmo formato do JSON cardápio completo

```json
{
    "categoria": "burgers",
    "item": "Rafael's X Burger",
    "preco": "27.90"
}
```

Deve retornar uma mensagem semelhante a essa:

```json
"O seguinte pedido foi adicionado com sucesso: Categoria: burgers, Item: Rafael's Eggs Burger, Preço: 27.90"
```

### Remover Item do Cardápio

- Remova um Item através do método DELETE

> DELETE https://rafaelsapi.herokuapp.com/deleteItem


O DELETE deve enviar um JSON no mesmo formato do cardápio: 

```json
{
    "categoria":"macarronadas",
    "id": "2"
}
```

Deve retornar uma resposta com o cardápio atualizado, semelhante a essa:

```json
{
    "burgers": [
        {
            "id": 1,
            "item": "Rafael's Cheddar Burguer",
            "preco": "30.90"
        },
        {
            "id": 2,
            "item": "Rafael's Bacon Burguer",
            "preco": "28.90"
        },
        {
            "id": 3,
            "item": "Rafael's Classic Burguer",
            "preco": "25.90"
        }
    ],
    "macarronadas": [
        {
            "id": 1,
            "item": "Macarronada Grande",
            "preco": "25.90"
        },
        {
            "id": 2,
            "item": "Macarronada Média",
            "preco": "20.90"
        },
        {
            "id": 3,
            "item": "Macarronada Pequena",
            "preco": "15.90"
        }
    ]
}
```


#### Faça os testes utilizando o POSTMAN ou outro app de Rquisições HTTP, ou o client.js com axios
