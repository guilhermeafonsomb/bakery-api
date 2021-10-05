import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from "typeorm";

import { Product } from "./Product";
import { User } from "./User";

@Entity('iventories')
export class Iventory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Product, () => Iventory)
    products: Product[];

    @OneToMany(() => User, () => Iventory)
    users: User[];

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdDate: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
