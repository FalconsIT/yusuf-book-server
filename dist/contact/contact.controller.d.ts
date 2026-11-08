import { ContactService } from './contact.service';
export declare class ContactDTO {
    name: string;
    email: string;
    message: string;
}
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    sendContact(contactData: ContactDTO): Promise<{
        success: boolean;
        message: string;
    }>;
}
