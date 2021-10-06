import { Router } from "express";

import { CreateRawMaterialsController } from "../controllers/rawMaterials/CreateRawMaterialsController";
import { GetRawMaterialsController } from "../controllers/rawMaterials/GetRawMaterialsController";

const rawMaterialsRoutes = Router();

const createRawMaterialsController = new CreateRawMaterialsController();
const getRawMaterialsController = new GetRawMaterialsController();

rawMaterialsRoutes.post('/', createRawMaterialsController.handle);
rawMaterialsRoutes.get('/', getRawMaterialsController.handle);


export { rawMaterialsRoutes, getRawMaterialsController }