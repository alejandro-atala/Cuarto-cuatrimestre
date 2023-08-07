import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    
    @PrimaryGeneratedColumn()
    private id: number; 

    @Column()
    private nombre: string;

    @Column()
    private apellido: string;

    @Column()
    private dni: number;

}
