import { Controller, Post, Body, Param, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/:link_name')
  async login(
    @Param('link_name') linkName: string,
    @Body() loginDto: { email: string; password: string },
  ) {
    const { email, password } = loginDto;
    try {
      const user = await this.authService.validateUser(email, password, linkName);
      return this.authService.login(user);
    } catch {
      throw new UnauthorizedException('Invalid email, password, or link name');
    }
  }
}
