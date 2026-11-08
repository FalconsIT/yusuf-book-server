import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configure email transporter
    // For development, you can use a service like Mailtrap or Gmail
    // For production, use a proper email service
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendContactEmail(contactData: ContactData): Promise<void> {
    const { name, email, message } = contactData;

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aliyhossain@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - PageTurn',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>The PageTurn Team</p>
      `,
    };

    try {
      // Send email to admin
      await this.transporter.sendMail(adminMailOptions);
      
      // Send confirmation email to user
      await this.transporter.sendMail(userMailOptions);
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  }
}
