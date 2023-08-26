import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  frontendSkills = [
    { name: 'Angular', colour: 'DD0031' },
    { name: 'Bootstrap', colour: '7952B3' },
    { name: 'Bulma', colour: '00C4A7' },
    { name: 'CSS3', colour: '1572B6' },
    { name: 'Cypress', colour: '007780' },
    { name: 'HTML5', colour: 'E34F26' },
    { name: 'JavaScript', colour: 'F7DF1E' },
    { name: 'Jasmine', colour: '8A4182' },
    { name: 'React', colour: '61DAFB' },
    { name: 'SASS', colour: 'BF4080' },
    { name: 'TypeScript', colour: '3178C6' }
  ];

  backendSkills = [
      { name: 'DBeaver', colour: '6E98BF' },
      { name: 'Django', colour: '092E20' },
      { name: 'Django Rest Framework', colour: 'A30000' },
      { name: 'PostgreSQL', colour: '4169E1' },
      { name: 'PyTest', colour: '009FE3' },
      { name: 'Python', colour: '239120' },
  ];

  miscSkills = [
      { name: 'Docker', colour: '2496ED' },
      { name: 'Git', colour: 'F05032' },
      { name: 'Heroku', colour: '430098' },
      { name: 'Jira', colour: '0052CC' },
      { name: 'Postman', colour: 'E05320' },
      { name: 'SwaggerHub', colour: '298E35' }
  ];
}
