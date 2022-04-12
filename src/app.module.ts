import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//데코레이터 모듈 (클래스를 위한 함수)
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
