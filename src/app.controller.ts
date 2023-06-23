import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bangumi_list')
  async getList(@Res() res: Response) {
    const data = await this.appService.getList();
    res.status(HttpStatus.OK).json(data);
  }
}
