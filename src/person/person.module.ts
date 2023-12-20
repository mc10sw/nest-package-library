import { Module } from '@nestjs/common';
import { PersonService } from './person.service';

@Module({
  exports: [PersonService],
  providers: [PersonService],
})
export class PersonModule {}
