import { JwtModuleOptions } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

export const jwtModuleOptions: JwtModuleOptions = {
  secret: process.env.JWT_KEY,
  signOptions: {
    expiresIn: '12h',
  },
};
