import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPageComponent } from './feedback-page.component';
import { FeedbackService } from 'src/app/services/feedback.service';
import { of } from 'rxjs';

describe('FeedbackPageComponent', () => {
  let component: FeedbackPageComponent;
  let fixture: ComponentFixture<FeedbackPageComponent>;
  let mockFeedbackService: any;

  const mockResponse = {
    results: [
      {
        id: 100,
        feedback_provider: "Jeremy Usborne",
        feedback_type: "positive",
        job_title: "Artist",
        feedback: "This is outrageous!"
      }
    ]
  };

  mockFeedbackService = jasmine.createSpyObj('FeedbackService', { 'get': of(mockResponse)});

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackPageComponent],
      providers: [
        { provide: FeedbackService, useValue: mockFeedbackService }
      ]
    });
    fixture = TestBed.createComponent(FeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getFeedback', () => {
    it('should populate feedbackList when service returns data', () => {
      component.ngOnInit();

      expect(mockFeedbackService).toHaveBeenCalled;
      component.feedbackList$.subscribe((data) => {
        expect(data).toBe(mockResponse);
      });
    });
  });
});

