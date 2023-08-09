// import { Module } from '@nestjs/common';
// import { EstudianteService } from './estudiante.service';
// import { EstudianteController } from './estudiante.controller';

// @Module({
//   controllers: [EstudianteController],
//   providers: [EstudianteService]
// })
// export class EstudianteModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])], 
  providers: [EstudianteService], 
  controllers: [EstudianteController], 
  exports: [EstudianteService],
})
export class EstudianteModule {}
