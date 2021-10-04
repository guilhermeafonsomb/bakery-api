import "reflect-metadata";
import {createConnection} from "typeorm";
import { Storage } from "./entity/Storage";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const storage = new Storage();
    storage.product = "Limão";
    storage.quantity = 5;
    storage.user = "Guilherme";
    await connection.manager.save(storage);
    console.log("Saved a new user with id: " + storage.id);

    console.log("Loading users from the database...");
    const products = await connection.manager.find(Storage);
    console.log("Loaded users: ", products);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
