import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TaskDialogResult } from './task-dialog/task-dialog.component';

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
      description: "Write Tech Article on Angular Dev Tools"
    }, 
    {
      title: "Grocery Shop",
      description: "Go & Buy Dairy Products"
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}
    drop(event: CdkDragDrop<Task[] | null>): void {
      if (event.previousContainer === event.container) {
        return;
      }
      if (!event.container.data || !event.previousContainer.data) {
        return;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    constructor(private dialog: MatDialog) {}

    newTask(): void {
      const dialogRef = this.dialog.open(TaskDialogComponent, {
        width: '270px',
        data: {
          task: {},
        },
      });
      dialogRef
        .afterClosed()
        .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
    }
}
