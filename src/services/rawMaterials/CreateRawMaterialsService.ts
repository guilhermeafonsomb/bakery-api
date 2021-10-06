import { container, inject, injectable } from "tsyringe";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

import { IUsersRepository } from "../../repositories/user/UsersRepository";

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


    async execute({ name, quantity, user }: IRequest): Promise<void> {
        const userAlreadyExist = await this.usersRepository.findByName(user);


        if (!userAlreadyExist) {
            throw new Error(`Is necessary a user to insert new raw materials. PLEASE CREATE`);
        };

        if (userAlreadyExist.position !== "STOCKIST") {
            throw new Error(`Must be a stockist to insert new raw materials.`);
        };

    };
};

export { CreateRawMaterialsService };