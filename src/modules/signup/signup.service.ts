import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User) private readonly signupRepository: Repository<User>,
  ) {}

  async signup(signupDto: SignupDto) {
    if (signupDto.password !== signupDto.passwordConfirm) {
      throw new BadRequestException('Passwords don\'t match');
    }

    const saltOrRounds = 10;
    const password = signupDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    signupDto.password = hash;

    const user = this.signupRepository.create(signupDto);
    return this.signupRepository.save(user);
  }
}
