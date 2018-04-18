import { ToDoItem } from "../models/todo";

export interface State {
  todos: ToDoItem[];
}

export const initialState: State = {
  todos: []
};
