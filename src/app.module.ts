import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvaModule } from './tva/tva.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { AccessoireModule } from './accessoire/accessoire.module';
import { UserModule } from './user/user.module';
import { PriceModule } from './price/price.module';
import { MarksModule } from './marks/marks.module';
import { DetailsModule } from './details/details.module';
import { ProductsModule } from './products/products.module';
import { UnitsMeasuresModule } from './units-measures/units-measures.module';
import { AdressModule } from './adress/adress.module';
import { ContactModule } from './contact/contact.module';
import { CategoryModule } from './category/category.module';

import { PayementMethodModule } from './payement-method/payement-method.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthModule } from './auth/auth.module';
import { CostModule } from './cost/cost.module';
import { CustomerModule } from './customer/customer.module';
import { CommandeModule } from './commande/commande.module';
import { SaleModule } from './sale/sale.module';
import { CommandDetailModule } from './command-detail/command-detail.module';
import { PicturesModule } from './pictures/pictures.module';
import { DeviceModule } from './sale/device/device.module';
import { DeviceDetailModule } from './sale/device-detail/device-detail.module';


@Module({
  imports: [
    // UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'IocCurio',
        autoLoadEntities: true,
        synchronize: true,
          //  synchronize: false

          
      }),
    }),
    ConfigModule.forRoot(),TvaModule,SwaggerModule, AccessoireModule, UserModule, PriceModule, MarksModule, DetailsModule,  ProductsModule, UnitsMeasuresModule, AdressModule, ContactModule, CategoryModule, PayementMethodModule, TransactionModule, AuthModule, CostModule, CustomerModule, CommandeModule, SaleModule, CommandDetailModule,PicturesModule,DeviceModule,DeviceDetailModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 