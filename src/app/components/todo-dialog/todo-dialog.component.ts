import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef,DIALOG_DATA } from '@angular/cdk/dialog';
import { faBars, faCheckSquare, faClock, faTag, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/Models/todo.model';

interface inputData {
  todo: ToDo;
}

interface outputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  faClose = faTimes;
  faCheckToSlot = faCheckSquare;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo!: ToDo

  constructor(
    private DialogRef: DialogRef<outputData>, 
    @Inject(DIALOG_DATA) data: inputData
  ) {
    this.todo = data.todo;
   }

  ngOnInit(): void {
  }

  close() {
    this.DialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.DialogRef.close({
      rta: true,
    });
  }
}
