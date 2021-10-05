import { getRepository, Repository } from "typeorm";

import { User } from "../../entity/User";

interface IUsersRepository {
    create({ name, position }: ICreateUserDTO): Promise<void>;
    findByName(name: string): Promise<User>;
    
}

interface ICreateUserDTO {
    name: string;
    position: string;
}

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, position }: ICreateUserDTO) {
        const user = this.repository.create({
            name,
            position
        });

        await this.repository.save(user);
    }

    async findByName(name: string ): Promise<User> {
        const user = await this.repository.findOne({ name });

        return user;
    }
}

export { UsersRepository, IUsersRepository, ICreateUserDTO };