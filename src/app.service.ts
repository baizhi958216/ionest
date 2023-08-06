import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getList() {
    const { data } = await fetch('https://api.okmiku.com/bangumi_list', {
      method: 'POST',
      headers: {
        Authsign:
          '5b504b3148da97cb77974af645bf1a592732fe2b1be11356b48c0122f9b37a9c.U2FsdGVkX1+acQkwKsWWUbuk/hYCSkBxcp6mthUpN+4=.MzU4NDkyNjI2OQ==',
      },
    }).then((res) => res.json());
    return data;
  }
}
