import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private nombre: string;

    @Column()
    private direccion: string;


    @ManyToOne(type => Ciudad, ciudad => ciudad.escuelas)
    @JoinColumn()
    public ciudad: Ciudad
}
