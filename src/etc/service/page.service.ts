import { Injectable } from '@nestjs/common';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { PageRequestDto } from '../dto/page-request.dto';

@Injectable()
export class PageService {
  async generatePage(
    pageRequest: PageRequestDto,
    repo: Repository<any>,
    opt: FindManyOptions = {},
  ) {
    const { page, limit, ...where } = pageRequest;
    if (where) {
      const filter = {};
      Object.keys(where).forEach((f) => {
        filter[f] = Like(`%${where[f]}%`);
      });
      opt.where = filter;
    }

    const total = await repo.count(opt);
    opt.skip = (page - 1) * limit;
    opt.take = limit;

    const result = await repo.find(opt);
    const pages = Math.ceil(total / limit);

    return {
      total_data_system: total,
      total_data_current_page: result.length,
      total_pages: pages,
      current_page: page,
      data: result,
    };
  }
}
