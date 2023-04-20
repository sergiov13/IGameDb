import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Game } from 'src/game/game.entity';

@Entity()
export class Genre {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.companies)
  @JoinTable()
  games: Game[];
}
