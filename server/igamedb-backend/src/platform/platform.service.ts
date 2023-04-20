import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from './platform.entity';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private PlatformRepository: Repository<Platform>,
  ) {}

  async findAll(): Promise<Platform[]> {
    return this.PlatformRepository.find();
  }

  async findOne(id: number): Promise<Platform> {
    return this.PlatformRepository.findOne({ where: { id } });
  }

  async create(Platform: Partial<Platform>): Promise<Platform> {
    const newPlatform = this.PlatformRepository.create(Platform);
    return this.PlatformRepository.save(newPlatform);
  }

  async update(id: number, Platform: Partial<Platform>): Promise<Platform> {
    await this.PlatformRepository.update(id, Platform);
    return this.PlatformRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.PlatformRepository.delete(id);
  }
}
