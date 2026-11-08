interface ContactData {
    name: string;
    email: string;
    message: string;
}
export declare class ContactService {
    private transporter;
    constructor();
    sendContactEmail(contactData: ContactData): Promise<void>;
}
export {};
