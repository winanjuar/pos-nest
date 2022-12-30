import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { AccountService } from './account.service';
import { AccountIdDto } from './dto/account-id.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { PageFilterAccountDto } from './dto/page-filter-account.dto';
import { ResponseAccountDto } from './dto/response-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('Account')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBody({ type: CreateAccountDto })
  @Post()
  async create(@InjectUser() createAccountDto: CreateAccountDto) {
    return await this.accountService.create(createAccountDto);
  }

  @ApiOkResponse({ type: ResponseAccountDto })
  @Get()
  async findAll(@Query() pageFilter: PageFilterAccountDto) {
    return await this.accountService.findAll(pageFilter);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.accountService.findOne(id);
  }

  @ApiBody({ type: UpdateAccountDto })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @InjectUser() updateAccountDto: UpdateAccountDto,
  ) {
    return await this.accountService.update(id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param() account: AccountIdDto) {
    return await this.accountService.remove(account.id);
  }
}
