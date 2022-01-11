import path from "path";
import {
	ChannelCredentials,
	credentials as grpcCredentials,
	loadPackageDefinition as grpcLoadPackageDefinition,
} from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { promisify } from "util";

import protoConfig from "../../config/proto";

interface GrpcClientOptions {
	serviceName: string;
	fileName: string;
	address: string;
	credentials?: ChannelCredentials;
}

const load = ({
	serviceName,
	fileName,
	address,
	credentials = grpcCredentials.createInsecure(),
}: GrpcClientOptions) => {
	const protoDef = protoLoader.loadSync(
		path.resolve(__dirname, "..", `${fileName}.proto`),
		protoConfig
	);

	// proto's official typing is not correct
	const proto: any = grpcLoadPackageDefinition(protoDef);

	const client = new proto[serviceName](address, credentials);

	// Promisify all client methods
	Object.entries(client.__proto__).map(([prop, value]: [string, any]) => {
		if (value.originalName !== undefined) {
			client[prop] = promisify(value);
		}
	});

	return client;
};

export default load;
