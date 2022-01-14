import { Request, Response } from "express";
import { ProductClient } from "../clients/product";

export class ProductController {
	async index(req: Request, res: Response) {
		const response = await ProductClient.getAllProducts({});

		return res.json(response);
	}

	async show(req: Request, res: Response) {
		const { id } = req.params;

		const response = await ProductClient.getProduct({ id });

		return res.json(response);
	}

	async store(req: Request, res: Response) {
		const response = await ProductClient.createProduct({ ...req.body });

		return res.json(response);
	}

	async update(req: Request, res: Response) {
		const { id } = req.params;

		const response = await ProductClient.updateProduct({ id, ...req.body });

		return res.json(response);
	}

	async destroy(req: Request, res: Response) {
		const { id } = req.params;

		const response = await ProductClient.deleteProduct({ id });

		return res.json(response);
	}

	async cloneProduct(req: Request, res: Response) {
		const { id } = req.params;

		const response = await ProductClient.cloneProduct({ id });

		return res.json(response);
	}
}
