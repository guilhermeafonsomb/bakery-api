import { container } from "tsyringe"; 
import { IUsersRepository, UsersRepository } from "../repositories/user/UsersRepository";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);