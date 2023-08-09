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
  imports: [TypeOrmModule.forFeature([Profesor])], 
  providers: [ProfesorService], 
  controllers: [ProfesorController], 
  exports: [ProfesorService], 
})
export class ProfesorModule {}
