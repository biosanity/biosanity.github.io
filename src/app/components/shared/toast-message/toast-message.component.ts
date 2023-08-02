import { Component } from '@angular/core';

import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent {
  constructor(public toastService: ToastService) {}
}
