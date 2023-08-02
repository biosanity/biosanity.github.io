import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {
  public feedbackList$: Observable<any>;

  constructor( private feedbackService: FeedbackService ) {}

  ngOnInit(): void {
    this.feedbackList$ = this.feedbackService.get();
  }
}
