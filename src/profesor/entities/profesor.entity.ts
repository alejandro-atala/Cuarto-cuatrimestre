import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profesores')
export class Profesor {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public nombre: string;

    @Column()
    public apellido: string;

    @Column()
    public dni: number;

}
