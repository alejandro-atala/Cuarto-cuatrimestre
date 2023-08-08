import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';


@Injectable()
export class EstudianteService {
  private estudiantes: Estudiante[] = [];

  constructor(@InjectRepository(Estudiante) private readonly estudianteRepository: Repository<Estudiante>) { }


  createEstudiante(estudiante: CreateEstudianteDto) {
    const newEstudiante = this.estudianteRepository.create(estudiante)
    return this.estudianteRepository.save(newEstudiante);
  }

  findAll() {
    return this.estudianteRepository.find();

  }

  findOne(id: number) {
    return this.estudianteRepository.findOne({ where: { id } });
  }

  update(id: number, updateEstudiante: UpdateEstudianteDto) {
    return this.estudianteRepository.update({ id }, updateEstudiante)

  };


  remove(id: number) {
    return this.estudianteRepository.delete({ id });
  }
}