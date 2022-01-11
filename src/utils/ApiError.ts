import HttpStatusCode from "./HttpStatusCode";

class ApiError {
	message: string;

	statusCode: HttpStatusCode;

	constructor(message: string, statusCode: HttpStatusCode) {
		this.message = message;
		this.statusCode = statusCode;
	}
}

export default ApiError;
