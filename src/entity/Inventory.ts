import { v4 as uuid } from 'uuid';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity('inventory')
export class Inventory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productName: string;
    
    @Column()
    userName: string;

    @Column()
    quantity: number;

    @Column()
    status: 'input' | 'output';

    @CreateDateColumn()
    createdDate: Date;

    constructor() {
        if(!this.i) {
            this.id = uuid();
        }
    }

}
