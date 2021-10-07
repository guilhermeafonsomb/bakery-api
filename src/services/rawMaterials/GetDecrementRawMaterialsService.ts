import { inject, injectable } from "tsyringe";
import { RawMaterials } from "../../entity/RawMaterials";
import { AppError } from "../../errors/AppError";
import { IRawMaterialsRepository } from "../../repositories/rawMaterials/RawMaterialsRepository";

@injectable()
class GetRawMaterialsService {
    constructor(
        @inject("RawMaterialsRepository")
        private rawMaterialsRepository: IRawMaterialsRepository
    ) {};

    async execute(name: string): Promise<RawMaterials[]> {
        const rawMaterial = await this.rawMaterialsRepository.listByName(name);

        if (!rawMaterial) {
            throw new AppError(`This raw material doesn't exist.`, 404);
        };

        return rawMaterial;
    };
};

export { GetRawMaterialsService };