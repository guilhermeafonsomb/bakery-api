import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne} from "typeorm";

import { User } from "./User";

@Entity('rawMaterials')
export class RawMaterials {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @ManyToOne(() => User, (user) => user.rawMaterials, {
        eager: true,
        onUpdate: 'CASCADE'
    })
    user: User;

    quantity: number;

    @CreateDateColumn()
    createdDate: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
