import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Storage } from "./Storage";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    position: string;

    @ManyToOne(() => User, () => Storage)
    storage: Storage;
}
