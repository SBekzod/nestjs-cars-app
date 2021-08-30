import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(10000)
  @Min(10)
  dailyPrice: number;

  @Field((type) => Int)
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field({ nullable: true })
  thumbnailUrl: string;
}
