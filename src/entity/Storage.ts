import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Storage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;

    @Column()
    quantity: number;

    @Column()
    user: string;

}
