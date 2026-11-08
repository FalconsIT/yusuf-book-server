interface ContactData {
    name: string;
    email: string;
    message: string;
}
export declare class ContactService {
    sendContactEmail(contactData: ContactData): Promise<void>;
}
export {};
