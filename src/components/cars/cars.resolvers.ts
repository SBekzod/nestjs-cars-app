import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolvers {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return 'This is the Query of cars';
  }
}
