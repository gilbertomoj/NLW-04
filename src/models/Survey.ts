import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity('')
class Survey{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    tittle : string;

    @Column()
    description : string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Survey }; 