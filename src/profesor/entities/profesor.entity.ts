import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    
    @PrimaryGeneratedColumn()
    private id: number; 

    @Column()
    private nombre: string;

    @Column()
    private apellido: string;

    @Column()
    private dni: number;

}
