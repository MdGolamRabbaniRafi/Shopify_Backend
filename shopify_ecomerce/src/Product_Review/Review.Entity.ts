
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity("Review")
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column({ name: 'Product_Name', type: "varchar" })
  Product_Name: string;
  @Column({ name: 'Product_Id', type: "int" })
  Product_Id: Number;
  @Column({ name: 'User_Name', type: "varchar" })
  User_Name: string;
  @Column({ name: 'Review', type: "varchar" })
  Review: string;
  @Column({ name: 'Rating', type: "varchar" })
  Rating: string;
}