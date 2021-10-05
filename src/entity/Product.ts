import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Inventory } from "./Inventory";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @OneToOne(() => Inventory, (inventory) => inventory.product)
    inventory: Inventory;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
