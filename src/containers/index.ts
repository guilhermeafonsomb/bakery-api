import { container } from "tsyringe"; 
import { IUsersRepository, UsersRepository } from "../repositories/user/UsersRepository";
import { IProductsRepository, ProductsRepository } from "../repositories/product/ProductsRepository";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IProductsRepository>('ProductsRepository', ProductsRepository);