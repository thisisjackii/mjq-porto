import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';



class ContactDto {
  name: string;
  email: string;
  message: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Post()
  handleContactForm(@Body() contactDto: ContactDto) {
    return this.contactService.processSubmission(contactDto);
  }
}