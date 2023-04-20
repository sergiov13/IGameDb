import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>,
  ) {}

  async findAll(): Promise<Image[]> {
    return this.ImageRepository.find();
  }

  async findOne(id: number): Promise<Image> {
    return this.ImageRepository.findOne({ where: { id } });
  }

  async create(Image: Partial<Image>): Promise<Image> {
    const newImage = this.ImageRepository.create(Image);
    return this.ImageRepository.save(newImage);
  }

  async update(id: number, Image: Partial<Image>): Promise<Image> {
    await this.ImageRepository.update(id, Image);
    return this.ImageRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.ImageRepository.delete(id);
  }
}
