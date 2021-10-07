import { container, inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";
import { CreateInventoryService } from "../inventory/CreateInventoryService";

interface IRequest {
    id: string;
    quantity: number;
}

@injectable()
class DecrementRawMaterialsQuanityService {
    constructor(
        @inject("RawMaterialsRepository")
        private rawMaterialsRepository: IRawMaterialsRepository
    ) {};

    async execute({ id, quantity }: IRequest): Promise<RawMaterials> {
        const rawMaterial = await this.rawMaterialsRepository.findById(id);
        const createInventoryService = container.resolve(CreateInventoryService);
        rawMaterial.quantity -= quantity;
        const response = await this.rawMaterialsRepository.update({ rawMaterial });

        // inventario responsavel por marcar como output;
        await createInventoryService.execute({
            productName: rawMaterial.name,
            quantity,
            userName: rawMaterial.user.name,
            status: 'output'
        })

        return response;
    };
};

export { DecrementRawMaterialsQuanityService };