import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';


@Injectable()
export class EscuelaService {
  private escuelas: Escuela[] = [];


  constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>) { }


  createEscuela(escuela: CreateEscuelaDto) {
    const newEscuela = this.escuelaRepository.create(escuela)
    return this.escuelaRepository.save(newEscuela);
  }

  findAll() {
    return this.escuelaRepository.find();

  }

  findOne(id: number) {
    return this.escuelaRepository.findOne({ where: { id } });
  }

  update(id: number, updateEscuela: UpdateEscuelaDto) {
    return this.escuelaRepository.update({ id }, updateEscuela)

  };


  remove(id: number) {
    return this.escuelaRepository.delete({ id });
  }
}
