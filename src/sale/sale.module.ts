import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { OrderModule } from './order/order.module';
import { DeviceModule } from './device/device.module';

import { DeviceDetailModule } from './device-detail/device-detail.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  controllers: [SaleController],
  providers: [SaleService],
  imports: [OrderModule, DeviceModule, DeviceDetailModule, InvoiceModule],
})
export class SaleModule {}
