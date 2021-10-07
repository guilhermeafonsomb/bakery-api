import { Router } from "express";

import { CreateRawMaterialsController } from "../controllers/rawMaterials/CreateRawMaterialsController";
import { GetRawMaterialsController } from "../controllers/rawMaterials/GetRawMaterialsController";
import { WriteOffRawMaterialsController } from "../controllers/rawMaterials/WriteOffRawMaterialsController";

const rawMaterialsRoutes = Router();

const createRawMaterialsController = new CreateRawMaterialsController();
const getRawMaterialsController = new GetRawMaterialsController();
const writeOffRawMaterialsController = new WriteOffRawMaterialsController();

rawMaterialsRoutes.post('/', createRawMaterialsController.handle);
rawMaterialsRoutes.get('/', getRawMaterialsController.handle);
rawMaterialsRoutes.put('/:id/request', writeOffRawMaterialsController.handle);


export { rawMaterialsRoutes, getRawMaterialsController }