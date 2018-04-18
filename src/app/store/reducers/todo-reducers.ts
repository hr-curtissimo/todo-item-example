import { ToDoItem } from "../../models/todo";
import { Actions, ADD_TODO_COMPLETED } from "../actions/todo-actions";

export function reducer(state: ToDoItem[], action: Actions): ToDoItem[] {
  switch (action.type) {
    case ADD_TODO_COMPLETED: {
      const item = action.payload;
      return [ ...state, item ];
    }
    default: {
      return state;
    }
  }
}
