import { getRepository, Repository } from "typeorm";

import { Product } from "../../entity/Product";

interface IProductsRepository {
    create(name: string): Promise<void>;
    findByName(name: string): Promise<Product>;
    
}

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>

    constructor() {
        this.repository = getRepository(Product);
    }

    async create(name: string) {
        const product = this.repository.create({ name });

        await this.repository.save(product);
    }

    async findByName(name: string ): Promise<Product> {
        const product = await this.repository.findOne({ name });

        return product;
    }
};

export { ProductsRepository, IProductsRepository };