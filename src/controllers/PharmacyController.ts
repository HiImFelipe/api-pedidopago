import { Request, Response } from "express";
import { PharmacyClient } from "../clients/pharmacy";

export class PharmacyController {
	async index(req: Request, res: Response) {
		const response = await PharmacyClient.getAllPharmacies({});

		return res.json(response);
	}

	async show(req: Request, res: Response) {
		const { id } = req.params;

		const response = await PharmacyClient.getPharmacy({ id });

		return res.json(response);
	}

	async store(req: Request, res: Response) {
		const response = await PharmacyClient.createPharmacy({ ...req.body });

		return res.json(response);
	}

	async update(req: Request, res: Response) {
		const { id } = req.params;

		const response = await PharmacyClient.updatePharmacy({ id, ...req.body });

		return res.json(response);
	}

	async destroy(req: Request, res: Response) {
		const { id } = req.params;

		const response = await PharmacyClient.deletePharmacy({ id });

		return res.json(response);
	}
}
