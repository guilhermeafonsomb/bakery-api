import { container, inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { AppError } from "../../errors/AppError";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

import { IUsersRepository } from "../../repositories/user/UsersRepository";
import { CreateInventoryService } from "../inventory/CreateInventoryService";
import { IncrementRawMaterialsQuanityService } from "./IncrementRawMaterialsQuanityService";

interface IRequest {
    name: string;
    quantity: number;
    user: string;
};

/*
 * Serviço criado para raw material;
 * Realizando algumas validações caso o raw material já existir;
*/

@injectable()
class CreateRawMaterialsService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("RawMaterialsRepository")
        private rawMaterialsRepository: IRawMaterialsRepository
    ) {};

    async execute({ name, quantity, user }: IRequest): Promise<RawMaterials> {
        const userAlreadyExist = await this.usersRepository.findByName(user);
        const rawMaterialAlreadyExist = await this.rawMaterialsRepository.findByName(name);
        const incrementRawMaterialsQuanityService = container.resolve(IncrementRawMaterialsQuanityService);
        const createInventoryService = container.resolve(CreateInventoryService);

        if (!userAlreadyExist) {
            throw new AppError(`Is necessary a user to insert new raw materials. PLEASE CREATE`, 401);
        };

        if (rawMaterialAlreadyExist) {
            const updatedResponse = await incrementRawMaterialsQuanityService.execute({name, quantity});
            
            await createInventoryService.execute({
                productName: name,
                quantity,
                userName: userAlreadyExist.name,
                status: 'input'
            });

            return updatedResponse;
        };
        

         const createdResponseRawMaterial = await this.rawMaterialsRepository.create({ name, quantity, user: userAlreadyExist});

         await createInventoryService.execute({
             productName: name,
             quantity,
             userName: userAlreadyExist.name,
             status: 'input'
         });

         return createdResponseRawMaterial;

    };
};

export { CreateRawMaterialsService };