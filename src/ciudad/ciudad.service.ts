import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createCiudadDTO } from './dto/create-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { updateCiudadDTO } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadService {
  private ciudades: Ciudad[] = [];

  constructor(@InjectRepository(Ciudad) private readonly ciudadRepository: Repository<Ciudad>) { }


  async createCiudad(ciudad: createCiudadDTO) {

    const ciudadFound = await this.ciudadRepository.findOne({
      where: {
        nombre: ciudad.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('La ciudad ya existe', HttpStatus.CONFLICT)
    }

    const newCiudad = this.ciudadRepository.create(ciudad)
    return this.ciudadRepository.save(newCiudad);
  }

  findAll() {
    return this.ciudadRepository.find();

  }

  async findOne(id: number) {
    const ciudadFound = await this.ciudadRepository.findOne({ where: { id } });

    if (!ciudadFound) {
      return new HttpException('Ciudad no encontrada', HttpStatus.NOT_FOUND);
    }
    return ciudadFound;
  }


 async update(id: number, update: updateCiudadDTO) {
    const ciudadFound = await this.ciudadRepository.findOne({ where: { id } });

    if(!ciudadFound){
      return new HttpException('Ciudad no encontrada', HttpStatus.NOT_FOUND);
    }
    const updateCiudad = Object.assign(ciudadFound, update);
    return this.ciudadRepository.save(updateCiudad)
  };


  async remove(id: number) {
    const ciudadFound = await this.ciudadRepository.findOne({ where: { id } });
 
    if(!ciudadFound){
      return new HttpException('Ciudad no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.ciudadRepository.delete({id});
  }
}
