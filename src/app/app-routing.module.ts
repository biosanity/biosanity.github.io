import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/pages/homepage/homepage.component'
import { AboutPageComponent } from './components/pages/about-page/about-page.component'
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: '1' } },
  { path: 'about', component: AboutPageComponent, data: { animation: '2' } },
  { path: 'projects', component: ProjectsPageComponent, data: { animation: '3' } },
  { path: 'feedback', component: FeedbackPageComponent, data: { animation: '4' } },
  { path: 'contact', component: ContactPageComponent, data: { animation: '5' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
