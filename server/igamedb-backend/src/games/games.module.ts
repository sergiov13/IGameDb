import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GameService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [GamesController],
  providers: [GameService],
})
export class GamesModule {}
