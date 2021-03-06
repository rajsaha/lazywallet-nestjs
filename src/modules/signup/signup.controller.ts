import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}
  @Post()
  async signup(@Body() signupDto: SignupDto) {
    const _result = await this.signupService.signup(signupDto);
    return _result;
  }
}
