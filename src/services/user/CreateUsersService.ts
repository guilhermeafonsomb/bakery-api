import { inject, injectable } from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/user/UsersRepository";

@injectable()
    class CreateUsersService {
        constructor (
            @inject("UsersRepository")
            private userRepository: IUsersRepository) {};

        async execute({ name, position }: ICreateUserDTO): Promise<void> {
           const userAlreadyExist = await this.userRepository.findByName(name);

            if(userAlreadyExist) {
                throw new Error (`User ${name} already exist.`)
            };

            await this.userRepository.create({
                name, 
                position
            });
        };
    };

export { CreateUsersService };