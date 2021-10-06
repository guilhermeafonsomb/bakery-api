import { getRepository, Repository } from "typeorm";

import { RawMaterials } from "../../entity/RawMaterials";
import { User } from "../../entity/User";

interface ICreateRawMaterialsDTO {
    user: User;
    name: string;
    quantity: number;
}

interface IUpdateRawMaterial {
    rawMaterial: RawMaterials;
}

interface IRawMaterialsRepository {
    findByName( name: string): Promise<RawMaterials>;    
    update({ rawMaterial }: IUpdateRawMaterial): Promise<RawMaterials>;    
    create( { user, name, quantity } : ICreateRawMaterialsDTO): Promise<RawMaterials>;    
    listByName(name: string): Promise<RawMaterials[]>;    
}
class RawMaterialsRepository implements IRawMaterialsRepository {
    private repository: Repository<RawMaterials>;

    constructor() {
        this.repository = getRepository(RawMaterials);
    };

    async findByName(name: string) {
        const rawMaterial = await this.repository.findOne({name: name});

        return rawMaterial;
    };

    async update({ rawMaterial }: IUpdateRawMaterial) {

        const rawMaterials = await this.repository.save(rawMaterial);

        return rawMaterials;
    };

    async create( { user, name, quantity }: ICreateRawMaterialsDTO) {
        const rawMaterial = this.repository.create( { user, name, quantity });

        await this.repository.save(rawMaterial);

        return rawMaterial;
    };

    async listByName(name: string) {
        const rawMaterial = await this.repository.find({name: name});

        return rawMaterial;
    };

    
};

export { RawMaterialsRepository, IRawMaterialsRepository, ICreateRawMaterialsDTO };