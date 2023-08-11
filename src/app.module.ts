import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { ClasesModule } from './clases/clases.module';
import { MateriasModule } from './materias/materias.module';
import { AsistenciaModule } from './asistencia/asistencia.module';


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
    ProfesorModule,
    ClasesModule,
    MateriasModule,
    AsistenciaModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
