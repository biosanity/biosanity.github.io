import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailApiUrl = environment.gatewayUrl + 'send_email/'

  constructor( private http: HttpClient ) { }

  post(data: any) {
    return this.http.post(this.emailApiUrl, data, {
      headers: {
        "Content-Type":"application/json;", }
    }).pipe(
      map(data => data)
    )
  }
}
