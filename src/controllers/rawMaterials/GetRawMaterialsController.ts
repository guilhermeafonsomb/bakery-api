import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetRawMaterialsService } from "../../services/rawMaterials/GetRawMaterialsService";

class GetRawMaterialsController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.query;
        const getRawMaterialsService = container.resolve(GetRawMaterialsService);
        const rawMaterial = await getRawMaterialsService.execute(name as string);

        const mapResponse = rawMaterial.map(element => ({
            name: element.name,
            quantity: element.quantity,
            user: element.user.name
        }));

        return res.status(200).json(mapResponse);
    }
};

export { GetRawMaterialsController };