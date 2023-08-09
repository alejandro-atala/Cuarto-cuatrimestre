import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clases } from './entities/clase.entity';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Clases, Ciudad, Escuela
    ])
  ],
  controllers: [ClasesController],
  providers: [ClasesService]
})
export class ClasesModule {}
