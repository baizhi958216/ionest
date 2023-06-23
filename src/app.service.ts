import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getList() {
    const { data } = await fetch('https://api.okmiku.com/bangumi_list', {
      method: 'POST',
    }).then((res) => res.json());
    return data;
  }
}
