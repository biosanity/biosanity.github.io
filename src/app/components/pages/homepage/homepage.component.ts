import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public isShaking: boolean = false;

  shakeImage() {
    this.isShaking = !this.isShaking;
    setTimeout(() => { this.isShaking = false; }, 150)
  }
}
