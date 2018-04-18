import { Action } from '@ngrx/store';
import { ToDoItem } from '../../models/todo';

export const ADD_TODO = 'Add todo item';
export const ADD_TODO_COMPLETED = 'Add todo item completed';
export const LOAD_TODOS = 'Load todos';
export const LOAD_TODOS_COMPLETED = 'Load todos completed';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) {}
}

export class AddTodoCompleted implements Action {
  readonly type = ADD_TODO_COMPLETED;
  constructor(public payload: ToDoItem) {}
}

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosCompleted implements Action {
  readonly type = LOAD_TODOS_COMPLETED;
  constructor(public payload: ToDoItem[]) {}
}

export type Actions
  = AddTodo
  | AddTodoCompleted
  | LoadTodos
  | LoadTodosCompleted
  ;
