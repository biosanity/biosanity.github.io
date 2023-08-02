import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackApiUrl = environment.gatewayUrl + 'api/feedback/';

  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get(this.feedbackApiUrl, {
      headers: {
        "Content-Type":"application/json;", }
    }).pipe(
      map(data => data)
    )
  }
}
