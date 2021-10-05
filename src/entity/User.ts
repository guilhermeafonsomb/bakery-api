import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Iventory } from "./Iventory";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    position: string;

    @ManyToOne(() => User, () => Iventory)
    iventory: Iventory;
}
