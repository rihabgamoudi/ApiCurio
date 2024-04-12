import { Accessoire } from "src/accessoire/entities/accessoire.entity";
import { Category } from "src/category/entities/category.entity";
import { Mark } from "src/marks/entities/mark.entity";
import { Price } from "src/price/entities/price.entity";
import { Product } from "src/products/entities/product.entity";
import { Tva } from "src/tva/entities/tva.entity";


import { UnitsMeasure } from "src/units-measures/entities/units-measure.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ProductDetail')
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"createBy",nullable:true})
    updateBy:number;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean
    @Column('text',{name:"color", nullable:true})
    color:string
    @Column('integer',{name:"quantity", nullable:true})
    quantity:string
    // relation
    // @OneToMany(() => Color, (productColor: Color) => productColor.deatilId,{cascade:true})
    // productColor: Color[];

    
    @ManyToOne(() => Accessoire, (accessoire: Accessoire) => accessoire.id)
    @JoinColumn({ name: "accessoireId" })
    accessoireId: number | null;

    @ManyToOne(() => Mark, (mark: Mark) => mark.id)
    @JoinColumn({ name: "markId" })
    markId: number | null;

    @ManyToOne(() => Category, (category: Category) => category.id)
    @JoinColumn({ name: "categoryId" })
    categoryId: number | null;


    @ManyToOne(() => UnitsMeasure, (UnitsMeasure: UnitsMeasure) => UnitsMeasure.id)
    @JoinColumn({ name: "unitsId" })
    unitsId: number | null;

    
    @OneToMany(() => Price, (productPrice: Price) => productPrice.deatilId,{cascade:true})
    productPrice: Price[];


    @OneToMany(() => Tva, (productTva: Tva) => productTva.deatilId,{cascade:true})
    productTva: Tva[];

   

    @ManyToOne(() => Product, (product: Product) => product.id)
    @JoinColumn({ name: "productId" })
    productId: number | null;



@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
