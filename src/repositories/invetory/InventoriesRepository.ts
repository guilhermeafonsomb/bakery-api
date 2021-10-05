import { getRepository, Repository } from "typeorm";

import { Inventory } from "../../entity/Inventory";
import { Product } from "../../entity/Product";
import { User } from "../../entity/User";


interface IInventoriesRepository {
    create( {product, quantity, user}: ICreateInventoriesDTO): Promise<void>;    
}

interface ICreateInventoriesDTO {
    product: Product;
    quantity: number;
    user: User;
}

class InventoriesRepository implements IInventoriesRepository {
    private repository: Repository<Inventory>

    constructor() {
        this.repository = getRepository(Inventory);
    }

    async create({ product, quantity, user }: ICreateInventoriesDTO) {
        const inventory = this.repository.create({
            product,
            user,
            quantity
        });

        await this.repository.save(inventory);
    }
};

export { InventoriesRepository, IInventoriesRepository, ICreateInventoriesDTO };