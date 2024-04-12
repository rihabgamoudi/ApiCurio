import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('contact')
@ApiTags()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('create')
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  } 

  @Get('contact-list')
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOneById(+id);
  }

  @Patch(':id')
  async updateContact(@Param('id') id: number, @Body() UpdateContactDto: UpdateContactDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=1
    return this.contactService.update(id,userId, UpdateContactDto,);
  }  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
