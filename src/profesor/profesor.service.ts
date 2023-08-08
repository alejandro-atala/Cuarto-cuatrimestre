import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {CreateProfesorDto} from './dto/create-profesor.dto'
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';


@Injectable()
export class ProfesorService {
  private profesores: Profesor[] = [];

  constructor(@InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>) { }


  createProfesor(profesor: CreateProfesorDto) {
    const newProfesor = this.profesorRepository.create(profesor)
    return this.profesorRepository.save(newProfesor);
  }

  findAll() {
    return this.profesorRepository.find();

  }

  findOne(id: number) {
    return this.profesorRepository.findOne({ where: { id } });
  }

  update(id: number, updateCiudad: UpdateProfesorDto) {
    return this.profesorRepository.update({ id }, updateCiudad)

  };


  remove(id: number) {
    return this.profesorRepository.delete({ id });
  }
}

