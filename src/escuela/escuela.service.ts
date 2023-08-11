import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';



@Injectable()
export class EscuelaService {
  private escuelas: Escuela[] = [];


  constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>) { }


  async createEscuela(escuela: CreateEscuelaDto) {
    const ciudadFound = await this.escuelaRepository.findOne({
      where: {
        nombre: escuela.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('La escuela ya existe', HttpStatus.CONFLICT)
    }
    const newEscuela = this.escuelaRepository.create(escuela)
    return this.escuelaRepository.save(newEscuela);
  }

  async findAll() : Promise<Escuela[]>{
    let criterio : FindManyOptions = {relations: ['ciudad']}
    let escuelas :Escuela[] = await this.escuelaRepository.find(criterio);
    return escuelas;

  }

  async findOne(id: number) {
    let criterio :FindOneOptions = {relations: ['ciudad'], where: {id}};
    let escuelaFound :Escuela = await this.escuelaRepository.findOne(criterio); 
 
    if (!escuelaFound) {
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    return escuelaFound;
  }
  

  async update(id: number, update: UpdateEscuelaDto) {
    const escuelaFound = await this.escuelaRepository.findOne({ where: { id } });

    if(!escuelaFound){
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    const updateEscuela = Object.assign(escuelaFound, update);
    return this.escuelaRepository.save(updateEscuela)
  };


  async remove(id: number) {
    const escuelaFound = await this.escuelaRepository.findOne({ where: { id } });
 
    if(!escuelaFound){
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.escuelaRepository.delete({id});
  }
}
