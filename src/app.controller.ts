import { Controller, Get, Post,Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

// Post Login
@UseGuards(LocalAuthGuard)
@Post('login')
login(@Request() req): any {
  return {msg: 'SuccessFully Log in!'}
}



@Get('protected')
  getHello(@Request() req): string {
    return  req.user;
  }
}
