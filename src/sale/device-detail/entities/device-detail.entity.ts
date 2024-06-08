
import { Product } from "src/products/entities/product.entity";
import { Device } from "src/sale/device/entities/device.entity";
import { BeforeInsert, BeforeUpdate, Column,OneToMany, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('DeviceDetail')
export class DeviceDetail {
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
    @Column('integer',{name:"quantity", nullable:true})
    quantity:number
    @Column('integer',{name:"TotalTTC", nullable:true})
    TotalTTC:number
   
    @ManyToOne(() => Product, (products: Product) => products.id)
    @JoinColumn({ name: "productId" })
    productId: number ;
    
    @ManyToOne(() => Device, (command: Device) => command.id)
    @JoinColumn({ name: "DeviceId" })
    DeviceId: number | null;

    
    @BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
