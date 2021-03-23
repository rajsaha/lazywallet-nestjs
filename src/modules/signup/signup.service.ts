import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class SignupService {
  signup({ email, username, password, passwordConfirm }: SignupDto) {
    return 'Sign up successfull';
  }
}
