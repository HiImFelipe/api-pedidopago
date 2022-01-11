import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8088, () => {
	console.log("Server started on port 8088");
});
