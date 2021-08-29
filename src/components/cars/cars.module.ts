import { Module } from '@nestjs/common';
import { CarsResolvers } from './cars.resolvers';
import { CarsService } from './cars.service';

@Module({
  imports: [],
  providers: [CarsService, CarsResolvers],
  exports: [CarsService],
})
export class CarsModule {}
