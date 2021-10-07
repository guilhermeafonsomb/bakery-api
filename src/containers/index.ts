import { container } from "tsyringe"; 
import { IUsersRepository, UsersRepository } from "../repositories/user/UsersRepository";
import { IRawMaterialsRepository, RawMaterialsRepository } from "../repositories/rawMaterials/RawMaterialsRepository";
import { IInventoryRepository, InventoryRepository } from "../repositories/inventory/InventoryRepository";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IRawMaterialsRepository>('RawMaterialsRepository', RawMaterialsRepository);
container.registerSingleton<IInventoryRepository>('InventoryRepository', InventoryRepository);