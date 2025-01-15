import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      console.error('Authorization header missing');
      throw new UnauthorizedException('Authorization header missing');
    }

    const [, token] = authHeader.split(' ');

    try {
      console.log('Token received:', token); // Log do token recebido
      const payload = this.jwtService.verify(token);
      console.log('Payload decoded:', payload); // Log do payload decodificado
      request.user = payload; // Anexa o payload ao objeto `user` da requisição
      return true;
    } catch (error) {
      console.error('Token validation error:', error.message); // Log do erro
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
