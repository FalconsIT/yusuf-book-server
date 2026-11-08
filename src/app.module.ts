import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { BooksModule } from './books/books.module.js';
import { CommentsModule } from './comments/comments.module.js';
import { ContactModule } from './contact/contact.module.js';

@Module({
  imports: [PrismaModule, BooksModule, CommentsModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
