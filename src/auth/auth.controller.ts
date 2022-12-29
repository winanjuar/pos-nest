import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Get()
  checkUser(@Request() req: any) {
    return req.user;
  }

  @Post()
  async login(@Body() authDto: AuthDto) {
    const user = await this.authService.checkUser(
      authDto.username,
      authDto.password,
    );

    return this.authService.generateToken({ id: user.id });
  }
}
