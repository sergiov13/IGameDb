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
import { ImageService } from './image.service';
import { Image } from './image.entity';

@Controller('Image')
export class ImageController {
  constructor(private readonly ImageService: ImageService) {}

  //get all Images
  @Get()
  async findAll(): Promise<Image[]> {
    return this.ImageService.findAll();
  }

  //get Image by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Image> {
    const Image = await this.ImageService.findOne(id);
    if (!Image) {
      throw new NotFoundException('Image does not exist!');
    } else {
      return Image;
    }
  }

  //create Image
  @Post()
  async create(@Body() Image: Image): Promise<Image> {
    return this.ImageService.create(Image);
  }

  //update Image
  @Put(':id')
  async update(@Param('id') id: number, @Body() Image: Image): Promise<any> {
    return this.ImageService.update(id, Image);
  }

  //delete Image
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if Image does not exist
    const Image = await this.ImageService.findOne(id);
    if (!Image) {
      throw new NotFoundException('Image does not exist!');
    }
    return this.ImageService.delete(id);
  }
}
