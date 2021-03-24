import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RegularExpense } from './RegularExpense.entity';

@Entity()
export class REDays {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  selected: Boolean;
  
  @ManyToOne((type) => RegularExpense, (regularExpense) => regularExpense.days)
  regularExpense: RegularExpense;
}
