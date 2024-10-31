import { Body, Controller, Post } from '@nestjs/common';
import { CheckPasswordDTO } from './dto/check-password.dto';

@Controller('quiz')
export class AuthController {
  @Post('password')
  private checkPassword(@Body() { password }: CheckPasswordDTO) {
    console.log(process.env.ADMIN_PASSWORD);
    return password === process.env.ADMIN_PASSWORD;
  }
}
