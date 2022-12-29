import { PickType } from '@nestjs/swagger';
import { AccountDto } from './account.dto';

export class AccountIdDto extends PickType(AccountDto, ['id']) {}
