import { ToDoItem } from "../../models/todo";
import { Actions, ADD_TODO_COMPLETED, LOAD_TODOS_COMPLETED, COMPLETE_TODO } from "../actions/todo-actions";

export function reducer(state: ToDoItem[], action: Actions): ToDoItem[] {
  switch (action.type) {
    case ADD_TODO_COMPLETED: {
      const item = action.payload;
      return [ ...state, item ];
    }
    case LOAD_TODOS_COMPLETED: {
      return action.payload;
    }
    case COMPLETE_TODO: {
      const item = action.payload;
      return state.map(x => (x !== item)? x : { ...item, completed: true });
    }
    default: {
      return state;
    }
  }
}
