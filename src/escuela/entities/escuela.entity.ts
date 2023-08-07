import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    private id: number; 

    @Column()
    private nombre: string;

    @Column()
    private direccion: string;

    @Column()
    private ciudad: number;
}
