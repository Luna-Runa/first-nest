import { Field, ObjectType, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field((type) => ID)
  id: number;

  @Field() //string과 boolean에는 명시할 필요 없음
  title: string;

  @Field((type) => Int)
  year: number;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  genres: string[];
}
