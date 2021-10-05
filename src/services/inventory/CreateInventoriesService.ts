import { inject, injectable } from "tsyringe";

import { IInventoriesRepository, ICreateInventoriesDTO } from "../../repositories/invetory/InventoriesRepository";
import { IProductsRepository } from "../../repositories/product/ProductsRepository";
import { IUsersRepository } from "../../repositories/user/UsersRepository";

interface IRequest {
    name: string;
    quantity: number;
    user: string;
}

@injectable()
    class CreateInventoriesService {
        constructor (
            @inject("UserRepository")
            private userRepository: IUsersRepository,
            @inject("ProductRepository")
            private productRepository: IProductsRepository
            ) {};
            

        async execute({ name, quantity, user  }: IRequest): Promise<void> {
            const productAlreadyExist = this.productRepository.findByName(name)

            if(!productAlreadyExist) {
                await this.productRepository.create(name);
            };

        };
    };

export { CreateInventoriesService };