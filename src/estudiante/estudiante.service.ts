import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from "./entities/estudiante.entity";
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';



@Injectable()
export class EstudianteService {
  private estudiantes: Estudiante[] = [];

  constructor(@InjectRepository(Estudiante) private readonly estudianteRepository: Repository<Estudiante>) { }


  async createEstudiante(estudiante: CreateEstudianteDto) {
    const ciudadFound = await this.estudianteRepository.findOne({
      where: {
        nombre: estudiante.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('La ciudad ya existe', HttpStatus.CONFLICT)
    }
    const newEstudiante = this.estudianteRepository.create(estudiante)
    return this.estudianteRepository.save(newEstudiante);
  }

  findAll() {
    return this.estudianteRepository.find();

  }

  async findOne(id: number) {
    const ciudadFound = await this.estudianteRepository.findOne({ where: { id } });

    if (!ciudadFound) {
      return new HttpException('Ciudad no encontrada', HttpStatus.NOT_FOUND);
    }
    return ciudadFound;
  }
  


  async update(id: number, update: UpdateEstudianteDto) {
    const estudianteFound = await this.estudianteRepository.findOne({ where: { id } });

    if(!estudianteFound){
      return new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }
    const updateEstudiante = Object.assign(estudianteFound, update);
    return this.estudianteRepository.save(updateEstudiante)
  };


  async remove(id: number) {
    const estudianteFound = await this.estudianteRepository.findOne({ where: { id } });
 
    if(!estudianteFound){
      return new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.estudianteRepository.delete({id});
  }
}