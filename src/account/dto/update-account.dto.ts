import { PartialType } from '@nestjs/swagger';
import { AccountDto } from './account.dto';

export class UpdateAccountDto extends PartialType(AccountDto) {}
