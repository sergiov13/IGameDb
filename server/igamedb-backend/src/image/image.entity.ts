import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Game } from '../game/game.entity';

@Entity()
export class Image {
  @PrimaryColumn()
  id: number;

  @Column()
  box: string;

  @Column()
  masthead: string;

  @Column()
  banner: string;

  @ManyToMany(() => Game, (game) => game.companies)
  @JoinTable()
  games: Game[];
}
