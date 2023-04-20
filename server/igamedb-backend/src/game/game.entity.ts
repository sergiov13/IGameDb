import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Company } from 'src/company/company.entity';
import { Image } from 'src/image/image.entity';
import { Genre } from 'src/genre/genre.entity';
import { Platform } from 'src/platform/platform.entity';

@Entity()
export class Game {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

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

  @ManyToMany(() => Platform, (platform) => platform.games)
  @JoinTable()
  platforms: Platform[];

  @ManyToMany(() => Genre, (genre) => genre.games)
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => Image, (image) => image.games)
  @JoinTable()
  images: Image[];

  @ManyToMany(() => Company, (company) => company.games)
  @JoinTable()
  companies: Company[];
}
