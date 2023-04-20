import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Game } from 'src/game/game.entity';

@Entity()
export class Company {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToMany(() => Game, (game) => game.companies)
  @JoinTable()
  games: Game[];
}
