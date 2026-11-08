import { Injectable } from '@nestjs/common';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class ContactService {
  async sendContactEmail(contactData: ContactData): Promise<void> {
    const { name, email, message } = contactData;

    // Log contact data for development
    console.log('📧 New Contact Message:');
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log('---');

    // TODO: Integrate with email service provider like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Gmail SMTP
    // - Or any other email service

    // For now, we'll just log to console and return success
    // When you're ready to add email functionality, update this method

    // Example of what it would look like with a real email service:
    /*
    const emailService = new EmailServiceProvider({
      apiKey: process.env.EMAIL_API_KEY,
    });

    await emailService.send({
      to: 'aliyhossain@gmail.com',
      subject: `New Contact: ${name}`,
      html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    });

    await emailService.send({
      to: email,
      subject: 'We received your message',
      html: `<p>Hi ${name}, we'll get back to you soon!</p>`,
    });
    */
  }
}

