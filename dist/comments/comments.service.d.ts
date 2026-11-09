import { PrismaService } from '../prisma/prisma.service.js';
export declare class CommentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByBook(bookId: string): import("@prisma/client").Prisma.PrismaPromise<({
        replies: {
            id: string;
            createdAt: Date;
            text: string;
            userName: string;
            bookId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        text: string;
        userName: string;
        bookId: string;
        parentId: string | null;
    })[]>;
    create(input: {
        bookId: string;
        text: string;
        userName: string;
        parentId?: string;
    }): Promise<{
        replies: {
            id: string;
            createdAt: Date;
            text: string;
            userName: string;
            bookId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        text: string;
        userName: string;
        bookId: string;
        parentId: string | null;
    }>;
}
