import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { EmailService } from 'src/app/services/email.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  standalone: true,
  selector: 'app-email-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './email-contact-form.component.html',
  styleUrls: ['./email-contact-form.component.scss']
})
export class EmailContactFormComponent {
  constructor(
    private emailService: EmailService,
    private toastService: ToastService
  ) { }

  public maxEmailLength: number = 1500;

  emailForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    replyto: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    content: new FormControl('', [Validators.required, Validators.maxLength(this.maxEmailLength)])
  })

  get firstNameControl() {
    return this.emailForm.get('first_name')
  }

  get lastNameControl() {
    return this.emailForm.get('last_name')
  }

  get replytoControl() {
    return this.emailForm.get('replyto')
  }

  get subjectControl() {
    return this.emailForm.get('subject')
  }

  get contentControl() {
    return this.emailForm.get('content')
  }

  getRemainingCharacters(): number {
   const currentLength = this.contentControl?.value?.length || 0;
   return this.maxEmailLength - currentLength;
  }

  handleSubmit() {
    if (this.emailForm.valid){
      this.emailService.post(this.emailForm.value).subscribe((response: any) => {
        this.toastService.showSuccess('E-mail sent successfully.');
        this.emailForm.reset();
      },
      (error) => {
        this.toastService.showFailure('Unable to send e-mail - please try again later.');
        console.log(error.message)
      })
    }
  }
}

