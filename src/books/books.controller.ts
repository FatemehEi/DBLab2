import {Body,Controller,Delete,Get,Header,Post,Put,} from '@nestjs/common';
import CreateBookDTO from '../user/dto/create-book.dto';
import { BookService } from './books.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post('post')
    @Header('Content-Type', 'application/json')
    async postUser(@Body() book: CreateBookDTO) {
        return await this.bookService.insert(book);
    }

    @Get()
    async getAll() {
        return await this.bookService.getAllBooks();
    }

    @Put()
    async editBook(@Body() book: CreateBookDTO) {
        return await this.bookService.editBook(book);
    }
}