import { PharmacyController } from "./controllers/PharmacyController";
import { ProductController } from "./controllers/ProductController";

const { Router } = require("express");

const router = new Router();
const pharmacyController = new PharmacyController();
const productController = new ProductController();

router.get("/pharmacies/", pharmacyController.index);
router.get("/pharmacies/:id", pharmacyController.show);
router.post("/pharmacies", pharmacyController.store);
router.put("/pharmacies/:id", pharmacyController.update);
router.delete("/pharmacies/:id", pharmacyController.destroy);

router.get("/products/", productController.index);
router.get("/products/:id", productController.show);
router.post("/products", productController.store);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.destroy);

export default router;
