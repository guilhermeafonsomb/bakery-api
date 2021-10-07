import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetOutputInventoryService } from "../../services/inventory/GetOutputInventoryService";

import { GetRawMaterialsService } from "../../services/rawMaterials/GetRawMaterialsService";
class GetRawMaterialsController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, user } = req.query;

        if (user) {
            const getOutputInventoryService = container.resolve(GetOutputInventoryService);
            const inventories = await getOutputInventoryService.execute(user as string);

            const mapResponse = inventories.map(element => ({
                id: element.id,
                name: element.productName,
                quantity: element.quantity,
                user: element.userName,
                createdDate: element.createdDate

            }))

            return res.status(200).json(mapResponse);
        };

        if (name) {
            const getRawMaterialsService = container.resolve(GetRawMaterialsService);
            const rawMaterial = await getRawMaterialsService.execute(name as string);

            const mapResponse = rawMaterial.map(element => ({
                id: element.id,
                name: element.name,
                quantity: element.quantity,
                user: element.user.name
            }));

            return res.status(200).json(mapResponse);
        };

    }
};

export { GetRawMaterialsController };