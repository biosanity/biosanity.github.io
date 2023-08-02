import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContactFormComponent } from './email-contact-form.component';
import { EmailService } from 'src/app/services/email.service';
import { ToastService } from 'src/app/services/toast.service';


describe('EmailContactFormComponent', () => {
  let component: EmailContactFormComponent;
  let fixture: ComponentFixture<EmailContactFormComponent>;
  let mockEmailService: any;
  let mockToastService: any;


  beforeEach(() => {
    mockEmailService = jasmine.createSpyObj('EmailService', ['post']);
    mockToastService = jasmine.createSpyObj('ToastService', ['showSuccess']);

    TestBed.configureTestingModule({
      imports: [EmailContactFormComponent],
      providers: [
        { provide: EmailService, useValue: mockEmailService },
        { provide: ToastService, useValue: mockToastService }
      ]
    });

    fixture = TestBed.createComponent(EmailContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Email Form Validation', () => {
    it('should fail if all fields are not filled in', () => {
      const form = component.emailForm;
      form.controls.first_name.setValue('Mark');
      form.controls.last_name.setValue('Corrigan');
      form.controls.replyto.setValue('mark.corrigan@jlb.com');
      form.controls.subject.setValue('Chance would be a fine thing.');
      form.controls.first_name.setValue('');

      expect(form.valid).toBe(false);
    })
  })

  describe('#handleSubmit', () => {
    it('should do nothing if form data is invalid', () => {
      const form = component.emailForm;
      form.controls.first_name.setValue('Mark');
      form.controls.last_name.setValue('Corrigan');
      form.controls.replyto.setValue('mark.corrigan@jlb.com');
      form.controls.subject.setValue('Chance would be a fine thing.');
      form.controls.first_name.setValue('');

      component.handleSubmit();
      expect(mockEmailService.post).toHaveBeenCalledTimes(0);
    });

    it('should post successfully if form data is valid', () => {
      const form = component.emailForm;
      form.controls.first_name.setValue('Mark');
      form.controls.last_name.setValue('Corrigan');
      form.controls.replyto.setValue('mark.corrigan@jlb.com');
      form.controls.subject.setValue('Chance would be a fine thing.');
      form.controls.first_name.setValue('');

      component.handleSubmit();
      expect(mockEmailService.post).toHaveBeenCalled;
      expect(mockToastService).toHaveBeenCalled;
    })
  })
});
