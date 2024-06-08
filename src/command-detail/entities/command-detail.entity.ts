import { Commande } from "src/commande/entities/commande.entity";
import { Product } from "src/products/entities/product.entity";
import { Tva } from "src/tva/entities/tva.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Transaction } from "typeorm";

@Entity('CommandDetail')
export class CommandDetail {
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
    quantity:string
    @Column("double precision", { name: "TotalTTC", nullable: true })
    TotalTTC: number;
   
 

    @ManyToOne(() => Product, (products: Product) => products.id)
    @JoinColumn({ name: "productId" })
    productId: number ;
    
    @ManyToOne(() => Commande, (command: Commande) => command.id)
    @JoinColumn({ name: "commandId" })
    commandId: number | null;



    @BeforeInsert() 
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
