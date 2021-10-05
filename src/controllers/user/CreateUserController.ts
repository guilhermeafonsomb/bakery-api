import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsersService } from "../../services/user/CreateUsersService";

class CreateUserController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, position } = req.body;
        const createUsersService = container.resolve(CreateUsersService);


        await createUsersService.execute({
            name, 
            position
        });

        return res.status(201).send();
    }
};

export { CreateUserController };