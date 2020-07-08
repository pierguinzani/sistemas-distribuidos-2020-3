const PROTO_PATH = "./rafaels.proto";

var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

var rafaelsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

let cardapio = [

	{ id: 1, item: "Rafael's Cheddar Burguer", preco: "30.90" },
	{ id: 2, item: "Rafael's Bacon Burguer", preco: "28.90" },
	{ id: 3, item: "Rafael's Classic Burguer", preco: "25.90" },
	{ id: 4, item: "Macarronada Grande", preco: "25.90" },
	{ id: 5, item: "Macarronada Média", preco: "20.90" },
	{ id: 6, item: "Macarronada Pequena", preco: "15.90" }

];
let carrinho = [];


server.addService(rafaelsProto.RafaelsService.service, {
	PegaCardapio: (_, callback) => {
		callback(null, { cardapio });
	},

	PegaItem: (call, callback) => {
		let item = cardapio.find(n => n.id == call.request.id);

		if (item) {
			
			carrinho.push(item);
			callback(null, item);
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: "Not found"
			});
		}
	},

	PegaCarrinho: (_, callback) => {
		let total = 0;
		for (i in carrinho){
			console.log (carrinho[i])
			total = total + parseFloat(carrinho[i].preco)
		}
		// carrinho = JSON.stringify(carrinho);
		console.log(total)
		callback(null, { total,carrinho });
		carrinho = [];
	},

	InsereItem: (call, callback) => {
		let item = call.request;

		item.id = cardapio.length + 1
		cardapio.push(item);
		callback(null, item);
	},


	RemoveItem: (call, callback) => {
		let indexItemExistente = cardapio.findIndex(
			n => n.id == call.request.id
		);

		if (indexItemExistente != -1) {
			cardapio.splice(indexItemExistente, 1);
			callback(null, {});
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: "Not found"
			});
		}
	},
	
});
let PORT = 3043;
server.bind("127.0.0.1:"+PORT, grpc.ServerCredentials.createInsecure());
console.log("Server running at https://127.0.0.1:"+PORT);
server.start();