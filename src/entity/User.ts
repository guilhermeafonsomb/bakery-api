import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Inventory } from "./Inventory";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @OneToOne(() => Inventory, (inventory) => inventory.user)
    inventory: Inventory;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
