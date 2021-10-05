import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Iventory } from "./Iventory";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @ManyToOne(() => Iventory, () => User, {
        eager: true
    })
    iventory: Iventory;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
