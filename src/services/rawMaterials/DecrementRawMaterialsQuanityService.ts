import { inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

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
        rawMaterial.quantity -= quantity;
        const response = await this.rawMaterialsRepository.update({ rawMaterial });

        return response;
    };
};

export { DecrementRawMaterialsQuanityService };