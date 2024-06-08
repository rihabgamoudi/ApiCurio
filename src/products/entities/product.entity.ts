import { Category } from "src/category/entities/category.entity";
import { CommandDetail } from "src/command-detail/entities/command-detail.entity";
import { Commande } from "src/commande/entities/commande.entity";
import { ProductDetail } from "src/details/entities/detail.entity";
import { Picture } from "src/pictures/entities/picture.entity";
import { DeviceDetail } from "src/sale/device-detail/entities/device-detail.entity";
import { Device } from "src/sale/device/entities/device.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"Name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
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
    @Column("double precision", { name: "priceHorsTax", nullable: true })
    priceHorsTax: number | null;
    @Column("double precision", { name: "priceTTC", nullable: true })
    priceTTC: number | null;
   
    @OneToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.productId,{cascade:true})
    productDetail: ProductDetail[];


    @OneToMany(() => CommandDetail, ( CommandDetails:CommandDetail) =>  CommandDetails.productId,{cascade:true})
    CommandDetails: CommandDetail[];

    @OneToMany(() => DeviceDetail, ( deviceDetails:DeviceDetail) =>  deviceDetails.productId,{cascade:true})
    deviceDetails: DeviceDetail[];

     

   

    @OneToMany(() => Picture, ( pictures:Picture) =>  pictures.productId,{cascade:true})
    pictures: Picture[];
  
  

@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()

}

@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}

}
