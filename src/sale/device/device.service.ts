import { Injectable ,NotFoundException} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository,FindManyOptions } from 'typeorm';
import { Device } from './entities/device.entity';
@Injectable()
export class DeviceService {
  constructor(   
    @InjectRepository(Device)
    private deviceResposity:Repository<Device>,
  ){}
  async create(createDeviceDto:CreateDeviceDto) {
    let newDevice=this.deviceResposity.create(createDeviceDto)
 
    return await this.deviceResposity.save(newDevice)
     
  } 

  async findAll(): Promise<[Device[], number]> {
    const options: FindManyOptions<Device> = {
      relations: ['CustomerId', 'deviceDetail', 'transactions', 'deviceDetail.productId','commandId'],
    };

    return await this.deviceResposity.findAndCount(options);
  }

  async findOneById(id: number):Promise<object>{
    let  device= await this.deviceResposity.findOne({relations:['CustomerId', 'deviceDetail', 'transactions', 'deviceDetail.productId','commandId'],where:{id:id}})
     return device
    }  
 
    async update( id: number ,userId: number ,updateDeviceDto: UpdateDeviceDto ) {
      const device = await this.deviceResposity.findOne({where:{id:id}});
      if (!device) {
        throw new NotFoundException(`commande #${id} not found`);
      }
  
  
      const devicePreload = await this.deviceResposity.preload({
        id: +id, 
        ...updateDeviceDto,
        updatedBy: userId, 
      });  
  
      return this.deviceResposity.save(devicePreload);
   
    }    


    async remove(id: string) {
      return await this.deviceResposity.delete(id);
    } 
    // toDisable: number[], idUser?: number
    async removeMultiple(toDelete: number[]) {   
      let resultDelete: boolean = null
      let resultDisable: boolean = null
      const allIntegers = toDelete.every(item => Number.isInteger(item));
  if (!allIntegers) {
      console.log('Invalid data in toDelete array');
      // Handle the error appropriately
      return;
  }
  
      if (toDelete.length != 0) {
        if (await this.deviceResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
         
      }
  
    return true
    }
}
