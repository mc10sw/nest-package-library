import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  getHello(): string {
    return 'This message is from NEST-PACKAGE-LIBRARY!';
  }
}
