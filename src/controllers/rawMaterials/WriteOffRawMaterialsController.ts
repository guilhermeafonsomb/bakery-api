import { Request, Response } from "express";
import { container } from "tsyringe";
import { WriteOffRawMaterialsService } from "../../services/rawMaterials/WriteOffRawMaterialsService";

class WriteOffRawMaterialsController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { user, quantity } = req.body;
        const writeOffRawMaterialsService = container.resolve(WriteOffRawMaterialsService);
        const rawMaterial = await writeOffRawMaterialsService.execute({id, user, quantity});

        const ObjectResponse = {
            quantity: rawMaterial.quantity,
            user: rawMaterial.user.name,
        }

        return res.status(200).json(ObjectResponse);
    }
};

export { WriteOffRawMaterialsController };