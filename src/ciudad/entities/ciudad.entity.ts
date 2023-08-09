import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('ciudades')
export class Ciudad {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column({unique : true})
    public nombre: string;

    @Column()
    public codigoPostal: number;
  
    

    @OneToMany(type => Escuela, escuela =>escuela.ciudad)
    @JoinColumn()
    public escuela : Escuela[];
    
}


