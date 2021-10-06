import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRawMaterialsService } from "../../services/rawMaterials/CreateRawMaterialsService";

class CreateRawMaterialsController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, quantity, user } = req.body;
        const createRawMaterialsService = container.resolve(CreateRawMaterialsService);
        const rawMaterial = await createRawMaterialsService.execute({ name, quantity, user });
        
        const objectResponse = {
            name: rawMaterial.name,
            quantity: rawMaterial.quantity,
            user: rawMaterial.user.name
        }

        return res.status(201).json(objectResponse);
    }
};

export { CreateRawMaterialsController };