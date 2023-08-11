import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';
import { Escuela } from './entities/escuela.entity';
import { CiudadModule } from 'src/ciudad/ciudad.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Ciudad, Escuela]), CiudadModule ],
  controllers: [EscuelaController],
  providers: [EscuelaService]
})
export class EscuelaModule { }
