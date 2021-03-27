import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly loginRepository: Repository<User>,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.loginRepository.findOne({
      username: loginDto.username
    });
    
    if (!user) {
      throw new NotFoundException('Username/Password incorrect');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) throw new NotFoundException('Username/Password incorrect');

    return user;
  }
}
