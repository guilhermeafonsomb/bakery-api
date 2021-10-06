import { Router } from "express";

import { CreateRawMaterialsController } from "../controllers/rawMaterials/CreateRawMaterialsController";

const rawMaterialsRoutes = Router();

const createRawMaterialsController = new CreateRawMaterialsController();

rawMaterialsRoutes.post('/', createRawMaterialsController.handle);

export { rawMaterialsRoutes }