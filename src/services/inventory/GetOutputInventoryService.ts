import { inject, injectable } from "tsyringe";
import { Inventory } from "../../entity/Inventory";
import { AppError } from "../../errors/AppError";
import { IInventoryRepository } from "../../repositories/inventory/InventoryRepository";

@injectable()
class GetOutputInventoryService {
    constructor(
        @inject("InventoryRepository")
        private inventoryRepository: IInventoryRepository
    ) {};

    async execute(userName: string): Promise<Inventory[]> {
        const inventories = await this.inventoryRepository.listByName(userName);

        if (!inventories) {
            throw new AppError(`This user doesn't have outputs products.`, 400);
        };


        return inventories;
    };
};

export { GetOutputInventoryService };