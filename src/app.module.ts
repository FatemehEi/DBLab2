import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import  {TypeOrmModule}  from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import UserEntity from './db/user.entity';
import  BooksModule  from './books/books.module';
import  GenreModule  from './genre/genre.module';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';

@Module({
  imports: [HelloModule, BooksModule, UserModule, GenreModule, TypeOrmModule.forFeature(
    [UserEntity, BookEntity , GenreEntity],
  ),

  TypeOrmModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
