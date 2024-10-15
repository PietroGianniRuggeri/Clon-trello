import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from "../../components/todo-dialog/todo-dialog.component";
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ],
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  todos: ToDo[] = [
  {
    id: 1,
    title: 'Make the bed',
    completed: false,
  },
  {
    id: 2,
    title: 'Buy some milk',
    completed: false,
  },
  {
    id: 3,
    title: 'Watch some TV show with friends', 
    completed: false,
  }
  ];

  doings: ToDo[] = [
    {
      id: 4,
      title: 'Play with friends',
      completed: false,
    },
    {
      id: 5,
      title: 'Watch some TV show with friends',
      completed: false,
    }
  ]

  dones: ToDo[] = [
    {
      id: 6,
      title: 'Go to the gym',
      completed: false,
    }
  ]

  constructor(private dialog: Dialog) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(todo: ToDo) {
   const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '400px',
      maxWidth: '50%',
      data: {
        todo: todo
      }
    });
    dialogRef.closed.subscribe((output) => {
      console.log('Dialog was closed',output);
    })
  }

}
