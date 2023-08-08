import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public nombre: string;

    @Column()
    public apellido: string;

    @Column()
    public dni: number;

}
