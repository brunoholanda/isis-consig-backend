import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string, linkName: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
  
    // Verificar se o usuário está ativo
    if (user.status !== 'ativo') {
      throw new UnauthorizedException('User is inactive');
    }
  
    const governo = user.governo;
    if (!governo || governo.link_name !== linkName) {
      throw new UnauthorizedException('Access denied: incorrect link name');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
  
    throw new UnauthorizedException('Invalid email or password');
  }
  
  
  

  async login(user: any) {
    const payload = { nome: user.nome, email: user.email, sub: user.id, role: user.role, user_type: user.user_type };
    console.log('Payload for token:', payload); // Log do payload usado para o token
    return {
      access_token: this.jwtService.sign(payload),
      user_type: user.user_type,
      nome: user.nome,
    };
  }
  
  
}
