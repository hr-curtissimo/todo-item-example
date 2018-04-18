import { Effect, Actions } from '@ngrx/effects';
import { State } from '../state';
import { ADD_TODO, AddTodo, AddTodoCompleted } from '../actions/todo-actions';
import { ToDoItem } from '../../models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class ToDoEffects {
  constructor(
    private _actions: Actions
  ) {}

  @Effect() addTodo$ = this._actions
    .ofType(ADD_TODO)
    .map((action: AddTodo) => {
      const item = new ToDoItem(action.payload);

      const items = JSON.parse(localStorage.getItem('items') || '[]');
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));

      return new AddTodoCompleted(item);
    });
}
