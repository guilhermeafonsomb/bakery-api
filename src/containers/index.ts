import { container } from "tsyringe"; 
import { IUsersRepository, UsersRepository } from "../repositories/user/UsersRepository";
import { IRawMaterialsRepository, RawMaterialsRepository } from "../repositories/rawMaterials/RawMaterialsRepository";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IRawMaterialsRepository>('RawMaterialsRepository', RawMaterialsRepository);