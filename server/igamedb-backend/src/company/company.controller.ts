import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('Company')
export class CompanyController {
  constructor(private readonly CompanyService: CompanyService) {}

  //get all Companies
  @Get()
  async findAll(): Promise<Company[]> {
    return this.CompanyService.findAll();
  }

  //get Companie by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Company> {
    const Companie = await this.CompanyService.findOne(id);
    if (!Companie) {
      throw new NotFoundException('Company does not exist!');
    } else {
      return Companie;
    }
  }

  //create Companie
  @Post()
  async create(@Body() Company: Company): Promise<Company> {
    return this.CompanyService.create(Company);
  }

  //update Companie
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() Company: Company,
  ): Promise<any> {
    return this.CompanyService.update(id, Company);
  }

  //delete Companie
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Companie does not exist
    const Companie = await this.CompanyService.findOne(id);
    if (!Companie) {
      throw new NotFoundException('Companie does not exist!');
    }
    return this.CompanyService.delete(id);
  }
}
