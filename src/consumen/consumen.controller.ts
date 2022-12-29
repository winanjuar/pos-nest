import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumenService } from './consumen.service';
import { CreateConsumanDto } from './dto/create-consuman.dto';
import { UpdateConsumanDto } from './dto/update-consuman.dto';

@Controller('consumen')
export class ConsumenController {
  constructor(private readonly consumenService: ConsumenService) {}

  @Post()
  create(@Body() createConsumanDto: CreateConsumanDto) {
    return this.consumenService.create(createConsumanDto);
  }

  @Get()
  findAll() {
    return this.consumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumanDto: UpdateConsumanDto) {
    return this.consumenService.update(+id, updateConsumanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumenService.remove(+id);
  }
}
