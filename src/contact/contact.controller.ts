import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ContactService } from './contact.service.js';

export class ContactDTO {
  name: string;
  email: string;
  message: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async sendContact(@Body() contactData: ContactDTO) {
    if (!contactData.name || !contactData.email || !contactData.message) {
      throw new BadRequestException('Name, email, and message are required');
    }

    try {
      await this.contactService.sendContactEmail(contactData);
      return {
        success: true,
        message: 'Email sent successfully',
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new BadRequestException('Failed to send email: ' + message);
    }
  }
}
