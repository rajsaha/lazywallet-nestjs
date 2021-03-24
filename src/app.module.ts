import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { SignupModule } from './modules/signup/signup.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { RegularExpenseModule } from './modules/regular-expense/regular-expense.module';

@Module({
  imports: [
    LoginModule,
    SignupModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ExpenseModule,
    RegularExpenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
