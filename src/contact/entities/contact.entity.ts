import { User } from "src/user/entities/user.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"title", nullable:true})
    title: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"tel",nullable:true})
    tel: number; 
    @Column('text',{name:"email",nullable:true})
    email: string;
    @Column('text',{name:"fax",nullable:true})
    fax: number;
    @Column('text',{name:"type",nullable:true})
    type: string;
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
    @ManyToOne(() => User, (user: User) => user.id)
    @JoinColumn({ name: "userId" })
    userId: number | null;

@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
