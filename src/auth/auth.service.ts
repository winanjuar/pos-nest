import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async checkUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findUsername(username);
    if (user) {
      const valid = await this.userService.compare(password, user.password);
      if (valid) {
        return user;
      } else {
        throw new BadRequestException('Wrong password');
      }
    } else {
      throw new UnauthorizedException("Username doesn't exist");
    }
  }

  generateToken(user: any) {
    const dataToken = { id: user.id };
    const token = this.jwtService.sign(dataToken);
    return { token };
  }
}
