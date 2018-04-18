import { ToDoItem } from "../../models/todo";
import { Actions, ADD_TODO_COMPLETED, LOAD_TODOS_COMPLETED } from "../actions/todo-actions";

export function reducer(state: ToDoItem[], action: Actions): ToDoItem[] {
  switch (action.type) {
    case ADD_TODO_COMPLETED: {
      const item = action.payload;
      return [ ...state, item ];
    }
    case LOAD_TODOS_COMPLETED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
