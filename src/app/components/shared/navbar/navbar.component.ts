import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';



@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [AppRoutingModule, CommonModule, NgbModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // FontAwesome Icons
  public faBars = faBars
  public faBarsStaggered = faBarsStaggered
  public isCollapsed = true;
}
