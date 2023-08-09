import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createClasesDTO } from './dto/create-clase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clases } from './entities/clase.entity';
import { updateClasesDTO } from './dto/update-clase.dto';


@Injectable()
export class ClasesService {
  private clases: Clases[] = [];

  constructor(@InjectRepository(Clases) private readonly clasesRepository: Repository<Clases>) { }


  async createClases(clases: createClasesDTO) {
    const ciudadFound = await this.clasesRepository.findOne({
      where: {
        nombre: clases.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('La clase ya existe', HttpStatus.CONFLICT)
    }
    const newClases = this.clasesRepository.create(clases)
    return this.clasesRepository.save(newClases);
  }

  findAll() {
    return this.clasesRepository.find();

  }

  async findOne(id: number) {
    const clasesFound = await this.clasesRepository.findOne({ where: { id } });

    if (!clasesFound) {
      return new HttpException('Clase no encontrada', HttpStatus.NOT_FOUND);
    }
    return clasesFound;
  }
  

  async update(id: number, update: updateClasesDTO) {
    const clasesFound = await this.clasesRepository.findOne({ where: { id } });

    if(!clasesFound){
      return new HttpException('Clase no encontrada', HttpStatus.NOT_FOUND);
    }
    const updateEscuela = Object.assign(clasesFound, update);
    return this.clasesRepository.save(updateEscuela)
  };


  async remove(id: number) {
    const clasesFound = await this.clasesRepository.findOne({ where: { id } });
 
    if(!clasesFound){
      return new HttpException('Clase no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.clasesRepository.delete({id});
  }
}
