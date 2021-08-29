import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolvers } from './cars.resolvers';
import { CarsService } from './cars.service';
import { Car } from './entities/car';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolvers],
  exports: [CarsService],
})
export class CarsModule {}
