import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { UserDto } from 'src/user/dto/user.dto';

export class AuthDto extends PickType(UserDto, ['username', 'password']) {
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  username: string;
}
