import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Storage } from "./Storage";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Product, () => Storage)
    storage: Storage;

   
}
