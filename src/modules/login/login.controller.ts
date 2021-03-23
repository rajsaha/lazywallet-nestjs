import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  login(@Body() loginDto: LoginDto) {
    const _result = this.loginService.login(loginDto);
    if (!_result) throw new NotFoundException('Username/Password does not match');
    return _result;
  }
}
