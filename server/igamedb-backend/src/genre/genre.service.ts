import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private GenreRepository: Repository<Genre>,
  ) {}

  async findAll(): Promise<Genre[]> {
    return this.GenreRepository.find();
  }

  async findOne(id: number): Promise<Genre> {
    return this.GenreRepository.findOne({ where: { id } });
  }

  async create(Genre: Partial<Genre>): Promise<Genre> {
    const newGenre = this.GenreRepository.create(Genre);
    return this.GenreRepository.save(newGenre);
  }

  async update(id: number, Genre: Partial<Genre>): Promise<Genre> {
    await this.GenreRepository.update(id, Genre);
    return this.GenreRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.GenreRepository.delete(id);
  }
}
