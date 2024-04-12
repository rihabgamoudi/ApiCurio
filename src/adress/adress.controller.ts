import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('adress')
@ApiTags()
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Post('create')
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressService.create(createAdressDto);
  }

  @Get('adress-list') 
  findAll() {
    return this.adressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adressService.findOneById(+id);
  }

  @Patch(':id')
  async updateAdress(@Param('id') id: number, @Body() UpdateAdressDto: UpdateAdressDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=1
    return this.adressService.update(id,userId, UpdateAdressDto,);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adressService.remove(+id);
  }
}
