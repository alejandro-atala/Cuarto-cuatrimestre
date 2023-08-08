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
  imports: [TypeOrmModule.forFeature([Estudiante])], // Importa el repositorio para que esté disponible en el contexto
  providers: [EstudianteService], // Registra el servicio como proveedor
  controllers: [EstudianteController], // Registra el controlador si lo tienes
  exports: [EstudianteService], // Si deseas exportar el servicio para otros módulos
})
export class EstudianteModule {}
