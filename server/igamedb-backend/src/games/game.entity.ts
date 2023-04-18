import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  local_id: number;

  @Column()
  name: string;

  @Column()
  id: number;

  @Column()
  description: string;

  @Column()
  percentRecommended: string;

  @Column()
  medianScore: string;

  @Column()
  firstReleaseDate: string;

  @Column()
  Rating: string;

  // @Column()
  // Platforms: Platform[];
  // @Column()
  // Genres: Genre[];
  // @Column()
  // images: images;
  // @Column()
  // Companies: Companies[];
}
