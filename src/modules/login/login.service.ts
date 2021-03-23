import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  login({ username, password }: LoginDto) {
      return null;
  }
}
