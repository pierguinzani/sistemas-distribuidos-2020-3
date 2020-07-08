const PROTO_PATH = "./rafaels.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

const RafaelsService = grpc.loadPackageDefinition(packageDefinition).RafaelsService;
const client = new RafaelsService(
	"localhost:3043",
	grpc.credentials.createInsecure()
);

module.exports = client;