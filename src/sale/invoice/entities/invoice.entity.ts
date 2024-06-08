import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "src/customer/entities/customer.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Commande } from "src/commande/entities/commande.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";

@Entity()
export class Invoice {
     
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
    @ApiProperty()
    @Column("double precision", { name: "totalprice", nullable: true })
    totalPrice: number | null;
  
    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createAt: Date | null;
  
    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
  
    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updateAt: Date | null;
  
    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
  
    @ApiProperty()
    @Column("boolean", { name: "active", nullable: true, default: true })
    isActive: boolean | null;

    @ApiProperty()
    @Column("boolean", { name: "isDeleted", nullable: true, default: false })
    isDeleted: boolean | null;
  
    
  
    @ApiProperty()
    @ManyToOne(() => Customer, (customer: Customer) => customer.id)
    @JoinColumn({ name: "CustomerId" })
    CustomerId: number | null;

    @ManyToOne(() => Commande, (command: Commande) => command.id)
    @JoinColumn({ name: "commandId" })
    commandId: number ;

    @OneToMany(() => Transaction, ( transactions:Transaction) =>  transactions.invoiceId,{cascade:true})
    transactions: Transaction[];

    @BeforeInsert()
    eventCreatedAt() {
      this.createAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updateAt = new Date();
    }
    
}
