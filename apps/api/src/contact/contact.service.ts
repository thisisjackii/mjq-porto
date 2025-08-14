import { Injectable } from '@nestjs/common';

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class ContactService {
  processSubmission(submission: ContactSubmission) {
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${submission.name}`);
    console.log(`Email: ${submission.email}`);
    console.log(`Message: ${submission.message}`);
    console.log('-----------------------------------');




    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  }
}