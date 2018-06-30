import { Effect, Actions } from '@ngrx/effects';
import { State } from '../state';
import { ADD_TODO, AddTodo, AddTodoCompleted, LOAD_TODOS, LoadTodos, LoadTodosCompleted, COMPLETE_TODO, CompleteTodo } from '../actions/todo-actions';
import { ToDoItem } from '../../models/todo';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class ToDoEffects {
  constructor(
    private _actions: Actions,
    store: Store<State>
  ) {
    window.addEventListener('storage', event => {
      if (event.key === 'items') {
        const items = JSON.parse(event.newValue);
        store.dispatch(new LoadTodosCompleted(items));
      }
    });
  }

  @Effect() addTodo$ = this._actions
    .ofType(ADD_TODO)
    .map((action: AddTodo) => {
      const item = new ToDoItem(action.payload);
      item.id = Math.floor(Math.random() * 100000)

      const items = JSON.parse(localStorage.getItem('items') || '[]');
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));

      return new AddTodoCompleted(item);
    });

  @Effect() loadTodos$ = this._actions
    .ofType(LOAD_TODOS)
    .map((action: LoadTodos) => {
      const items = JSON.parse(localStorage.getItem('items') || '[]');
      return new LoadTodosCompleted(items);
    });

  @Effect() completeTodo$ = this._actions
    .ofType(COMPLETE_TODO)
    .map((action: CompleteTodo) => {
      const items: ToDoItem[] = JSON.parse(localStorage.getItem('items') || '[]');
      const item = items.find(x => x.id === action.payload.id);
      item.completed = true;
      localStorage.setItem('items', JSON.stringify(items));
    });
}
