import { Injectable } from '@angular/core';

export interface ToastInfo {
  body: string;
  class: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  toasts: ToastInfo[] = [];

  showSuccess(body: string) {
    this.toasts.push({ body, class: 'bg-success' });
  }

  showFailure(body: string) {
    this.toasts.push({ body, class: 'bg-danger' });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
