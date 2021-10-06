import { container, inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { AppError } from "../../errors/AppError";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

import { IUsersRepository } from "../../repositories/user/UsersRepository";
import { IncrementRawMaterialsQuanityService } from "./IncrementRawMaterialsQuanityService";

interface IRequest {
    name: string;
    quantity: number;
    user: string;
}

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

        if (!userAlreadyExist) {
            throw new AppError(`Is necessary a user to insert new raw materials. PLEASE CREATE`, 401);
        };
        
        if (userAlreadyExist.position !== "STOCKIST") {
            throw new AppError(`Must be a stockist to insert new raw materials.`, 401);
        };


        if (rawMaterialAlreadyExist) {
            const updatedResponse = await incrementRawMaterialsQuanityService.execute({name, quantity});

            return updatedResponse;
        };
        

         const createdResponseRawMaterial = await this.rawMaterialsRepository.create({ name, quantity, user: userAlreadyExist});

         return createdResponseRawMaterial;

    };
};

export { CreateRawMaterialsService };