import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne} from "typeorm";
import { RawMaterials } from "./RawMaterials";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @OneToMany(() => RawMaterials, (rawMaterials) => rawMaterials.user)
    rawMaterials: RawMaterials[];

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
