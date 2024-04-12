
import { ProductDetail } from "src/details/entities/detail.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Mark {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"fullName", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"status",nullable:true})
    status: boolean;
    @Column('text',{name:"image",nullable:true})
    image: string;
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
   
    @OneToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.markId,{cascade:true})
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
