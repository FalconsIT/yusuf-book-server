import { CommentsService } from './comments.service.js';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
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
    create(body: {
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
