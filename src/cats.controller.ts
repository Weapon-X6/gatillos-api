import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action REturns all gatillos!';
  }
}
