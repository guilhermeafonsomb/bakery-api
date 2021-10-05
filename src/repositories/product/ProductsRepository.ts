import { getRepository, Repository } from "typeorm";

import { Product } from "../../entity/Product";

interface ICreateProductsDTO {
    name: string;
    quantity: number;    
}
interface IProductsRepository {
    create({ name, quantity }: ICreateProductsDTO): Promise<void>;
    findByName(name: string): Promise<Product>;
    
}

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>

    constructor() {
        this.repository = getRepository(Product);
    }

    async create({ name, quantity }: ICreateProductsDTO) {
        const product = this.repository.create({ 
            name, 
            quantity
        });

        await this.repository.save(product);
    }

    async findByName(name: string ): Promise<Product> {
        const product = await this.repository.findOne({ name });

        return product;
    }
};

export { ProductsRepository, IProductsRepository, ICreateProductsDTO };