import { inject, injectable } from "tsyringe";
import { Inventory } from "../../entity/Inventory";

import { IInventoryRepository } from '../../repositories/inventory/InventoryRepository'

interface IRequest {
    productName: string;
    userName: string;
    quantity: number;
    status: 'input' | 'output';
}

@injectable()
class CreateInventoryService {
    constructor(
        @inject("InventoryRepository")
        private inventoryRepository: IInventoryRepository,
    ) {};

    async execute({ productName, userName, quantity, status }: IRequest): Promise<Inventory> { 
        const createInventory = await this.inventoryRepository.create({ productName, userName, quantity, status })

        return createInventory;
    };
};

export { CreateInventoryService };