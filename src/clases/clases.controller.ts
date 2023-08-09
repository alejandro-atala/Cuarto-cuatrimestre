import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { createClasesDTO } from './dto/create-clase.dto';
import { updateClasesDTO } from './dto/update-clase.dto';

@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) {}

  @Post()
  create(@Body() createClaseDto: createClasesDTO) {
    return this.clasesService.createClases(createClaseDto);
  }

  @Get()
  findAll() {
    return this.clasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClaseDto: updateClasesDTO) {
    return this.clasesService.update(+id, updateClaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clasesService.remove(+id);
  }
}
