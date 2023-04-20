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
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('Game')
export class GameController {
  constructor(private readonly GameService: GameService) {}

  //get all Games
  @Get()
  async findAll(): Promise<Game[]> {
    return this.GameService.findAll();
  }

  //get Game by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game> {
    const Game = await this.GameService.findOne(id);
    if (!Game) {
      throw new NotFoundException('Game does not exist!');
    } else {
      return Game;
    }
  }

  //create Game
  @Post()
  async create(@Body() Game: Game): Promise<Game> {
    return this.GameService.create(Game);
  }

  //update Game
  @Put(':id')
  async update(@Param('id') id: number, @Body() Game: Game): Promise<any> {
    return this.GameService.update(id, Game);
  }

  //delete Game
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Game does not exist
    const Game = await this.GameService.findOne(id);
    if (!Game) {
      throw new NotFoundException('Game does not exist!');
    }
    return this.GameService.delete(id);
  }
}
