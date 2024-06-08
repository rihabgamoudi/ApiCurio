
import { CommandDetail } from "src/command-detail/entities/command-detail.entity";
import { Customer } from "src/customer/entities/customer.entity";

import { Device } from "src/sale/device/entities/device.entity";
import { Invoice } from "src/sale/invoice/entities/invoice.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";

import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('commande')
export class Commande {
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
    @Column('boolean',{name:"isValid",nullable:true})
    isValid:boolean
    @Column("double precision", { name: "montantTotal", nullable: true })
    montantTotal: number;
    
    @ManyToOne(() => Customer, (customer: Customer) => customer.id)
    @JoinColumn({ name: "CustomerId" })
    CustomerId: number | null;

    @OneToMany(() => CommandDetail, (commandDetail: CommandDetail) => commandDetail.commandId,{cascade:true})
    CommandDetail: CommandDetail[];

    @OneToMany(() => Transaction, ( transactions:Transaction) => transactions.commandId,{cascade:true})
    transactions: Transaction[];
    
    @OneToMany(() => Device, ( device:Device) => device.commandId,{cascade:true})
    device: Device[];

    @OneToMany(() => Invoice, ( invoice:Invoice) => invoice.commandId,{cascade:true})
    invoice: Invoice[];
    
    
  
    

@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
