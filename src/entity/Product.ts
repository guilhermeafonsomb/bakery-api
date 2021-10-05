import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Iventory } from "./Iventory";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Iventory, () => Product, {
        eager: true
    })
    iventory: Iventory;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
