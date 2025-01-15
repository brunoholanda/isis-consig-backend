import { Controller, Post, Body, Param, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  async refreshToken() {
    // Lógica para renovar o token, se necessário
    return { message: 'Token refreshed' };
  }
}
