import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Game } from 'src/game/game.entity';
@Entity()
export class Platform {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortName: string;

  @Column()
  imageSrc: string;

  @Column()
  releaseDate: string;

  @ManyToMany(() => Game, (game) => game.companies)
  @JoinTable()
  games: Game[];
}
