import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('create')
  create(@Body() createTransactionDto: CreateTransactionDto) {
  
    return this.transactionService.create(createTransactionDto);
  }

  @Get('transaction-list')
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOneById(+id);
  }

  
  @Patch(':id') 
  async updateTransaction(@Param('id') id: number,@Body() updateTransactionDto: UpdateTransactionDto ){
    // ,@User('id') idUser: number
     let userId=1
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
    return this.transactionService.update(id,userId,updateTransactionDto);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.transactionService.removeMultiple(toDelete);
  } 
}
