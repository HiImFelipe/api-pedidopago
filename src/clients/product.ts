import load from "../pb/loader";
import dotenv from "dotenv";

dotenv.config();

export const ProductClient = load({
	serviceName: "ProductService",
	address: `${process.env.APP_HOST}:50052`,
	fileName: "product",
});
