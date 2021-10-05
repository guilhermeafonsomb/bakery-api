import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn} from "typeorm";

import { Product } from "./Product";
import { User } from "./User";

@Entity('inventories')
export class Inventory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Product, (product) => product.inventory)
    @JoinColumn()
    product: Product;

    @OneToOne(() => User, (user) => user.inventory)
    @JoinColumn()
    user: User;

    quantity: number;

    @CreateDateColumn()
    createdDate: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
