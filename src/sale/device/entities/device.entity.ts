
import { BeforeInsert, BeforeUpdate, Column,OneToMany, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Commande } from "src/commande/entities/commande.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Product } from "src/products/entities/product.entity";
import { DeviceDetail } from "src/sale/device-detail/entities/device-detail.entity";
@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"updatedBy",nullable:true})
    updatedBy:number;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean
    
    @OneToMany(() => DeviceDetail, (deviceDetail: DeviceDetail) => deviceDetail.DeviceId,{cascade:true})
    deviceDetail: DeviceDetail[];

    @ManyToOne(() => Commande, (command: Commande) => command.id)
    @JoinColumn({ name: "commandId" })
    commandId: number ;

    @OneToMany(() => Transaction, ( transactions:Transaction) => transactions.deviceId,{cascade:true})
    transactions: Transaction[];
 

    @ManyToOne(() => Customer, (customer: Customer) => customer.id)
    @JoinColumn({ name: "CustomerId" })
    CustomerId: number | null;
    
  

 @BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
