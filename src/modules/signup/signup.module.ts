import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [SignupController],
    providers: [SignupService]
})
export class SignupModule {}
