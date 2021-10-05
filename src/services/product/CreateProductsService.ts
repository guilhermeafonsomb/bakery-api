import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/product/ProductsRepository";

@injectable()
    class CreateProductsService {
        constructor (
            @inject("ProductsRepository")
            private productRepository: IProductsRepository) {};

        async execute(name: string): Promise<void> {
           const productAlreadyExist = await this.productRepository.findByName(name);

            if(productAlreadyExist) {
                throw new Error (`Product ${name} already exist.`)
            };

            await this.productRepository.create(name);
        };
    };

export { CreateProductsService };