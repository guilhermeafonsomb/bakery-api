import { Router } from "express";
import { rawMaterialsRoutes } from "./rawMaterials.routes";
import { usersRoutes } from "./users.routes";

const router = Router();
router.use('/users', usersRoutes);
router.use('/rawMaterials', rawMaterialsRoutes);

export { router };