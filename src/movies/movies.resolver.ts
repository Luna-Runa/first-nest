import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver((of) => Movie) //Movie의 resolver
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query((returns) => Movie)
  getAllMovie() {
    return this.moviesService.getAll();
  }

  @Query((returns) => String)
  name() {
    return 'hello world' + 123;
  }
}
