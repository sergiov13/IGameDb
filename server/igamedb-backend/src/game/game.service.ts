import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private GameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.GameRepository.find();
  }

  async findOne(id: number): Promise<Game> {
    return this.GameRepository.findOne({ where: { id } });
  }

  async create(Game: Partial<Game>): Promise<Game> {
    const newGame = this.GameRepository.create(Game);
    return this.GameRepository.save(newGame);
  }

  async update(id: number, Game: Partial<Game>): Promise<Game> {
    await this.GameRepository.update(id, Game);
    return this.GameRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.GameRepository.delete(id);
  }
}
