import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';

@Controller('Genre')
export class GenreController {
  constructor(private readonly GenreService: GenreService) {}

  //get all Genres
  @Get()
  async findAll(): Promise<Genre[]> {
    return this.GenreService.findAll();
  }

  //get Genre by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Genre> {
    const Genre = await this.GenreService.findOne(id);
    if (!Genre) {
      throw new NotFoundException('Genre does not exist!');
    } else {
      return Genre;
    }
  }

  //create Genre
  @Post()
  async create(@Body() Genre: Genre): Promise<Genre> {
    return this.GenreService.create(Genre);
  }

  //update Genre
  @Put(':id')
  async update(@Param('id') id: number, @Body() Genre: Genre): Promise<any> {
    return this.GenreService.update(id, Genre);
  }

  //delete Genre
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Genre does not exist
    const Genre = await this.GenreService.findOne(id);
    if (!Genre) {
      throw new NotFoundException('Genre does not exist!');
    }
    return this.GenreService.delete(id);
  }
}
