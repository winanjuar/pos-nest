import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SellService } from './sell.service';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { SellProcess } from './sell-process.decorator';
import { SellIdDto } from './dto/sell-id.dto';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('Sell')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('sell')
export class SellController {
  constructor(private readonly sellService: SellService) {}

  @ApiBody({ type: CreateSellDto })
  @Post()
  create(@SellProcess() createSellDto: CreateSellDto) {
    return this.sellService.create(createSellDto);
  }

  @Get()
  findAll() {
    return this.sellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellService.findOne(+id);
  }

  @ApiBody({ type: UpdateSellDto })
  @Patch(':id')
  update(@Param('id') id: string, @SellProcess() updateSellDto: UpdateSellDto) {
    return this.sellService.update(+id, updateSellDto);
  }

  @Delete(':id')
  remove(@Param() sell: SellIdDto) {
    return this.sellService.remove(sell.id);
  }
}
