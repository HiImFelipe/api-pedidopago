import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import routes from "./routes";
import ApiError from "./utils/ApiError";
import HttpStatusCode from "./utils/HttpStatusCode";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
	if (err instanceof ApiError) {
		return response.status(err.statusCode).json({
			status: "error",
			message: err.message,
		});
	}

	console.error(err);

	return response.status(HttpStatusCode.InternalServerError).json({
		status: "error",
		message: "Internal server error",
	});
});

app.listen(8088, () => {
	console.log("Server started on port 8088");
});
