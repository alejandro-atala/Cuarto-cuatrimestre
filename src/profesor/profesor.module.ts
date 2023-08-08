// import { Module } from '@nestjs/common';
// import { ProfesorService } from './profesor.service';
// import { ProfesorController } from './profesor.controller';

// @Module({
//   controllers: [ProfesorController],
//   providers: [ProfesorService]
// })
// export class ProfesorModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorService} from './profesor.service';
import { ProfesorController } from './profesor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])], // Importa el repositorio para que esté disponible en el contexto
  providers: [ProfesorService], // Registra el servicio como proveedor
  controllers: [ProfesorController], // Registra el controlador si lo tienes
  exports: [ProfesorService], // Si deseas exportar el servicio para otros módulos
})
export class ProfesorModule {}
