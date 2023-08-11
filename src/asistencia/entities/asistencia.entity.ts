
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('asistencia')
export class Asistencia {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public presente: string;

    @Column()
    public fecha: string;
  
    


    
}
