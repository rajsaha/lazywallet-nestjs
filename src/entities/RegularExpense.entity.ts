import IDays from 'src/interfaces/IDays';
import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { ExpenseContent } from './ExpenseContent.entity';
import { REDays } from './REDays.entity';

@Entity()
export class RegularExpense extends ExpenseContent {
  @Column()
  repeat: Boolean;

  @JoinTable()
  @OneToMany((type) => REDays, (reDays) => reDays.regularExpense, {
    cascade: true,
    nullable: true
  })
  days: IDays;
}
