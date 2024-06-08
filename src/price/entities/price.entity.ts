import { Commande } from "src/commande/entities/commande.entity";
import { ProductDetail } from "src/details/entities/detail.entity";
import { Tva } from "src/tva/entities/tva.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Price {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text',{name:"name",nullable:true})
    name: string;
    @Column('text',{name:"priceExcludingTax",nullable:true})
    priceExcludingTax: number;
   
    @Column('text',{name:"priceTTC",nullable:true})
    priceTTC: number;
    @Column('text',{name:"retailPrice",nullable:true})
    retailPrice: number;
    @Column('text',{name:"wholesalePrice",nullable:true})
    wholesalePrice: number;
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
    // Realation
    @OneToMany(() => Tva, (productTva: Tva) => productTva.priceId,{cascade:true})
    productTvaproductTax: Tva[];
    //relation
   
    @ManyToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.priceId,{cascade:true})
    productDetail: ProductDetail[];
    
  

@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}




