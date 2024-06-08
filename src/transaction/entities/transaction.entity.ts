import { Commande } from "src/commande/entities/commande.entity";
import { Device } from "src/sale/device/entities/device.entity";
import { Invoice } from "src/sale/invoice/entities/invoice.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('transaction')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"amount",nullable:true})
    amount: number;
    @Column('text',{name:"ban",nullable:true})
    ban: string;
    @Column('text',{name:"isCompleted",nullable:true})
    isCompleted: boolean;
    @Column('text',{name:"isCredit",nullable:true})
    isCredit:boolean;
    @Column('text',{name:"isOver",nullable:true})
    isOver:boolean;
    @Column('text',{name:"sourceId",nullable:true})
    sourceId: number;
    @Column('text',{name:"operationNumber",nullable:true})
    operationNumber: number;
    @Column('text',{name:"checkNumber",nullable:true})
    checkNumber: string;
    @Column('text',{name:"checkImage",nullable:true})
    checkImage: string;
    @Column('date',{name:"dueDate",nullable:true})
    dueDate:Date;
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"updatedBy",nullable:true})
    updatedBy:number;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean;
  
    
    @ManyToOne(() => Commande, (command: Commande) => command.id)
    @JoinColumn({ name: "commandId" })
    commandId: number | null;

    @ManyToOne(() => Device, (device: Device) => device.id)
    @JoinColumn({ name: "deviceId" })
    deviceId: number | null;
     

    @ManyToOne(() => Invoice, (transaction: Invoice) => transaction.id)
    @JoinColumn({ name: "invoiceId" })
    invoiceId: number | null;
     
     
     
@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
