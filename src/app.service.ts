import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(email: string, password: string): any {
    return {
      email,
      password,
    };
  }
}
