import { Component } from '@angular/core';

import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { faSun, faMoon, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  // Fontawesome Icons
  public faMoon = faMoon;
  public faSun = faSun;
  public faSquareEnvelope = faSquareEnvelope;
  public faLinkedin = faLinkedin;
  public faSquareGithub = faSquareGithub;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
