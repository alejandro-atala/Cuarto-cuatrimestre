
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('clases')
export class Clases {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column({unique : true})
    public nombre: string;

    @Column()
    public alumnos: number;
  
    


    
}
