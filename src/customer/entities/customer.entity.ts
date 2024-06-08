import { Commande } from "src/commande/entities/commande.entity";
import { Device } from "src/sale/device/entities/device.entity";
import { Invoice } from "src/sale/invoice/entities/invoice.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"firstName", nullable:true})
    firstName: string;
    @Column('text',{name:"lastName",nullable:true})
    lastName: string;
    @Column('text',{name:"email",nullable:true})
    email: string;
    @Column('text',{name:"adress",nullable:true})
    adress: string;
    @Column('text',{name:"telephone",nullable:true})
    telephone: number;
    @Column('text',{name:"picture",nullable:true})
    picture: string;
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
     //relation
     
     
     @OneToMany(() => Commande, (commande: Commande) => commande.CustomerId,{cascade:true})
     commande: Commande[];

     @OneToMany(() => Device, ( device:Device) => device.CustomerId,{cascade:true})
     device: Device[];

     @OneToMany(() => Invoice, ( invoice:Invoice) => invoice.CustomerId,{cascade:true})
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
