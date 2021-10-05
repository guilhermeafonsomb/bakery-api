import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from "typeorm";

import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Iventory {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Product, () => Iventory)
    product: Product[];

    @OneToMany(() => User, () => Iventory)
    user: User[];

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdDate: Date;

}
