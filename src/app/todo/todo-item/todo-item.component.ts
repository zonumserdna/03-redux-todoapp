import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/Forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor() { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);
  }

}
