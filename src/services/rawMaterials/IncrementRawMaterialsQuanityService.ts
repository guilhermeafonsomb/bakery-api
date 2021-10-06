import { inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

interface IRequest {
    name: string;
    quantity: number;
}

@injectable()
class IncrementRawMaterialsQuanityService {
    constructor(
        @inject("RawMaterialsRepository")
        private rawMaterialsRepository: IRawMaterialsRepository
    ) {};

    async execute({ name, quantity }: IRequest): Promise<RawMaterials> {
        const rawMaterial = await this.rawMaterialsRepository.findByName(name);
        rawMaterial.quantity += quantity;
        const response = await this.rawMaterialsRepository.update({ rawMaterial });

        return response;
    };
};

export { IncrementRawMaterialsQuanityService };