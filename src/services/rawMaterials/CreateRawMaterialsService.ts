import { container, inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

import { IUsersRepository } from "../../repositories/user/UsersRepository";
import { AddRawMaterialsQuanityService } from "./AddRawMaterialsQuanityService";

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
        const addRawMaterialsQuanityService = container.resolve(AddRawMaterialsQuanityService);

        if (!userAlreadyExist) {
            throw new Error(`Is necessary a user to insert new raw materials. PLEASE CREATE`);
        };

        if (userAlreadyExist.position !== "STOCKIST") {
            throw new Error(`Must be a stockist to insert new raw materials.`);
        };

        if (rawMaterialAlreadyExist) {
            const updatedResponse = await addRawMaterialsQuanityService.execute({name, quantity});

            return updatedResponse;
        };

         const createdResponseRawMaterial = await this.rawMaterialsRepository.create({ name, quantity, user: userAlreadyExist});

         return createdResponseRawMaterial;

    };
};

export { CreateRawMaterialsService };