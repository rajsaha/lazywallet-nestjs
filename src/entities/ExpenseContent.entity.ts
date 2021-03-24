import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class ExpenseContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  amount: number;

  @Column()
  typeId: string;
}
