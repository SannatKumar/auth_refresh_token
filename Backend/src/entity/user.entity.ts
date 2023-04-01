import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    //id: number = 0; column need to be initialized
    //or in constructor
    // id:number;
    // constructor(){
    //     this.id = 0
    // }
    //or like below-- This means we dont want to initialized
    @PrimaryGeneratedColumn()//Adding decorator here
    id! : number;

    @Column()
    first_name! : string;

    @Column()
    last_name! : string;

    @Column({
        unique: true
    })
    email! : string;

    @Column()
    password! : string;
}