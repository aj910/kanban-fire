import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: "SEO Trak Project",
      description: "Login & Dashboard Redirect"
    }, 
    {
      title: "Hashnode", 
      description: "Write tech article on Angular Dev Tools"
    }
  ];
}
