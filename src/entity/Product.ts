import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Iventory } from "./Iventory";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Product, () => Iventory)
    iventory: Iventory;

   
}
