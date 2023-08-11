import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nombre: string;

    @Column()
    public direccion: string;

    @Column()
    public ciudadId: number;


    @ManyToOne(() => Ciudad, ciudad => ciudad.escuelas)
   // @JoinColumn()
    public ciudad: Ciudad; 
}

