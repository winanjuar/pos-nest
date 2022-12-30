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
import { ConsumenService } from './consumen.service';
import { ConsumenIdDto } from './dto/consumen-id.dto';
import { CreateConsumenDto } from './dto/create-consumen.dto';
import { PageFilterConsumenDto } from './dto/page-filter-consumen.dto';
import { ResponseConsumenDto } from './dto/response-consumen.dto';
import { UpdateConsumenDto } from './dto/update-consumen.dto';

@ApiTags('Consumen')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('consumen')
export class ConsumenController {
  constructor(private readonly consumenService: ConsumenService) {}

  @ApiBody({ type: CreateConsumenDto })
  @Post()
  async create(@InjectUser() createConsumenDto: CreateConsumenDto) {
    return await this.consumenService.create(createConsumenDto);
  }

  @Get()
  @ApiOkResponse({ type: ResponseConsumenDto })
  async findAll(@Query() pageFilter: PageFilterConsumenDto) {
    return await this.consumenService.findAll(pageFilter);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.consumenService.findOne(id);
  }

  @ApiBody({ type: UpdateConsumenDto })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @InjectUser() updateConsumenDto: UpdateConsumenDto,
  ) {
    return await this.consumenService.update(+id, updateConsumenDto);
  }

  @Delete(':id')
  async remove(@Param() consumen: ConsumenIdDto) {
    return await this.consumenService.remove(consumen.id);
  }
}
