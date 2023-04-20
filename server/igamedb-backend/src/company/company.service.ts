import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private CompanyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.CompanyRepository.find();
  }

  async findOne(id: number): Promise<Company> {
    return this.CompanyRepository.findOne({ where: { id } });
  }

  async create(Company: Partial<Company>): Promise<Company> {
    const newCompany = this.CompanyRepository.create(Company);
    return this.CompanyRepository.save(newCompany);
  }

  async update(id: number, Company: Partial<Company>): Promise<Company> {
    await this.CompanyRepository.update(id, Company);
    return this.CompanyRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.CompanyRepository.delete(id);
  }
}
