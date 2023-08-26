import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { EmailContactFormComponent } from './components/shared/email-contact-form/email-contact-form.component';
import { ToastMessageComponent } from './components/shared/toast-message/toast-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    FeedbackPageComponent,
    ContactPageComponent,
    ToastMessageComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NavbarComponent,
    ReactiveFormsModule,
    EmailContactFormComponent,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
