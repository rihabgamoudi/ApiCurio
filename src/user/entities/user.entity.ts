import { Adress } from "src/adress/entities/adress.entity";
import { Contact } from "src/contact/entities/contact.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
        id: number;
        @Column( 'text',{name:"fullName", nullable:true})
        name: string;
        @Column('text',{name:"email",nullable:true})
        email: string;
        @Column('text',{name:"password",nullable:true})
        password: string;
        @Column('text',{name:"role",nullable:true})
        role: string;
        @Column('text',{name:"token",nullable:true})
        tokenValue: string;
        @Column('date',{name:"createAt",nullable:true})
        createAt:Date;
        @Column('date',{name:"update",nullable:true})
        updateAt:Date;
        @Column('integer',{name:"createby",nullable:true})
        createBy:number;
        @Column('integer',{name:"updateBy",nullable:true})
        updatedBy: number;
        @Column('boolean',{name:"active",nullable:true})
        isActive:boolean
        // relation
        @OneToMany(() => Contact, (productContact: Contact) => productContact.userId,{cascade:true})
        productContact: Contact[];
        @OneToMany(() => Adress, (productAdress: Adress) => productAdress.userId,{cascade:true})
        productAdress: Adress[];
  saltRounds: any;
    
@BeforeInsert()
CreateATDate(): void{
   this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
        this.updateAt= new Date()
}
}
