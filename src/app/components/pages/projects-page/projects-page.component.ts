import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  public projectsList = [
    {
      name: 'React Todo App',
      description: 'CRUD Todo App made with React & Bulma.',
      imgTag: 'todolist',
      url: 'https://todo.scottcrisp.uk/',
      tech: [ 'HTML', 'CSS', 'React', 'Bulma' ]
    }
  ];
}
