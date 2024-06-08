import { Injectable } from '@nestjs/common';
import { CreateCommandDetailDto } from './dto/create-command-detail.dto';
import { UpdateCommandDetailDto } from './dto/update-command-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandDetail } from './entities/command-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommandDetailService {
  constructor(   
    @InjectRepository(CommandDetail)
    private commandeResposity:Repository<CommandDetail>,
  ){}
  async create( createCommandDetailDto: CreateCommandDetailDto) {
    let newCommande=this.commandeResposity.create( createCommandDetailDto)
   console.log(createCommandDetailDto)
    return await this.commandeResposity.save(newCommande)
  }  

  async findAll() {
    return await this.commandeResposity.findAndCount()
  }

  findOne(id: number) {
    return `This action returns a #${id} commandDetail`;
  }

  update(id: number, updateCommandDetailDto: UpdateCommandDetailDto) {
    return `This action updates a #${id} commandDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} commandDetail`;
  }
}
