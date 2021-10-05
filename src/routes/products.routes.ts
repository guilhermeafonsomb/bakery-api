import { Router } from "express";
import { CreateProductController } from "../controllers/product/CreateProductController";

const productsRoutes = Router();

const createProductController = new CreateProductController();

productsRoutes.post('/', createProductController.handle);

export { productsRoutes };