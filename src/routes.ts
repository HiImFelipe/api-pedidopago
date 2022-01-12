import { PharmacyController } from "./controllers/PharmacyController";

const { Router } = require("express");

const router = new Router();
const pharmacyController = new PharmacyController();

router.get("/pharmacies/", pharmacyController.index);
router.get("/pharmacies/:id", pharmacyController.show);
router.post("/pharmacies", pharmacyController.store);
router.put("/pharmacies/:id", pharmacyController.update);
router.delete("/pharmacies/:id", pharmacyController.destroy);

// router.get("/products/:id", ProductController.show);
// router.get("/products", ProductController.index);

export default router;
