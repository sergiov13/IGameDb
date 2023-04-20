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
import { PlatformService } from './platform.service';
import { Platform } from './platform.entity';

@Controller('Platform')
export class PlatformController {
  constructor(private readonly PlatformService: PlatformService) {}

  //get all Platforms
  @Get()
  async findAll(): Promise<Platform[]> {
    return this.PlatformService.findAll();
  }

  //get Platform by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Platform> {
    const Platform = await this.PlatformService.findOne(id);
    if (!Platform) {
      throw new NotFoundException('Platform does not exist!');
    } else {
      return Platform;
    }
  }

  //create Platform
  @Post()
  async create(@Body() Platform: Platform): Promise<Platform> {
    return this.PlatformService.create(Platform);
  }

  //update Platform
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() Platform: Platform,
  ): Promise<any> {
    return this.PlatformService.update(id, Platform);
  }

  //delete Platform
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Platform does not exist
    const Platform = await this.PlatformService.findOne(id);
    if (!Platform) {
      throw new NotFoundException('Platform does not exist!');
    }
    return this.PlatformService.delete(id);
  }
}
