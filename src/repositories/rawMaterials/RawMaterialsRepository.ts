import { getRepository, Repository } from "typeorm";

import { RawMaterials } from "../../entity/RawMaterials";
import { User } from "../../entity/User";


interface IRawMaterialsRepository {
    create( user : ICreateRawMaterialsDTO): Promise<void>;    
}

interface ICreateRawMaterialsDTO {
    user: User;
}

class RawMaterialsRepository implements IRawMaterialsRepository {
    private repository: Repository<RawMaterials>

    constructor() {
        this.repository = getRepository(RawMaterials);
    }

    async create(user: ICreateRawMaterialsDTO) {
        const rawMaterial = this.repository.create(user);

        await this.repository.save(rawMaterial);
    }
};

export { RawMaterialsRepository, IRawMaterialsRepository, ICreateRawMaterialsDTO };