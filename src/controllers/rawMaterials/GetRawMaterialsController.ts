import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetRawMaterialsService } from "../../services/rawMaterials/GetRawMaterialsService";

class GetRawMaterialsController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.query;
        const getRawMaterialsService = container.resolve(GetRawMaterialsService);
        const rawMaterial = await getRawMaterialsService.execute(name as string);

        return res.status(201).json(rawMaterial);
    }
};

export { GetRawMaterialsController };