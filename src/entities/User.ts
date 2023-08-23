import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
// here @entity will tell the type orm to map with the table for this given entity
export class User{
    @PrimaryGeneratedColumn()
  id:number;

  @Column()
  firstName: string;


  @Column()
  lastName: string;


  @Column()
  email:string;
  
  @Column()
  number:string

}