import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('ciudades')
export class Ciudad {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public nombre: string;

    @Column()
    public codigoPostal: number;
  
    // @Column() 
    // public idCiudad: number; 
    

    @OneToMany(() => Escuela, escuela =>escuela.ciudad)
    //@JoinColumn()
    public escuelas : Escuela[];
    
}


