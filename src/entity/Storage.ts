import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Storage {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Product, () => Storage)
    product: Product[];

    @OneToMany(() => User, () => Storage)
    user: User[];

    @Column()
    quantity: number;

    @Column()
    createdDate: Date;

}
