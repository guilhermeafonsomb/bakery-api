import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductsService } from "../../services/product/CreateProductsService";

class CreateProductController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createProductsService = container.resolve(CreateProductsService);


        await createProductsService.execute(name);

        return res.status(201).send();
    }
};

export { CreateProductController };