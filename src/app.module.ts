import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { CiudadController } from './ciudad/ciudad.controller';
import { CiudadService } from './ciudad/ciudad.service';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "escolar", 
    entities: [
      "dist/**/**.entity{.ts,.js}" 
    ],
    synchronize: true
  }),
    CiudadModule,
    EscuelaModule,
    EstudianteModule,
    ProfesorModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
