import { getRepository, Repository } from "typeorm";
import { Inventory } from "../../entity/Inventory";

interface ICreateInventoryDTO {
    productName: string;
    userName: string;
    quantity: number;
    status: 'input' | 'output';
};

interface IInventoryRepository {
    create({ productName, userName, quantity, status }: ICreateInventoryDTO): Promise<Inventory>;
    listByName(productName: string): Promise<Inventory[]>;
}
class InventoryRepository implements IInventoryRepository {
    private repository: Repository<Inventory>;

    constructor() {
        this.repository = getRepository(Inventory);
    };

    async create({ productName, userName, quantity, status }: ICreateInventoryDTO) {
        const inventory = this.repository.create({ productName, userName, quantity, status });

        await this.repository.save(inventory);

        return inventory;
    };

    async listByName(userName: string) {
        const inventory = await this.repository.find({
            where: {
                userName: userName,
                status: 'output'
            }
        });

        return inventory;
    };

};

export { InventoryRepository, IInventoryRepository, ICreateInventoryDTO };