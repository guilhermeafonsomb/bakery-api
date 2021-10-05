import { inject, injectable } from "tsyringe";

import { ICreateProductsDTO, IProductsRepository } from "../../repositories/product/ProductsRepository";

@injectable()
    class CreateProductsService {
        constructor (
            @inject("ProductsRepository")
            private productRepository: IProductsRepository) {};

        async execute({ name, quantity = 0 }: ICreateProductsDTO): Promise<void> {
           const productAlreadyExist = await this.productRepository.findByName(name);

            if(productAlreadyExist) {
                throw new Error (`Product ${name} already exist.`)  // TO DO realizar o uptade de quantidade
            };

            await this.productRepository.create({ name, quantity });
        };
    };

export { CreateProductsService };