import { container, inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { AppError } from "../../errors/AppError";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

import { IUsersRepository } from "../../repositories/user/UsersRepository";
import { DecrementRawMaterialsQuanityService } from "./DecrementRawMaterialsQuanityService";

interface IRequest {
    id: string;
    quantity: number;
    user: string;
}

@injectable()
class WriteOffRawMaterialsService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("RawMaterialsRepository")
        private rawMaterialsRepository: IRawMaterialsRepository
    ) {};

    async execute({ id, quantity, user }: IRequest): Promise<RawMaterials> {
        const userAlreadyExist = await this.usersRepository.findByName(user);
        const rawMaterialAlreadyExist = await this.rawMaterialsRepository.findById(id);
        const decrementRawMaterialsQuanityService = container.resolve(DecrementRawMaterialsQuanityService);

        if (!userAlreadyExist) {
            throw new AppError(`Is necessary a user to insert new raw materials. PLEASE CREATE`, 401);
        };

        if (!rawMaterialAlreadyExist) {
            throw new AppError(`Is necessary a existing raw material to write off . PLEASE CREATE`, 401);
        };
        
        if (rawMaterialAlreadyExist) {
            const updatedResponse = await decrementRawMaterialsQuanityService.execute({id, quantity});

            return updatedResponse;
        };

         const writeOffResponseRawMaterial = await this.rawMaterialsRepository.create({ id, quantity, user: userAlreadyExist});

         return writeOffResponseRawMaterial;

    };
};

export { WriteOffRawMaterialsService };