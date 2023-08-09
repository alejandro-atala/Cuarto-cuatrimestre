import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {CreateProfesorDto} from './dto/create-profesor.dto'
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';


@Injectable()
export class ProfesorService {
  
  private profesores: Profesor[] = [];

  constructor(@InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>) { }


  async createProfesor(profesor: CreateProfesorDto) {
    const ciudadFound = await this.profesorRepository.findOne({
      where: {
        nombre: profesor.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('El profesor ya existe', HttpStatus.CONFLICT)
    }
    const newProfesor = this.profesorRepository.create(profesor)
    return this.profesorRepository.save(newProfesor);
  }



  findAll() {
    return this.profesorRepository.find();

  }

  async findOne(id: number) {
    const profesorFound = await this.profesorRepository.findOne({ where: { id } });

    if (!profesorFound) {
      return new HttpException('Profesor no encontrado', HttpStatus.NOT_FOUND);
    }
    return profesorFound;
  }
  


  async update(id: number, update: UpdateProfesorDto) {
    const profesorFound = await this.profesorRepository.findOne({ where: { id } });

    if(!profesorFound){
      return new HttpException('Profesor no encontrada', HttpStatus.NOT_FOUND);
    }
    const updateCiudad = Object.assign(profesorFound, update);
    return this.profesorRepository.save(updateCiudad)
  };
  


  async remove(id: number) {
    const profesorFound = await this.profesorRepository.findOne({ where: { id } });
 
    if(!profesorFound){
      return new HttpException('Profesor no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.profesorRepository.delete({id});
  }
}

